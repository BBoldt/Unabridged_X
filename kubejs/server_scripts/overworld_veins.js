GTCEuServerEvents.oreVeins(event => {
    // Electrotine / Redstone
    event.add("overworld_electrotine_redstone", vein => {
        vein.weight(180)
            .clusterSize(50)
            .density(0.35)
            .discardChanceOnAirExposure(0)
            .layer("stone")
            .heightRangeUniform(8, 40)
            .dimensions("minecraft:overworld");

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

    // Sal Ammoniac / Salt
    event.add("overworld_sal_ammoniac_salt", vein => {
        vein.weight(150)
            .clusterSize(45)
            .density(0.32)
            .discardChanceOnAirExposure(0)
            .layer("stone")
            .heightRangeUniform(30, 70)
            .dimensions("minecraft:overworld");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('sal_ammoniac')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('salt')).size(1, 2))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('sal_ammoniac'))
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Force / Uranium
    event.add("overworld_force_uranium", vein => {
        vein.weight(120)
            .clusterSize(40)
            .density(0.30)
            .discardChanceOnAirExposure(0)
            .layer("stone")
            .heightRangeUniform(7, 35)
            .dimensions("minecraft:overworld");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('force')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('uranium')).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('force'))
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Gobber / Lapis Lazuli
    event.add("overworld_gobber_lapis", vein => {
        vein.weight(160)
            .clusterSize(50)
            .density(0.34)
            .discardChanceOnAirExposure(0)
            .layer("stone")
            .heightRangeUniform(10, 50)
            .dimensions("minecraft:overworld");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('gobber')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Lapis).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('gobber'))
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Iesnium / Silver
    event.add("overworld_iesnium_silver", vein => {
        vein.weight(140)
            .clusterSize(45)
            .density(0.30)
            .discardChanceOnAirExposure(0)
            .layer("deepslate")
            .heightRangeUniform(-25, 6)
            .dimensions("minecraft:overworld");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('iesnium')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Silver)
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Brilliant / Soulstone
    event.add("overworld_brilliant_soulstone", vein => {
        vein.weight(180)
            .clusterSize(60)
            .density(0.30)
            .discardChanceOnAirExposure(0)
            .layer("deepslate")
            .heightRangeUniform(-25, 45)
            .dimensions("minecraft:overworld");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('brilliant')).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.get('soulstone')).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('brilliant'))
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Uranium
    event.add("overworld_plutonium_uranium", vein => {
        vein.weight(120)
            .clusterSize(40)
            .density(0.30)
            .discardChanceOnAirExposure(0)
            .layer("deepslate")
            .heightRangeUniform(-35, 10)
            .dimensions("minecraft:overworld");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('plutonium')).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get('uranium')).size(2, 5))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('plutonium'))
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });
});
