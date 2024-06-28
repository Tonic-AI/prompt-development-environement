# scripts/model_info.py

class ModelInfo:
    def __init__(self, user, model_name, model_type, model_uri, model_url, timestamp=None, description=None, version=None):
        self.user = user
        self.model_name = model_name
        self.model_type = model_type
        self.model_uri = model_uri
        self.model_url = model_url
        self.timestamp = timestamp
        self.description = description
        self.version = version

    def to_string(self):
        info_str = ""
        info_str += f"User: {self.user}\n"
        info_str += f"Name: {self.model_name}\n"
        info_str += f"Type: {self.model_type}\n"
        info_str += f"URI: {self.model_uri}\n"
        info_str += f"URL: {self.model_url}\n"
        info_str += f"Timestamp: {self.timestamp}\n"
        info_str += f"Description: {self.description}\n"
        info_str += f"Version: {self.version}"
        return info_str
