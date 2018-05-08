import axios from 'axios'

import Show from '../models/Show'
import SingleShow from '../models/SingleShow'
import Actor from '../models/Actor'
import CrewMember from '../models/CrewMember'
import Episode from '../models/Episode'
import Aka from '../models/Aka'
import Season from '../models/Season'


class FetchShows{
    async getData(url, showsPresented) {
        const response = await axios(url)
                return (result => { 
                    result.splice(showsPresented);
                    
                    return result.map(show => {
                        if (show.name) return new Show (show.name, show.image.medium, show.id)
                        else return new Show (show.show.name, undefined, show.show.id)
                    })
                })(response.data)
    }
}

export const shows = new FetchShows();

class FetchSingleShow {

    createSingleShow = (name, image, showID, info) => new SingleShow(name, image, showID, info);

    createSeason = (startDate, endDate) => new Season(startDate, endDate);

    createActor = (name) => new Actor(name);

    createCrewMember = (name, type) => new CrewMember(name, type);

    createAka = (name,country) => new Aka(name, country)

    createEpisode = (name, date, number) => new Episode (name, date, number);

    showCrew = (showResponse, maxNumber, singleShowObj) => {
        showResponse._embedded.crew.splice(maxNumber);
        showResponse._embedded.crew.forEach(crewMember => {
            singleShowObj.addCrew(this.createCrewMember(crewMember.person.name, crewMember.type));  
        })
    }

    showCast = (showResponse, maxNumber, singleShowObj) => {
        showResponse._embedded.cast.splice(maxNumber);
        showResponse._embedded.cast.forEach(actor => {
            singleShowObj.addCast(this.createActor(actor.person.name));  
        })
    }
    
    showSeasons = (showResponse, singleShowObj) => {
        showResponse._embedded.seasons.forEach(season => {
            singleShowObj.addSeason(this.createSeason(season.premiereDate, season.endDate));  
        })
    }
    
    showAkas = (showResponse, singleShowObj) => {
        if (showResponse._embedded.akas == null) return;     
        let countryName = '';   
        showResponse._embedded.akas.forEach(aka =>{
            if (!aka.country ) {
                countryName = '';
            } else {
                countryName = aka.country.name;
            }   
            singleShowObj.addAkas(this.createAka(aka.name, countryName))
        })
    }
    
    showEpisodes = (showResponse, singleShowObj) => {
        showResponse._embedded.episodes.forEach(episode => {
            singleShowObj.episodes.push(this.createEpisode(episode.name, episode.season, episode.number));
        })
    }

    async getData(url,id) {
        const response = await axios(`${url}/${id}?embed[]=seasons&embed[]=episodes&embed[]=cast&embed[]=crew&embed[]=akas`)
                return (showResponse => { 

                        if (showResponse.image) var singleShowObj = this.createSingleShow(showResponse.name,showResponse.image.medium, showResponse.id, showResponse.summary);
                        else var singleShowObj = this.createSingleShow(showResponse.name, undefined, showResponse.id, showResponse.summary);
                        this.showSeasons(showResponse, singleShowObj);
                        this.showCast(showResponse, 10, singleShowObj);
                        this.showCrew(showResponse, 10, singleShowObj);
                        this.showAkas(showResponse, singleShowObj);
                        this.showEpisodes(showResponse, singleShowObj);
                        return singleShowObj;                
                })(response.data)
    }
}

export const singleShow = new FetchSingleShow();