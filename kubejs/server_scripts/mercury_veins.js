GTCEuServerEvents.oreVeins(event => {
    // Molybdenum + Tungstate
    event.add("ad_astra:mercury_molybdenum_tungstate", vein => {
        // Range: 25–50 = 25 high. clusterSize=20 => 5-block buffer
        vein.weight(75)
            .clusterSize(20)
            .density(0.35)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mercury")
            .heightRangeUniform(25, 50)
            .dimensions("ad_astra:mercury");

        vein.layeredVeinGenerator(generator => generator.buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.Molybdenum).size(2, 4))
            .layer(l => l.weight(2).mat(GTMaterials.Tungstate).size(1, 3))
        ));

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Molybdenum)
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Sulfur + Cinnabar
    event.add("ad_astra:mercury_sulfur_cinnabar", vein => {
        // Range: 70–90 = 20 high. clusterSize=25 => 5-block buffer
        vein.weight(150)
            .clusterSize(25)
            .density(0.32)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mercury")
            .heightRangeUniform(70, 90)
            .dimensions("ad_astra:mercury");

        vein.layeredVeinGenerator(generator => generator.buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.Sulfur).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.Cinnabar).size(1, 2))
        ));

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Sulfur)
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

       // Zinc + Copper
       event.add("ad_astra:mercury_zinc_copper", vein => {
        // Range: 30–50 = 20 high. clusterSize=20 => difference=0 borderline
        // We'll give a small buffer by using clusterSize=18
        vein.weight(90)
            .clusterSize(18)
            .density(0.3)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mercury")
            .heightRangeUniform(30, 50)
            .dimensions("ad_astra:mercury");

        vein.layeredVeinGenerator(generator => generator.buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.get('zinc')).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.Copper).size(1, 2))
        ));

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('zinc'))
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Copper + Magnesite
    event.add("ad_astra:mercury_copper_magnesite", vein => {
        // Range: 25–60 = 35 high. clusterSize=30 => 5-block buffer
        vein.weight(85)
            .clusterSize(30)
            .density(0.28)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mercury")
            .heightRangeUniform(25, 60)
            .dimensions("ad_astra:mercury");

        vein.layeredVeinGenerator(generator => generator.buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.Copper).size(2, 4))
            .layer(l => l.weight(2).mat(GTMaterials.Magnesite).size(1, 3))
        ));

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Copper)
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Tin + Pyrite
    event.add("ad_astra:mercury_tin_pyrite", vein => {
        // Range: 70–90 = 20 high. clusterSize=15 => 5-block buffer
        vein.weight(80)
            .clusterSize(15)
            .density(0.27)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mercury")
            .heightRangeUniform(70, 90)
            .dimensions("ad_astra:mercury");

        vein.layeredVeinGenerator(generator => generator.buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.Tin).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 2))
        ));

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tin)
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Uranium + Copper
    event.add("ad_astra:mercury_uranium_copper", vein => {
        // Range: 45–80 = 35 high. clusterSize=30 => 5-block buffer
        vein.weight(75)
            .clusterSize(30)
            .density(0.25)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mercury")
            .heightRangeUniform(45, 80)
            .dimensions("ad_astra:mercury");

        vein.layeredVeinGenerator(generator => generator.buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.get('uranium')).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.Copper).size(1, 2))
        ));

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('uranium'))
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Iron + Osmium
    event.add("ad_astra:mercury_iron_osmium", vein => {
        // Range: 20–60 = 40 high, clusterSize=30 => 10-block buffer => good
        vein.weight(70)
            .clusterSize(30)
            .density(0.24)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mercury")
            .heightRangeUniform(20, 60)
            .dimensions("ad_astra:mercury");

        vein.layeredVeinGenerator(generator => generator.buildLayerPattern(pattern => pattern
            .layer(l => l.weight(4).mat(GTMaterials.Iron).size(2, 4))
            .layer(l => l.weight(2).mat(GTMaterials.Osmium).size(1, 3))
        ));

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Iron)
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Rich Cinnabar
    event.add("ad_astra:mercury_rich_cinnabar", vein => {
        // Range: 70–90 = 20 high, clusterSize=15 => 5-block buffer
        vein.weight(90)
            .clusterSize(15)
            .density(0.3)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mercury")
            .heightRangeUniform(70, 90)
            .dimensions("ad_astra:mercury");

        vein.layeredVeinGenerator(generator => generator.buildLayerPattern(pattern => pattern
            .layer(l => l.weight(4).mat(GTMaterials.Cinnabar).size(3, 5))
            .layer(l => l.weight(3).mat(GTMaterials.Electrotine).size(3, 5))
        ));

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Electrotine)
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Force + Asbestos
    event.add("ad_astra:mercury_force_asbestos", vein => {
        // Range: 20–40 = 20 high, clusterSize=15 => 5-block buffer
        vein.weight(80)
            .clusterSize(15)
            .density(0.3)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mercury")
            .heightRangeUniform(20, 40)
            .dimensions("ad_astra:mercury");

        vein.layeredVeinGenerator(generator => generator.buildLayerPattern(pattern => pattern
            .layer(l => l.weight(4).mat(GTMaterials.get('force')).size(2, 4))
            .layer(l => l.weight(2).mat(GTMaterials.Asbestos).size(1, 2))
        ));

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('force'))
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Ilmenite + Silver
    event.add("ad_astra:mercury_iesnium_silver", vein => {
        // Range: 30–60 = 30 high, clusterSize=20 => 10-block buffer
        vein.weight(85)
            .clusterSize(20)
            .density(0.32)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mercury")
            .heightRangeUniform(30, 60)
            .dimensions("ad_astra:mercury");

        vein.layeredVeinGenerator(generator => generator.buildLayerPattern(pattern => pattern
            .layer(l => l.weight(4).mat(GTMaterials.get('iesnium')).size(2, 4))
            .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 2))
        ));

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('iesnium'))
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });

    // Sulfur + Gobber
    event.add("ad_astra:mercury_sulfur_gobber", vein => {
        // Range: 60–90 = 30 high, clusterSize=25 => 5-block buffer
        vein.weight(90)
            .clusterSize(25)
            .density(0.34)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_mercury")
            .heightRangeUniform(60, 90)
            .dimensions("ad_astra:mercury");

        vein.layeredVeinGenerator(generator => generator.buildLayerPattern(pattern => pattern
            .layer(l => l.weight(4).mat(GTMaterials.Sulfur).size(2, 3))
            .layer(l => l.weight(2).mat(GTMaterials.get('gobber_end')).size(1, 2))
        ));

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('gobber_end'))
            .placement("above")
            .density(0.3)
            .radius(4)
        );
    });
});
