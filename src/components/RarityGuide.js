import '../css/RarityGuide.css'

function RarityGuide() {
    return (
        <div className="RarityContainer">
            <div className="RarityTextContainer">
                <div className="Rarity-header">
                    <div className="contentContainer">
                        <h2 className="RarityGuideTitle">Rarity Guide</h2>
                        <hr className="RarityGuideHR" />
                        <br />
                        <p className="RarityText">Our Rarity system allocates you points by how many
                            different rarities of Doodle Noodle you hold.

                            <br />
                            <br />
                            Each tier assigns you an amount of points, with your
                            points totals being used in future for giveaways,
                            bragging rights and competitions in the community.

                            <br />
                            <br />
                            The more you collect the more you will be rewarded!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RarityGuide;