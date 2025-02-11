GTCEuServerEvents.oreVeins(event => {
    // Ice Shard Vein
    event.add("ad_astra:glacio_ice_shard", vein => {
        vein.weight(60)
            .clusterSize(45)
            .density(0.32)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_glacio")
            .heightRangeUniform(40, 90)
            .dimensions("ad_astra:glacio");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('ice')).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Apatite).size(1, 3))
            )
        );
    });

    // Force Vein
    event.add("ad_astra:glacio_force", vein => {
        vein.weight(40)
            .clusterSize(40)
            .density(0.28)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_glacio")
            .heightRangeUniform(20, 70)
            .dimensions("ad_astra:glacio");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('force')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Tetrahedrite).size(1, 2))
            )
        );
    });

    // Coal Vein
    event.add("ad_astra:glacio_coal", vein => {
        vein.weight(90)
            .clusterSize(50)
            .density(0.35)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_glacio")
            .heightRangeUniform(30, 80)
            .dimensions("ad_astra:glacio");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Coal).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Asbestos).size(1, 2))
            )
        );
    });

    // End Gobber Vein
    event.add("ad_astra:glacio_end_gobber", vein => {
        vein.weight(75)
            .clusterSize(35)
            .density(0.25)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_glacio")
            .heightRangeUniform(15, 50)
            .dimensions("ad_astra:glacio");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('gobber_end')).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.BlueTopaz).size(1, 2))
            )
        );
    });

    // Copper Vein
    event.add("ad_astra:glacio_frozen_copper", vein => {
        vein.weight(135)
            .clusterSize(70)
            .density(0.41)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_glacio")
            .heightRangeUniform(30, 70)
            .dimensions("ad_astra:glacio");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Copper).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(1, 3))
            )
        );
    });

    // Magnetite and Lead Vein
    event.add("ad_astra:glacio_magnetite_lead", vein => {
        vein.weight(130)
            .clusterSize(75)
            .density(0.38)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_glacio")
            .heightRangeUniform(20, 60)
            .dimensions("ad_astra:glacio");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Lead).size(1, 3))
            )
        );
    });

    // Iron and Olivine Vein
    event.add("ad_astra:glacio_iron_olivine", vein => {
        vein.weight(100)
            .clusterSize(90)
            .density(0.42)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_glacio")
            .heightRangeUniform(10, 50)
            .dimensions("ad_astra:glacio");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Iron).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Olivine).size(1, 3))
            )
        );
    });

    // Sapphire Vein
    event.add("ad_astra:glacio_frozen_sapphire", vein => {
        vein.weight(100)
            .clusterSize(65)
            .density(0.37)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_glacio")
            .heightRangeUniform(30, 70)
            .dimensions("ad_astra:glacio");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Sapphire).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Amethyst).size(1, 2))
            )
        );
    });

    // Osmium Vein
    event.add("ad_astra:glacio_osmium", vein => {
        vein.weight(120)
            .clusterSize(55)
            .density(0.36)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_glacio")
            .heightRangeUniform(15, 60)
            .dimensions("ad_astra:glacio");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Osmium).size(3, 5))
                .layer(l => l.weight(1).mat(GTMaterials.Amethyst).size(2, 4))
            )
        );
    });

    // Frozen Almandine Vein
    event.add("ad_astra:glacio_frozen_almandine", vein => {
        vein.weight(140)
            .clusterSize(60)
            .density(0.39)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_glacio")
            .heightRangeUniform(50, 90)
            .dimensions("ad_astra:glacio");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Almandine).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1, 3))
            )
        );
    });

    event.add("ad_astra:glacio__brilliant_soulstone", vein => {
        vein.weight(180)
            .clusterSize(60)
            .density(0.30)
            .discardChanceOnAirExposure(0)
            .layer("deepslate")
            .heightRangeUniform(-25, 45)
            .dimensions("ad_astra:glacio");

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
});
