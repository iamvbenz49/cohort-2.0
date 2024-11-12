import os
from dotenv import load_dotenv
import boto3
from boto3.s3.transfer import S3Transfer
from botocore.exceptions import NoCredentialsError, PartialCredentialsError

# Load environment variables from .env file
load_dotenv()

def upload_directory_to_s3(bucket_name, directory_path, s3_client):
    transfer = S3Transfer(s3_client)
    
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            local_file = os.path.join(root, file)
            relative_path = os.path.relpath(local_file, directory_path)
            s3_key = relative_path.replace("\\", "/")  

            print(f"Uploading {local_file} to {bucket_name}/{s3_key}")
            try:
                transfer.upload_file(local_file, bucket_name, s3_key)
                print(f"Successfully uploaded {local_file}")
            except Exception as e:
                print(f"Error uploading {local_file}: {str(e)}")

if __name__ == "__main__":
    try:
        s3_client = boto3.client(
            's3',
            aws_access_key_id=os.getenv('VULTR_ACCESS_KEY'),
            aws_secret_access_key=os.getenv('VULTR_SECRET_KEY'),
            region_name='blr1',  
            endpoint_url='https://www.blr1.vultrobjects.com'  
        )

        bucket_name = 'app' 
        directory_path = '/home/iamvbenz/Desktop/cohort-2.0/week-12-frontends-on-aws/dist'

        if not os.path.isdir(directory_path):
            print(f"Directory {directory_path} does not exist!")
        else:
            upload_directory_to_s3(bucket_name, directory_path, s3_client)

    except NoCredentialsError:
        print("AWS credentials not found. Please set them up.")
    except PartialCredentialsError:
        print("AWS credentials are incomplete. Please check your setup.")
    except Exception as e:
        print(f"An error occurred: {str(e)}")
