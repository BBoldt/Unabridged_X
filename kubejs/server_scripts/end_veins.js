GTCEuServerEvents.oreVeins(event => {
    // Electrotine / Redstone (Nether variant)
    event.add("end_electrotine_redstone", vein => {
        vein.weight(160)
            .clusterSize(45)
            .density(0.32)
            .discardChanceOnAirExposure(0)
            .layer("endstone")
            .heightRangeUniform(8, 120)
            .dimensions("minecraft:the_end");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('electrotine')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Redstone).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('electrotine'))
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Force / Uranium (Nether variant)
    event.add("end_force_plutonium", vein => {
        vein.weight(130)
            .clusterSize(35)
            .density(0.28)
            .discardChanceOnAirExposure(0)
            .layer("endstone")
            .heightRangeUniform(10, 115)
            .dimensions("minecraft:the_end");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('force')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('plutonium')).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('force'))
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    event.add("end_gobber_emerald", vein => {
        vein.weight(170)
            .clusterSize(50)
            .density(0.34)
            .discardChanceOnAirExposure(0)
            .layer("endstone")
            .heightRangeUniform(8, 120)
            .dimensions("minecraft:the_end");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('gobber_end')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Emerald).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('gobber_end'))
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });
});
