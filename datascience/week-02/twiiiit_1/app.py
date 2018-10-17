import tweepy
from tweepy import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream
import twitter_credentials
from tweepy import API
from tweepy import Cursor 

# we create a class which inherits from StreamListener
# we are planning to override some methods


class TwitterStreamer():
    """
    Class for streaming and processing live tweets
    """

    def stream_tweets(self, fetched_tweets_filename, hash_tag_list):
        # this handles the authentication and the connection to tw streaming api
        listener = StdOutListener(fetched_tweets_filename)
        auth = OAuthHandler(twitter_credentials.CONSUMER_KEY,
                            twitter_credentials.CONSUMER_SECRET)
        auth.set_access_token(twitter_credentials.ACCESS_TOKEN,
                              twitter_credentials.ACCESS_TOKEN_SECRET)
        # we are passing the auth variable and the listener object
        stream = Stream(auth, listener)

        # we can filter tweets with the help of built in filter method where we provide the keywords inside the list
        stream.filter(track=hash_tag_list)


class StdOutListener(StreamListener):

    """
    Basic listener class that just prints received tweets to stdout
    """

    def __init__(self, fetched_tweets_filename):
        self.fetched_tweets_filename = fetched_tweets_filename

    def on_data(self, data):
        try:
            print(data)
            with open(self.fetched_tweets_filename, 'a') as tf:
                tf.write(data)
            return True
        except BaseException as e:
            print('Error on data: %s' % str(e))
        return True

    def on_error(self, status):
        print(status)


if __name__ == "__main__":
    # Authenticate using config.py and connect to Twitter Streaming API.

    hash_tag_list = ['sloth', 'monkey', 'tiger']
    fetched_tweets_filename = 'tweets.json'

    twitter_streamer = TwitterStreamer()
    twitter_streamer.stream_tweets(fetched_tweets_filename, hash_tag_list)
