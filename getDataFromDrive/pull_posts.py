from __future__ import print_function
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from bs4 import BeautifulSoup
from apiclient import errors

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/documents.readonly', 'https://www.googleapis.com/auth/drive.metadata.readonly']

# The ID of a sample document.
DOCUMENT_ID = '1VuC7j7lNLUDKxVQZzzTkbSnbI49VvFDJSTs7xH9qFJY'



def main():
    """Shows basic usage of the Docs API.
    Prints the title of a sample document.
    """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server()
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)


    service_docs = build('docs', 'v1', credentials=creds)
    service_drive = build('drive', 'v2', credentials=creds)

    # list files in folder
    pages = print_files_in_folder(service_drive, "1_UDXKIeaBFulIxV9EEdRCZqcstiOrkZU")


    # Retrieve the documents contents from the Docs service.
    for page in pages:
        print(page)
        document = getFileById(service_docs, page)
        writeFileToMarkdown(document)


def print_files_in_folder(service, folder_id):
  """Print files belonging to a folder.

  Args:
    service: Drive API service instance.
    folder_id: ID of the folder to print files from.
  """
  page_token = None
  pages = []
  while True:
    try:
      param = {}
      if page_token:
        param['pageToken'] = page_token
      children = service.children().list(
          folderId=folder_id, **param).execute()

      for child in children.get('items', []):
        pages.append(child['id'])
        print('File Id: {}'.format(child['id']))
      page_token = children.get('nextPageToken')
      if not page_token:
        break
    except errors.HttpError as error:
      print('An error occurred: {}'.format(error))
      break

  return pages


def getFileById(service, id):
    return service.documents().get(documentId=id).execute()


def writeFileToMarkdown(document):
    title = document.get('title')
    fileName = title.replace(" ", "-") + ".md"

    file = open("../markdown/{}".format(fileName),"w")
    content = document.get("body").get("content")
    for block in content:
        if block.get("paragraph"):
           content = block.get("paragraph").get("elements")[0].get("textRun").get("content")
           file.write(content.encode("utf-8"))
    file.close()

    print('The title of the document is: {}'.format(document.get('title')))

if __name__ == '__main__':
    main()
