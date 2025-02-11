GTCEuServerEvents.oreVeins(event => {
    event.add("ad_astra:venus_sulfur_osmium", vein => {
        vein.weight(160)
            .clusterSize(80)
            .density(0.45)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_venus")
            .heightRangeUniform(30, 80)
            .dimensions("ad_astra:venus");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Sulfur).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('osmium')).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Sulfur)
            .placement("above")
            .density(0.4)
            .radius(5)
        );
    });

    event.add("ad_astra:venus_iron_nickel", vein => {
        vein.weight(150)
            .clusterSize(85)
            .density(0.42)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_venus")
            .heightRangeUniform(50, 120)
            .dimensions("ad_astra:venus");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Iron).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Nickel)
            .placement("above")
            .density(0.39)
            .radius(5)
        );
    });

    event.add("ad_astra:venus_molybdenite_lead", vein => {
        vein.weight(145)
            .clusterSize(90)
            .density(0.44)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_venus")
            .heightRangeUniform(20, 70)
            .dimensions("ad_astra:venus");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Molybdenite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Lead).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Lead)
            .placement("above")
            .density(0.37)
            .radius(4)
        );
    });

    event.add("ad_astra:venus_copper_apatite", vein => {
        vein.weight(140)
            .clusterSize(75)
            .density(0.41)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_venus")
            .heightRangeUniform(40, 90)
            .dimensions("ad_astra:venus");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Copper).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Apatite).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Apatite)
            .placement("above")
            .density(0.36)
            .radius(4)
        );
    });

    event.add("ad_astra:venus_gold_silver", vein => {
        vein.weight(135)
            .clusterSize(70)
            .density(0.4)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_venus")
            .heightRangeUniform(10, 60)
            .dimensions("ad_astra:venus");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Gold).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Gold)
            .placement("above")
            .density(0.35)
            .radius(5)
        );
    });

    event.add("ad_astra:venus_lazurite_iron", vein => {
        vein.weight(130)
            .clusterSize(65)
            .density(0.39)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_venus")
            .heightRangeUniform(50, 100)
            .dimensions("ad_astra:venus");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Lazurite).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Iron).size(1, 2))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Lazurite)
            .placement("above")
            .density(0.35)
            .radius(4)
        );
    });

    event.add("ad_astra:venus_diamond_ilmenite", vein => {
        vein.weight(125)
            .clusterSize(60)
            .density(0.38)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_venus")
            .heightRangeUniform(20, 50)
            .dimensions("ad_astra:venus");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Diamond).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(1, 2))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Ilmenite)
            .placement("above")
            .density(0.34)
            .radius(4)
        );
    });

    event.add("ad_astra:venus_certus_quartz_opal", vein => {
        vein.weight(140)
            .clusterSize(75)
            .density(0.42)
            .discardChanceOnAirExposure(0)
            .layer("ad_astra_venus")
            .heightRangeUniform(80, 100)
            .dimensions("ad_astra:venus");

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.CertusQuartz).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Opal).size(1, 3))
            )
        );

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.CertusQuartz)
            .placement("above")
            .density(0.36)
            .radius(5)
        );
    });
});
