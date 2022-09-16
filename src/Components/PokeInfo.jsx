// pokeInfo component 

const PokeInfo = () => {

    return (
      
        <div>
            
            {/* species type  section*/}
            <div className="species-type">

                <h1>charmander</h1>
            
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="species pic" />
                
            </div>

            {/* species name section  */}
            <div className="species">

                <h2 className="name">charmander</h2>

            </div>

            {/* stats section  */}
            <div className="stats">

                <h2>Base Stats</h2>

                <div className="base-stats">

                    <div className="stats-bases-text">

                        <h3>Hp</h3>

                        <span>58</span>
                        
                    </div>

                    <div className="stats-bases-text">

                        <h3>Hp</h3>

                        <span>58</span>

                    </div>

                    <div className="stats-bases-text">

                        <h3>Hp</h3>

                        <span>58</span>

                    </div>

                </div>

            </div>

            {/* types*/}
            <div className="types-item">

                <span className="item">fire</span>

            </div>

            {/* weight section  */}
            <div className="weight">

                <h3>Weight</h3>

                <span className="weight-item">85 ibs</span>

            </div>

            <div className="moves">

                <h2>Moves</h2>

                <div className="moves-items">

                    <span className="moves-item">h</span>
                    <span className="moves-item">hjhm</span>
                    <span className="moves-item">ulgiykuftycghvjkb</span>
                    <span className="moves-item">;oijj</span>
                    <span className="moves-item">kljnjk</span>
                    <span className="moves-item">n;lkjljnk</span>
                    <span className="moves-item">lojk</span>
                    <span className="moves-item">bjk,jhj</span>
                    <span className="moves-item">j,bh,b</span>
                    <span className="moves-item">jmgh</span>

                </div>

            </div>
            
        </div>
        
    )
    
};

export default PokeInfo;
