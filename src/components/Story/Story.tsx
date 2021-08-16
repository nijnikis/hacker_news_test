import React from 'react'

import reactLogo from '../../img/react_logo.png'

import './Story.scss';

export interface IStory {
    id: number,
    title: string,
    url: string,
    time: number,
    score: number,
    authorId: string,
    karma: number,
}

type StoryProps = {
    story: IStory
}

export const Story: React.FC<StoryProps> = ({ story }) => {
    const storyTime = new Date(story.time);

    return (
        <div className="story-card">
            <div className="story-img-container">
                <img className="story-img" src={reactLogo} alt={`Story ${story.id} image`} />
            </div>
            <p className="story-title">{story.title}</p>
            <p className="story-url">{story.url}</p>
            <p className="story-time">{storyTime.toLocaleString()}</p>
            <p className="story-score">
                <span>Story score: </span>
                <span>{story.score}</span>
            </p>
            <p className="story-author-id">
                <span>Author: </span>
                <span>{story.authorId}</span>
            </p>
            <p className="story-author-karma">
                <span>Story karma: </span>
                <span>{story.karma}</span>
            </p>
        </div>
    )
}
