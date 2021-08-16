import React from 'react'

import './Bg.scss';

export const Bg: React.FC = () => (
    <div className="home-bg">
        <div className="home-bg__space-galaxies">
            {(() => {
                const galaxies = [];
                for (let i = 0; i < 6; i++) {
                    galaxies.push(
                        <div className="bg__space-galaxy-float-x-engine">
                            <div className="bg__space-galaxy-float-y-engine">
                                <div className="home-bg__space-galaxy"></div>
                            </div>
                        </div>
                    );
                }
                return galaxies;
            })()}
        </div>
    </div>                         
)
