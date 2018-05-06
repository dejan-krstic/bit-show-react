import React from 'react';

export const SingleShow = ({data}) => {
    console.log(data)

    return (
        <div className="row">
        <div className="col m7">
            <img id="big" src={data.picture} alt="" width='100%'/>
        </div>
        <div className="col m5">
            <h1> {data.title} </h1>
            <div className="akas">
                {data.akas.map(e => <li>{e.getInfo()}</li>)}
            </div>
            <h4>{`Seasons ${data.seasons.length}:`}</h4>
            <div className="seasons">
                {data.seasons.map(e => <li>{e.getInfo()}</li>)}
            </div>
            <h4>Cast:</h4>
            <div className="cast">
                {data.cast.map(e => <li>{e.getInfo()}</li>)}
            </div>
            <h4>Crew:</h4>
            <div className="crew">
                {data.crew.map(e => <li>{e.getInfo()}</li>)}
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
                {data.episodes.slice(0, Math.floor(data.episodes.length/3)).map(e => <li>{e.getInfo()}</li>)}
            </div>
        </div>
        <br />
        <div className="col s6 m4">
            <div className="ep2">
                {data.episodes.slice(Math.floor(data.episodes.length/3), Math.floor(2*data.episodes.length/3)).map(e => <li>{e.getInfo()}</li>)}
            </div>
        </div>
        <br />
        <div className="col s6 offset-s3 m4">
            <div className="ep3">
            {data.episodes.slice(Math.floor(2*data.episodes.length/3), data.episodes.length).map(e => <li>{e.getInfo()}</li>)}
            </div>
        </div>
        </div>
        </div>
    )
}