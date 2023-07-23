import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": "independent",
        "name": "Independent"
      },
      "author": "Sonia Twigg",
      "title": "Ashes 2023 live: England v Australia fourth Test, day four score today - cricket updates",
      "description": "Ashes scorecard and live updates as England vs Australia resumes at Old Trafford",
      "url": "http://www.independent.co.uk/sport/cricket/ashes-score-england-australia-cricket-live-b2380043.html",
      "urlToImage": "https://static.independent.co.uk/2023/07/22/09/SEI165037153.jpg?quality=75&width=1200&auto=webp",
      "publishedAt": "2023-07-22T12:10:24Z",
      "content": "Mark Wood kills a bit of time by speaking to Sky Sports\r\nThere are a few apps going around, and we are pretty optimistic at the minute. Hopefully we can get a bit of play in today and really push it … [+1107 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor(){
    super();
    this.state = {
      articles : this.articles,
      loading : false,
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News - Top headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title={"hey"} description={"jhbvshbfvbdkskv"} imageUrl={"https://static.independent.co.uk/2023/07/22/09/SEI165037153.jpg?quality=75&width=1200&auto=webp"} newsUrl={'pending'} />
          </div>
          <div className="col-md-4">
            <NewsItem title={"hey"} />
          </div>
          <div className="col-md-4">
            <NewsItem title={"hey"} />
          </div>
        </div>
      </div>
    );
  }
}
