import requests

class SeafileAPI:
    def __init__(self, token:str, upload_link:str, download_url:str):
        self.token = token
        self.upload_link = upload_link
        self.download_url = download_url
    def __get_upload_link(self):
        resp = requests.get(
            self.upload_link, headers={'Authorization': 'Token {token}'. format(token=self.token)}
        )
        return resp.json()

    def __upload_file(self, file_path:str):
        filename = file_path.split('/')[-1]
        upload_link:str = self.__get_upload_link()
        response = requests.post(
            upload_link, data={'filename': filename, 'parent_dir': '/'},
            files={'file': open(file_path, 'rb')},
            headers={'Authorization': 'Token {token}'. format(token=self.token)}
        )
        response_download_url = requests.get(
            url=self.download_url.replace('FILENAME',filename),
            headers={'Authorization': 'Token {token}'. format(token=self.token)}
        )
        return response_download_url.content.decode('utf8').replace("'","")

