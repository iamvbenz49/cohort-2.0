import os
from dotenv import load_dotenv
import boto3
from botocore.exceptions import NoCredentialsError, PartialCredentialsError


load_dotenv()

try:
    s3_client = boto3.client(
        's3',
        aws_access_key_id=os.getenv('VULTR_ACCESS_KEY'),
        aws_secret_access_key=os.getenv('VULTR_SECRET_KEY'),
        region_name='blr1',  
        endpoint_url='https://www.blr1.vultrobjects.com'  
    )
    # List all buckets
    response = s3_client.list_buckets()
    print("hii")
    print("Buckets available:")
    for bucket in response['Buckets']:
        print(f"- {bucket['Name']}")

except NoCredentialsError:
    print("AWS credentials not found. Please set them up.")
except PartialCredentialsError:
    print("AWS credentials are incomplete. Please check your setup.")
except Exception as e:
    print(f"An error occurred: {str(e)}")
