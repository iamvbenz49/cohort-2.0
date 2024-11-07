import logging
import boto3
import os
from botocore.exceptions import ClientError
from dotenv import load_dotenv

load_dotenv()

def upload_file(file_name, bucket, object_name=None):
    """Upload a file to Vultr Object Storage (S3-compatible)

    :param file_name: File to upload
    :param bucket: Bucket to upload to
    :param object_name: S3 object name. If not specified, file_name is used.
    :return: True if file was uploaded, else False
    """
    if object_name is None:
        object_name = os.path.basename(file_name)
    
    s3_client = boto3.client(
        's3',
        endpoint_url=os.getenv('VULTR_ENDPOINT'),
        aws_access_key_id=os.getenv('VULTR_ACCESS_KEY'),
        aws_secret_access_key=os.getenv('VULTR_SECRET_KEY')
    )

    try:
        response = s3_client.upload_file(file_name, bucket, object_name)
    except ClientError as e:
        logging.error(e)
        return False
    return True

upload_file("200daysBadge.png", "sample","sample/badge.png")
