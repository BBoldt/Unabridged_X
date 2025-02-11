GTCEuServerEvents.oreVeins(event => {
    // Ice Shard Vein
    event.add("ad_astra:mars_ice_shard", vein => {
        vein.weight(90)
            .clusterSize(40)
            .density(0.3)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mars")
            .heightRangeUniform(80, 110)
            .dimensions("ad_astra:mars");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('ice')).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Realgar).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('ice'))
            .placement("above")
            .density(0.35)
            .radius(5)
        );
    });

    // Iron Vein
    event.add("ad_astra:mars_iron", vein => {
        vein.weight(80)
            .clusterSize(50)
            .density(0.32)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mars")
            .heightRangeUniform(20, 70)
            .dimensions("ad_astra:mars");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Iron).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Magnetite).size(1, 2))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Iron)
            .placement("above")
            .density(0.35)
            .radius(5)
        );
    });

    // Diamond Vein
    event.add("ad_astra:mars_diamond", vein => {
        vein.weight(70)
            .clusterSize(30)
            .density(0.25)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mars")
            .heightRangeUniform(-30, 30)
            .dimensions("ad_astra:mars");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Diamond).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Graphite).size(1, 2))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Diamond)
            .placement("above")
            .density(0.3)
            .radius(5)
        );
    });

    // Ostrum Vein
    event.add("ad_astra:mars_ostrum", vein => {
        vein.weight(75)
            .clusterSize(35)
            .density(0.28)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mars")
            .heightRangeUniform(10, 60)
            .dimensions("ad_astra:mars");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('ostrum')).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Tetrahedrite).size(1, 2))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('ostrum'))
            .placement("above")
            .density(0.3)
            .radius(5)
        );
    });

    // Force Vein
    event.add("ad_astra:mars_force", vein => {
        vein.weight(65)
            .clusterSize(30)
            .density(0.22)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mars")
            .heightRangeUniform(-20, 50)
            .dimensions("ad_astra:mars");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('force')).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Grossular).size(1, 2))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('force'))
            .placement("above")
            .density(0.3)
            .radius(5)
        );
    });

    // Silver Vein
    event.add("ad_astra:mars_silver", vein => {
        vein.weight(85)
            .clusterSize(45)
            .density(0.34)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mars")
            .heightRangeUniform(10, 70)
            .dimensions("ad_astra:mars");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Silver).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Redstone).size(1, 2))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Silver)
            .placement("above")
            .density(0.3)
            .radius(5)
        );
    });

    // Nether Gobber Vein
    event.add("ad_astra:mars_nether_gobber", vein => {
        vein.weight(60)
            .clusterSize(25)
            .density(0.2)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mars")
            .heightRangeUniform(-10, 40)
            .dimensions("ad_astra:mars");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.get('gobber_nether')).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get('plutonium')).size(1, 2))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('gobber_nether'))
            .placement("above")
            .density(0.3)
            .radius(5)
        );
    });

    // Desh Vein
    event.add("ad_astra:mars_desh", vein => {
        vein.weight(75)
            .clusterSize(50)
            .density(0.28)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mars")
            .heightRangeUniform(-20, 40)
            .dimensions("ad_astra:mars");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('desh')).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Neodymium).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('desh'))
            .placement("above")
            .density(0.3)
            .radius(5)
        );
    });
});
