import React, { useEffect, useRef } from 'react';
import GameDetails from '../components/GameDetails';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
// Components
import Game from '../components/Game';
// styled components
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { fadeIn } from '../animations';

const Home = () => {
    // get current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    // Fetch games

    const { popularGames, newGames, upcomingGames, searchedGames } = useSelector((state) => state.games);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadGames());
    }, [dispatch, popularGames]);

    // Get that api data back
    // this const is shorthand for populargames = state.games.popularGames
    // and extracts the values directly
    // const { popularGames, newGames, upcomingGames, searchedGames } = useSelector((state) => state.games);

    setTimeout(useSelector((state) => state.games), 1000);

    // Check scroll to bottom
    const listInnerRef = useRef();

    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
                console.log("reached bottom");
            }
        }
    };

    return (
        <GameList onScroll={onScroll} variants={fadeIn} initial="hidden" animate="show">
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                    {pathId && <GameDetails pathId={pathId}/> }
                </AnimatePresence>
                {searchedGames.length > 0 && (
                <div className="searched">
                    <h2>Search results</h2>
                    <Games>
                        {searchedGames.map(game => (
                            <Game
                                name={game.name}
                                released={game.released}
                                id={game.id}
                                image={game.background_image}
                                key={game.id}/>
                        ))}
                    </Games>
                </div>
                )}
                <h2>Upcoming Games</h2>
                <Games>
                    {upcomingGames.map(game => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}/>
                    ))}
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    {popularGames.map(game => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}/>
                    ))}
                </Games>
                <h2>New Games</h2>
                <Games>
                    {newGames.map(game => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}/>
                    ))}
                </Games>
             </AnimateSharedLayout>
        </GameList>
    );
}

const GameList = styled(motion.div)`
    padding: 0 5rem 5rem 5rem;;
    h2 {
        padding: 5rem 0;
    }
`;
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;