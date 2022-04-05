import csv
import boto3
import time

ACCESS_KEY = ''
SECRET_KEY = ''
SOURCE_BUCKET_NAME = 'rawrecording'
DESTINATION_BUCKET = 'finishedtranscription'
to_transcribe = './tester4.mp4'
object_title = to_transcribe[2:-4]

with open('./rootkey.csv', 'r') as file:
    reader = csv.reader(file, delimiter = '=')
    for row in reader:
        if row[0] == 'AWSAccessKeyId':
            ACCESS_KEY = row[1]
        else:
            SECRET_KEY = row[1]

def list_s3_files(access_key=ACCESS_KEY, secret_key=SECRET_KEY, bucket_name=DESTINATION_BUCKET):
    # creates a list of all the files in S3 bucket
    s3 = boto3.resource('s3', aws_access_key_id=access_key, aws_secret_access_key= secret_key)
    fileList = []
    myBucket = s3.Bucket(bucket_name)
    for my_bucket_object in myBucket.objects.all():
        fileList.append(my_bucket_object.key)
        
    return fileList


def upload_file(filename, access_key=ACCESS_KEY, secret_key=SECRET_KEY, bucket_name=SOURCE_BUCKET_NAME):
    s3 = boto3.client('s3', aws_access_key_id=access_key, aws_secret_access_key=secret_key)
    s3.upload_file(filename, bucket_name, filename)
    print("Upload Successful!")
    return True

def download_transcription(aws_filename, local_filename, access_key=ACCESS_KEY, secret_key=SECRET_KEY, bucket_name=DESTINATION_BUCKET):
    s3 = boto3.resource('s3', aws_access_key_id=access_key, aws_secret_access_key= secret_key)
    s3.Bucket(bucket_name).download_file(local_filename, aws_filename)
    print("Download Successful!")
    return True

intial_transcribed_files = list_s3_files()

upload_file(to_transcribe)

time.sleep(1)

transcript_file = ''

new_transcribed_files = []

while True:
    new_transcribed_files = list_s3_files()
    print(new_transcribed_files)
    if len(new_transcribed_files) > len(intial_transcribed_files):
        break
    time.sleep(2)

new_filename = list(set(new_transcribed_files) - set(intial_transcribed_files))[0]


download_transcription(object_title + '_transcribed.json', new_filename)
