import os

DATASET_DIR = '../images/images/Images/'
OUTPUT_FILE = '../backend/dog_names.txt'

def main():
    breed_dirs = sorted([d for d in os.listdir(DATASET_DIR) if os.path.isdir(os.path.join(DATASET_DIR, d))])
    with open(OUTPUT_FILE, 'w') as f:
        for breed in breed_dirs:
            f.write(breed + '\n')
    print(f"Saved {len(breed_dirs)} dog breed names to {OUTPUT_FILE}")

if __name__ == '__main__':
    main() 