import React from 'react'

import { useEffect, useState } from 'react'

import { Story, IStory } from '../Story/Story';

import './StoriesList.scss';

interface IStoryData {
    by : string,
    descendants : number,
    id : number,
    kids : number[],
    score : number,
    time : number,
    title : string,
    type : string,
    url : string,
}

interface IAuthorData {
    about: string,
    created : number,
    delay : number,
    id : string,
    karma : number,
    submitted : number[],
}

export const StoriesList: React.FC = () => {
    const [stories, setStories] = useState<IStory[]>([]);

    useEffect(() => {
        if (stories.length <= 0) {
            getStories();
        }
    }, [])

    async function getStories() {
        const storiesAllIdsResponse = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const storiesAllIds = await storiesAllIdsResponse.json();
        const storiesIds: number[] = storiesAllIds.slice(0, 10);
        if (storiesIds.length > 0) {
            const stories = await Promise.all(storiesIds.map(async (storyId: number) => {
                const storyDataResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`);
                const storyData: IStoryData = await storyDataResponse.json();
                const authorDataResponse = await fetch(`https://hacker-news.firebaseio.com/v0/user/${storyData.by}.json`);
                const authorData: IAuthorData = await authorDataResponse.json();
                return {
                    id: storyId,
                    title: storyData.title,
                    url: storyData.url,
                    time: storyData.time,
                    score: storyData.score,
                    authorId: authorData.id,
                    karma: authorData.karma,
                };
            }));
            setStories(stories);
        }
    }

    return (
        <ul className="stories">
            { stories.map( story => {
                return(
                    <li key={story.id} className="stories__item">
                        <Story story={story}/>
                    </li>
                )
            } ) }
        </ul>
    )
}
