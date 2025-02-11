GTCEuServerEvents.oreVeins(event => {
    // Electrotine / Redstone (Nether variant)
    event.add("nether_electrotine_redstone", vein => {
        vein.weight(160)
            .clusterSize(45)
            .density(0.32)
            .discardChanceOnAirExposure(0)
            .layer("netherrack")
            .heightRangeUniform(8, 120)
            .dimensions("minecraft:the_nether");

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

    // Sal Ammoniac / Salt (Nether variant)
    event.add("nether_sal_ammoniac_salt", vein => {
        vein.weight(140)
            .clusterSize(40)
            .density(0.30)
            .discardChanceOnAirExposure(0)
            .layer("netherrack")
            .heightRangeUniform(8, 110)
            .dimensions("minecraft:the_nether");

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

    // Force / Uranium (Nether variant)
    event.add("nether_force_uranium", vein => {
        vein.weight(130)
            .clusterSize(35)
            .density(0.28)
            .discardChanceOnAirExposure(0)
            .layer("netherrack")
            .heightRangeUniform(10, 115)
            .dimensions("minecraft:the_nether");

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

    // Gobber / Lapis Lazuli (Nether variant)
    event.add("nether_gobber_lapis", vein => {
        vein.weight(170)
            .clusterSize(50)
            .density(0.34)
            .discardChanceOnAirExposure(0)
            .layer("netherrack")
            .heightRangeUniform(8, 120)
            .dimensions("minecraft:the_nether");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('gobber_nether')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Lapis).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('gobber_nether'))
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Iesnium / Silver (Nether variant)
    event.add("nether_iesnium_silver", vein => {
        vein.weight(150)
            .clusterSize(45)
            .density(0.32)
            .discardChanceOnAirExposure(0)
            .layer("netherrack")
            .heightRangeUniform(8, 115)
            .dimensions("minecraft:the_nether");

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

    // Cobalt / Lapis Lazuli (Nether exclusive)
    event.add("nether_cobalt_lapis", vein => {
        vein.weight(160)
            .clusterSize(45)
            .density(0.30)
            .discardChanceOnAirExposure(0)
            .layer("netherrack")
            .heightRangeUniform(10, 110)
            .dimensions("minecraft:the_nether");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Cobalt).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Lapis).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cobalt)
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Blazing Quartz / Chthonic Gold (Nether exclusive)
    event.add("nether_blazing_quartz_cthonic_gold", vein => {
        vein.weight(250) // More common for a Nether-exclusive ore
            .clusterSize(40) // Balanced amount
            .density(0.38)
            .discardChanceOnAirExposure(0)
            .layer("netherrack")
            .heightRangeUniform(10, 120)
            .dimensions("minecraft:the_nether");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('blazing_quartz')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('cthonic_gold')).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('blazing_quartz'))
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });
});
