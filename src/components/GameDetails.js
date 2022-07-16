import React from "react";
// styled components
import styled from "styled-components";
import { motion } from 'framer-motion';
// Redux
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { smallImage } from '../util';
// Images/Icons
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
// Rating stars
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetails = ( {pathId} ) => {
    const navigate = useNavigate();
    // Exit details
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            navigate('/');
        }
    }
    // Stars
    const ratingStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for(let i=0; i<5; i++) {
            if(i < rating) {
                stars.push(<img alt='star' key={i} src={starFull}></img>);
            }
            else {
                stars.push(<img alt='star' key={i} src={starEmpty}></img>)
            }
        }
        return stars;
    }

    // Platform images
    const platformImages = (platform) => {
        switch(platform) {
            case 'PlayStation 4':
                return playstation;
            case 'Xbox One':
                return xbox;
            case 'PC':
                return steam;
            case 'Nintendo Switch':
                return nintendo;
            case 'iOS':
                return apple;
            default:
                return gamepad;
        }
    }

    // Data - get data from the global state
    const { game, screenshots, isLoading } = useSelector((state) => state.gameDetails);
    return (
        <>
        {!isLoading && (
            <CardShadow onClick={exitDetailHandler} className="shadow">
                <Details layoutId={pathId}>
                    <Stats>
                        <div className="rating">
                            <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                            <motion.p layoutId={`date-rating ${pathId}`}>Rating: {game.rating}</motion.p>
                            {ratingStars()}
                        </div>
                        <Info>
                            <h3>Platforms</h3>
                            <Platforms>
                                {game?.platforms?.map(data => (
                                    <img key={data.platform.id} src={platformImages(data.platform.name)} alt={data.platform.name} title={data.platform.name}></img>
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
                    <Media>
                        <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)}/>
                    </Media>
                    <Description>
                        <p>{game.description_raw}</p>
                    </Description>
                    <div className="gallery">
                        {screenshots?.results?.map(screen => (
                            <img src={smallImage(screen.image, 1280)} key={screen.id} alt="screenshot"/>
                        ))}
                    </div>
                </Details>
            </CardShadow>
        )}
        </>
    );
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkslateblue;
    }
    &::-webkit-scrollbar-track {
        background-color: white;
    }
`;

const Details = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
        /* height: 60vh;
        object-fit: cover; */
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0;
`;

export default GameDetails;