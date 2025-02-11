GTCEuServerEvents.oreVeins(event => {
    // 1) Force + Ironwood
    event.add("twilightforest:force", vein => {
        vein.weight(100)
            .clusterSize(35)
            .density(0.3)
            .discardChanceOnAirExposure(0)
            .layer("twilight_forest_layer")
            .heightRangeUniform(-20, 0)
            .dimensions("twilightforest:twilight_forest");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('force')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('ironwood')).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('force'))
            .placement("above")
            .density(0.4)
            .radius(4)
        );
    });

    // 2) Gobber + Steeleaf
    event.add("twilightforest:gobber", vein => {
        vein.weight(80)
            .clusterSize(30)
            .density(0.25)
            .discardChanceOnAirExposure(0)
            .layer("twilight_forest_layer")
            .heightRangeUniform(-30, -15)
            .dimensions("twilightforest:twilight_forest");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('gobber')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('steeleaf')).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('gobber'))
            .placement("above")
            .density(0.4)
            .radius(4)
        );
    });

    // 3) Ironwood + Gold
    event.add("twilightforest:ironwood", vein => {
        vein.weight(60)
            .clusterSize(25)
            .density(0.22)
            .discardChanceOnAirExposure(0)
            .layer("twilight_forest_layer")
            .heightRangeUniform(-20, 0)
            .dimensions("twilightforest:twilight_forest");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('ironwood')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('gold')).size(1, 3))
            )
        );
    });

    // 4) Steeleaf + Emerald
    event.add("twilightforest:steeleaf", vein => {
        vein.weight(50)
            .clusterSize(20)
            .density(0.2)
            .discardChanceOnAirExposure(0)
            .layer("twilight_forest_layer")
            .heightRangeUniform(-30, -15)
            .dimensions("twilightforest:twilight_forest");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('steeleaf')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('emerald')).size(1, 2))
            )
        );
    });

    // 5) Iesnium + Redstone
    event.add("twilightforest:iesnium", vein => {
        vein.weight(40)
            .clusterSize(15)
            .density(0.18)
            .discardChanceOnAirExposure(0)
            .layer("twilight_forest_layer")
            .heightRangeUniform(-10, 5)
            .dimensions("twilightforest:twilight_forest");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('iesnium')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('redstone')).size(1, 3))
            )
        );
    });

    // 6) Sal Ammoniac + Lapis
    event.add("twilightforest:sal_ammoniac", vein => {
        vein.weight(90)
            .clusterSize(35)
            .density(0.3)
            .discardChanceOnAirExposure(0)
            .layer("twilight_forest_layer")
            .heightRangeUniform(-30, -15)
            .dimensions("twilightforest:twilight_forest");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('sal_ammoniac')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('lapis')).size(1, 3))
            )
        );
    });
});
