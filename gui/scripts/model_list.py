# scripts/model_list.py
from model_metadata import model_metadata
from model_info import ModelInfo

class ModelList:
    def __init__(self):
        self.model_metadata = model_metadata

    def get_model_info(self, model_name):
        return self.model_metadata.get(model_name, None)

    def get_model_uri(self, model_name):
        model_info = self.get_model_info(model_name)
        if model_info:
            return model_info.get("model_uri")
        else:
            return None  # Model not found in metadata

    def list_models(self):
        print("")
        for idx, (model_name, model_info) in enumerate(self.model_metadata.items()):
            if idx > 0:
                print("\n" + "=" * 40 + "\n")  # Add separator between models
            model = ModelInfo(
                user=model_info.get("user"),
                model_name=model_info.get("model_name"),
                model_type=model_info.get("model_type"),
                model_uri=model_info.get("model_uri"),
                model_url=model_info.get("model_url"),
                timestamp=model_info.get("timestamp"),
                description=model_info.get("description"),
                version=model_info.get("version")
            )
            print(model.to_string())
        print("")
