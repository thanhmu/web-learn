const env = (process.env.NODE_ENV === 'production') ? require('../.env.production') : require('../.env.local')
const baseUri = 'https://www.googleapis.com/youtube/v3'
const apiKey = env.YOUTUBE_API_KEY
const title = 'Web Learn: it\'s like YouTube Gaming, but for Web Developers'
const tweet = encodeURIComponent(title)

export default {
  app: {
    name: 'Web Learn',
    url: 'https://thanhmu.github.io',
    title: title,
    description: 'Web Learn is an open source service which provides simple access to thousands of video lessons on web developing and programming.',
    author: 'ThanhMU',
    logo: {
      normal: 'build/images/logo.svg',
      mini: 'build/images/logo-mini.svg',
      share: 'build/images/weblearn-banner.png'
    },
    github: {
      username: 'thanhmu',
      repo: 'thanhmu/web-learn'
    },
    twitter: {
      username: 'thanhmu',
      tweet: tweet
    },
    links: [
      '<a class="github-button" href="https://github.com/thanhmu/web-learn" data-count-href="/thanhmu/web-learn/stargazers" data-count-api="/repos//thanhmu/web-learn#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star thanhmu/web-learn on GitHub">Star</a>',
      '<a class="twitter-follow-button" href="https://twitter.com/arhey">Follow @arhey</a>',
      '<a class="twitter-share-button" data-via="arhey" href="https://twitter.com/intent/tweet?text=' + tweet + '">Tweet</a>'
    ]
  },
  api: {
    key: apiKey,
    search: {
      endpoint: baseUri + '/search',
      params: {
        key: apiKey,
        part: 'snippet',
        videoEmbeddable: true,
        safeSearch: 'strict',
        fields: 'prevPageToken,nextPageToken,items/id/videoId'
      }
    },
    videos: {
      endpoint: baseUri + '/videos',
      params: {
        key: apiKey,
        part: 'contentDetails,snippet,statistics',
        fields: 'items(contentDetails/duration,id,snippet(channelId,channelTitle,description,publishedAt,tags,thumbnails,title),statistics(dislikeCount,likeCount,viewCount)),nextPageToken,prevPageToken'
      }
    },
    channels: {
      endpoint: baseUri + '/channels',
      params: {
        key: apiKey,
        part: 'snippet,statistics,brandingSettings'
      }
    }
  }
}
