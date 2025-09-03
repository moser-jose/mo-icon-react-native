import os

def normalize_filenames(root_dir: str):
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            old_path = os.path.join(dirpath, filename)

            # separate name and extension
            name, ext = os.path.splitext(filename)

            # new name: lowercase + replace space with hyphen
            new_name = name.lower().replace(" ", "-") + ext.lower()

            # new path
            new_path = os.path.join(dirpath, new_name)

            # only rename if different
            if old_path != new_path:
                os.rename(old_path, new_path)
                print(f"✔ Renamed: {old_path} → {new_path}")

if __name__ == "__main__":
    folder = "../src/icons/svg"  # change for the folder you want
    normalize_filenames(folder)
