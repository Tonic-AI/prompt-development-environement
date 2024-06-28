# scripts/conda_actions.py

import subprocess
import argparse
import logging

class CondaManager:
    def __init__(self):
        self.valid_actions = ["create", "activate", "deactivate", "list", "remove"]
        self.parser = argparse.ArgumentParser(description="Conda Environment Manager")
        self.parser.add_argument("action", choices=self.valid_actions, help="Action to perform")
        self.parser.add_argument("--env", help="Name of the Conda environment")
        self.parser.add_argument("--python-version", default="3.8", help="Python version for creating a new environment")
        self.args = self.parser.parse_args()

    def create_environment(self, env_name, python_version):
        try:
            subprocess.run(["conda", "create", "-n", env_name, f"python={python_version}", "-y"])
            logging.info(f"Environment '{env_name}' created successfully.")
        except subprocess.CalledProcessError:
            logging.error(f"Error creating environment '{env_name}'.")

    def activate_environment(self, env_name):
        subprocess.run(["conda", "activate", env_name])

    def deactivate_environment(self):
        subprocess.run(["conda", "deactivate"])

    def list_environments(self):
        subprocess.run(["conda", "env", "list"])

    def remove_environment(self, env_name):
        try:
            subprocess.run(["conda", "env", "remove", "-n", env_name, "-y"])
            logging.info(f"Environment '{env_name}' removed successfully.")
        except subprocess.CalledProcessError:
            logging.error(f"Error removing environment '{env_name}'.")

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    conda_manager = CondaManager()
    conda_manager.handle_action(conda_manager.args.action)
