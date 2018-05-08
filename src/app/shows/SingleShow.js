import React from 'react';

import { singleShow } from '../../services/DataService'
import { API_URL, LOADER_URL } from '../../constants/constants';


export default class SingleShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            singleShow: null
        }
    }

    componentDidMount() {
        singleShow.getData(API_URL, this.props.match.params.showId)
            .then(res => this.setState({ singleShow: res }))
    }
    componentWillReceiveProps(nextProps) {
        singleShow.getData(API_URL, nextProps.match.params.showId)
            .then(res => this.setState({ singleShow: res }))
    }

    render() {
        const data = this.state.singleShow;
        if (!data) {
            return <img src={LOADER_URL} alt='loader' id="loader" width="100%" height="60%" className='col-md-8 offset-2' />
        }
        return (
            <div className="row">
                        <div className="col s10 offset-s1">
            <div className="row">
                <div className="col m7 xl4 offset-xl2">
                    <img id="big" src={data.picture} alt="" width='100%' />
                </div>
                <div className="col m5 offset-xl1">
                    <h1> {data.title} </h1>
                    <div className="akas">
                        {data.akas.map((e,i) => <li key={i} >{e.getInfo()}</li>)}
                    </div>
                    <h4>{`Seasons ${data.seasons.length}:`}</h4>
                    <div className="seasons">
                        {data.seasons.map((e,i) => <li key={i}>{e.getInfo()}</li>)}
                    </div>
                    <h4>Cast:</h4>
                    <div className="cast">
                        {data.cast.map((e,i) => <li key={i}>{e.getInfo()}</li>)}
                    </div>
                    <h4>Crew:</h4>
                    <div className="crew">
                        {data.crew.map((e,i) => <li key={i}>{e.getInfo()}</li>)}
                    </div>

                </div>
                <div className="col s12">
                    <h3>Summary</h3>
                    {data.info}
                </div>
                <div className="col s12">
                    <h3>Episodes:</h3>
                </div>
                <div className='row'>
                    <div className="col s6 m4">
                        <div className="ep1">
                            {data.episodes.slice(0, Math.floor(data.episodes.length / 3)).map((e,i) => <li key={i}>{e.getInfo()}</li>)}
                        </div>
                    </div>
                    <br />
                    <div className="col s6 m4">
                        <div className="ep2">
                            {data.episodes.slice(Math.floor(data.episodes.length / 3), Math.floor(2 * data.episodes.length / 3)).map((e,i) => <li key={i}>{e.getInfo()}</li>)}
                        </div>
                    </div>
                    <br />
                    <div className="col s6 offset-s3 m4">
                        <div className="ep3">
                            {data.episodes.slice(Math.floor(2 * data.episodes.length / 3), data.episodes.length).map((e,i) => <li key={i}>{e.getInfo()}</li>)}
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}