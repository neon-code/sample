import React from 'react';
import '../CSS/cards.css';
import { Image } from 'semantic-ui-react';

var cardDir = [
    { tabID: "0", cardName: 'tench, Tinca tinca', cardLoc: "./1000categories/tench.png" },
    { tabID: "1", cardName: 'goldfish, Carassius auratus', cardLoc: "./1000categories/goldfish.png" },
    { tabID: "2", cardName: 'great white shark, white shark, man-eater, man-eating shark, Carcharodon carcharias', cardLoc: "./1000categories/great white shark.png" },
    { tabID: "3", cardName: 'tiger shark, Galeocerdo cuvieri', cardLoc: "./1000categories/tiger shark.png" },
    { tabID: "4", cardName: 'hammerhead, hammerhead shark', cardLoc: "./1000categories/hammerhead, hammerhead shark.png" },
    { tabID: "5", cardName: 'electric ray, crampfish, numbfish, torpedo', cardLoc: "./1000categories/electric ray.png" },
    { tabID: "6", cardName: 'stingray', cardLoc: "./1000categories/stingray.png" },
    { tabID: "7", cardName: 'cock', cardLoc: "./1000categories/cock.png" },
    { tabID: "8", cardName: 'hen', cardLoc: "./1000categories/hen.png" },
    { tabID: "9", cardName: 'ostrich, Struthio camelus', cardLoc: "./1000categories/ostrich.png" },
    { tabID: "10", cardName: 'brambling, Fringilla montifringilla', cardLoc: "./1000categories/brambling.png" },
    { tabID: "11", cardName: 'goldfinch, Carduelis carduelis', cardLoc: "./1000categories/goldfinch.png" },
    { tabID: "12", cardName: 'house finch, linnet, Carpodacus mexicanus', cardLoc: "./1000categories/house finch.png" },
    { tabID: "13", cardName: 'junco, snowbird', cardLoc: "./1000categories/junco.png" },
    { tabID: "14", cardName: 'indigo bunting, indigo finch, indigo bird, Passerina cyanea', cardLoc: "./1000categories/indigo bunting.png" },
    { tabID: "15", cardName: 'robin, American robin, Turdus migratorius', cardLoc: "./1000categories/robin.png" },
    { tabID: "16", cardName: 'bulbul', cardLoc: "./1000categories/bulbul.png" },
    { tabID: "17", cardName: 'jay', cardLoc: "./1000categories/jay.png" },
    { tabID: "18", cardName: 'magpie', cardLoc: "./1000categories/magpie.png" },
    { tabID: "19", cardName: 'chickadee', cardLoc: "./1000categories/chickadee.png" },
    { tabID: "20", cardName: 'water ouzel, dipper', cardLoc: "./1000categories/water ouzel.png" },
    { tabID: "21", cardName: 'kite', cardLoc: "./1000categories/kite.png" },
    { tabID: "22", cardName: 'bald eagle, American eagle, Haliaeetus leucocephalus', cardLoc: "./1000categories/bald eagle.png" },
    { tabID: "23", cardName: 'vulture', cardLoc: "./1000categories/vulture.png" },
    { tabID: "24", cardName: 'great grey owl, great gray owl, Strix nebulosa', cardLoc: "./1000categories/great grey owl.png" },
    { tabID: "25", cardName: 'European fire salamander, Salamandra salamandra', cardLoc: "./1000categories/European fire salamander.png" },
    { tabID: "26", cardName: 'common newt, Triturus vulgaris', cardLoc: "./1000categories/common newt.png" },
    { tabID: "27", cardName: 'eft', cardLoc: "./1000categories/eft.png" },
    { tabID: "28", cardName: 'spotted salamander, Ambystoma maculatum', cardLoc: "./1000categories/spotted salamander.png" },
    { tabID: "29", cardName: 'axolotl, mud puppy, Ambystoma mexicanum', cardLoc: "./1000categories/axolotl.png" },
    { tabID: "30", cardName: 'bullfrog, Rana catesbeiana', cardLoc: "./1000categories/bullfrog.png" },
    { tabID: "31", cardName: 'tree frog, tree-frog', cardLoc: "./1000categories/tree frog.png" },
    { tabID: "32", cardName: 'tailed frog, bell toad, ribbed toad, tailed toad, Ascaphus trui', cardLoc: "./1000categories/tailed frog.png" },
    { tabID: "33", cardName: 'loggerhead, loggerhead turtle, Caretta caretta', cardLoc: "./1000categories/loggerhead.png" },
    { tabID: "34", cardName: 'leatherback turtle, leatherback, leathery turtle, Dermochelys coriacea', cardLoc: "./1000categories/leatherback turtle.png" },
    { tabID: "35", cardName: 'mud turtle', cardLoc: "./1000categories/mud turtle.png" },
    { tabID: "36", cardName: 'terrapin', cardLoc: "./1000categories/terrapin.png" },
    { tabID: "37", cardName: 'box turtle, box tortoise', cardLoc: "./1000categories/box turtle.png" },
    { tabID: "38", cardName: 'banded gecko', cardLoc: "./1000categories/banded gecko.png" },
    { tabID: "39", cardName: 'common iguana, iguana, Iguana iguana', cardLoc: "./1000categories/common iguana.png" },
    { tabID: "40", cardName: 'American chameleon, anole, Anolis carolinensis', cardLoc: "./1000categories/American chameleon.png" },
    { tabID: "41", cardName: 'whiptail, whiptail lizard', cardLoc: "./1000categories/whiptail.png" },
    { tabID: "42", cardName: 'agama', cardLoc: "./1000categories/agama.png" },
    { tabID: "43", cardName: 'frilled lizard, Chlamydosaurus kingi', cardLoc: "./1000categories/frilled lizard.png" },
    { tabID: "44", cardName: 'alligator lizard', cardLoc: "./1000categories/alligator lizard.png" },
    { tabID: "45", cardName: 'Gila monster, Heloderma suspectum', cardLoc: "./1000categories/Gila monster.png" },
    { tabID: "46", cardName: 'green lizard, Lacerta viridis', cardLoc: "./1000categories/green lizard.png" },
    { tabID: "47", cardName: 'African chameleon, Chamaeleo chamaeleon', cardLoc: "./1000categories/African chameleon.png" },
    { tabID: "48", cardName: 'Komodo dragon, Komodo lizard, dragon lizard, giant lizard, Varanus komodoensis', cardLoc: "./1000categories/Komodo dragon.png" },
    { tabID: "49", cardName: 'African crocodile, Nile crocodile, Crocodylus niloticus', cardLoc: "./1000categories/African crocodile.png" },
    { tabID: "50", cardName: 'American alligator, Alligator mississipiensis', cardLoc: "./1000categories/American alligator.png" },
    { tabID: "51", cardName: 'triceratops', cardLoc: "./1000categories/triceratops.png" },
    { tabID: "52", cardName: 'thunder snake, worm snake, Carphophis amoenus', cardLoc: "./1000categories/thunder snake.png" },
    { tabID: "53", cardName: 'ringneck snake, ring-necked snake, ring snake', cardLoc: "./1000categories/ringneck snake.png" },
    { tabID: "54", cardName: 'hognose snake, puff adder, sand viper', cardLoc: "./1000categories/hognose snake.png" },
    { tabID: "55", cardName: 'green snake, grass snake', cardLoc: "./1000categories/green snake.png" },
    { tabID: "56", cardName: 'king snake, kingsnake', cardLoc: "./1000categories/king snake.png" },
    { tabID: "57", cardName: 'garter snake, grass snake', cardLoc: "./1000categories/garter snake.png" },
    { tabID: "58", cardName: 'water snake', cardLoc: "./1000categories/water snake.png" },
    { tabID: "59", cardName: 'vine snake', cardLoc: "./1000categories/vine snake.png" },
    { tabID: "60", cardName: 'night snake, Hypsiglena torquata', cardLoc: "./1000categories/night snake.png" },
    { tabID: "61", cardName: 'boa constrictor, Constrictor constrictor', cardLoc: "./1000categories/boa constrictor.png" },
    { tabID: "62", cardName: 'rock python, rock snake, Python sebae', cardLoc: "./1000categories/rock python.png" },
    { tabID: "63", cardName: 'Indian cobra, Naja naja', cardLoc: "./1000categories/Indian cobra.png" },
    { tabID: "64", cardName: 'green mamba', cardLoc: "./1000categories/green mamba.png" },
    { tabID: "65", cardName: 'sea snake', cardLoc: "./1000categories/sea snake.png" },
    { tabID: "66", cardName: 'horned viper, cerastes, sand viper, horned asp, Cerastes cornutus', cardLoc: "./1000categories/horned viper.png" },
    { tabID: "67", cardName: 'diamondback, diamondback rattlesnake, Crotalus adamanteus', cardLoc: "./1000categories/diamondback.png" },
    { tabID: "68", cardName: 'sidewinder, horned rattlesnake, Crotalus cerastes', cardLoc: "./1000categories/sidewinder.png" },
    { tabID: "69", cardName: 'trilobite', cardLoc: "./1000categories/trilobite.png" },
    { tabID: "70", cardName: 'harvestman, daddy longlegs, Phalangium opilio', cardLoc: "./1000categories/harvestman.png" },
    { tabID: "71", cardName: 'scorpion', cardLoc: "./1000categories/scorpion.png" },
    { tabID: "72", cardName: 'black and gold garden spider, Argiope aurantia', cardLoc: "./1000categories/black and gold garden spider.png" },
    { tabID: "73", cardName: 'barn spider, Araneus cavaticus', cardLoc: "./1000categories/barn spider.png" },
    { tabID: "74", cardName: 'garden spider, Aranea diademata', cardLoc: "./1000categories/garden spider.png" },
    { tabID: "75", cardName: 'black widow, Latrodectus mactans', cardLoc: "./1000categories/black widow.png" },
    { tabID: "76", cardName: 'tarantula', cardLoc: "./1000categories/tarantula.png" },
    { tabID: "77", cardName: 'wolf spider, hunting spider', cardLoc: "./1000categories/wolf spider.png" },
    { tabID: "78", cardName: 'tick', cardLoc: "./1000categories/tick.png" },
    { tabID: "79", cardName: 'centipede', cardLoc: "./1000categories/centipede.png" },
    { tabID: "80", cardName: 'black grouse', cardLoc: "./1000categories/black grouse.png" },
    { tabID: "81", cardName: 'ptarmigan', cardLoc: "./1000categories/ptarmigan.png" },
    { tabID: "82", cardName: 'ruffed grouse, partridge, Bonasa umbellus', cardLoc: "./1000categories/ruffed grouse.png" },
    { tabID: "83", cardName: 'prairie chicken, prairie grouse, prairie fowl', cardLoc: "./1000categories/prairie chicken.png" },
    { tabID: "84", cardName: 'peacock', cardLoc: "./1000categories/peacock.png" },
    { tabID: "85", cardName: 'quail', cardLoc: "./1000categories/quail.png" },
    { tabID: "86", cardName: 'partridge', cardLoc: "./1000categories/partridge.png" },
    { tabID: "87", cardName: 'African grey, African gray, Psittacus erithacus', cardLoc: "./1000categories/African grey.png" },
    { tabID: "88", cardName: 'macaw', cardLoc: "./1000categories/macaw.png" },
    { tabID: "89", cardName: 'sulphur-crested cockatoo, Kakatoe galerita, Cacatua galerita', cardLoc: "./1000categories/sulphur-crested cockatoo.png" },
    { tabID: "90", cardName: 'lorikeet', cardLoc: "./1000categories/lorikeet.png" },
    { tabID: "91", cardName: 'coucal', cardLoc: "./1000categories/coucal.png" },
    { tabID: "92", cardName: 'bee eater', cardLoc: "./1000categories/bee eater.png" },
    { tabID: "93", cardName: 'hornbill', cardLoc: "./1000categories/hornbill.png" },
    { tabID: "94", cardName: 'hummingbird', cardLoc: "./1000categories/hummingbird.png" },
    { tabID: "95", cardName: 'jacamar', cardLoc: "./1000categories/jacamar.png" },
    { tabID: "96", cardName: 'toucan', cardLoc: "./1000categories/toucan.png" },
    { tabID: "97", cardName: 'drake', cardLoc: "./1000categories/drake.png" },
    { tabID: "98", cardName: 'red-breasted merganser, Mergus serrator', cardLoc: "./1000categories/red-breasted merganser.png" },
    { tabID: "99", cardName: 'goose', cardLoc: "./1000categories/goose.png" },
    { tabID: "100", cardName: 'black swan, Cygnus atratus', cardLoc: "./1000categories/black swan.png" },
    { tabID: "101", cardName: 'tusker', cardLoc: "./1000categories/tusker.png" },
    { tabID: "102", cardName: 'echidna, spiny anteater, anteater', cardLoc: "./1000categories/echidna.png" },
    { tabID: "103", cardName: 'platypus, duckbill, duckbilled platypus, duck-billed platypus, Ornithorhynchus anatinus', cardLoc: "./1000categories/platypus.png" },
    { tabID: "104", cardName: 'wallaby, brush kangaroo', cardLoc: "./1000categories/wallaby.png" },
    { tabID: "105", cardName: 'koala, koala bear, kangaroo bear, native bear, Phascolarctos cinereus', cardLoc: "./1000categories/koala, koala bear.png" },
    { tabID: "106", cardName: 'wombat', cardLoc: "./1000categories/wombat.png" },
    { tabID: "107", cardName: 'jellyfish', cardLoc: "./1000categories/jellyfish.png" },
    { tabID: "108", cardName: 'sea anemone, anemone', cardLoc: "./1000categories/sea anemone.png" },
    { tabID: "109", cardName: 'brain coral', cardLoc: "./1000categories/brain coral.png" },
    { tabID: "110", cardName: 'flatworm, platyhelminth', cardLoc: "./1000categories/flatworm.png" },
    { tabID: "111", cardName: 'nematode, nematode worm, roundworm', cardLoc: "./1000categories/nematode.png" },
    { tabID: "112", cardName: 'conch', cardLoc: "./1000categories/conch.png" },
    { tabID: "113", cardName: 'snail', cardLoc: "./1000categories/snail.png" },
    { tabID: "114", cardName: 'slug', cardLoc: "./1000categories/slug.png" },
    { tabID: "115", cardName: 'sea slug, nudibranch', cardLoc: "./1000categories/sea slug.png" },
    { tabID: "116", cardName: 'chiton, coat-of-mail shell, sea cradle, polyplacophore', cardLoc: "./1000categories/chiton.png" },
    { tabID: "117", cardName: 'chambered nautilus, pearly nautilus, nautilus', cardLoc: "./1000categories/chambered nautilus.png" },
    { tabID: "118", cardName: 'Dungeness crab, Cancer magister', cardLoc: "./1000categories/Dungeness crab.png" },
    { tabID: "119", cardName: 'rock crab, Cancer irroratus', cardLoc: "./1000categories/rock crab.png" },
    { tabID: "120", cardName: 'fiddler crab', cardLoc: "./1000categories/fiddler crab.png" },
    { tabID: "121", cardName: 'king crab, Alaska crab, Alaskan king crab, Alaska king crab, Paralithodes camtschatica', cardLoc: "./1000categories/king crab.png" },
    { tabID: "122", cardName: 'American lobster, Northern lobster, Maine lobster, Homarus americanus', cardLoc: "./1000categories/American lobster.png" },
    { tabID: "123", cardName: 'spiny lobster, langouste, rock lobster, crawfish, crayfish, sea crawfish', cardLoc: "./1000categories/spiny lobster.png" },
    { tabID: "124", cardName: 'crayfish, crawfish, crawdad, crawdaddy', cardLoc: "./1000categories/crayfish.png" },
    { tabID: "125", cardName: 'hermit crab', cardLoc: "./1000categories/hermit crab.png" },
    { tabID: "126", cardName: 'isopod', cardLoc: "./1000categories/isopod.png" },
    { tabID: "127", cardName: 'white stork, Ciconia ciconia', cardLoc: "./1000categories/white stork.png" },
    { tabID: "128", cardName: 'black stork, Ciconia nigra', cardLoc: "./1000categories/black stork.png" },
    { tabID: "129", cardName: 'spoonbill', cardLoc: "./1000categories/spoonbill.png" },
    { tabID: "130", cardName: 'flamingo', cardLoc: "./1000categories/flamingo.png" },
    { tabID: "131", cardName: 'little blue heron, Egretta caerulea', cardLoc: "./1000categories/little blue heron.png" },
    { tabID: "132", cardName: 'American egret, great white heron, Egretta albus', cardLoc: "./1000categories/American egret.png" },
    { tabID: "133", cardName: 'bittern', cardLoc: "./1000categories/bittern.png" },
    { tabID: "134", cardName: 'crane', cardLoc: "./1000categories/crane.png" },
    { tabID: "135", cardName: 'limpkin, Aramus pictus', cardLoc: "./1000categories/limpkin.png" },
    { tabID: "136", cardName: 'European gallinule, Porphyrio porphyrio', cardLoc: "./1000categories/European gallinule.png" },
    { tabID: "137", cardName: 'American coot, marsh hen, mud hen, water hen, Fulica americana', cardLoc: "./1000categories/American coot.png" },
    { tabID: "138", cardName: 'bustard', cardLoc: "./1000categories/bustard.png" },
    { tabID: "139", cardName: 'ruddy turnstone, Arenaria interpres', cardLoc: "./1000categories/ruddy turnstone.png" },
    { tabID: "140", cardName: 'red-backed sandpiper, dunlin, Erolia alpina', cardLoc: "./1000categories/red-backed sandpiper.png" },
    { tabID: "141", cardName: 'redshank, Tringa totanus', cardLoc: "./1000categories/redshank.png" },
    { tabID: "142", cardName: 'dowitcher', cardLoc: "./1000categories/dowitcher.png" },
    { tabID: "143", cardName: 'oystercatcher, oyster catcher', cardLoc: "./1000categories/oystercatcher.png" },
    { tabID: "144", cardName: 'pelican', cardLoc: "./1000categories/pelican.png" },
    { tabID: "145", cardName: 'king penguin, Aptenodytes patagonica', cardLoc: "./1000categories/king penguin.png" },
    { tabID: "146", cardName: 'albatross, mollymawk', cardLoc: "./1000categories/albatross.png" },
    { tabID: "147", cardName: 'grey whale, gray whale, devilfish, Eschrichtius gibbosus, Eschrichtius robustus', cardLoc: "./1000categories/grey whale.png" },
    { tabID: "148", cardName: 'killer whale, killer, orca, grampus, sea wolf, Orcinus orca', cardLoc: "./1000categories/killer whale.png" },
    { tabID: "149", cardName: 'dugong, Dugong dugon', cardLoc: "./1000categories/dugong.png" },
    { tabID: "150", cardName: 'sea lion', cardLoc: "./1000categories/sea lion.png" },
    { tabID: "151", cardName: 'Chihuahua', cardLoc: "./1000categories/Chihuahua.png" },
    { tabID: "152", cardName: 'Japanese spaniel', cardLoc: "./1000categories/Japanese spaniel.png" },
    { tabID: "153", cardName: 'Maltese dog, Maltese terrier, Maltese', cardLoc: "./1000categories/Maltese dog.png" },
    { tabID: "154", cardName: 'Pekinese, Pekingese, Peke', cardLoc: "./1000categories/Pekinese.png" },
    { tabID: "155", cardName: 'Shih-Tzu', cardLoc: "./1000categories/Shih-Tzu.png" },
    { tabID: "156", cardName: 'Blenheim spaniel', cardLoc: "./1000categories/Blenheim spaniel.png" },
    { tabID: "157", cardName: 'papillon', cardLoc: "./1000categories/papillon.png" },
    { tabID: "158", cardName: 'toy terrier', cardLoc: "./1000categories/toy terrier.png" },
    { tabID: "159", cardName: 'Rhodesian ridgeback', cardLoc: "./1000categories/Rhodesian ridgeback.png" },
    { tabID: "160", cardName: 'Afghan hound, Afghan', cardLoc: "./1000categories/Afghan hound.png" },
    { tabID: "161", cardName: 'basset, basset hound', cardLoc: "./1000categories/basset.png" },
    { tabID: "162", cardName: 'beagle', cardLoc: "./1000categories/beagle.png" },
    { tabID: "163", cardName: 'bloodhound, sleuthhound', cardLoc: "./1000categories/bloodhound.png" },
    { tabID: "164", cardName: 'bluetick', cardLoc: "./1000categories/bluetick.png" },
    { tabID: "165", cardName: 'black-and-tan coonhound', cardLoc: "./1000categories/black-and-tan coonhound.png" },
    { tabID: "166", cardName: 'Walker hound, Walker foxhound', cardLoc: "./1000categories/Walker hound.png" },
    { tabID: "167", cardName: 'English foxhound', cardLoc: "./1000categories/English foxhound.png" },
    { tabID: "168", cardName: 'redbone', cardLoc: "./1000categories/redbone.png" },
    { tabID: "169", cardName: 'borzoi, Russian wolfhound', cardLoc: "./1000categories/borzoi.png" },
    { tabID: "170", cardName: 'Irish wolfhound', cardLoc: "./1000categories/Irish wolfhound.png" },
    { tabID: "171", cardName: 'Italian greyhound', cardLoc: "./1000categories/Italian greyhound.png" },
    { tabID: "172", cardName: 'whippet', cardLoc: "./1000categories/whippet.png" },
    { tabID: "173", cardName: 'Ibizan hound, Ibizan Podenco', cardLoc: "./1000categories/Ibizan hound.png" },
    { tabID: "174", cardName: 'Norwegian elkhound, elkhound', cardLoc: "./1000categories/Norwegian elkhound.png" },
    { tabID: "175", cardName: 'otterhound, otter hound', cardLoc: "./1000categories/otterhound.png" },
    { tabID: "176", cardName: 'Saluki, gazelle hound', cardLoc: "./1000categories/Saluki.png" },
    { tabID: "177", cardName: 'Scottish deerhound, deerhound', cardLoc: "./1000categories/Scottish deerhound.png" },
    { tabID: "178", cardName: 'Weimaraner', cardLoc: "./1000categories/Weimaraner.png" },
    { tabID: "179", cardName: 'Staffordshire bullterrier, Staffordshire bull terrier', cardLoc: "./1000categories/Staffordshire bullterrier.png" },
    { tabID: "180", cardName: 'American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier', cardLoc: "./1000categories/American Staffordshire terrier.png" },
    { tabID: "181", cardName: 'Bedlington terrier', cardLoc: "./1000categories/Bedlington terrier.png" },
    { tabID: "182", cardName: 'Border terrier', cardLoc: "./1000categories/Border terrier.png" },
    { tabID: "183", cardName: 'Kerry blue terrier', cardLoc: "./1000categories/Kerry blue terrier.png" },
    { tabID: "184", cardName: 'Irish terrier', cardLoc: "./1000categories/Irish terrier.png" },
    { tabID: "185", cardName: 'Norfolk terrier', cardLoc: "./1000categories/Norfolk terrier.png" },
    { tabID: "186", cardName: 'Norwich terrier', cardLoc: "./1000categories/Norwich terrier.png" },
    { tabID: "187", cardName: 'Yorkshire terrier', cardLoc: "./1000categories/Yorkshire terrier.png" },
    { tabID: "188", cardName: 'wire-haired fox terrier', cardLoc: "./1000categories/wire-haired fox terrier.png" },
    { tabID: "189", cardName: 'Lakeland terrier', cardLoc: "./1000categories/Lakeland terrier.png" },
    { tabID: "190", cardName: 'Sealyham terrier, Sealyham', cardLoc: "./1000categories/Sealyham terrier.png" },
    { tabID: "191", cardName: 'Airedale, Airedale terrier', cardLoc: "./1000categories/Airedale.png" },
    { tabID: "192", cardName: 'cairn, cairn terrier', cardLoc: "./1000categories/cairn.png" },
    { tabID: "193", cardName: 'Australian terrier', cardLoc: "./1000categories/Australian terrier.png" },
    { tabID: "194", cardName: 'Dandie Dinmont, Dandie Dinmont terrier', cardLoc: "./1000categories/Dandie Dinmont.png" },
    { tabID: "195", cardName: 'Boston bull, Boston terrier', cardLoc: "./1000categories/Boston bull.png" },
    { tabID: "196", cardName: 'miniature schnauzer', cardLoc: "./1000categories/miniature schnauzer.png" },
    { tabID: "197", cardName: 'giant schnauzer', cardLoc: "./1000categories/giant schnauzer.png" },
    { tabID: "198", cardName: 'standard schnauzer', cardLoc: "./1000categories/standard schnauzer.png" },
    { tabID: "199", cardName: 'Scotch terrier, Scottish terrier, Scottie', cardLoc: "./1000categories/Scotch terrier.png" },
    { tabID: "200", cardName: 'Tibetan terrier, chrysanthemum dog', cardLoc: "./1000categories/Tibetan terrier.png" },
    { tabID: "201", cardName: 'silky terrier, Sydney silky', cardLoc: "./1000categories/silky terrier.png" },
    { tabID: "202", cardName: 'soft-coated wheaten terrier', cardLoc: "./1000categories/soft-coated wheaten terrier.png" },
    { tabID: "203", cardName: 'West Highland white terrier', cardLoc: "./1000categories/West Highland white terrier.png" },
    { tabID: "204", cardName: 'Lhasa, Lhasa apso', cardLoc: "./1000categories/Lhasa.png" },
    { tabID: "205", cardName: 'flat-coated retriever', cardLoc: "./1000categories/flat-coated retriever.png" },
    { tabID: "206", cardName: 'curly-coated retriever', cardLoc: "./1000categories/curly-coated retriever.png" },
    { tabID: "207", cardName: 'golden retriever', cardLoc: "./1000categories/golden retriever.png" },
    { tabID: "208", cardName: 'Labrador retriever', cardLoc: "./1000categories/Labrador retriever.png" },
    { tabID: "209", cardName: 'Chesapeake Bay retriever', cardLoc: "./1000categories/Chesapeake Bay retriever.png" },
    { tabID: "210", cardName: 'German short-haired pointer', cardLoc: "./1000categories/German short-haired pointer.png" },
    { tabID: "211", cardName: 'vizsla, Hungarian pointer', cardLoc: "./1000categories/vizsla.png" },
    { tabID: "212", cardName: 'English setter', cardLoc: "./1000categories/English setter.png" },
    { tabID: "213", cardName: 'Irish setter, red setter', cardLoc: "./1000categories/Irish setter.png" },
    { tabID: "214", cardName: 'Gordon setter', cardLoc: "./1000categories/Gordon setter.png" },
    { tabID: "215", cardName: 'Brittany spaniel', cardLoc: "./1000categories/Brittany spaniel.png" },
    { tabID: "216", cardName: 'clumber, clumber spaniel', cardLoc: "./1000categories/clumber.png" },
    { tabID: "217", cardName: 'English springer, English springer spaniel', cardLoc: "./1000categories/English springer.png" },
    { tabID: "218", cardName: 'Welsh springer spaniel', cardLoc: "./1000categories/Welsh springer spaniel.png" },
    { tabID: "219", cardName: 'cocker spaniel, English cocker spaniel, cocker', cardLoc: "./1000categories/cocker spaniel.png" },
    { tabID: "220", cardName: 'Sussex spaniel', cardLoc: "./1000categories/Sussex spaniel.png" },
    { tabID: "221", cardName: 'Irish water spaniel', cardLoc: "./1000categories/Irish water spaniel.png" },
    { tabID: "222", cardName: 'kuvasz', cardLoc: "./1000categories/kuvasz.png" },
    { tabID: "223", cardName: 'schipperke', cardLoc: "./1000categories/schipperke.png" },
    { tabID: "224", cardName: 'groenendael', cardLoc: "./1000categories/groenendael.png" },
    { tabID: "225", cardName: 'malinois', cardLoc: "./1000categories/malinois.png" },
    { tabID: "226", cardName: 'briard', cardLoc: "./1000categories/briard.png" },
    { tabID: "227", cardName: 'kelpie', cardLoc: "./1000categories/kelpie.png" },
    { tabID: "228", cardName: 'komondor', cardLoc: "./1000categories/komondor.png" },
    { tabID: "229", cardName: 'Old English sheepdog, bobtail', cardLoc: "./1000categories/Old English sheepdog.png" },
    { tabID: "230", cardName: 'Shetland sheepdog, Shetland sheep dog, Shetland', cardLoc: "./1000categories/Shetland sheepdog.png" },
    { tabID: "231", cardName: 'collie', cardLoc: "./1000categories/collie.png" },
    { tabID: "232", cardName: 'Border collie', cardLoc: "./1000categories/Border collie.png" },
    { tabID: "233", cardName: 'Bouvier des Flandres, Bouviers des Flandres', cardLoc: "./1000categories/Bouvier des Flandres.png" },
    { tabID: "234", cardName: 'Rottweiler', cardLoc: "./1000categories/Rottweiler.png" },
    { tabID: "235", cardName: 'German shepherd, German shepherd dog, German police dog, alsatian', cardLoc: "./1000categories/German shepherd.png" },
    { tabID: "236", cardName: 'Doberman, Doberman pinscher', cardLoc: "./1000categories/Doberman.png" },
    { tabID: "237", cardName: 'miniature pinscher', cardLoc: "./1000categories/miniature pinscher.png" },
    { tabID: "238", cardName: 'Greater Swiss Mountain dog', cardLoc: "./1000categories/Greater Swiss Mountain dog.png" },
    { tabID: "239", cardName: 'Bernese mountain dog', cardLoc: "./1000categories/Bernese mountain dog.png" },
    { tabID: "240", cardName: 'Appenzeller', cardLoc: "./1000categories/Appenzeller.png" },
    { tabID: "241", cardName: 'EntleBucher', cardLoc: "./1000categories/EntleBucher.png" },
    { tabID: "242", cardName: 'boxer', cardLoc: "./1000categories/boxer.png" },
    { tabID: "243", cardName: 'bull mastiff', cardLoc: "./1000categories/bull mastiff.png" },
    { tabID: "244", cardName: 'Tibetan mastiff', cardLoc: "./1000categories/Tibetan mastiff.png" },
    { tabID: "245", cardName: 'French bulldog', cardLoc: "./1000categories/French bulldog.png" },
    { tabID: "246", cardName: 'Great Dane', cardLoc: "./1000categories/Great Dane.png" },
    { tabID: "247", cardName: 'Saint Bernard, St Bernard', cardLoc: "./1000categories/Saint Bernard.png" },
    { tabID: "248", cardName: 'Eskimo dog, husky', cardLoc: "./1000categories/Eskimo dog, husky.png" },
    { tabID: "249", cardName: 'malamute, malemute, Alaskan malamute', cardLoc: "./1000categories/malamute.png" },
    { tabID: "250", cardName: 'Siberian husky', cardLoc: "./1000categories/Siberian husky.png" },
    { tabID: "251", cardName: 'dalmatian, coach dog, carriage dog', cardLoc: "./1000categories/dalmatian.png" },
    { tabID: "252", cardName: 'affenpinscher, monkey pinscher, monkey dog', cardLoc: "./1000categories/affenpinscher.png" },
    { tabID: "253", cardName: 'basenji', cardLoc: "./1000categories/basenji.png" },
    { tabID: "254", cardName: 'pug, pug-dog', cardLoc: "./1000categories/pug.png" },
    { tabID: "255", cardName: 'Leonberg', cardLoc: "./1000categories/Leonberg.png" },
    { tabID: "256", cardName: 'Newfoundland, Newfoundland dog', cardLoc: "./1000categories/Newfoundland.png" },
    { tabID: "257", cardName: 'Great Pyrenees', cardLoc: "./1000categories/Great Pyrenees.png" },
    { tabID: "258", cardName: 'Samoyed, Samoyede', cardLoc: "./1000categories/Samoyed.png" },
    { tabID: "259", cardName: 'Pomeranian', cardLoc: "./1000categories/Pomeranian.png" },
    { tabID: "260", cardName: 'chow, chow chow', cardLoc: "./1000categories/chow.png" },
    { tabID: "261", cardName: 'keeshond', cardLoc: "./1000categories/keeshond.png" },
    { tabID: "262", cardName: 'Brabancon griffon', cardLoc: "./1000categories/Brabancon griffon.png" },
    { tabID: "263", cardName: 'Pembroke, Pembroke Welsh corgi', cardLoc: "./1000categories/Pembroke.png" },
    { tabID: "264", cardName: 'Cardigan, Cardigan Welsh corgi', cardLoc: "./1000categories/Cardigan, Cardigan Welsh corgi.png" },
    { tabID: "265", cardName: 'toy poodle', cardLoc: "./1000categories/toy poodle.png" },
    { tabID: "266", cardName: 'miniature poodle', cardLoc: "./1000categories/miniature poodle.png" },
    { tabID: "267", cardName: 'standard poodle', cardLoc: "./1000categories/standard poodle.png" },
    { tabID: "268", cardName: 'Mexican hairless', cardLoc: "./1000categories/Mexican hairless.png" },
    { tabID: "269", cardName: 'timber wolf, grey wolf, gray wolf, Canis lupus', cardLoc: "./1000categories/timber wolf.png" },
    { tabID: "270", cardName: 'white wolf, Arctic wolf, Canis lupus tundrarum', cardLoc: "./1000categories/white wolf.png" },
    { tabID: "271", cardName: 'red wolf, maned wolf, Canis rufus, Canis niger', cardLoc: "./1000categories/red wolf.png" },
    { tabID: "272", cardName: 'coyote, prairie wolf, brush wolf, Canis latrans', cardLoc: "./1000categories/coyote, prairie wolf.png" },
    { tabID: "273", cardName: 'dingo, warrigal, warragal, Canis dingo', cardLoc: "./1000categories/dingo, warrigal.png" },
    { tabID: "274", cardName: 'dhole, Cuon alpinus', cardLoc: "./1000categories/dhole, Cuon alpinus.png" },
    { tabID: "275", cardName: 'African hunting dog, hyena dog, Cape hunting dog, Lycaon pictus', cardLoc: "./1000categories/African hunting dog.png" },
    { tabID: "276", cardName: 'hyena, hyaena', cardLoc: "./1000categories/hyena, hyaena.png" },
    { tabID: "277", cardName: 'red fox, Vulpes vulpes', cardLoc: "./1000categories/red fox.png" },
    { tabID: "278", cardName: 'kit fox, Vulpes macrotis', cardLoc: "./1000categories/kit fox.png" },
    { tabID: "279", cardName: 'Arctic fox, white fox, Alopex lagopus', cardLoc: "./1000categories/Arctic fox.png" },
    { tabID: "280", cardName: 'grey fox, gray fox, Urocyon cinereoargenteus', cardLoc: "./1000categories/grey fo.png" },
    { tabID: "281", cardName: 'tabby, tabby cat', cardLoc: "./1000categories/tabby.png" },
    { tabID: "282", cardName: 'tiger cat', cardLoc: "./1000categories/tiger cat.png" },
    { tabID: "283", cardName: 'Persian cat', cardLoc: "./1000categories/Persian cat.png" },
    { tabID: "284", cardName: 'Siamese cat, Siamese', cardLoc: "./1000categories/Siamese cat.png" },
    { tabID: "285", cardName: 'Egyptian cat', cardLoc: "./1000categories/Egyptian cat.png" },
    { tabID: "286", cardName: 'cougar, puma, catamount, mountain lion, painter, panther, Felis concolor', cardLoc: "./1000categories/cougar, puma.png" },
    { tabID: "287", cardName: 'lynx, catamount', cardLoc: "./1000categories/lynx, catamount.png" },
    { tabID: "288", cardName: 'leopard, Panthera pardus', cardLoc: "./1000categories/leopard.png" },
    { tabID: "289", cardName: 'snow leopard, ounce, Panthera uncia', cardLoc: "./1000categories/snow leopard.png" },
    { tabID: "290", cardName: 'jaguar, panther, Panthera onca, Felis onca', cardLoc: "./1000categories/jaguar.png" },
    { tabID: "291", cardName: 'lion, king of beasts, Panthera leo', cardLoc: "./1000categories/lion.png" },
    { tabID: "292", cardName: 'tiger, Panthera tigris', cardLoc: "./1000categories/tiger.png" },
    { tabID: "293", cardName: 'cheetah, chetah, Acinonyx jubatus', cardLoc: "./1000categories/cheetah.png" },
    { tabID: "294", cardName: 'brown bear, bruin, Ursus arctos', cardLoc: "./1000categories/brown bear.png" },
    { tabID: "295", cardName: 'American black bear, black bear, Ursus americanus, Euarctos americanus', cardLoc: "./1000categories/American black bear.png" },
    { tabID: "296", cardName: 'ice bear, polar bear, Ursus Maritimus, Thalarctos maritimus', cardLoc: "./1000categories/ice bear.png" },
    { tabID: "297", cardName: 'sloth bear, Melursus ursinus, Ursus ursinus', cardLoc: "./1000categories/sloth bear.png" },
    { tabID: "298", cardName: 'mongoose', cardLoc: "./1000categories/mongoose.png" },
    { tabID: "299", cardName: 'meerkat, mierkat', cardLoc: "./1000categories/meerkat.png" },
    { tabID: "300", cardName: 'tiger beetle', cardLoc: "./1000categories/tiger beetle.png" },
    { tabID: "301", cardName: 'ladybug, ladybeetle, lady beetle, ladybird, ladybird beetle', cardLoc: "./1000categories/ladybug.png" },
    { tabID: "302", cardName: 'ground beetle, carabid beetle', cardLoc: "./1000categories/ground beetle.png" },
    { tabID: "303", cardName: 'long-horned beetle, longicorn, longicorn beetle', cardLoc: "./1000categories/long-horned beetle.png" },
    { tabID: "304", cardName: 'leaf beetle, chrysomelid', cardLoc: "./1000categories/leaf beetle.png" },
    { tabID: "305", cardName: 'dung beetle', cardLoc: "./1000categories/dung beetle.png" },
    { tabID: "306", cardName: 'rhinoceros beetle', cardLoc: "./1000categories/rhinoceros beetle.png" },
    { tabID: "307", cardName: 'weevil', cardLoc: "./1000categories/weevil.png" },
    { tabID: "308", cardName: 'fly', cardLoc: "./1000categories/fly.png" },
    { tabID: "309", cardName: 'bee', cardLoc: "./1000categories/bee.png" },
    { tabID: "310", cardName: 'ant, emmet, pismire', cardLoc: "./1000categories/ant.png" },
    { tabID: "311", cardName: 'grasshopper, hopper', cardLoc: "./1000categories/grasshopper.png" },
    { tabID: "312", cardName: 'cricket', cardLoc: "./1000categories/cricket.png" },
    { tabID: "313", cardName: 'walking stick, walkingstick, stick insect', cardLoc: "./1000categories/walking stick.png" },
    { tabID: "314", cardName: 'cockroach, roach', cardLoc: "./1000categories/cockroach.png" },
    { tabID: "315", cardName: 'mantis, mantid', cardLoc: "./1000categories/mantis.png" },
    { tabID: "316", cardName: 'cicada, cicala', cardLoc: "./1000categories/cicada.png" },
    { tabID: "317", cardName: 'leafhopper', cardLoc: "./1000categories/leafhopper.png" },
    { tabID: "318", cardName: 'lacewing, lacewing fly', cardLoc: "./1000categories/lacewing.png" },
    { tabID: "319", cardName: "dragonfly, darning needle, devil's darning needle, sewing needle, snake feeder, snake doctor, mosquito hawk, skeeter hawk", cardLoc: "./1000categories/dragonfly.png" },
    { tabID: "320", cardName: 'damselfly', cardLoc: "./1000categories/damselfly.png" },
    { tabID: "321", cardName: 'admiral', cardLoc: "./1000categories/admiral.png" },
    { tabID: "322", cardName: 'ringlet, ringlet butterfly', cardLoc: "./1000categories/ringlet.png" },
    { tabID: "323", cardName: 'monarch, monarch butterfly, milkweed butterfly, Danaus plexippus', cardLoc: "./1000categories/monarch.png" },
    { tabID: "324", cardName: 'cabbage butterfly', cardLoc: "./1000categories/cabbage butterfly.png" },
    { tabID: "325", cardName: 'sulphur butterfly, sulfur butterfly', cardLoc: "./1000categories/sulphur butterfly.png" },
    { tabID: "326", cardName: 'lycaenid, lycaenid butterfly', cardLoc: "./1000categories/lycaenid.png" },
    { tabID: "327", cardName: 'starfish, sea star', cardLoc: "./1000categories/starfish.png" },
    { tabID: "328", cardName: 'sea urchin', cardLoc: "./1000categories/sea urchin.png" },
    { tabID: "329", cardName: 'sea cucumber, holothurian', cardLoc: "./1000categories/sea cucumber.png" },
    { tabID: "330", cardName: 'wood rabbit, cottontail, cottontail rabbit', cardLoc: "./1000categories/wood rabbit.png" },
    { tabID: "331", cardName: 'hare', cardLoc: "./1000categories/hare.png" },
    { tabID: "332", cardName: 'Angora, Angora rabbit', cardLoc: "./1000categories/Angora rabbit.png" },
    { tabID: "333", cardName: 'hamster', cardLoc: "./1000categories/hamster.png" },
    { tabID: "334", cardName: 'porcupine, hedgehog', cardLoc: "./1000categories/porcupine.png" },
    { tabID: "335", cardName: 'fox squirrel, eastern fox squirrel, Sciurus niger', cardLoc: "./1000categories/fox squirrel.png" },
    { tabID: "336", cardName: 'marmot', cardLoc: "./1000categories/marmot.png" },
    { tabID: "337", cardName: 'beaver', cardLoc: "./1000categories/beaver.png" },
    { tabID: "338", cardName: 'guinea pig, Cavia cobaya', cardLoc: "./1000categories/guinea pig.png" },
    { tabID: "339", cardName: 'sorrel', cardLoc: "./1000categories/sorrel.png" },
    { tabID: "340", cardName: 'zebra', cardLoc: "./1000categories/zebra.png" },
    { tabID: "341", cardName: 'hog, pig, grunter, squealer, Sus scrofa', cardLoc: "./1000categories/hog, pig.png" },
    { tabID: "342", cardName: 'wild boar, boar, Sus scrofa', cardLoc: "./1000categories/wild boar.png" },
    { tabID: "343", cardName: 'warthog', cardLoc: "./1000categories/warthog.png" },
    { tabID: "344", cardName: 'hippopotamus, hippo, river horse, Hippopotamus amphibius', cardLoc: "./1000categories/hippopotamus.png" },
    { tabID: "345", cardName: 'ox', cardLoc: "./1000categories/ox.png" },
    { tabID: "346", cardName: 'water buffalo, water ox, Asiatic buffalo, Bubalus bubalis', cardLoc: "./1000categories/water buffalo.png" },
    { tabID: "347", cardName: 'bison', cardLoc: "./1000categories/bison.png" },
    { tabID: "348", cardName: 'ram, tup', cardLoc: "./1000categories/ram.png" },
    { tabID: "349", cardName: 'bighorn, bighorn sheep, cimarron, Rocky Mountain bighorn, Rocky Mountain sheep, Ovis canadensis', cardLoc: "./1000categories/bighorn, bighorn sheep.png" },
    { tabID: "350", cardName: 'ibex, Capra ibex', cardLoc: "./1000categories/ibex.png" },
    { tabID: "351", cardName: 'hartebeest', cardLoc: "./1000categories/hartebeest.png" },
    { tabID: "352", cardName: 'impala, Aepyceros melampus', cardLoc: "./1000categories/impala.png" },
    { tabID: "353", cardName: 'gazelle', cardLoc: "./1000categories/gazelle.png" },
    { tabID: "354", cardName: 'Arabian camel, dromedary, Camelus dromedarius', cardLoc: "./1000categories/Arabian camel.png" },
    { tabID: "355", cardName: 'llama', cardLoc: "./1000categories/llama.png" },
    { tabID: "356", cardName: 'weasel', cardLoc: "./1000categories/weasel.png" },
    { tabID: "357", cardName: 'mink', cardLoc: "./1000categories/mink.png" },
    { tabID: "358", cardName: 'polecat, fitch, foulmart, foumart, Mustela putorius', cardLoc: "./1000categories/polecat, fitch, foulmart, foumart, Mustela putorius.png" },
    { tabID: "359", cardName: 'black-footed ferret, ferret, Mustela nigripes', cardLoc: "./1000categories/black-footed ferret.png" },
    { tabID: "360", cardName: 'otter', cardLoc: "./1000categories/otter.png" },
    { tabID: "361", cardName: 'skunk, polecat, wood pussy', cardLoc: "./1000categories/skunk, polecat, wood pussy.png" },
    { tabID: "362", cardName: 'badger', cardLoc: "./1000categories/badger.png" },
    { tabID: "363", cardName: 'armadillo', cardLoc: "./1000categories/armadillo.png" },
    { tabID: "364", cardName: 'three-toed sloth, ai, Bradypus tridactylus', cardLoc: "./1000categories/three-toed sloth.png" },
    { tabID: "365", cardName: 'orangutan, orang, orangutang, Pongo pygmaeus', cardLoc: "./1000categories/orangutan.png" },
    { tabID: "366", cardName: 'gorilla, Gorilla gorilla', cardLoc: "./1000categories/gorilla.png" },
    { tabID: "367", cardName: 'chimpanzee, chimp, Pan troglodytes', cardLoc: "./1000categories/chimpanzee.png" },
    { tabID: "368", cardName: 'gibbon, Hylobates lar', cardLoc: "./1000categories/gibbon.png" },
    { tabID: "369", cardName: 'siamang, Hylobates syndactylus, Symphalangus syndactylus', cardLoc: "./1000categories/siamang.png" },
    { tabID: "370", cardName: 'guenon, guenon monkey', cardLoc: "./1000categories/guenon monkey.png" },
    { tabID: "371", cardName: 'patas, hussar monkey, Erythrocebus patas', cardLoc: "./1000categories/patas, hussar monkey, Erythrocebus patas.png" },
    { tabID: "372", cardName: 'baboon', cardLoc: "./1000categories/baboon.png" },
    { tabID: "373", cardName: 'macaque', cardLoc: "./1000categories/macaque.png" },
    { tabID: "374", cardName: 'langur', cardLoc: "./1000categories/langur.png" },
    { tabID: "375", cardName: 'colobus, colobus monkey', cardLoc: "./1000categories/colobus monkey.png" },
    { tabID: "376", cardName: 'proboscis monkey, Nasalis larvatus', cardLoc: "./1000categories/proboscis monkey.png" },
    { tabID: "377", cardName: 'marmoset', cardLoc: "./1000categories/marmoset.png" },
    { tabID: "378", cardName: 'capuchin, ringtail, Cebus capucinus', cardLoc: "./1000categories/capuchin.png" },
    { tabID: "379", cardName: 'howler monkey, howler', cardLoc: "./1000categories/howler monkey.png" },
    { tabID: "380", cardName: 'titi, titi monkey', cardLoc: "./1000categories/titi monkey.png" },
    { tabID: "381", cardName: 'spider monkey, Ateles geoffroyi', cardLoc: "./1000categories/spider monkey.png" },
    { tabID: "382", cardName: 'squirrel monkey, Saimiri sciureus', cardLoc: "./1000categories/squirrel monkey.png" },
    { tabID: "383", cardName: 'Madagascar cat, ring-tailed lemur, Lemur catta', cardLoc: "./1000categories/Madagascar cat.png" },
    { tabID: "384", cardName: 'indri, indris, Indri indri, Indri brevicaudatus', cardLoc: "./1000categories/indri.png" },
    { tabID: "385", cardName: 'Indian elephant, Elephas maximus', cardLoc: "./1000categories/Indian elephant.png" },
    { tabID: "386", cardName: 'African elephant, Loxodonta africana', cardLoc: "./1000categories/African elephant.png" },
    { tabID: "387", cardName: 'lesser panda, red panda, panda, bear cat, cat bear, Ailurus fulgens', cardLoc: "./1000categories/lesser panda.png" },
    { tabID: "388", cardName: 'giant panda, panda, panda bear, coon bear, Ailuropoda melanoleuca', cardLoc: "./1000categories/giant panda.png" },
    { tabID: "389", cardName: 'barracouta, snoek', cardLoc: "./1000categories/barracouta.png" },
    { tabID: "390", cardName: 'eel', cardLoc: "./1000categories/eel.png" },
    { tabID: "391", cardName: 'coho, cohoe, coho salmon, blue jack, silver salmon, Oncorhynchus kisutch', cardLoc: "./1000categories/coho, cohoe.png" },
    { tabID: "392", cardName: 'rock beauty, Holocanthus tricolor', cardLoc: "./1000categories/rock beauty.png" },
    { tabID: "393", cardName: 'anemone fish', cardLoc: "./1000categories/anemone fish.png" },
    { tabID: "394", cardName: 'sturgeon', cardLoc: "./1000categories/sturgeon.png" },
    { tabID: "395", cardName: 'gar, garfish, garpike, billfish, Lepisosteus osseus', cardLoc: "./1000categories/gar, garfish.png" },
    { tabID: "396", cardName: 'lionfish', cardLoc: "./1000categories/lionfish.png" },
    { tabID: "397", cardName: 'puffer, pufferfish, blowfish, globefish', cardLoc: "./1000categories/puffer.png" },
    { tabID: "398", cardName: 'abacus', cardLoc: "./1000categories/abacus.png" },
    { tabID: "399", cardName: 'abaya', cardLoc: "./1000categories/abaya.png" },
    { tabID: "400", cardName: "academic gown, academic robe, judge's robe", cardLoc: "./1000categories/academic gown.png" },
    { tabID: "401", cardName: 'accordion, piano accordion, squeeze box', cardLoc: "./1000categories/accordion, piano accordion.png" },
    { tabID: "402", cardName: 'acoustic guitar', cardLoc: "./1000categories/acoustic guitar.png" },
    { tabID: "403", cardName: 'aircraft carrier, carrier, flattop, attack aircraft carrier', cardLoc: "./1000categories/aircraft carrier.png" },
    { tabID: "404", cardName: 'airliner', cardLoc: "./1000categories/airliner.png" },
    { tabID: "405", cardName: 'airship, dirigible', cardLoc: "./1000categories/airship.png" },
    { tabID: "406", cardName: 'altar', cardLoc: "./1000categories/altar.png" },
    { tabID: "407", cardName: 'ambulance', cardLoc: "./1000categories/ambulance.png" },
    { tabID: "408", cardName: 'amphibian, amphibious vehicle', cardLoc: "./1000categories/amphibian.png" },
    { tabID: "409", cardName: 'analog clock', cardLoc: "./1000categories/analog clock.png" },
    { tabID: "410", cardName: 'apiary, bee house', cardLoc: "./1000categories/apiary, bee house.png" },
    { tabID: "411", cardName: 'apron', cardLoc: "./1000categories/apron.png" },
    { tabID: "412", cardName: 'ashcan, trash can, garbage can, wastebin, ash bin, ash-bin, ashbin, dustbin, trash barrel, trash bin', cardLoc: "./1000categories/ashcan, trash can.png" },
    { tabID: "413", cardName: 'assault rifle, assault gun', cardLoc: "./1000categories/assault rifle.png" },
    { tabID: "414", cardName: 'backpack, back pack, knapsack, packsack, rucksack, haversack', cardLoc: "./1000categories/backpack.png" },
    { tabID: "415", cardName: 'bakery, bakeshop, bakehouse', cardLoc: "./1000categories/bakery.png" },
    { tabID: "416", cardName: 'balance beam, beam', cardLoc: "./1000categories/balance beam.png" },
    { tabID: "417", cardName: 'balloon', cardLoc: "./1000categories/balloon.png" },
    { tabID: "418", cardName: 'ballpoint, ballpoint pen, ballpen, Biro', cardLoc: "./1000categories/ballpoint.png" },
    { tabID: "419", cardName: 'Band Aid', cardLoc: "./1000categories/Band Aid.png" },
    { tabID: "420", cardName: 'banjo', cardLoc: "./1000categories/banjo.png" },
    { tabID: "421", cardName: 'bannister, banister, balustrade, balusters, handrail', cardLoc: "./1000categories/bannister.png" },
    { tabID: "422", cardName: 'barbell', cardLoc: "./1000categories/barbell.png" },
    { tabID: "423", cardName: 'barber chair', cardLoc: "./1000categories/barber chair.png" },
    { tabID: "424", cardName: 'barbershop', cardLoc: "./1000categories/barbershop.png" },
    { tabID: "425", cardName: 'barn', cardLoc: "./1000categories/barn.png" },
    { tabID: "426", cardName: 'barometer', cardLoc: "./1000categories/barometer.png" },
    { tabID: "427", cardName: 'barrel, cask', cardLoc: "./1000categories/barrel.png" },
    { tabID: "428", cardName: 'barrow, garden cart, lawn cart, wheelbarrow', cardLoc: "./1000categories/barrow.png" },
    { tabID: "429", cardName: 'baseball', cardLoc: "./1000categories/baseball.png" },
    { tabID: "430", cardName: 'basketball', cardLoc: "./1000categories/basketball.png" },
    { tabID: "431", cardName: 'bassinet', cardLoc: "./1000categories/bassinet.png" },
    { tabID: "432", cardName: 'bassoon', cardLoc: "./1000categories/bassoon.png" },
    { tabID: "433", cardName: 'bathing cap, swimming cap', cardLoc: "./1000categories/bathing cap.png" },
    { tabID: "434", cardName: 'bath towel', cardLoc: "./1000categories/bath towel.png" },
    { tabID: "435", cardName: 'bathtub, bathing tub, bath, tub', cardLoc: "./1000categories/bathtub.png" },
    { tabID: "436", cardName: 'beach wagon, station wagon, wagon, estate car, beach waggon, station waggon, waggon', cardLoc: "./1000categories/beach wagon.png" },
    { tabID: "437", cardName: 'beacon, lighthouse, beacon light, pharos', cardLoc: "./1000categories/beacon.png" },
    { tabID: "438", cardName: 'beaker', cardLoc: "./1000categories/beaker.png" },
    { tabID: "439", cardName: 'bearskin, busby, shako', cardLoc: "./1000categories/bearskin.png" },
    { tabID: "440", cardName: 'beer bottle', cardLoc: "./1000categories/beer bottle.png" },
    { tabID: "441", cardName: 'beer glass', cardLoc: "./1000categories/beer glass.png" },
    { tabID: "442", cardName: 'bell cote, bell cot', cardLoc: "./1000categories/bell cote.png" },
    { tabID: "443", cardName: 'bib', cardLoc: "./1000categories/bib.png" },
    { tabID: "444", cardName: 'bicycle-built-for-two, tandem bicycle, tandem', cardLoc: "./1000categories/bicycle-built-for-two.png" },
    { tabID: "445", cardName: 'bikini, two-piece', cardLoc: "./1000categories/bikini.png" },
    { tabID: "446", cardName: 'binder, ring-binder', cardLoc: "./1000categories/binder.png" },
    { tabID: "447", cardName: 'binoculars, field glasses, opera glasses', cardLoc: "./1000categories/binoculars.png" },
    { tabID: "448", cardName: 'birdhouse', cardLoc: "./1000categories/birdhouse.png" },
    { tabID: "449", cardName: 'boathouse', cardLoc: "./1000categories/boathouse.png" },
    { tabID: "450", cardName: 'bobsled, bobsleigh, bob', cardLoc: "./1000categories/bobsled.png" },
    { tabID: "451", cardName: 'bolo tie, bolo, bola tie, bola', cardLoc: "./1000categories/bolo tie.png" },
    { tabID: "452", cardName: 'bonnet, poke bonnet', cardLoc: "./1000categories/bonnet.png" },
    { tabID: "453", cardName: 'bookcase', cardLoc: "./1000categories/bookcase.png" },
    { tabID: "454", cardName: 'bookshop, bookstore, bookstall', cardLoc: "./1000categories/bookshop.png" },
    { tabID: "455", cardName: 'bottlecap', cardLoc: "./1000categories/bottlecap.png" },
    { tabID: "456", cardName: 'bow', cardLoc: "./1000categories/bow.png" },
    { tabID: "457", cardName: 'bow tie, bow-tie, bowtie', cardLoc: "./1000categories/bow tie.png" },
    { tabID: "458", cardName: 'brass, memorial tablet, plaque', cardLoc: "./1000categories/brass, memorial tablet.png" },
    { tabID: "459", cardName: 'brassiere, bra, bandeau', cardLoc: "./1000categories/brassiere, bra.png" },
    { tabID: "460", cardName: 'breakwater, groin, groyne, mole, bulwark, seawall, jetty', cardLoc: "./1000categories/breakwater.png" },
    { tabID: "461", cardName: 'breastplate, aegis, egis', cardLoc: "./1000categories/breastplate.png" },
    { tabID: "462", cardName: 'broom', cardLoc: "./1000categories/broom.png" },
    { tabID: "463", cardName: 'bucket, pail', cardLoc: "./1000categories/bucket.png" },
    { tabID: "464", cardName: 'buckle', cardLoc: "./1000categories/buckle.png" },
    { tabID: "465", cardName: 'bulletproof vest', cardLoc: "./1000categories/bulletproof vest.png" },
    { tabID: "466", cardName: 'bullet train, bullet', cardLoc: "./1000categories/bullet train.png" },
    { tabID: "467", cardName: 'butcher shop, meat market', cardLoc: "./1000categories/butcher shop.png" },
    { tabID: "468", cardName: 'cab, hack, taxi, taxicab', cardLoc: "./1000categories/cab.png" },
    { tabID: "469", cardName: 'caldron, cauldron', cardLoc: "./1000categories/caldron.png" },
    { tabID: "470", cardName: 'candle, taper, wax light', cardLoc: "./1000categories/candle.png" },
    { tabID: "471", cardName: 'cannon', cardLoc: "./1000categories/cannon.png" },
    { tabID: "472", cardName: 'canoe', cardLoc: "./1000categories/canoe.png" },
    { tabID: "473", cardName: 'can opener, tin opener', cardLoc: "./1000categories/can opener.png" },
    { tabID: "474", cardName: 'cardigan', cardLoc: "./1000categories/cardigan.png" },
    { tabID: "475", cardName: 'car mirror', cardLoc: "./1000categories/car mirror.png" },
    { tabID: "476", cardName: 'carousel, carrousel, merry-go-round, roundabout, whirligig', cardLoc: "./1000categories/carousel.png" },
    { tabID: "477", cardName: "carpenter's kit, tool kit", cardLoc: "./1000categories/carpenter's kit.png" },
    { tabID: "478", cardName: 'carton', cardLoc: "./1000categories/carton.png" },
    { tabID: "479", cardName: 'car wheel', cardLoc: "./1000categories/car wheel.png" },
    { tabID: "480", cardName: 'cash machine, cash dispenser, automated teller machine, automatic teller machine, automated teller, automatic teller, ATM', cardLoc: "./1000categories/cash machine.png" },
    { tabID: "481", cardName: 'cassette', cardLoc: "./1000categories/cassette.png" },
    { tabID: "482", cardName: 'cassette player', cardLoc: "./1000categories/cassette player.png" },
    { tabID: "483", cardName: 'castle', cardLoc: "./1000categories/castle.png" },
    { tabID: "484", cardName: 'catamaran', cardLoc: "./1000categories/catamaran.png" },
    { tabID: "485", cardName: 'CD player', cardLoc: "./1000categories/CD player.png" },
    { tabID: "486", cardName: 'cello, violoncello', cardLoc: "./1000categories/cello, violoncello.png" },
    { tabID: "487", cardName: 'cellular telephone, cellular phone, cellphone, cell, mobile phone', cardLoc: "./1000categories/cellular telephone.png" },
    { tabID: "488", cardName: 'chain', cardLoc: "./1000categories/chain.png" },
    { tabID: "489", cardName: 'chainlink fence', cardLoc: "./1000categories/chainlink fence.png" },
    { tabID: "490", cardName: 'chain mail, ring mail, mail, chain armor, chain armour, ring armor, ring armour', cardLoc: "./1000categories/chain mail.png" },
    { tabID: "491", cardName: 'chain saw, chainsaw', cardLoc: "./1000categories/chain saw.png" },
    { tabID: "492", cardName: 'chest', cardLoc: "./1000categories/chest.png" },
    { tabID: "493", cardName: 'chiffonier, commode', cardLoc: "./1000categories/chiffonier.png" },
    { tabID: "494", cardName: 'chime, bell, gong', cardLoc: "./1000categories/chime, bell.png" },
    { tabID: "495", cardName: 'china cabinet, china closet', cardLoc: "./1000categories/china cabinet.png" },
    { tabID: "496", cardName: 'Christmas stocking', cardLoc: "./1000categories/Christmas stocking.png" },
    { tabID: "497", cardName: 'church, church building', cardLoc: "./1000categories/church.png" },
    { tabID: "498", cardName: 'cinema, movie theater, movie theatre, movie house, picture palace', cardLoc: "./1000categories/cinema.png" },
    { tabID: "499", cardName: 'cleaver, meat cleaver, chopper', cardLoc: "./1000categories/cleaver.png" },
    { tabID: "500", cardName: 'cliff dwelling', cardLoc: "./1000categories/cliff dwelling.png" },
    { tabID: "501", cardName: 'cloak', cardLoc: "./1000categories/cloak.png" },
    { tabID: "502", cardName: 'clog, geta, patten, sabot', cardLoc: "./1000categories/clog, geta.png" },
    { tabID: "503", cardName: 'cocktail shaker', cardLoc: "./1000categories/cocktail shaker.png" },
    { tabID: "504", cardName: 'coffee mug', cardLoc: "./1000categories/coffee mug.png" },
    { tabID: "505", cardName: 'coffeepot', cardLoc: "./1000categories/coffeepot.png" },
    { tabID: "506", cardName: 'coil, spiral, volute, whorl, helix', cardLoc: "./1000categories/coil, spiral.png" },
    { tabID: "507", cardName: 'combination lock', cardLoc: "./1000categories/combination lock.png" },
    { tabID: "508", cardName: 'computer keyboard, keypad', cardLoc: "./1000categories/computer keyboard.png" },
    { tabID: "509", cardName: 'confectionery, confectionary, candy store', cardLoc: "./1000categories/confectionery.png" },
    { tabID: "510", cardName: 'container ship, containership, container vessel', cardLoc: "./1000categories/container ship.png" },
    { tabID: "511", cardName: 'convertible', cardLoc: "./1000categories/convertible.png" },
    { tabID: "512", cardName: 'corkscrew, bottle screw', cardLoc: "./1000categories/corkscrew.png" },
    { tabID: "513", cardName: 'cornet, horn, trumpet, trump', cardLoc: "./1000categories/cornet.png" },
    { tabID: "514", cardName: 'cowboy boot', cardLoc: "./1000categories/cowboy boot.png" },
    { tabID: "515", cardName: 'cowboy hat, ten-gallon hat', cardLoc: "./1000categories/cowboy hat.png" },
    { tabID: "516", cardName: 'cradle', cardLoc: "./1000categories/cradle.png" },
    { tabID: "517", cardName: 'crane', cardLoc: "./1000categories/crane.png" },
    { tabID: "518", cardName: 'crash helmet', cardLoc: "./1000categories/crash helmet.png" },
    { tabID: "519", cardName: 'crate', cardLoc: "./1000categories/crate.png" },
    { tabID: "520", cardName: 'crib, cot', cardLoc: "./1000categories/crib, cot.png" },
    { tabID: "521", cardName: 'Crock Pot', cardLoc: "./1000categories/Crock Pot.png" },
    { tabID: "522", cardName: 'croquet ball', cardLoc: "./1000categories/croquet ball.png" },
    { tabID: "523", cardName: 'crutch', cardLoc: "./1000categories/crutch.png" },
    { tabID: "524", cardName: 'cuirass', cardLoc: "./1000categories/cuirass.png" },
    { tabID: "525", cardName: 'dam, dike, dyke', cardLoc: "./1000categories/dam, dike.png" },
    { tabID: "526", cardName: 'desk', cardLoc: "./1000categories/desk.png" },
    { tabID: "527", cardName: 'desktop computer', cardLoc: "./1000categories/desktop computer.png" },
    { tabID: "528", cardName: 'dial telephone, dial phone', cardLoc: "./1000categories/dial telephone.png" },
    { tabID: "529", cardName: 'diaper, nappy, napkin', cardLoc: "./1000categories/diaper.png" },
    { tabID: "530", cardName: 'digital clock', cardLoc: "./1000categories/digital clock.png" },
    { tabID: "531", cardName: 'digital watch', cardLoc: "./1000categories/digital watch.png" },
    { tabID: "532", cardName: 'dining table, board', cardLoc: "./1000categories/dining table.png" },
    { tabID: "533", cardName: 'dishrag, dishcloth', cardLoc: "./1000categories/dishrag.png" },
    { tabID: "534", cardName: 'dishwasher, dish washer, dishwashing machine', cardLoc: "./1000categories/dishwasher.png" },
    { tabID: "535", cardName: 'disk brake, disc brake', cardLoc: "./1000categories/disk brake.png" },
    { tabID: "536", cardName: 'dock, dockage, docking facility', cardLoc: "./1000categories/dock.png" },
    { tabID: "537", cardName: 'dogsled, dog sled, dog sleigh', cardLoc: "./1000categories/dogsled.png" },
    { tabID: "538", cardName: 'dome', cardLoc: "./1000categories/dome.png" },
    { tabID: "539", cardName: 'doormat, welcome mat', cardLoc: "./1000categories/doormat.png" },
    { tabID: "540", cardName: 'drilling platform, offshore rig', cardLoc: "./1000categories/drilling platform.png" },
    { tabID: "541", cardName: 'drum, membranophone, tympan', cardLoc: "./1000categories/drum.png" },
    { tabID: "542", cardName: 'drumstick', cardLoc: "./1000categories/drumstick.png" },
    { tabID: "543", cardName: 'dumbbell', cardLoc: "./1000categories/dumbbell.png" },
    { tabID: "544", cardName: 'Dutch oven', cardLoc: "./1000categories/Dutch oven.png" },
    { tabID: "545", cardName: 'electric fan, blower', cardLoc: "./1000categories/electric fan.png" },
    { tabID: "546", cardName: 'electric guitar', cardLoc: "./1000categories/electric guitar.png" },
    { tabID: "547", cardName: 'electric locomotive', cardLoc: "./1000categories/electric locomotive.png" },
    { tabID: "548", cardName: 'entertainment center', cardLoc: "./1000categories/entertainment center.png" },
    { tabID: "549", cardName: 'envelope', cardLoc: "./1000categories/envelope.png" },
    { tabID: "550", cardName: 'espresso maker', cardLoc: "./1000categories/espresso maker.png" },
    { tabID: "551", cardName: 'face powder', cardLoc: "./1000categories/face powder.png" },
    { tabID: "552", cardName: 'feather boa, boa', cardLoc: "./1000categories/feather boa.png" },
    { tabID: "553", cardName: 'file, file cabinet, filing cabinet', cardLoc: "./1000categories/file, file cabinet.png" },
    { tabID: "554", cardName: 'fireboat', cardLoc: "./1000categories/fireboat.png" },
    { tabID: "555", cardName: 'fire engine, fire truck', cardLoc: "./1000categories/fire engine.png" },
    { tabID: "556", cardName: 'fire screen, fireguard', cardLoc: "./1000categories/fire screen.png" },
    { tabID: "557", cardName: 'flagpole, flagstaff', cardLoc: "./1000categories/flagpole.png" },
    { tabID: "558", cardName: 'flute, transverse flute', cardLoc: "./1000categories/flute.png" },
    { tabID: "559", cardName: 'folding chair', cardLoc: "./1000categories/folding chair.png" },
    { tabID: "560", cardName: 'football helmet', cardLoc: "./1000categories/football helmet.png" },
    { tabID: "561", cardName: 'forklift', cardLoc: "./1000categories/forklift.png" },
    { tabID: "562", cardName: 'fountain', cardLoc: "./1000categories/fountain.png" },
    { tabID: "563", cardName: 'fountain pen', cardLoc: "./1000categories/fountain pen.png" },
    { tabID: "564", cardName: 'four-poster', cardLoc: "./1000categories/four-poster.png" },
    { tabID: "565", cardName: 'freight car', cardLoc: "./1000categories/freight car.png" },
    { tabID: "566", cardName: 'French horn, horn', cardLoc: "./1000categories/French horn.png" },
    { tabID: "567", cardName: 'frying pan, frypan, skillet', cardLoc: "./1000categories/frying pan.png" },
    { tabID: "568", cardName: 'fur coat', cardLoc: "./1000categories/fur coat.png" },
    { tabID: "569", cardName: 'garbage truck, dustcart', cardLoc: "./1000categories/garbage truck.png" },
    { tabID: "570", cardName: 'gasmask, respirator, gas helmet', cardLoc: "./1000categories/gasmask.png" },
    { tabID: "571", cardName: 'gas pump, gasoline pump, petrol pump, island dispenser', cardLoc: "./1000categories/gas pump.png" },
    { tabID: "572", cardName: 'goblet', cardLoc: "./1000categories/goblet.png" },
    { tabID: "573", cardName: 'go-kart', cardLoc: "./1000categories/go-kart.png" },
    { tabID: "574", cardName: 'golf ball', cardLoc: "./1000categories/golf ball.png" },
    { tabID: "575", cardName: 'golfcart, golf cart', cardLoc: "./1000categories/golfcart.png" },
    { tabID: "576", cardName: 'gondola', cardLoc: "./1000categories/gondola.png" },
    { tabID: "577", cardName: 'gong, tam-tam', cardLoc: "./1000categories/gong.png" },
    { tabID: "578", cardName: 'gown', cardLoc: "./1000categories/gown.png" },
    { tabID: "579", cardName: 'grand piano, grand', cardLoc: "./1000categories/grand piano.png" },
    { tabID: "580", cardName: 'greenhouse, nursery, glasshouse', cardLoc: "./1000categories/greenhouse.png" },
    { tabID: "581", cardName: 'grille, radiator grille', cardLoc: "./1000categories/grille.png" },
    { tabID: "582", cardName: 'grocery store, grocery, food market, market', cardLoc: "./1000categories/grocery store.png" },
    { tabID: "583", cardName: 'guillotine', cardLoc: "./1000categories/guillotine.png" },
    { tabID: "584", cardName: 'hair slide', cardLoc: "./1000categories/hair slide.png" },
    { tabID: "585", cardName: 'hair spray', cardLoc: "./1000categories/hair spray.png" },
    { tabID: "586", cardName: 'half track', cardLoc: "./1000categories/half track.png" },
    { tabID: "587", cardName: 'hammer', cardLoc: "./1000categories/hammer.png" },
    { tabID: "588", cardName: 'hamper', cardLoc: "./1000categories/hamper.png" },
    { tabID: "589", cardName: 'hand blower, blow dryer, blow drier, hair dryer, hair drier', cardLoc: "./1000categories/hand blower.png" },
    { tabID: "590", cardName: 'hand-held computer, hand-held microcomputer', cardLoc: "./1000categories/hand-held computer.png" },
    { tabID: "591", cardName: 'handkerchief, hankie, hanky, hankey', cardLoc: "./1000categories/handkerchief.png" },
    { tabID: "592", cardName: 'hard disc, hard disk, fixed disk', cardLoc: "./1000categories/hard disc.png" },
    { tabID: "593", cardName: 'harmonica, mouth organ, harp, mouth harp', cardLoc: "./1000categories/harmonica.png" },
    { tabID: "594", cardName: 'harp', cardLoc: "./1000categories/harp.png" },
    { tabID: "595", cardName: 'harvester, reaper', cardLoc: "./1000categories/harvester.png" },
    { tabID: "596", cardName: 'hatchet', cardLoc: "./1000categories/hatchet.png" },
    { tabID: "597", cardName: 'holster', cardLoc: "./1000categories/holster.png" },
    { tabID: "598", cardName: 'home theater, home theatre', cardLoc: "./1000categories/home theater.png" },
    { tabID: "599", cardName: 'honeycomb', cardLoc: "./1000categories/honeycomb.png" },
    { tabID: "600", cardName: 'hook, claw', cardLoc: "./1000categories/hook.png" },
    { tabID: "601", cardName: 'hoopskirt, crinoline', cardLoc: "./1000categories/hoopskirt.png" },
    { tabID: "602", cardName: 'horizontal bar, high bar', cardLoc: "./1000categories/horizontal bar.png" },
    { tabID: "603", cardName: 'horse cart, horse-cart', cardLoc: "./1000categories/horse cart.png" },
    { tabID: "604", cardName: 'hourglass', cardLoc: "./1000categories/hourglass.png" },
    { tabID: "605", cardName: 'iPod', cardLoc: "./1000categories/iPod.png" },
    { tabID: "606", cardName: 'iron, smoothing iron', cardLoc: "./1000categories/iron.png" },
    { tabID: "607", cardName: "jack-o'-lantern", cardLoc: "./1000categories/jack-o'-lantern.png" },
    { tabID: "608", cardName: 'jean, blue jean, denim', cardLoc: "./1000categories/jean.png" },
    { tabID: "609", cardName: 'jeep, landrover', cardLoc: "./1000categories/jeep.png" },
    { tabID: "610", cardName: 'jersey, T-shirt, tee shirt', cardLoc: "./1000categories/jersey, T-shirt.png" },
    { tabID: "611", cardName: 'jigsaw puzzle', cardLoc: "./1000categories/jigsaw puzzle.png" },
    { tabID: "612", cardName: 'jinrikisha, ricksha, rickshaw', cardLoc: "./1000categories/jinrikisha.png" },
    { tabID: "613", cardName: 'joystick', cardLoc: "./1000categories/joystick.png" },
    { tabID: "614", cardName: 'kimono', cardLoc: "./1000categories/kimono.png" },
    { tabID: "615", cardName: 'knee pad', cardLoc: "./1000categories/knee pad.png" },
    { tabID: "616", cardName: 'knot', cardLoc: "./1000categories/knot.png" },
    { tabID: "617", cardName: 'lab coat, laboratory coat', cardLoc: "./1000categories/lab coat.png" },
    { tabID: "618", cardName: 'ladle', cardLoc: "./1000categories/ladle.png" },
    { tabID: "619", cardName: 'lampshade, lamp shade', cardLoc: "./1000categories/lampshade.png" },
    { tabID: "620", cardName: 'laptop, laptop computer', cardLoc: "./1000categories/laptop.png" },
    { tabID: "621", cardName: 'lawn mower, mower', cardLoc: "./1000categories/lawn mower.png" },
    { tabID: "622", cardName: 'lens cap, lens cover', cardLoc: "./1000categories/lens cap.png" },
    { tabID: "623", cardName: 'letter opener, paper knife, paperknife', cardLoc: "./1000categories/letter opener.png" },
    { tabID: "624", cardName: 'library', cardLoc: "./1000categories/library.png" },
    { tabID: "625", cardName: 'lifeboat', cardLoc: "./1000categories/lifeboat.png" },
    { tabID: "626", cardName: 'lighter, light, igniter, ignitor', cardLoc: "./1000categories/lighter.png" },
    { tabID: "627", cardName: 'limousine, limo', cardLoc: "./1000categories/limousine.png" },
    { tabID: "628", cardName: 'liner, ocean liner', cardLoc: "./1000categories/liner.png" },
    { tabID: "629", cardName: 'lipstick, lip rouge', cardLoc: "./1000categories/lipstick.png" },
    { tabID: "630", cardName: 'Loafer', cardLoc: "./1000categories/Loafer.png" },
    { tabID: "631", cardName: 'lotion', cardLoc: "./1000categories/lotion.png" },
    { tabID: "632", cardName: 'loudspeaker, speaker, speaker unit, loudspeaker system, speaker system', cardLoc: "./1000categories/loudspeaker, speaker.png" },
    { tabID: "633", cardName: "loupe, jeweler's loupe", cardLoc: "./1000categories/loupe.png" },
    { tabID: "634", cardName: 'lumbermill, sawmill', cardLoc: "./1000categories/lumbermill.png" },
    { tabID: "635", cardName: 'magnetic compass', cardLoc: "./1000categories/magnetic compass.png" },
    { tabID: "636", cardName: 'mailbag, postbag', cardLoc: "./1000categories/mailbag.png" },
    { tabID: "637", cardName: 'mailbox, letter box', cardLoc: "./1000categories/mailbox.png" },
    { tabID: "638", cardName: 'maillot', cardLoc: "./1000categories/maillot.png" },
    { tabID: "639", cardName: 'maillot, tank suit', cardLoc: "./1000categories/maillot, tank suit.png" },
    { tabID: "640", cardName: 'manhole cover', cardLoc: "./1000categories/manhole cover.png" },
    { tabID: "641", cardName: 'maraca', cardLoc: "./1000categories/maraca.png" },
    { tabID: "642", cardName: 'marimba, xylophone', cardLoc: "./1000categories/marimba.png" },
    { tabID: "643", cardName: 'mask', cardLoc: "./1000categories/mask.png" },
    { tabID: "644", cardName: 'matchstick', cardLoc: "./1000categories/matchstick.png" },
    { tabID: "645", cardName: 'maypole', cardLoc: "./1000categories/maypole.png" },
    { tabID: "646", cardName: 'maze, labyrinth', cardLoc: "./1000categories/maze, labyrinth.png" },
    { tabID: "647", cardName: 'measuring cup', cardLoc: "./1000categories/measuring cup.png" },
    { tabID: "648", cardName: 'medicine chest, medicine cabinet', cardLoc: "./1000categories/medicine chest.png" },
    { tabID: "649", cardName: 'megalith, megalithic structure', cardLoc: "./1000categories/megalith.png" },
    { tabID: "650", cardName: 'microphone, mike', cardLoc: "./1000categories/microphone.png" },
    { tabID: "651", cardName: 'microwave, microwave oven', cardLoc: "./1000categories/microwave.png" },
    { tabID: "652", cardName: 'military uniform', cardLoc: "./1000categories/military uniform.png" },
    { tabID: "653", cardName: 'milk can', cardLoc: "./1000categories/milk can.png" },
    { tabID: "654", cardName: 'minibus', cardLoc: "./1000categories/minibus.png" },
    { tabID: "655", cardName: 'miniskirt, mini', cardLoc: "./1000categories/miniskirt.png" },
    { tabID: "656", cardName: 'minivan', cardLoc: "./1000categories/minivan.png" },
    { tabID: "657", cardName: 'missile', cardLoc: "./1000categories/missile.png" },
    { tabID: "658", cardName: 'mitten', cardLoc: "./1000categories/mitten.png" },
    { tabID: "659", cardName: 'mixing bowl', cardLoc: "./1000categories/mixing bowl.png" },
    { tabID: "660", cardName: 'mobile home, manufactured home', cardLoc: "./1000categories/mobile home.png" },
    { tabID: "661", cardName: 'Model T', cardLoc: "./1000categories/Model T.png" },
    { tabID: "662", cardName: 'modem', cardLoc: "./1000categories/modem.png" },
    { tabID: "663", cardName: 'monastery', cardLoc: "./1000categories/monastery.png" },
    { tabID: "664", cardName: 'monitor', cardLoc: "./1000categories/monitor.png" },
    { tabID: "665", cardName: 'moped', cardLoc: "./1000categories/moped.png" },
    { tabID: "666", cardName: 'mortar', cardLoc: "./1000categories/mortar.png" },
    { tabID: "667", cardName: 'mortarboard', cardLoc: "./1000categories/mortarboard.png" },
    { tabID: "668", cardName: 'mosque', cardLoc: "./1000categories/mosque.png" },
    { tabID: "669", cardName: 'mosquito net', cardLoc: "./1000categories/mosquito net.png" },
    { tabID: "670", cardName: 'motor scooter, scooter', cardLoc: "./1000categories/motor scooter.png" },
    { tabID: "671", cardName: 'mountain bike, all-terrain bike, off-roader', cardLoc: "./1000categories/mountain bike.png" },
    { tabID: "672", cardName: 'mountain tent', cardLoc: "./1000categories/mountain tent.png" },
    { tabID: "673", cardName: 'mouse, computer mouse', cardLoc: "./1000categories/mouse, computer mouse.png" },
    { tabID: "674", cardName: 'mousetrap', cardLoc: "./1000categories/mousetrap.png" },
    { tabID: "675", cardName: 'moving van', cardLoc: "./1000categories/moving van.png" },
    { tabID: "676", cardName: 'muzzle', cardLoc: "./1000categories/muzzle.png" },
    { tabID: "677", cardName: 'nail', cardLoc: "./1000categories/nail.png" },
    { tabID: "678", cardName: 'neck brace', cardLoc: "./1000categories/neck brace.png" },
    { tabID: "679", cardName: 'necklace', cardLoc: "./1000categories/necklace.png" },
    { tabID: "680", cardName: 'nipple', cardLoc: "./1000categories/nipple.png" },
    { tabID: "681", cardName: 'notebook, notebook computer', cardLoc: "./1000categories/notebook.png" },
    { tabID: "682", cardName: 'obelisk', cardLoc: "./1000categories/obelisk.png" },
    { tabID: "683", cardName: 'oboe, hautboy, hautbois', cardLoc: "./1000categories/oboe.png" },
    { tabID: "684", cardName: 'ocarina, sweet potato', cardLoc: "./1000categories/ocarina.png" },
    { tabID: "685", cardName: 'odometer, hodometer, mileometer, milometer', cardLoc: "./1000categories/odometer.png" },
    { tabID: "686", cardName: 'oil filter', cardLoc: "./1000categories/oil filter.png" },
    { tabID: "687", cardName: 'organ, pipe organ', cardLoc: "./1000categories/organ, pipe organ.png" },
    { tabID: "688", cardName: 'oscilloscope, scope, cathode-ray oscilloscope, CRO', cardLoc: "./1000categories/oscilloscope.png" },
    { tabID: "689", cardName: 'overskirt', cardLoc: "./1000categories/overskirt.png" },
    { tabID: "690", cardName: 'oxcart', cardLoc: "./1000categories/oxcart.png" },
    { tabID: "691", cardName: 'oxygen mask', cardLoc: "./1000categories/oxygen mask.png" },
    { tabID: "692", cardName: 'packet', cardLoc: "./1000categories/packet.png" },
    { tabID: "693", cardName: 'paddle, boat paddle', cardLoc: "./1000categories/paddle.png" },
    { tabID: "694", cardName: 'paddlewheel, paddle wheel', cardLoc: "./1000categories/paddlewheel.png" },
    { tabID: "695", cardName: 'padlock', cardLoc: "./1000categories/padlock.png" },
    { tabID: "696", cardName: 'paintbrush', cardLoc: "./1000categories/paintbrush.png" },
    { tabID: "697", cardName: "pajama, pyjama, pj's, jammies", cardLoc: "./1000categories/pajama.png" },
    { tabID: "698", cardName: 'palace', cardLoc: "./1000categories/palace.png" },
    { tabID: "699", cardName: 'panpipe, pandean pipe, syrinx', cardLoc: "./1000categories/panpipe.png" },
    { tabID: "700", cardName: 'paper towel', cardLoc: "./1000categories/paper towel.png" },
    { tabID: "701", cardName: 'parachute, chute', cardLoc: "./1000categories/parachute.png" },
    { tabID: "702", cardName: 'parallel bars, bars', cardLoc: "./1000categories/parallel bars.png" },
    { tabID: "703", cardName: 'park bench', cardLoc: "./1000categories/park bench.png" },
    { tabID: "704", cardName: 'parking meter', cardLoc: "./1000categories/parking meter.png" },
    { tabID: "705", cardName: 'passenger car, coach, carriage', cardLoc: "./1000categories/passenger car.png" },
    { tabID: "706", cardName: 'patio, terrace', cardLoc: "./1000categories/patio.png" },
    { tabID: "707", cardName: 'pay-phone, pay-station', cardLoc: "./1000categories/pay-phone.png" },
    { tabID: "708", cardName: 'pedestal, plinth, footstall', cardLoc: "./1000categories/pedestal.png" },
    { tabID: "709", cardName: 'pencil box, pencil case', cardLoc: "./1000categories/pencil box.png" },
    { tabID: "710", cardName: 'pencil sharpener', cardLoc: "./1000categories/pencil sharpener.png" },
    { tabID: "711", cardName: 'perfume, essence', cardLoc: "./1000categories/perfume.png" },
    { tabID: "712", cardName: 'Petri dish', cardLoc: "./1000categories/Petri dish.png" },
    { tabID: "713", cardName: 'photocopier', cardLoc: "./1000categories/photocopier.png" },
    { tabID: "714", cardName: 'pick, plectrum, plectron', cardLoc: "./1000categories/pick.png" },
    { tabID: "715", cardName: 'pickelhaube', cardLoc: "./1000categories/pickelhaube.png" },
    { tabID: "716", cardName: 'picket fence, paling', cardLoc: "./1000categories/picket fence.png" },
    { tabID: "717", cardName: 'pickup, pickup truck', cardLoc: "./1000categories/pickup.png" },
    { tabID: "718", cardName: 'pier', cardLoc: "./1000categories/pier.png" },
    { tabID: "719", cardName: 'piggy bank, penny bank', cardLoc: "./1000categories/piggy bank.png" },
    { tabID: "720", cardName: 'pill bottle', cardLoc: "./1000categories/pill bottle.png" },
    { tabID: "721", cardName: 'pillow', cardLoc: "./1000categories/pillow.png" },
    { tabID: "722", cardName: 'ping-pong ball', cardLoc: "./1000categories/ping-pong ball.png" },
    { tabID: "723", cardName: 'pinwheel', cardLoc: "./1000categories/pinwheel.png" },
    { tabID: "724", cardName: 'pirate, pirate ship', cardLoc: "./1000categories/pirate.png" },
    { tabID: "725", cardName: 'pitcher, ewer', cardLoc: "./1000categories/pitcher.png" },
    { tabID: "726", cardName: "plane, carpenter's plane, woodworking plane", cardLoc: "./1000categories/plane.png" },
    { tabID: "727", cardName: 'planetarium', cardLoc: "./1000categories/planetarium.png" },
    { tabID: "728", cardName: 'plastic bag', cardLoc: "./1000categories/plastic bag.png" },
    { tabID: "729", cardName: 'plate rack', cardLoc: "./1000categories/plate rack.png" },
    { tabID: "730", cardName: 'plow, plough', cardLoc: "./1000categories/plow.png" },
    { tabID: "731", cardName: "plunger, plumber's helper", cardLoc: "./1000categories/plunger.png" },
    { tabID: "732", cardName: 'Polaroid camera, Polaroid Land camera', cardLoc: "./1000categories/Polaroid camera.png" },
    { tabID: "733", cardName: 'pole', cardLoc: "./1000categories/pole.png" },
    { tabID: "734", cardName: 'police van, police wagon, paddy wagon, patrol wagon, wagon, black Maria', cardLoc: "./1000categories/police van.png" },
    { tabID: "735", cardName: 'poncho', cardLoc: "./1000categories/poncho.png" },
    { tabID: "736", cardName: 'pool table, billiard table, snooker table', cardLoc: "./1000categories/pool table.png" },
    { tabID: "737", cardName: 'pop bottle, soda bottle', cardLoc: "./1000categories/pop bottle.png" },
    { tabID: "738", cardName: 'pot, flowerpot', cardLoc: "./1000categories/pot, flowerpot.png" },
    { tabID: "739", cardName: "potter's wheel", cardLoc: "./1000categories/potter's wheel.png" },
    { tabID: "740", cardName: 'power drill', cardLoc: "./1000categories/power drill.png" },
    { tabID: "741", cardName: 'prayer rug, prayer mat', cardLoc: "./1000categories/prayer rug.png" },
    { tabID: "742", cardName: 'printer', cardLoc: "./1000categories/printer.png" },
    { tabID: "743", cardName: 'prison, prison house', cardLoc: "./1000categories/prison.png" },
    { tabID: "744", cardName: 'projectile, missile', cardLoc: "./1000categories/projectile.png" },
    { tabID: "745", cardName: 'projector', cardLoc: "./1000categories/projector.png" },
    { tabID: "746", cardName: 'puck, hockey puck', cardLoc: "./1000categories/puck.png" },
    { tabID: "747", cardName: 'punching bag, punch bag, punching ball, punchball', cardLoc: "./1000categories/punching bag.png" },
    { tabID: "748", cardName: 'purse', cardLoc: "./1000categories/purse.png" },
    { tabID: "749", cardName: 'quill, quill pen', cardLoc: "./1000categories/quill.png" },
    { tabID: "750", cardName: 'quilt, comforter, comfort, puff', cardLoc: "./1000categories/quilt.png" },
    { tabID: "751", cardName: 'racer, race car, racing car', cardLoc: "./1000categories/racer, race car.png" },
    { tabID: "752", cardName: 'racket, racquet', cardLoc: "./1000categories/racket.png" },
    { tabID: "753", cardName: 'radiator', cardLoc: "./1000categories/radiator.png" },
    { tabID: "754", cardName: 'radio, wireless', cardLoc: "./1000categories/radio.png" },
    { tabID: "755", cardName: 'radio telescope, radio reflector', cardLoc: "./1000categories/radio telescope.png" },
    { tabID: "756", cardName: 'rain barrel', cardLoc: "./1000categories/rain barrel.png" },
    { tabID: "757", cardName: 'recreational vehicle, RV, R.V.', cardLoc: "./1000categories/recreational vehicle.png" },
    { tabID: "758", cardName: 'reel', cardLoc: "./1000categories/reel.png" },
    { tabID: "759", cardName: 'reflex camera', cardLoc: "./1000categories/reflex camera.png" },
    { tabID: "760", cardName: 'refrigerator, icebox', cardLoc: "./1000categories/refrigerator.png" },
    { tabID: "761", cardName: 'remote control, remote', cardLoc: "./1000categories/remote control.png" },
    { tabID: "762", cardName: 'restaurant, eating house, eating place, eatery', cardLoc: "./1000categories/restaurant.png" },
    { tabID: "763", cardName: 'revolver, six-gun, six-shooter', cardLoc: "./1000categories/revolver.png" },
    { tabID: "764", cardName: 'rifle', cardLoc: "./1000categories/rifle.png" },
    { tabID: "765", cardName: 'rocking chair, rocker', cardLoc: "./1000categories/rocking chair.png" },
    { tabID: "766", cardName: 'rotisserie', cardLoc: "./1000categories/rotisserie.png" },
    { tabID: "767", cardName: 'rubber eraser, rubber, pencil eraser', cardLoc: "./1000categories/rubber eraser.png" },
    { tabID: "768", cardName: 'rugby ball', cardLoc: "./1000categories/rugby ball.png" },
    { tabID: "769", cardName: 'rule, ruler', cardLoc: "./1000categories/rule, ruler.png" },
    { tabID: "770", cardName: 'running shoe', cardLoc: "./1000categories/running shoe$.png" },
    { tabID: "771", cardName: 'safe', cardLoc: "./1000categories/safe.png" },
    { tabID: "772", cardName: 'safety pin', cardLoc: "./1000categories/safety pin.png" },
    { tabID: "773", cardName: 'saltshaker, salt shaker', cardLoc: "./1000categories/saltshaker.png" },
    { tabID: "774", cardName: 'sandal', cardLoc: "./1000categories/sandal.png" },
    { tabID: "775", cardName: 'sarong', cardLoc: "./1000categories/sarong.png" },
    { tabID: "776", cardName: 'sax, saxophone', cardLoc: "./1000categories/sax, saxophone.png" },
    { tabID: "777", cardName: 'scabbard', cardLoc: "./1000categories/scabbard.png" },
    { tabID: "778", cardName: 'scale, weighing machine', cardLoc: "./1000categories/scale.png" },
    { tabID: "779", cardName: 'school bus', cardLoc: "./1000categories/school bus.png" },
    { tabID: "780", cardName: 'schooner', cardLoc: "./1000categories/schooner.png" },
    { tabID: "781", cardName: 'scoreboard', cardLoc: "./1000categories/scoreboard.png" },
    { tabID: "782", cardName: 'screen, CRT screen', cardLoc: "./1000categories/screen, CRT screen.png" },
    { tabID: "783", cardName: 'screw', cardLoc: "./1000categories/screw.png" },
    { tabID: "784", cardName: 'screwdriver', cardLoc: "./1000categories/screwdriver.png" },
    { tabID: "785", cardName: 'seat belt, seatbelt', cardLoc: "./1000categories/seat belt.png" },
    { tabID: "786", cardName: 'sewing machine', cardLoc: "./1000categories/sewing machine.png" },
    { tabID: "787", cardName: 'shield, buckler', cardLoc: "./1000categories/shield.png" },
    { tabID: "788", cardName: 'shoe shop, shoe-shop, shoe store', cardLoc: "./1000categories/shoe shop.png" },
    { tabID: "789", cardName: 'shoji', cardLoc: "./1000categories/shoji.png" },
    { tabID: "790", cardName: 'shopping basket', cardLoc: "./1000categories/shopping basket.png" },
    { tabID: "791", cardName: 'shopping cart', cardLoc: "./1000categories/shopping cart.png" },
    { tabID: "792", cardName: 'shovel', cardLoc: "./1000categories/shovel.png" },
    { tabID: "793", cardName: 'shower cap', cardLoc: "./1000categories/shower cap.png" },
    { tabID: "794", cardName: 'shower curtain', cardLoc: "./1000categories/shower curtain.png" },
    { tabID: "795", cardName: 'ski', cardLoc: "./1000categories/ski.png" },
    { tabID: "796", cardName: 'ski mask', cardLoc: "./1000categories/ski mask.png" },
    { tabID: "797", cardName: 'sleeping bag', cardLoc: "./1000categories/sleeping bag.png" },
    { tabID: "798", cardName: 'slide rule, slipstick', cardLoc: "./1000categories/slide rule.png" },
    { tabID: "799", cardName: 'sliding door', cardLoc: "./1000categories/sliding door.png" },
    { tabID: "800", cardName: 'slot, one-armed bandit', cardLoc: "./1000categories/slot.png" },
    { tabID: "801", cardName: 'snorkel', cardLoc: "./1000categories/snorkel.png" },
    { tabID: "802", cardName: 'snowmobile', cardLoc: "./1000categories/snowmobile.png" },
    { tabID: "803", cardName: 'snowplow, snowplough', cardLoc: "./1000categories/snowplow.png" },
    { tabID: "804", cardName: 'soap dispenser', cardLoc: "./1000categories/soap dispenser.png" },
    { tabID: "805", cardName: 'soccer ball', cardLoc: "./1000categories/soccer ball.png" },
    { tabID: "806", cardName: 'sock', cardLoc: "./1000categories/sock.png" },
    { tabID: "807", cardName: 'solar dish, solar collector, solar furnace', cardLoc: "./1000categories/solar dish.png" },
    { tabID: "808", cardName: 'sombrero', cardLoc: "./1000categories/sombrero.png" },
    { tabID: "809", cardName: 'soup bowl', cardLoc: "./1000categories/soup bowl.png" },
    { tabID: "810", cardName: 'space bar', cardLoc: "./1000categories/space bar.png" },
    { tabID: "811", cardName: 'space heater', cardLoc: "./1000categories/space heater.png" },
    { tabID: "812", cardName: 'space shuttle', cardLoc: "./1000categories/space shuttle.png" },
    { tabID: "813", cardName: 'spatula', cardLoc: "./1000categories/spatula.png" },
    { tabID: "814", cardName: 'speedboat', cardLoc: "./1000categories/speedboat.png" },
    { tabID: "815", cardName: "spider web, spider's web", cardLoc: "./1000categories/spider web.png" },
    { tabID: "816", cardName: 'spindle', cardLoc: "./1000categories/spindle.png" },
    { tabID: "817", cardName: 'sports car, sport car', cardLoc: "./1000categories/sports car.png" },
    { tabID: "818", cardName: 'spotlight, spot', cardLoc: "./1000categories/spotlight.png" },
    { tabID: "819", cardName: 'stage', cardLoc: "./1000categories/stage.png" },
    { tabID: "820", cardName: 'steam locomotive', cardLoc: "./1000categories/steam locomotive.png" },
    { tabID: "821", cardName: 'steel arch bridge', cardLoc: "./1000categories/steel arch bridge.png" },
    { tabID: "822", cardName: 'steel drum', cardLoc: "./1000categories/steel drum.png" },
    { tabID: "823", cardName: 'stethoscope', cardLoc: "./1000categories/stethoscope.png" },
    { tabID: "824", cardName: 'stole', cardLoc: "./1000categories/stole.png" },
    { tabID: "825", cardName: 'stone wall', cardLoc: "./1000categories/stone wall.png" },
    { tabID: "826", cardName: 'stopwatch, stop watch', cardLoc: "./1000categories/stopwatch.png" },
    { tabID: "827", cardName: 'stove', cardLoc: "./1000categories/stove.png" },
    { tabID: "828", cardName: 'strainer', cardLoc: "./1000categories/strainer.png" },
    { tabID: "829", cardName: 'streetcar, tram, tramcar, trolley, trolley car', cardLoc: "./1000categories/streetcar.png" },
    { tabID: "830", cardName: 'stretcher', cardLoc: "./1000categories/stretcher.png" },
    { tabID: "831", cardName: 'studio couch, day bed', cardLoc: "./1000categories/studio couch.png" },
    { tabID: "832", cardName: 'stupa, tope', cardLoc: "./1000categories/stupa, tope.png" },
    { tabID: "833", cardName: 'submarine, pigboat, sub, U-boat', cardLoc: "./1000categories/submarine.png" },
    { tabID: "834", cardName: 'suit, suit of clothes', cardLoc: "./1000categories/suit.png" },
    { tabID: "835", cardName: 'sundial', cardLoc: "./1000categories/sundial.png" },
    { tabID: "836", cardName: 'sunglass', cardLoc: "./1000categories/sunglass.png" },
    { tabID: "837", cardName: 'sunglasses, dark glasses, shades', cardLoc: "./1000categories/sunglasses.png" },
    { tabID: "838", cardName: 'sunscreen, sunblock, sun blocker', cardLoc: "./1000categories/sunscreen.png" },
    { tabID: "839", cardName: 'suspension bridge', cardLoc: "./1000categories/suspension bridge.png" },
    { tabID: "840", cardName: 'swab, swob, mop', cardLoc: "./1000categories/swab.png" },
    { tabID: "841", cardName: 'sweatshirt', cardLoc: "./1000categories/sweatshirt.png" },
    { tabID: "842", cardName: 'swimming trunks, bathing trunks', cardLoc: "./1000categories/swimming trunks.png" },
    { tabID: "843", cardName: 'swing', cardLoc: "./1000categories/swing.png" },
    { tabID: "844", cardName: 'switch, electric switch, electrical switch', cardLoc: "./1000categories/switch.png" },
    { tabID: "845", cardName: 'syringe', cardLoc: "./1000categories/syringe.png" },
    { tabID: "846", cardName: 'table lamp', cardLoc: "./1000categories/table lamp.png" },
    { tabID: "847", cardName: 'tank, army tank, armored combat vehicle, armoured combat vehicle', cardLoc: "./1000categories/tank.png" },
    { tabID: "848", cardName: 'tape player', cardLoc: "./1000categories/tape player.png" },
    { tabID: "849", cardName: 'teapot', cardLoc: "./1000categories/teapot.png" },
    { tabID: "850", cardName: 'teddy, teddy bear', cardLoc: "./1000categories/teddy.png" },
    { tabID: "851", cardName: 'television, television system', cardLoc: "./1000categories/television.png" },
    { tabID: "852", cardName: 'tennis ball', cardLoc: "./1000categories/tennis ball.png" },
    { tabID: "853", cardName: 'thatch, thatched roof', cardLoc: "./1000categories/thatch.png" },
    { tabID: "854", cardName: 'theater curtain, theatre curtain', cardLoc: "./1000categories/theater curtain.png" },
    { tabID: "855", cardName: 'thimble', cardLoc: "./1000categories/thimble.png" },
    { tabID: "856", cardName: 'thresher, thrasher, threshing machine', cardLoc: "./1000categories/thresher.png" },
    { tabID: "857", cardName: 'throne', cardLoc: "./1000categories/throne.png" },
    { tabID: "858", cardName: 'tile roof', cardLoc: "./1000categories/tile roof.png" },
    { tabID: "859", cardName: 'toaster', cardLoc: "./1000categories/toaster.png" },
    { tabID: "860", cardName: 'tobacco shop, tobacconist shop, tobacconist', cardLoc: "./1000categories/tobacco shop.png" },
    { tabID: "861", cardName: 'toilet seat', cardLoc: "./1000categories/toilet seat.png" },
    { tabID: "862", cardName: 'torch', cardLoc: "./1000categories/torch.png" },
    { tabID: "863", cardName: 'totem pole', cardLoc: "./1000categories/totem pole.png" },
    { tabID: "864", cardName: 'tow truck, tow car, wrecker', cardLoc: "./1000categories/tow truck.png" },
    { tabID: "865", cardName: 'toyshop', cardLoc: "./1000categories/toyshop.png" },
    { tabID: "866", cardName: 'tractor', cardLoc: "./1000categories/tractor.png" },
    { tabID: "867", cardName: 'trailer truck, tractor trailer, trucking rig, rig, articulated lorry, semi', cardLoc: "./1000categories/trailer truck.png" },
    { tabID: "868", cardName: 'tray', cardLoc: "./1000categories/tray.png" },
    { tabID: "869", cardName: 'trench coat', cardLoc: "./1000categories/trench coat.png" },
    { tabID: "870", cardName: 'tricycle, trike, velocipede', cardLoc: "./1000categories/tricycle.png" },
    { tabID: "871", cardName: 'trimaran', cardLoc: "./1000categories/trimaran.png" },
    { tabID: "872", cardName: 'tripod', cardLoc: "./1000categories/tripod.png" },
    { tabID: "873", cardName: 'triumphal arch', cardLoc: "./1000categories/triumphal arch.png" },
    { tabID: "874", cardName: 'trolleybus, trolley coach, trackless trolley', cardLoc: "./1000categories/trolleybus.png" },
    { tabID: "875", cardName: 'trombone', cardLoc: "./1000categories/trombone.png" },
    { tabID: "876", cardName: 'tub, vat', cardLoc: "./1000categories/tub.png" },
    { tabID: "877", cardName: 'turnstile', cardLoc: "./1000categories/turnstile.png" },
    { tabID: "878", cardName: 'typewriter keyboard', cardLoc: "./1000categories/typewriter keyboard.png" },
    { tabID: "879", cardName: 'umbrella', cardLoc: "./1000categories/umbrella.png" },
    { tabID: "880", cardName: 'unicycle, monocycle', cardLoc: "./1000categories/unicycle.png" },
    { tabID: "881", cardName: 'upright, upright piano', cardLoc: "./1000categories/upright, upright piano.png" },
    { tabID: "882", cardName: 'vacuum, vacuum cleaner', cardLoc: "./1000categories/vacuum.png" },
    { tabID: "883", cardName: 'vase', cardLoc: "./1000categories/vase.png" },
    { tabID: "884", cardName: 'vault', cardLoc: "./1000categories/vault.png" },
    { tabID: "885", cardName: 'velvet', cardLoc: "./1000categories/velvet.png" },
    { tabID: "886", cardName: 'vending machine', cardLoc: "./1000categories/vending machine.png" },
    { tabID: "887", cardName: 'vestment', cardLoc: "./1000categories/vestment.png" },
    { tabID: "888", cardName: 'viaduct', cardLoc: "./1000categories/viaduct.png" },
    { tabID: "889", cardName: 'violin, fiddle', cardLoc: "./1000categories/violin.png" },
    { tabID: "890", cardName: 'volleyball', cardLoc: "./1000categories/volleyball.png" },
    { tabID: "891", cardName: 'waffle iron', cardLoc: "./1000categories/waffle iron.png" },
    { tabID: "892", cardName: 'wall clock', cardLoc: "./1000categories/wall clock.png" },
    { tabID: "893", cardName: 'wallet, billfold, notecase, pocketbook', cardLoc: "./1000categories/wallet.png" },
    { tabID: "894", cardName: 'wardrobe, closet, press', cardLoc: "./1000categories/wardrobe.png" },
    { tabID: "895", cardName: 'warplane, military plane', cardLoc: "./1000categories/warplane.png" },
    { tabID: "896", cardName: 'washbasin, handbasin, washbowl, lavabo, wash-hand basin', cardLoc: "./1000categories/washbasin.png" },
    { tabID: "897", cardName: 'washer, automatic washer, washing machine', cardLoc: "./1000categories/washer.png" },
    { tabID: "898", cardName: 'water bottle', cardLoc: "./1000categories/water bottle.png" },
    { tabID: "899", cardName: 'water jug', cardLoc: "./1000categories/water jug.png" },
    { tabID: "900", cardName: 'water tower', cardLoc: "./1000categories/water tower.png" },
    { tabID: "901", cardName: 'whiskey jug', cardLoc: "./1000categories/whiskey jug.png" },
    { tabID: "902", cardName: 'whistle', cardLoc: "./1000categories/whistle.png" },
    { tabID: "903", cardName: 'wig', cardLoc: "./1000categories/wig.png" },
    { tabID: "904", cardName: 'window screen', cardLoc: "./1000categories/window screen.png" },
    { tabID: "905", cardName: 'window shade', cardLoc: "./1000categories/window shade.png" },
    { tabID: "906", cardName: 'Windsor tie', cardLoc: "./1000categories/Windsor tie.png" },
    { tabID: "907", cardName: 'wine bottle', cardLoc: "./1000categories/wine bottle.png" },
    { tabID: "908", cardName: 'wing', cardLoc: "./1000categories/wing.png" },
    { tabID: "909", cardName: 'wok', cardLoc: "./1000categories/wok.png" },
    { tabID: "910", cardName: 'wooden spoon', cardLoc: "./1000categories/wooden spoon.png" },
    { tabID: "911", cardName: 'wool, woolen, woollen', cardLoc: "./1000categories/wool.png" },
    { tabID: "912", cardName: 'worm fence, snake fence, snake-rail fence, Virginia fence', cardLoc: "./1000categories/worm fence.png" },
    { tabID: "913", cardName: 'wreck', cardLoc: "./1000categories/wreck.png" },
    { tabID: "914", cardName: 'yawl', cardLoc: "./1000categories/yawl.png" },
    { tabID: "915", cardName: 'yurt', cardLoc: "./1000categories/yurt.png" },
    { tabID: "916", cardName: 'web site, website, internet site, site', cardLoc: "./1000categories/web site.png" },
    { tabID: "917", cardName: 'comic book', cardLoc: "./1000categories/comic book.png" },
    { tabID: "918", cardName: 'crossword puzzle, crossword', cardLoc: "./1000categories/crossword puzzle.png" },
    { tabID: "919", cardName: 'street sign', cardLoc: "./1000categories/street sign.png" },
    { tabID: "920", cardName: 'traffic light, traffic signal, stoplight', cardLoc: "./1000categories/traffic light.png" },
    { tabID: "921", cardName: 'book jacket, dust cover, dust jacket, dust wrapper', cardLoc: "./1000categories/book jacket, dust cover.png" },
    { tabID: "922", cardName: 'menu', cardLoc: "./1000categories/menu.png" },
    { tabID: "923", cardName: 'plate', cardLoc: "./1000categories/plate.png" },
    { tabID: "924", cardName: 'guacamole', cardLoc: "./1000categories/guacamole.png" },
    { tabID: "925", cardName: 'consomme', cardLoc: "./1000categories/consomme.png" },
    { tabID: "926", cardName: 'hot pot, hotpot', cardLoc: "./1000categories/hot pot.png" },
    { tabID: "927", cardName: 'trifle', cardLoc: "./1000categories/trifle.png" },
    { tabID: "928", cardName: 'ice cream, icecream', cardLoc: "./1000categories/ice cream.png" },
    { tabID: "929", cardName: 'ice lolly, lolly, lollipop, popsicle', cardLoc: "./1000categories/ice lolly.png" },
    { tabID: "930", cardName: 'French loaf', cardLoc: "./1000categories/French loaf.png" },
    { tabID: "931", cardName: 'bagel, beigel', cardLoc: "./1000categories/bagel.png" },
    { tabID: "932", cardName: 'pretzel', cardLoc: "./1000categories/pretzel.png" },
    { tabID: "933", cardName: 'cheeseburger', cardLoc: "./1000categories/cheeseburger.png" },
    { tabID: "934", cardName: 'hotdog, hot dog, red hot', cardLoc: "./1000categories/hotdog.png" },
    { tabID: "935", cardName: 'mashed potato', cardLoc: "./1000categories/mashed potato.png" },
    { tabID: "936", cardName: 'head cabbage', cardLoc: "./1000categories/head cabbage.png" },
    { tabID: "937", cardName: 'broccoli', cardLoc: "./1000categories/broccoli.png" },
    { tabID: "938", cardName: 'cauliflower', cardLoc: "./1000categories/cauliflower.png" },
    { tabID: "939", cardName: 'zucchini, courgette', cardLoc: "./1000categories/zucchini.png" },
    { tabID: "940", cardName: 'spaghetti squash', cardLoc: "./1000categories/spaghetti squash.png" },
    { tabID: "941", cardName: 'acorn squash', cardLoc: "./1000categories/acorn squash.png" },
    { tabID: "942", cardName: 'butternut squash', cardLoc: "./1000categories/butternut squash.png" },
    { tabID: "943", cardName: 'cucumber, cuke', cardLoc: "./1000categories/cucumber.png" },
    { tabID: "944", cardName: 'artichoke, globe artichoke', cardLoc: "./1000categories/artichoke.png" },
    { tabID: "945", cardName: 'bell pepper', cardLoc: "./1000categories/bell pepper.png" },
    { tabID: "946", cardName: 'cardoon', cardLoc: "./1000categories/cardoon.png" },
    { tabID: "947", cardName: 'mushroom', cardLoc: "./1000categories/mushroom.png" },
    { tabID: "948", cardName: 'Granny Smith', cardLoc: "./1000categories/Granny Smith.png" },
    { tabID: "949", cardName: 'strawberry', cardLoc: "./1000categories/strawberry.png" },
    { tabID: "950", cardName: 'orange', cardLoc: "./1000categories/orange.png" },
    { tabID: "951", cardName: 'lemon', cardLoc: "./1000categories/lemon.png" },
    { tabID: "952", cardName: 'fig', cardLoc: "./1000categories/fig.png" },
    { tabID: "953", cardName: 'pineapple, ananas', cardLoc: "./1000categories/pineapple.png" },
    { tabID: "954", cardName: 'banana', cardLoc: "./1000categories/banana.png" },
    { tabID: "955", cardName: 'jackfruit, jak, jack', cardLoc: "./1000categories/jackfruit.png" },
    { tabID: "956", cardName: 'custard apple', cardLoc: "./1000categories/custard apple.png" },
    { tabID: "957", cardName: 'pomegranate', cardLoc: "./1000categories/pomegranate.png" },
    { tabID: "958", cardName: 'hay', cardLoc: "./1000categories/hay.png" },
    { tabID: "959", cardName: 'carbonara', cardLoc: "./1000categories/carbonara.png" },
    { tabID: "960", cardName: 'chocolate sauce, chocolate syrup', cardLoc: "./1000categories/chocolate sauce.png" },
    { tabID: "961", cardName: 'dough', cardLoc: "./1000categories/dough.png" },
    { tabID: "962", cardName: 'meat loaf, meatloaf', cardLoc: "./1000categories/meat loaf.png" },
    { tabID: "963", cardName: 'pizza, pizza pie', cardLoc: "./1000categories/pizza.png" },
    { tabID: "964", cardName: 'potpie', cardLoc: "./1000categories/potpie.png" },
    { tabID: "965", cardName: 'burrito', cardLoc: "./1000categories/burrito.png" },
    { tabID: "966", cardName: 'red wine', cardLoc: "./1000categories/red wine.png" },
    { tabID: "967", cardName: 'espresso', cardLoc: "./1000categories/espresso.png" },
    { tabID: "968", cardName: 'cup', cardLoc: "./1000categories/cup.png" },
    { tabID: "969", cardName: 'eggnog', cardLoc: "./1000categories/eggnog.png" },
    { tabID: "970", cardName: 'alp', cardLoc: "./1000categories/alp.png" },
    { tabID: "971", cardName: 'bubble', cardLoc: "./1000categories/bubble.png" },
    { tabID: "972", cardName: 'cliff, drop, drop-off', cardLoc: "./1000categories/cliff.png" },
    { tabID: "973", cardName: 'coral reef', cardLoc: "./1000categories/coral reef.png" },
    { tabID: "974", cardName: 'geyser', cardLoc: "./1000categories/geyser.png" },
    { tabID: "975", cardName: 'lakeside, lakeshore', cardLoc: "./1000categories/lakeside.png" },
    { tabID: "976", cardName: 'promontory, headland, head, foreland', cardLoc: "./1000categories/promontory.png" },
    { tabID: "977", cardName: 'sandbar, sand bar', cardLoc: "./1000categories/sandbar.png" },
    { tabID: "978", cardName: 'seashore, coast, seacoast, sea-coast', cardLoc: "./1000categories/seashore.png" },
    { tabID: "979", cardName: 'valley, vale', cardLoc: "./1000categories/valley.png" },
    { tabID: "980", cardName: 'volcano', cardLoc: "./1000categories/volcano.png" },
    { tabID: "981", cardName: 'ballplayer, baseball player', cardLoc: "./1000categories/ballplayer.png" },
    { tabID: "982", cardName: 'groom, bridegroom', cardLoc: "./1000categories/groom.png" },
    { tabID: "983", cardName: 'scuba diver', cardLoc: "./1000categories/scuba diver.png" },
    { tabID: "984", cardName: 'rapeseed', cardLoc: "./1000categories/rapeseed.png" },
    { tabID: "985", cardName: 'daisy', cardLoc: "./1000categories/daisy.png" },
    { tabID: "986", cardName: "yellow lady's slipper, yellow lady-slipper, Cypripedium calceolus, Cypripedium parviflorum", cardLoc: "./1000categories/yellow lady's slipper.png" },
    { tabID: "987", cardName: 'corn', cardLoc: "./1000categories/corn.png" },
    { tabID: "988", cardName: 'acorn', cardLoc: "./1000categories/acorn.png" },
    { tabID: "989", cardName: 'hip, rose hip, rosehip', cardLoc: "./1000categories/hip.png" },
    { tabID: "990", cardName: 'buckeye, horse chestnut, conker', cardLoc: "./1000categories/buckeye.png" },
    { tabID: "991", cardName: 'coral fungus', cardLoc: "./1000categories/coral fungus.png" },
    { tabID: "992", cardName: 'agaric', cardLoc: "./1000categories/agaric.png" },
    { tabID: "993", cardName: 'gyromitra', cardLoc: "./1000categories/gyromitra.png" },
    { tabID: "994", cardName: 'stinkhorn, carrion fungus', cardLoc: "./1000categories/stinkhorn.png" },
    { tabID: "995", cardName: 'earthstar', cardLoc: "./1000categories/earthstar.png" },
    { tabID: "996", cardName: 'hen-of-the-woods, hen of the woods, Polyporus frondosus, Grifola frondosa', cardLoc: "./1000categories/hen-of-the-woods.png" },
    { tabID: "997", cardName: 'bolete', cardLoc: "./1000categories/bolete.png" },
    { tabID: "998", cardName: 'ear, spike, capitulum', cardLoc: "./1000categories/ear.png" },
    { tabID: "999", cardName: 'toilet tissue, toilet paper, bathroom tissue', cardLoc: "./1000categories/toilet tissue.png" },
]
var jptext = [
    {
        "num": "n01440764",
        "en": "tench",
        "ja": "テンチ"
    },
    {
        "num": "n01443537",
        "en": "goldfish",
        "ja": "金魚"
    },
    {
        "num": "n01484850",
        "en": "great_white_shark",
        "ja": "ホホジロザメ"
    },
    {
        "num": "n01491361",
        "en": "tiger_shark",
        "ja": "イタチザメ"
    },
    {
        "num": "n01494475",
        "en": "hammerhead",
        "ja": "ハンマーヘッド"
    },
    {
        "num": "n01496331",
        "en": "electric_ray",
        "ja": "シビレエイ"
    },
    {
        "num": "n01498041",
        "en": "stingray",
        "ja": "アカエイ"
    },
    {
        "num": "n01514668",
        "en": "cock",
        "ja": "コック"
    },
    {
        "num": "n01514859",
        "en": "hen",
        "ja": "めんどり"
    },
    {
        "num": "n01518878",
        "en": "ostrich",
        "ja": "ダチョウ"
    },
    {
        "num": "n01530575",
        "en": "brambling",
        "ja": "アトリ"
    },
    {
        "num": "n01531178",
        "en": "goldfinch",
        "ja": "ゴシキヒワ"
    },
    {
        "num": "n01532829",
        "en": "house_finch",
        "ja": "ハウスフィンチ"
    },
    {
        "num": "n01534433",
        "en": "junco",
        "ja": "ユキヒメドリ"
    },
    {
        "num": "n01537544",
        "en": "indigo_bunting",
        "ja": "インディゴホオジロ"
    },
    {
        "num": "n01558993",
        "en": "robin",
        "ja": "ロビン"
    },
    {
        "num": "n01560419",
        "en": "bulbul",
        "ja": "ブルブル"
    },
    {
        "num": "n01580077",
        "en": "jay",
        "ja": "カケス"
    },
    {
        "num": "n01582220",
        "en": "magpie",
        "ja": "カササギ"
    },
    {
        "num": "n01592084",
        "en": "chickadee",
        "ja": "四十雀"
    },
    {
        "num": "n01601694",
        "en": "water_ouzel",
        "ja": "水クロウタドリ"
    },
    {
        "num": "n01608432",
        "en": "kite",
        "ja": "凧"
    },
    {
        "num": "n01614925",
        "en": "bald_eagle",
        "ja": "白頭ワシ"
    },
    {
        "num": "n01616318",
        "en": "vulture",
        "ja": "ハゲワシ"
    },
    {
        "num": "n01622779",
        "en": "great_grey_owl",
        "ja": "カラフトフクロウ"
    },
    {
        "num": "n01629819",
        "en": "European_fire_salamander",
        "ja": "欧州ファイアサラマンダー"
    },
    {
        "num": "n01630670",
        "en": "common_newt",
        "ja": "共通イモリ"
    },
    {
        "num": "n01631663",
        "en": "eft",
        "ja": "イモリ"
    },
    {
        "num": "n01632458",
        "en": "spotted_salamander",
        "ja": "サンショウウオを発見"
    },
    {
        "num": "n01632777",
        "en": "axolotl",
        "ja": "アホロートル"
    },
    {
        "num": "n01641577",
        "en": "bullfrog",
        "ja": "ウシガエル"
    },
    {
        "num": "n01644373",
        "en": "tree_frog",
        "ja": "アマガエル"
    },
    {
        "num": "n01644900",
        "en": "tailed_frog",
        "ja": "つかれたカエル"
    },
    {
        "num": "n01664065",
        "en": "loggerhead",
        "ja": "とんちき"
    },
    {
        "num": "n01665541",
        "en": "leatherback_turtle",
        "ja": "オサガメ"
    },
    {
        "num": "n01667114",
        "en": "mud_turtle",
        "ja": "鼈"
    },
    {
        "num": "n01667778",
        "en": "terrapin",
        "ja": "テラピン"
    },
    {
        "num": "n01669191",
        "en": "box_turtle",
        "ja": "ハコガメ"
    },
    {
        "num": "n01675722",
        "en": "banded_gecko",
        "ja": "縞模様のヤモリ"
    },
    {
        "num": "n01677366",
        "en": "common_iguana",
        "ja": "共通イグアナ"
    },
    {
        "num": "n01682714",
        "en": "American_chameleon",
        "ja": "アメリカンカメレオン"
    },
    {
        "num": "n01685808",
        "en": "whiptail",
        "ja": "ウィッペイル"
    },
    {
        "num": "n01687978",
        "en": "agama",
        "ja": "アガマトカゲ"
    },
    {
        "num": "n01688243",
        "en": "frilled_lizard",
        "ja": "フリルトカゲ"
    },
    {
        "num": "n01689811",
        "en": "alligator_lizard",
        "ja": "アリゲータートカゲ"
    },
    {
        "num": "n01692333",
        "en": "Gila_monster",
        "ja": "アメリカドクトカゲ"
    },
    {
        "num": "n01693334",
        "en": "green_lizard",
        "ja": "緑のトカゲ"
    },
    {
        "num": "n01694178",
        "en": "African_chameleon",
        "ja": "アフリカのカメレオン"
    },
    {
        "num": "n01695060",
        "en": "Komodo_dragon",
        "ja": "コモドドラゴン"
    },
    {
        "num": "n01697457",
        "en": "African_crocodile",
        "ja": "アフリカのワニ"
    },
    {
        "num": "n01698640",
        "en": "American_alligator",
        "ja": "アメリカワニ"
    },
    {
        "num": "n01704323",
        "en": "triceratops",
        "ja": "トリケラトプス"
    },
    {
        "num": "n01728572",
        "en": "thunder_snake",
        "ja": "雷のヘビ"
    },
    {
        "num": "n01728920",
        "en": "ringneck_snake",
        "ja": "リングネックスネーク"
    },
    {
        "num": "n01729322",
        "en": "hognose_snake",
        "ja": "ホーノースヘビ"
    },
    {
        "num": "n01729977",
        "en": "green_snake",
        "ja": "緑のヘビ"
    },
    {
        "num": "n01734418",
        "en": "king_snake",
        "ja": "キングスネーク"
    },
    {
        "num": "n01735189",
        "en": "garter_snake",
        "ja": "ガータースネーク"
    },
    {
        "num": "n01737021",
        "en": "water_snake",
        "ja": "水蛇"
    },
    {
        "num": "n01739381",
        "en": "vine_snake",
        "ja": "つるヘビ"
    },
    {
        "num": "n01740131",
        "en": "night_snake",
        "ja": "夜のヘビ"
    },
    {
        "num": "n01742172",
        "en": "boa_constrictor",
        "ja": "ボア・コンストリクター"
    },
    {
        "num": "n01744401",
        "en": "rock_python",
        "ja": "ロックパイソン"
    },
    {
        "num": "n01748264",
        "en": "Indian_cobra",
        "ja": "インドコブラ"
    },
    {
        "num": "n01749939",
        "en": "green_mamba",
        "ja": "グリーンマンバ"
    },
    {
        "num": "n01751748",
        "en": "sea_snake",
        "ja": "ウミヘビ"
    },
    {
        "num": "n01753488",
        "en": "horned_viper",
        "ja": "ツノクサリヘビ"
    },
    {
        "num": "n01755581",
        "en": "diamondback",
        "ja": "ダイヤ"
    },
    {
        "num": "n01756291",
        "en": "sidewinder",
        "ja": "サイドワインダー"
    },
    {
        "num": "n01768244",
        "en": "trilobite",
        "ja": "三葉虫"
    },
    {
        "num": "n01770081",
        "en": "harvestman",
        "ja": "刈り入れ作業者"
    },
    {
        "num": "n01770393",
        "en": "scorpion",
        "ja": "サソリ"
    },
    {
        "num": "n01773157",
        "en": "black_and_gold_garden_spider",
        "ja": "黒と金の庭クモ"
    },
    {
        "num": "n01773549",
        "en": "barn_spider",
        "ja": "納屋クモ"
    },
    {
        "num": "n01773797",
        "en": "garden_spider",
        "ja": "庭クモ"
    },
    {
        "num": "n01774384",
        "en": "black_widow",
        "ja": "クロゴケグモ"
    },
    {
        "num": "n01774750",
        "en": "tarantula",
        "ja": "タランチュラ"
    },
    {
        "num": "n01775062",
        "en": "wolf_spider",
        "ja": "オオカミのクモ"
    },
    {
        "num": "n01776313",
        "en": "tick",
        "ja": "ダニ"
    },
    {
        "num": "n01784675",
        "en": "centipede",
        "ja": "百足"
    },
    {
        "num": "n01795545",
        "en": "black_grouse",
        "ja": "クロライチョウ"
    },
    {
        "num": "n01796340",
        "en": "ptarmigan",
        "ja": "雷鳥"
    },
    {
        "num": "n01797886",
        "en": "ruffed_grouse",
        "ja": "ひだえりの付いたライチョウ"
    },
    {
        "num": "n01798484",
        "en": "prairie_chicken",
        "ja": "草原チキン"
    },
    {
        "num": "n01806143",
        "en": "peacock",
        "ja": "孔雀"
    },
    {
        "num": "n01806567",
        "en": "quail",
        "ja": "ウズラ"
    },
    {
        "num": "n01807496",
        "en": "partridge",
        "ja": "ヤマウズラ"
    },
    {
        "num": "n01817953",
        "en": "African_grey",
        "ja": "アフリカの灰色"
    },
    {
        "num": "n01818515",
        "en": "macaw",
        "ja": "コンゴウインコ"
    },
    {
        "num": "n01819313",
        "en": "sulphur-crested_cockatoo",
        "ja": "硫黄トキオウム"
    },
    {
        "num": "n01820546",
        "en": "lorikeet",
        "ja": "インコ"
    },
    {
        "num": "n01824575",
        "en": "coucal",
        "ja": "バンケン"
    },
    {
        "num": "n01828970",
        "en": "bee_eater",
        "ja": "蜂食べる人"
    },
    {
        "num": "n01829413",
        "en": "hornbill",
        "ja": "サイチョウ"
    },
    {
        "num": "n01833805",
        "en": "hummingbird",
        "ja": "ハチドリ"
    },
    {
        "num": "n01843065",
        "en": "jacamar",
        "ja": "錐嘴"
    },
    {
        "num": "n01843383",
        "en": "toucan",
        "ja": "オオハシ"
    },
    {
        "num": "n01847000",
        "en": "drake",
        "ja": "ドレイク"
    },
    {
        "num": "n01855032",
        "en": "red-breasted_merganser",
        "ja": "赤ブレストアイサ属のガモ"
    },
    {
        "num": "n01855672",
        "en": "goose",
        "ja": "ガチョウ"
    },
    {
        "num": "n01860187",
        "en": "black_swan",
        "ja": "黒い白鳥"
    },
    {
        "num": "n01871265",
        "en": "tusker",
        "ja": "タスカービール"
    },
    {
        "num": "n01872401",
        "en": "echidna",
        "ja": "ハリモグラ"
    },
    {
        "num": "n01873310",
        "en": "platypus",
        "ja": "カモノハシ"
    },
    {
        "num": "n01877812",
        "en": "wallaby",
        "ja": "ワラビー"
    },
    {
        "num": "n01882714",
        "en": "koala",
        "ja": "コアラ"
    },
    {
        "num": "n01883070",
        "en": "wombat",
        "ja": "ウォンバット"
    },
    {
        "num": "n01910747",
        "en": "jellyfish",
        "ja": "クラゲ"
    },
    {
        "num": "n01914609",
        "en": "sea_anemone",
        "ja": "イソギンチャク"
    },
    {
        "num": "n01917289",
        "en": "brain_coral",
        "ja": "脳サンゴ"
    },
    {
        "num": "n01924916",
        "en": "flatworm",
        "ja": "扁形動物"
    },
    {
        "num": "n01930112",
        "en": "nematode",
        "ja": "線虫"
    },
    {
        "num": "n01943899",
        "en": "conch",
        "ja": "巻き貝"
    },
    {
        "num": "n01944390",
        "en": "snail",
        "ja": "カタツムリ"
    },
    {
        "num": "n01945685",
        "en": "slug",
        "ja": "ナメクジ"
    },
    {
        "num": "n01950731",
        "en": "sea_slug",
        "ja": "ウミウシ"
    },
    {
        "num": "n01955084",
        "en": "chiton",
        "ja": "キトン"
    },
    {
        "num": "n01968897",
        "en": "chambered_nautilus",
        "ja": "オウムガイ"
    },
    {
        "num": "n01978287",
        "en": "Dungeness_crab",
        "ja": "アメリカイチョウガニ"
    },
    {
        "num": "n01978455",
        "en": "rock_crab",
        "ja": "岩カニ"
    },
    {
        "num": "n01980166",
        "en": "fiddler_crab",
        "ja": "シオマネキ"
    },
    {
        "num": "n01981276",
        "en": "king_crab",
        "ja": "タラバガニ"
    },
    {
        "num": "n01983481",
        "en": "American_lobster",
        "ja": "アメリカンロブスター"
    },
    {
        "num": "n01984695",
        "en": "spiny_lobster",
        "ja": "伊勢エビ"
    },
    {
        "num": "n01985128",
        "en": "crayfish",
        "ja": "ザリガニ"
    },
    {
        "num": "n01986214",
        "en": "hermit_crab",
        "ja": "ヤドカリ"
    },
    {
        "num": "n01990800",
        "en": "isopod",
        "ja": "等脚類"
    },
    {
        "num": "n02002556",
        "en": "white_stork",
        "ja": "コウノトリ"
    },
    {
        "num": "n02002724",
        "en": "black_stork",
        "ja": "ナベコウ"
    },
    {
        "num": "n02006656",
        "en": "spoonbill",
        "ja": "ヘラサギ"
    },
    {
        "num": "n02007558",
        "en": "flamingo",
        "ja": "フラミンゴ"
    },
    {
        "num": "n02009229",
        "en": "little_blue_heron",
        "ja": "小さな青いサギ"
    },
    {
        "num": "n02009912",
        "en": "American_egret",
        "ja": "アメリカン白鷺"
    },
    {
        "num": "n02011460",
        "en": "bittern",
        "ja": "にがり"
    },
    {
        "num": "n02012849",
        "en": "crane",
        "ja": "クレーン"
    },
    {
        "num": "n02013706",
        "en": "limpkin",
        "ja": "ツルモドキ科の鳥"
    },
    {
        "num": "n02017213",
        "en": "European_gallinule",
        "ja": "ヨーロピアン水鳥"
    },
    {
        "num": "n02018207",
        "en": "American_coot",
        "ja": "アメリカオオバン"
    },
    {
        "num": "n02018795",
        "en": "bustard",
        "ja": "ノガン"
    },
    {
        "num": "n02025239",
        "en": "ruddy_turnstone",
        "ja": "キョウジョシギ"
    },
    {
        "num": "n02027492",
        "en": "red-backed_sandpiper",
        "ja": "赤担保シギ"
    },
    {
        "num": "n02028035",
        "en": "redshank",
        "ja": "アカアシシギ"
    },
    {
        "num": "n02033041",
        "en": "dowitcher",
        "ja": "オオハシシギ"
    },
    {
        "num": "n02037110",
        "en": "oystercatcher",
        "ja": "ミヤコドリ"
    },
    {
        "num": "n02051845",
        "en": "pelican",
        "ja": "ペリカン"
    },
    {
        "num": "n02056570",
        "en": "king_penguin",
        "ja": "キングペンギン"
    },
    {
        "num": "n02058221",
        "en": "albatross",
        "ja": "アルバトロス"
    },
    {
        "num": "n02066245",
        "en": "grey_whale",
        "ja": "コククジラ"
    },
    {
        "num": "n02071294",
        "en": "killer_whale",
        "ja": "シャチ"
    },
    {
        "num": "n02074367",
        "en": "dugong",
        "ja": "ジュゴン"
    },
    {
        "num": "n02077923",
        "en": "sea_lion",
        "ja": "アシカ"
    },
    {
        "num": "n02085620",
        "en": "Chihuahua",
        "ja": "チワワ"
    },
    {
        "num": "n02085782",
        "en": "Japanese_spaniel",
        "ja": "狆"
    },
    {
        "num": "n02085936",
        "en": "Maltese_dog",
        "ja": "マルチーズ犬"
    },
    {
        "num": "n02086079",
        "en": "Pekinese",
        "ja": "狆"
    },
    {
        "num": "n02086240",
        "en": "Shih-Tzu",
        "ja": "シーズー、シーズー"
    },
    {
        "num": "n02086646",
        "en": "Blenheim_spaniel",
        "ja": "ブレナムスパニエル"
    },
    {
        "num": "n02086910",
        "en": "papillon",
        "ja": "パピヨン"
    },
    {
        "num": "n02087046",
        "en": "toy_terrier",
        "ja": "トイテリア"
    },
    {
        "num": "n02087394",
        "en": "Rhodesian_ridgeback",
        "ja": "ローデシアン・リッジバック"
    },
    {
        "num": "n02088094",
        "en": "Afghan_hound",
        "ja": "アフガンハウンド"
    },
    {
        "num": "n02088238",
        "en": "basset",
        "ja": "バセット犬"
    },
    {
        "num": "n02088364",
        "en": "beagle",
        "ja": "ビーグル"
    },
    {
        "num": "n02088466",
        "en": "bloodhound",
        "ja": "ブラッドハウンド"
    },
    {
        "num": "n02088632",
        "en": "bluetick",
        "ja": "ブルーティック"
    },
    {
        "num": "n02089078",
        "en": "black-and-tan_coonhound",
        "ja": "黒と黄褐色の猟犬"
    },
    {
        "num": "n02089867",
        "en": "Walker_hound",
        "ja": "ウォーカーハウンド"
    },
    {
        "num": "n02089973",
        "en": "English_foxhound",
        "ja": "イングリッシュフォックスハウンド"
    },
    {
        "num": "n02090379",
        "en": "redbone",
        "ja": "レッドボーン"
    },
    {
        "num": "n02090622",
        "en": "borzoi",
        "ja": "ボルゾイ"
    },
    {
        "num": "n02090721",
        "en": "Irish_wolfhound",
        "ja": "アイリッシュ・ウルフハウンド"
    },
    {
        "num": "n02091032",
        "en": "Italian_greyhound",
        "ja": "イタリアングレーハウンド"
    },
    {
        "num": "n02091134",
        "en": "whippet",
        "ja": "ウィペット"
    },
    {
        "num": "n02091244",
        "en": "Ibizan_hound",
        "ja": "イビサハウンド"
    },
    {
        "num": "n02091467",
        "en": "Norwegian_elkhound",
        "ja": "ノルウェーエルクハウンド"
    },
    {
        "num": "n02091635",
        "en": "otterhound",
        "ja": "オッターハウンド"
    },
    {
        "num": "n02091831",
        "en": "Saluki",
        "ja": "サルーキ"
    },
    {
        "num": "n02092002",
        "en": "Scottish_deerhound",
        "ja": "スコティッシュ・ディアハウンド"
    },
    {
        "num": "n02092339",
        "en": "Weimaraner",
        "ja": "ワイマラナー"
    },
    {
        "num": "n02093256",
        "en": "Staffordshire_bullterrier",
        "ja": "スタフォードシャーブルテリア"
    },
    {
        "num": "n02093428",
        "en": "American_Staffordshire_terrier",
        "ja": "アメリカン・スタッフォードシャー・テリア"
    },
    {
        "num": "n02093647",
        "en": "Bedlington_terrier",
        "ja": "ベドリントンテリア"
    },
    {
        "num": "n02093754",
        "en": "Border_terrier",
        "ja": "ボーダーテリア"
    },
    {
        "num": "n02093859",
        "en": "Kerry_blue_terrier",
        "ja": "ケリーブルーテリア"
    },
    {
        "num": "n02093991",
        "en": "Irish_terrier",
        "ja": "アイリッシュテリア"
    },
    {
        "num": "n02094114",
        "en": "Norfolk_terrier",
        "ja": "ノーフォークテリア"
    },
    {
        "num": "n02094258",
        "en": "Norwich_terrier",
        "ja": "ノーリッチ・テリア"
    },
    {
        "num": "n02094433",
        "en": "Yorkshire_terrier",
        "ja": "ヨークシャーテリア"
    },
    {
        "num": "n02095314",
        "en": "wire-haired_fox_terrier",
        "ja": "ワイヤーヘアー・フォックステリア"
    },
    {
        "num": "n02095570",
        "en": "Lakeland_terrier",
        "ja": "レークランドテリア"
    },
    {
        "num": "n02095889",
        "en": "Sealyham_terrier",
        "ja": "シーリーハムテリア"
    },
    {
        "num": "n02096051",
        "en": "Airedale",
        "ja": "エアデール"
    },
    {
        "num": "n02096177",
        "en": "cairn",
        "ja": "ケルン"
    },
    {
        "num": "n02096294",
        "en": "Australian_terrier",
        "ja": "オーストラリアテリア"
    },
    {
        "num": "n02096437",
        "en": "Dandie_Dinmont",
        "ja": "ダンディディンモントテリア"
    },
    {
        "num": "n02096585",
        "en": "Boston_bull",
        "ja": "ボストンブル"
    },
    {
        "num": "n02097047",
        "en": "miniature_schnauzer",
        "ja": "ミニチュアシュナウザー"
    },
    {
        "num": "n02097130",
        "en": "giant_schnauzer",
        "ja": "ジャイアントシュナウザー"
    },
    {
        "num": "n02097209",
        "en": "standard_schnauzer",
        "ja": "スタンダードシュナウザー"
    },
    {
        "num": "n02097298",
        "en": "Scotch_terrier",
        "ja": "スコッチテリア"
    },
    {
        "num": "n02097474",
        "en": "Tibetan_terrier",
        "ja": "チベタンテリア"
    },
    {
        "num": "n02097658",
        "en": "silky_terrier",
        "ja": "シルキーテリア"
    },
    {
        "num": "n02098105",
        "en": "soft-coated_wheaten_terrier",
        "ja": "ソフトコーテッド・ウィートン・テリア"
    },
    {
        "num": "n02098286",
        "en": "West_Highland_white_terrier",
        "ja": "ウェストハイランドホワイトテリア"
    },
    {
        "num": "n02098413",
        "en": "Lhasa",
        "ja": "ラサ"
    },
    {
        "num": "n02099267",
        "en": "flat-coated_retriever",
        "ja": "フラットコーテッド・レトリーバー"
    },
    {
        "num": "n02099429",
        "en": "curly-coated_retriever",
        "ja": "カーリーコーティングされたレトリーバー"
    },
    {
        "num": "n02099601",
        "en": "golden_retriever",
        "ja": "ゴールデンレトリバー"
    },
    {
        "num": "n02099712",
        "en": "Labrador_retriever",
        "ja": "ラブラドル・レトリーバー犬"
    },
    {
        "num": "n02099849",
        "en": "Chesapeake_Bay_retriever",
        "ja": "チェサピーク湾レトリーバー"
    },
    {
        "num": "n02100236",
        "en": "German_short-haired_pointer",
        "ja": "ジャーマン・ショートヘア・ポインタ"
    },
    {
        "num": "n02100583",
        "en": "vizsla",
        "ja": "ビズラ"
    },
    {
        "num": "n02100735",
        "en": "English_setter",
        "ja": "イングリッシュセッター"
    },
    {
        "num": "n02100877",
        "en": "Irish_setter",
        "ja": "アイリッシュセッター"
    },
    {
        "num": "n02101006",
        "en": "Gordon_setter",
        "ja": "ゴードンセッター"
    },
    {
        "num": "n02101388",
        "en": "Brittany_spaniel",
        "ja": "ブリタニースパニエル"
    },
    {
        "num": "n02101556",
        "en": "clumber",
        "ja": "クランバー"
    },
    {
        "num": "n02102040",
        "en": "English_springer",
        "ja": "イングリッシュスプリンガー"
    },
    {
        "num": "n02102177",
        "en": "Welsh_springer_spaniel",
        "ja": "ウェルシュスプリンガースパニエル"
    },
    {
        "num": "n02102318",
        "en": "cocker_spaniel",
        "ja": "コッカースパニエル"
    },
    {
        "num": "n02102480",
        "en": "Sussex_spaniel",
        "ja": "サセックススパニエル"
    },
    {
        "num": "n02102973",
        "en": "Irish_water_spaniel",
        "ja": "アイルランドのウォータースパニエル"
    },
    {
        "num": "n02104029",
        "en": "kuvasz",
        "ja": "クバース犬"
    },
    {
        "num": "n02104365",
        "en": "schipperke",
        "ja": "スキッパーキー"
    },
    {
        "num": "n02105056",
        "en": "groenendael",
        "ja": "ベルジアン・シェパード・ドッグ・グローネンダール"
    },
    {
        "num": "n02105162",
        "en": "malinois",
        "ja": "マリノア"
    },
    {
        "num": "n02105251",
        "en": "briard",
        "ja": "ブリアール"
    },
    {
        "num": "n02105412",
        "en": "kelpie",
        "ja": "ケルピー"
    },
    {
        "num": "n02105505",
        "en": "komondor",
        "ja": "コモンドール"
    },
    {
        "num": "n02105641",
        "en": "Old_English_sheepdog",
        "ja": "オールドイングリッシュシープドッグ"
    },
    {
        "num": "n02105855",
        "en": "Shetland_sheepdog",
        "ja": "シェトランドシープドッグ"
    },
    {
        "num": "n02106030",
        "en": "collie",
        "ja": "コリー"
    },
    {
        "num": "n02106166",
        "en": "Border_collie",
        "ja": "ボーダーコリー"
    },
    {
        "num": "n02106382",
        "en": "Bouvier_des_Flandres",
        "ja": "ブーヴィエ・デ・フランドル"
    },
    {
        "num": "n02106550",
        "en": "Rottweiler",
        "ja": "ロットワイラー"
    },
    {
        "num": "n02106662",
        "en": "German_shepherd",
        "ja": "ジャーマンシェパード"
    },
    {
        "num": "n02107142",
        "en": "Doberman",
        "ja": "ドーベルマン犬"
    },
    {
        "num": "n02107312",
        "en": "miniature_pinscher",
        "ja": "ミニチュアピンシャー"
    },
    {
        "num": "n02107574",
        "en": "Greater_Swiss_Mountain_dog",
        "ja": "グレータースイスマウンテンドッグ"
    },
    {
        "num": "n02107683",
        "en": "Bernese_mountain_dog",
        "ja": "バーネーズマウンテンドッグ"
    },
    {
        "num": "n02107908",
        "en": "Appenzeller",
        "ja": "アッペンツェル"
    },
    {
        "num": "n02108000",
        "en": "EntleBucher",
        "ja": "エントレブッシャー"
    },
    {
        "num": "n02108089",
        "en": "boxer",
        "ja": "ボクサー"
    },
    {
        "num": "n02108422",
        "en": "bull_mastiff",
        "ja": "ブルマスチフ"
    },
    {
        "num": "n02108551",
        "en": "Tibetan_mastiff",
        "ja": "チベットマスチフ"
    },
    {
        "num": "n02108915",
        "en": "French_bulldog",
        "ja": "フレンチブルドッグ"
    },
    {
        "num": "n02109047",
        "en": "Great_Dane",
        "ja": "グレートデーン"
    },
    {
        "num": "n02109525",
        "en": "Saint_Bernard",
        "ja": "セントバーナード"
    },
    {
        "num": "n02109961",
        "en": "Eskimo_dog",
        "ja": "エスキモー犬"
    },
    {
        "num": "n02110063",
        "en": "malamute",
        "ja": "マラミュート"
    },
    {
        "num": "n02110185",
        "en": "Siberian_husky",
        "ja": "シベリアンハスキー"
    },
    {
        "num": "n02110341",
        "en": "dalmatian",
        "ja": "ダルメシアン"
    },
    {
        "num": "n02110627",
        "en": "affenpinscher",
        "ja": "アーフェンピンシャー"
    },
    {
        "num": "n02110806",
        "en": "basenji",
        "ja": "バセンジー"
    },
    {
        "num": "n02110958",
        "en": "pug",
        "ja": "パグ"
    },
    {
        "num": "n02111129",
        "en": "Leonberg",
        "ja": "レオンバーグ"
    },
    {
        "num": "n02111277",
        "en": "Newfoundland",
        "ja": "ニューファンドランド島"
    },
    {
        "num": "n02111500",
        "en": "Great_Pyrenees",
        "ja": "グレートピレニーズ"
    },
    {
        "num": "n02111889",
        "en": "Samoyed",
        "ja": "サモエド"
    },
    {
        "num": "n02112018",
        "en": "Pomeranian",
        "ja": "ポメラニアン"
    },
    {
        "num": "n02112137",
        "en": "chow",
        "ja": "チャウ"
    },
    {
        "num": "n02112350",
        "en": "keeshond",
        "ja": "キースホンド"
    },
    {
        "num": "n02112706",
        "en": "Brabancon_griffon",
        "ja": "ブラバンソングリフォン"
    },
    {
        "num": "n02113023",
        "en": "Pembroke",
        "ja": "ペンブローク"
    },
    {
        "num": "n02113186",
        "en": "Cardigan",
        "ja": "カーディガン"
    },
    {
        "num": "n02113624",
        "en": "toy_poodle",
        "ja": "トイプードル"
    },
    {
        "num": "n02113712",
        "en": "miniature_poodle",
        "ja": "ミニチュアプードル"
    },
    {
        "num": "n02113799",
        "en": "standard_poodle",
        "ja": "スタンダードプードル"
    },
    {
        "num": "n02113978",
        "en": "Mexican_hairless",
        "ja": "メキシカン・ヘアーレス"
    },
    {
        "num": "n02114367",
        "en": "timber_wolf",
        "ja": "シンリンオオカミ"
    },
    {
        "num": "n02114548",
        "en": "white_wolf",
        "ja": "白いオオカミ"
    },
    {
        "num": "n02114712",
        "en": "red_wolf",
        "ja": "レッドウルフ"
    },
    {
        "num": "n02114855",
        "en": "coyote",
        "ja": "コヨーテ"
    },
    {
        "num": "n02115641",
        "en": "dingo",
        "ja": "ディンゴ"
    },
    {
        "num": "n02115913",
        "en": "dhole",
        "ja": "ドール"
    },
    {
        "num": "n02116738",
        "en": "African_hunting_dog",
        "ja": "リカオン"
    },
    {
        "num": "n02117135",
        "en": "hyena",
        "ja": "ハイエナ"
    },
    {
        "num": "n02119022",
        "en": "red_fox",
        "ja": "アカギツネ"
    },
    {
        "num": "n02119789",
        "en": "kit_fox",
        "ja": "キットキツネ"
    },
    {
        "num": "n02120079",
        "en": "Arctic_fox",
        "ja": "ホッキョクギツネ"
    },
    {
        "num": "n02120505",
        "en": "grey_fox",
        "ja": "灰色のキツネ"
    },
    {
        "num": "n02123045",
        "en": "tabby",
        "ja": "タビー"
    },
    {
        "num": "n02123159",
        "en": "tiger_cat",
        "ja": "虎猫"
    },
    {
        "num": "n02123394",
        "en": "Persian_cat",
        "ja": "ペルシャ猫"
    },
    {
        "num": "n02123597",
        "en": "Siamese_cat",
        "ja": "シャム猫"
    },
    {
        "num": "n02124075",
        "en": "Egyptian_cat",
        "ja": "エジプトの猫"
    },
    {
        "num": "n02125311",
        "en": "cougar",
        "ja": "クーガー"
    },
    {
        "num": "n02127052",
        "en": "lynx",
        "ja": "オオヤマネコ"
    },
    {
        "num": "n02128385",
        "en": "leopard",
        "ja": "ヒョウ"
    },
    {
        "num": "n02128757",
        "en": "snow_leopard",
        "ja": "ユキヒョウ"
    },
    {
        "num": "n02128925",
        "en": "jaguar",
        "ja": "ジャガー"
    },
    {
        "num": "n02129165",
        "en": "lion",
        "ja": "ライオン"
    },
    {
        "num": "n02129604",
        "en": "tiger",
        "ja": "虎"
    },
    {
        "num": "n02130308",
        "en": "cheetah",
        "ja": "チーター"
    },
    {
        "num": "n02132136",
        "en": "brown_bear",
        "ja": "ヒグマ"
    },
    {
        "num": "n02133161",
        "en": "American_black_bear",
        "ja": "アメリカクロクマ"
    },
    {
        "num": "n02134084",
        "en": "ice_bear",
        "ja": "氷のクマ"
    },
    {
        "num": "n02134418",
        "en": "sloth_bear",
        "ja": "ナマケグマ"
    },
    {
        "num": "n02137549",
        "en": "mongoose",
        "ja": "マングース"
    },
    {
        "num": "n02138441",
        "en": "meerkat",
        "ja": "ミーアキャット"
    },
    {
        "num": "n02165105",
        "en": "tiger_beetle",
        "ja": "ハンミョウ"
    },
    {
        "num": "n02165456",
        "en": "ladybug",
        "ja": "てんとう虫"
    },
    {
        "num": "n02167151",
        "en": "ground_beetle",
        "ja": "グランドビートル"
    },
    {
        "num": "n02168699",
        "en": "long-horned_beetle",
        "ja": "カミキリムシ"
    },
    {
        "num": "n02169497",
        "en": "leaf_beetle",
        "ja": "ハムシ"
    },
    {
        "num": "n02172182",
        "en": "dung_beetle",
        "ja": "フンコロガシ"
    },
    {
        "num": "n02174001",
        "en": "rhinoceros_beetle",
        "ja": "サイハムシ"
    },
    {
        "num": "n02177972",
        "en": "weevil",
        "ja": "ゾウムシ"
    },
    {
        "num": "n02190166",
        "en": "fly",
        "ja": "ハエ"
    },
    {
        "num": "n02206856",
        "en": "bee",
        "ja": "蜂"
    },
    {
        "num": "n02219486",
        "en": "ant",
        "ja": "蟻"
    },
    {
        "num": "n02226429",
        "en": "grasshopper",
        "ja": "バッタ"
    },
    {
        "num": "n02229544",
        "en": "cricket",
        "ja": "クリケット"
    },
    {
        "num": "n02231487",
        "en": "walking_stick",
        "ja": "杖"
    },
    {
        "num": "n02233338",
        "en": "cockroach",
        "ja": "ゴキブリ"
    },
    {
        "num": "n02236044",
        "en": "mantis",
        "ja": "カマキリ"
    },
    {
        "num": "n02256656",
        "en": "cicada",
        "ja": "蝉"
    },
    {
        "num": "n02259212",
        "en": "leafhopper",
        "ja": "ヨコバイ"
    },
    {
        "num": "n02264363",
        "en": "lacewing",
        "ja": "クサカゲロウ"
    },
    {
        "num": "n02268443",
        "en": "dragonfly",
        "ja": "トンボ"
    },
    {
        "num": "n02268853",
        "en": "damselfly",
        "ja": "イトトンボ"
    },
    {
        "num": "n02276258",
        "en": "admiral",
        "ja": "提督"
    },
    {
        "num": "n02277742",
        "en": "ringlet",
        "ja": "リングレット"
    },
    {
        "num": "n02279972",
        "en": "monarch",
        "ja": "君主"
    },
    {
        "num": "n02280649",
        "en": "cabbage_butterfly",
        "ja": "モンシロチョウ"
    },
    {
        "num": "n02281406",
        "en": "sulphur_butterfly",
        "ja": "硫黄蝶"
    },
    {
        "num": "n02281787",
        "en": "lycaenid",
        "ja": "シジミチョウ"
    },
    {
        "num": "n02317335",
        "en": "starfish",
        "ja": "ヒトデ"
    },
    {
        "num": "n02319095",
        "en": "sea_urchin",
        "ja": "うに"
    },
    {
        "num": "n02321529",
        "en": "sea_cucumber",
        "ja": "ナマコ"
    },
    {
        "num": "n02325366",
        "en": "wood_rabbit",
        "ja": "木のウサギ"
    },
    {
        "num": "n02326432",
        "en": "hare",
        "ja": "野ウサギ"
    },
    {
        "num": "n02328150",
        "en": "Angora",
        "ja": "アンゴラ"
    },
    {
        "num": "n02342885",
        "en": "hamster",
        "ja": "ハムスター"
    },
    {
        "num": "n02346627",
        "en": "porcupine",
        "ja": "ヤマアラシ"
    },
    {
        "num": "n02356798",
        "en": "fox_squirrel",
        "ja": "キツネリス"
    },
    {
        "num": "n02361337",
        "en": "marmot",
        "ja": "マーモット"
    },
    {
        "num": "n02363005",
        "en": "beaver",
        "ja": "ビーバー"
    },
    {
        "num": "n02364673",
        "en": "guinea_pig",
        "ja": "モルモット"
    },
    {
        "num": "n02389026",
        "en": "sorrel",
        "ja": "栗色"
    },
    {
        "num": "n02391049",
        "en": "zebra",
        "ja": "シマウマ"
    },
    {
        "num": "n02395406",
        "en": "hog",
        "ja": "豚"
    },
    {
        "num": "n02396427",
        "en": "wild_boar",
        "ja": "イノシシ"
    },
    {
        "num": "n02397096",
        "en": "warthog",
        "ja": "イボイノシシ"
    },
    {
        "num": "n02398521",
        "en": "hippopotamus",
        "ja": "カバ"
    },
    {
        "num": "n02403003",
        "en": "ox",
        "ja": "雄牛"
    },
    {
        "num": "n02408429",
        "en": "water_buffalo",
        "ja": "水牛"
    },
    {
        "num": "n02410509",
        "en": "bison",
        "ja": "バイソン"
    },
    {
        "num": "n02412080",
        "en": "ram",
        "ja": "ラム"
    },
    {
        "num": "n02415577",
        "en": "bighorn",
        "ja": "ビッグホーン"
    },
    {
        "num": "n02417914",
        "en": "ibex",
        "ja": "アイベックス"
    },
    {
        "num": "n02422106",
        "en": "hartebeest",
        "ja": "ハーテビースト"
    },
    {
        "num": "n02422699",
        "en": "impala",
        "ja": "インパラ"
    },
    {
        "num": "n02423022",
        "en": "gazelle",
        "ja": "ガゼル"
    },
    {
        "num": "n02437312",
        "en": "Arabian_camel",
        "ja": "アラビアラクダ"
    },
    {
        "num": "n02437616",
        "en": "llama",
        "ja": "ラマ"
    },
    {
        "num": "n02441942",
        "en": "weasel",
        "ja": "イタチ"
    },
    {
        "num": "n02442845",
        "en": "mink",
        "ja": "ミンク"
    },
    {
        "num": "n02443114",
        "en": "polecat",
        "ja": "ケナガイタチ"
    },
    {
        "num": "n02443484",
        "en": "black-footed_ferret",
        "ja": "クロアシイタチ"
    },
    {
        "num": "n02444819",
        "en": "otter",
        "ja": "カワウソ"
    },
    {
        "num": "n02445715",
        "en": "skunk",
        "ja": "スカンク"
    },
    {
        "num": "n02447366",
        "en": "badger",
        "ja": "狸"
    },
    {
        "num": "n02454379",
        "en": "armadillo",
        "ja": "アルマジロ"
    },
    {
        "num": "n02457408",
        "en": "three-toed_sloth",
        "ja": "ミユビナマケモノ"
    },
    {
        "num": "n02480495",
        "en": "orangutan",
        "ja": "オランウータン"
    },
    {
        "num": "n02480855",
        "en": "gorilla",
        "ja": "ゴリラ"
    },
    {
        "num": "n02481823",
        "en": "chimpanzee",
        "ja": "チンパンジー"
    },
    {
        "num": "n02483362",
        "en": "gibbon",
        "ja": "テナガザル"
    },
    {
        "num": "n02483708",
        "en": "siamang",
        "ja": "フクロテナガザル"
    },
    {
        "num": "n02484975",
        "en": "guenon",
        "ja": "オナガザル"
    },
    {
        "num": "n02486261",
        "en": "patas",
        "ja": "パタス"
    },
    {
        "num": "n02486410",
        "en": "baboon",
        "ja": "ヒヒ"
    },
    {
        "num": "n02487347",
        "en": "macaque",
        "ja": "マカク"
    },
    {
        "num": "n02488291",
        "en": "langur",
        "ja": "ヤセザル"
    },
    {
        "num": "n02488702",
        "en": "colobus",
        "ja": "コロブス属"
    },
    {
        "num": "n02489166",
        "en": "proboscis_monkey",
        "ja": "テングザル"
    },
    {
        "num": "n02490219",
        "en": "marmoset",
        "ja": "マーモセット"
    },
    {
        "num": "n02492035",
        "en": "capuchin",
        "ja": "オマキザル"
    },
    {
        "num": "n02492660",
        "en": "howler_monkey",
        "ja": "ホエザル"
    },
    {
        "num": "n02493509",
        "en": "titi",
        "ja": "ティティ"
    },
    {
        "num": "n02493793",
        "en": "spider_monkey",
        "ja": "クモザル"
    },
    {
        "num": "n02494079",
        "en": "squirrel_monkey",
        "ja": "リスザル"
    },
    {
        "num": "n02497673",
        "en": "Madagascar_cat",
        "ja": "マダガスカル猫"
    },
    {
        "num": "n02500267",
        "en": "indri",
        "ja": "インドリ"
    },
    {
        "num": "n02504013",
        "en": "Indian_elephant",
        "ja": "インドゾウ"
    },
    {
        "num": "n02504458",
        "en": "African_elephant",
        "ja": "アフリカゾウ"
    },
    {
        "num": "n02509815",
        "en": "lesser_panda",
        "ja": "レッサーパンダ"
    },
    {
        "num": "n02510455",
        "en": "giant_panda",
        "ja": "ジャイアントパンダ"
    },
    {
        "num": "n02514041",
        "en": "barracouta",
        "ja": "バラクータ"
    },
    {
        "num": "n02526121",
        "en": "eel",
        "ja": "ウナギ"
    },
    {
        "num": "n02536864",
        "en": "coho",
        "ja": "ギンザケ"
    },
    {
        "num": "n02606052",
        "en": "rock_beauty",
        "ja": "岩の美しさ"
    },
    {
        "num": "n02607072",
        "en": "anemone_fish",
        "ja": "クマノミ"
    },
    {
        "num": "n02640242",
        "en": "sturgeon",
        "ja": "チョウザメ"
    },
    {
        "num": "n02641379",
        "en": "gar",
        "ja": "ガー"
    },
    {
        "num": "n02643566",
        "en": "lionfish",
        "ja": "ミノカサゴ"
    },
    {
        "num": "n02655020",
        "en": "puffer",
        "ja": "フグ"
    },
    {
        "num": "n02666196",
        "en": "abacus",
        "ja": "そろばん"
    },
    {
        "num": "n02667093",
        "en": "abaya",
        "ja": "アバヤ"
    },
    {
        "num": "n02669723",
        "en": "academic_gown",
        "ja": "アカデミックガウン"
    },
    {
        "num": "n02672831",
        "en": "accordion",
        "ja": "アコーディオン"
    },
    {
        "num": "n02676566",
        "en": "acoustic_guitar",
        "ja": "アコースティックギター"
    },
    {
        "num": "n02687172",
        "en": "aircraft_carrier",
        "ja": "空母"
    },
    {
        "num": "n02690373",
        "en": "airliner",
        "ja": "旅客機"
    },
    {
        "num": "n02692877",
        "en": "airship",
        "ja": "飛行船"
    },
    {
        "num": "n02699494",
        "en": "altar",
        "ja": "祭壇"
    },
    {
        "num": "n02701002",
        "en": "ambulance",
        "ja": "救急車"
    },
    {
        "num": "n02704792",
        "en": "amphibian",
        "ja": "両生類"
    },
    {
        "num": "n02708093",
        "en": "analog_clock",
        "ja": "アナログ時計"
    },
    {
        "num": "n02727426",
        "en": "apiary",
        "ja": "養蜂場"
    },
    {
        "num": "n02730930",
        "en": "apron",
        "ja": "エプロン"
    },
    {
        "num": "n02747177",
        "en": "ashcan",
        "ja": "ごみ入れ"
    },
    {
        "num": "n02749479",
        "en": "assault_rifle",
        "ja": "アサルトライフル"
    },
    {
        "num": "n02769748",
        "en": "backpack",
        "ja": "バックパック"
    },
    {
        "num": "n02776631",
        "en": "bakery",
        "ja": "ベーカリー"
    },
    {
        "num": "n02777292",
        "en": "balance_beam",
        "ja": "平均台"
    },
    {
        "num": "n02782093",
        "en": "balloon",
        "ja": "バルーン"
    },
    {
        "num": "n02783161",
        "en": "ballpoint",
        "ja": "ボールペン"
    },
    {
        "num": "n02786058",
        "en": "Band_Aid",
        "ja": "バンドエイド"
    },
    {
        "num": "n02787622",
        "en": "banjo",
        "ja": "バンジョー"
    },
    {
        "num": "n02788148",
        "en": "bannister",
        "ja": "バニスター"
    },
    {
        "num": "n02790996",
        "en": "barbell",
        "ja": "バーベル"
    },
    {
        "num": "n02791124",
        "en": "barber_chair",
        "ja": "理髪店の椅子"
    },
    {
        "num": "n02791270",
        "en": "barbershop",
        "ja": "理髪店"
    },
    {
        "num": "n02793495",
        "en": "barn",
        "ja": "納屋"
    },
    {
        "num": "n02794156",
        "en": "barometer",
        "ja": "バロメーター"
    },
    {
        "num": "n02795169",
        "en": "barrel",
        "ja": "バレル"
    },
    {
        "num": "n02797295",
        "en": "barrow",
        "ja": "バロー"
    },
    {
        "num": "n02799071",
        "en": "baseball",
        "ja": "野球"
    },
    {
        "num": "n02802426",
        "en": "basketball",
        "ja": "バスケットボール"
    },
    {
        "num": "n02804414",
        "en": "bassinet",
        "ja": "バシネット"
    },
    {
        "num": "n02804610",
        "en": "bassoon",
        "ja": "ファゴット"
    },
    {
        "num": "n02807133",
        "en": "bathing_cap",
        "ja": "水泳帽"
    },
    {
        "num": "n02808304",
        "en": "bath_towel",
        "ja": "バスタオル"
    },
    {
        "num": "n02808440",
        "en": "bathtub",
        "ja": "バスタブ"
    },
    {
        "num": "n02814533",
        "en": "beach_wagon",
        "ja": "ビーチワゴン"
    },
    {
        "num": "n02814860",
        "en": "beacon",
        "ja": "ビーコン"
    },
    {
        "num": "n02815834",
        "en": "beaker",
        "ja": "ビーカー"
    },
    {
        "num": "n02817516",
        "en": "bearskin",
        "ja": "ベアスキン"
    },
    {
        "num": "n02823428",
        "en": "beer_bottle",
        "ja": "ビール瓶"
    },
    {
        "num": "n02823750",
        "en": "beer_glass",
        "ja": "ビールグラス"
    },
    {
        "num": "n02825657",
        "en": "bell_cote",
        "ja": "ベルコート"
    },
    {
        "num": "n02834397",
        "en": "bib",
        "ja": "ビブ"
    },
    {
        "num": "n02835271",
        "en": "bicycle-built-for-two",
        "ja": "自転車"
    },
    {
        "num": "n02837789",
        "en": "bikini",
        "ja": "ビキニ"
    },
    {
        "num": "n02840245",
        "en": "binder",
        "ja": "バインダー"
    },
    {
        "num": "n02841315",
        "en": "binoculars",
        "ja": "双眼鏡"
    },
    {
        "num": "n02843684",
        "en": "birdhouse",
        "ja": "巣箱"
    },
    {
        "num": "n02859443",
        "en": "boathouse",
        "ja": "ボートハウス"
    },
    {
        "num": "n02860847",
        "en": "bobsled",
        "ja": "ボブスレー"
    },
    {
        "num": "n02865351",
        "en": "bolo_tie",
        "ja": "ループタイ"
    },
    {
        "num": "n02869837",
        "en": "bonnet",
        "ja": "ボンネット"
    },
    {
        "num": "n02870880",
        "en": "bookcase",
        "ja": "本棚"
    },
    {
        "num": "n02871525",
        "en": "bookshop",
        "ja": "書店"
    },
    {
        "num": "n02877765",
        "en": "bottlecap",
        "ja": "瓶のキャップ"
    },
    {
        "num": "n02879718",
        "en": "bow",
        "ja": "弓"
    },
    {
        "num": "n02883205",
        "en": "bow_tie",
        "ja": "ちょうネクタイ"
    },
    {
        "num": "n02892201",
        "en": "brass",
        "ja": "真鍮"
    },
    {
        "num": "n02892767",
        "en": "brassiere",
        "ja": "ブラジャー"
    },
    {
        "num": "n02894605",
        "en": "breakwater",
        "ja": "防波堤"
    },
    {
        "num": "n02895154",
        "en": "breastplate",
        "ja": "胸当て"
    },
    {
        "num": "n02906734",
        "en": "broom",
        "ja": "ほうき"
    },
    {
        "num": "n02909870",
        "en": "bucket",
        "ja": "バケツ"
    },
    {
        "num": "n02910353",
        "en": "buckle",
        "ja": "バックル"
    },
    {
        "num": "n02916936",
        "en": "bulletproof_vest",
        "ja": "防弾チョッキ"
    },
    {
        "num": "n02917067",
        "en": "bullet_train",
        "ja": "新幹線"
    },
    {
        "num": "n02927161",
        "en": "butcher_shop",
        "ja": "精肉店"
    },
    {
        "num": "n02930766",
        "en": "cab",
        "ja": "タクシー"
    },
    {
        "num": "n02939185",
        "en": "caldron",
        "ja": "大釜"
    },
    {
        "num": "n02948072",
        "en": "candle",
        "ja": "キャンドル"
    },
    {
        "num": "n02950826",
        "en": "cannon",
        "ja": "大砲"
    },
    {
        "num": "n02951358",
        "en": "canoe",
        "ja": "カヌー"
    },
    {
        "num": "n02951585",
        "en": "can_opener",
        "ja": "缶切り"
    },
    {
        "num": "n02963159",
        "en": "cardigan",
        "ja": "カーディガン"
    },
    {
        "num": "n02965783",
        "en": "car_mirror",
        "ja": "車のミラー"
    },
    {
        "num": "n02966193",
        "en": "carousel",
        "ja": "回転木馬"
    },
    {
        "num": "n02966687",
        "en": "carpenter's_kit",
        "ja": "大工のキット"
    },
    {
        "num": "n02971356",
        "en": "carton",
        "ja": "カートン"
    },
    {
        "num": "n02974003",
        "en": "car_wheel",
        "ja": "車のホイール"
    },
    {
        "num": "n02977058",
        "en": "cash_machine",
        "ja": "現金自動預け払い機"
    },
    {
        "num": "n02978881",
        "en": "cassette",
        "ja": "カセット"
    },
    {
        "num": "n02979186",
        "en": "cassette_player",
        "ja": "カセット・プレーヤー"
    },
    {
        "num": "n02980441",
        "en": "castle",
        "ja": "城"
    },
    {
        "num": "n02981792",
        "en": "catamaran",
        "ja": "カタマラン"
    },
    {
        "num": "n02988304",
        "en": "CD_player",
        "ja": "CDプレーヤー"
    },
    {
        "num": "n02992211",
        "en": "cello",
        "ja": "チェロ"
    },
    {
        "num": "n02992529",
        "en": "cellular_telephone",
        "ja": "スマートフォン"
    },
    {
        "num": "n02999410",
        "en": "chain",
        "ja": "鎖"
    },
    {
        "num": "n03000134",
        "en": "chainlink_fence",
        "ja": "チェーンリンクフェンス"
    },
    {
        "num": "n03000247",
        "en": "chain_mail",
        "ja": "チェーンメール"
    },
    {
        "num": "n03000684",
        "en": "chain_saw",
        "ja": "チェーンソー"
    },
    {
        "num": "n03014705",
        "en": "chest",
        "ja": "胸"
    },
    {
        "num": "n03016953",
        "en": "chiffonier",
        "ja": "シフォニア"
    },
    {
        "num": "n03017168",
        "en": "chime",
        "ja": "チャイム"
    },
    {
        "num": "n03018349",
        "en": "china_cabinet",
        "ja": "中国キャビネット"
    },
    {
        "num": "n03026506",
        "en": "Christmas_stocking",
        "ja": "クリスマスの靴下"
    },
    {
        "num": "n03028079",
        "en": "church",
        "ja": "教会"
    },
    {
        "num": "n03032252",
        "en": "cinema",
        "ja": "映画"
    },
    {
        "num": "n03041632",
        "en": "cleaver",
        "ja": "クリーバー"
    },
    {
        "num": "n03042490",
        "en": "cliff_dwelling",
        "ja": "崖の住居"
    },
    {
        "num": "n03045698",
        "en": "cloak",
        "ja": "マント"
    },
    {
        "num": "n03047690",
        "en": "clog",
        "ja": "クロッグ"
    },
    {
        "num": "n03062245",
        "en": "cocktail_shaker",
        "ja": "カクテルシェーカー"
    },
    {
        "num": "n03063599",
        "en": "coffee_mug",
        "ja": "コーヒーマグ"
    },
    {
        "num": "n03063689",
        "en": "coffeepot",
        "ja": "コーヒーポット"
    },
    {
        "num": "n03065424",
        "en": "coil",
        "ja": "コイル"
    },
    {
        "num": "n03075370",
        "en": "combination_lock",
        "ja": "ダイヤル錠"
    },
    {
        "num": "n03085013",
        "en": "computer_keyboard",
        "ja": "コンピュータのキーボード"
    },
    {
        "num": "n03089624",
        "en": "confectionery",
        "ja": "製菓"
    },
    {
        "num": "n03095699",
        "en": "container_ship",
        "ja": "コンテナ船"
    },
    {
        "num": "n03100240",
        "en": "convertible",
        "ja": "コンバーチブル"
    },
    {
        "num": "n03109150",
        "en": "corkscrew",
        "ja": "コークスクリュー"
    },
    {
        "num": "n03110669",
        "en": "cornet",
        "ja": "コルネット"
    },
    {
        "num": "n03124043",
        "en": "cowboy_boot",
        "ja": "カウボーイブーツ"
    },
    {
        "num": "n03124170",
        "en": "cowboy_hat",
        "ja": "カウボーイハット"
    },
    {
        "num": "n03125729",
        "en": "cradle",
        "ja": "クレードル"
    },
    {
        "num": "n03126707",
        "en": "crane",
        "ja": "クレーン"
    },
    {
        "num": "n03127747",
        "en": "crash_helmet",
        "ja": "クラッシュヘルメット"
    },
    {
        "num": "n03127925",
        "en": "crate",
        "ja": "木箱"
    },
    {
        "num": "n03131574",
        "en": "crib",
        "ja": "ベビーベッド"
    },
    {
        "num": "n03133878",
        "en": "Crock_Pot",
        "ja": "クロークポット"
    },
    {
        "num": "n03134739",
        "en": "croquet_ball",
        "ja": "クロケットボール"
    },
    {
        "num": "n03141823",
        "en": "crutch",
        "ja": "松葉杖"
    },
    {
        "num": "n03146219",
        "en": "cuirass",
        "ja": "胸当て"
    },
    {
        "num": "n03160309",
        "en": "dam",
        "ja": "ダム"
    },
    {
        "num": "n03179701",
        "en": "desk",
        "ja": "机"
    },
    {
        "num": "n03180011",
        "en": "desktop_computer",
        "ja": "デスクトップコンピューター"
    },
    {
        "num": "n03187595",
        "en": "dial_telephone",
        "ja": "ダイヤル電話"
    },
    {
        "num": "n03188531",
        "en": "diaper",
        "ja": "おむつ"
    },
    {
        "num": "n03196217",
        "en": "digital_clock",
        "ja": "デジタル時計"
    },
    {
        "num": "n03197337",
        "en": "digital_watch",
        "ja": "デジタル腕時計"
    },
    {
        "num": "n03201208",
        "en": "dining_table",
        "ja": "ダイニングテーブル"
    },
    {
        "num": "n03207743",
        "en": "dishrag",
        "ja": "意気地なし"
    },
    {
        "num": "n03207941",
        "en": "dishwasher",
        "ja": "食器洗い機"
    },
    {
        "num": "n03208938",
        "en": "disk_brake",
        "ja": "ディスクブレーキ"
    },
    {
        "num": "n03216828",
        "en": "dock",
        "ja": "ドック"
    },
    {
        "num": "n03218198",
        "en": "dogsled",
        "ja": "犬ぞり"
    },
    {
        "num": "n03220513",
        "en": "dome",
        "ja": "ドーム"
    },
    {
        "num": "n03223299",
        "en": "doormat",
        "ja": "玄関マット"
    },
    {
        "num": "n03240683",
        "en": "drilling_platform",
        "ja": "掘削基地"
    },
    {
        "num": "n03249569",
        "en": "drum",
        "ja": "ドラム"
    },
    {
        "num": "n03250847",
        "en": "drumstick",
        "ja": "ドラムスティック"
    },
    {
        "num": "n03255030",
        "en": "dumbbell",
        "ja": "ダンベル"
    },
    {
        "num": "n03259280",
        "en": "Dutch_oven",
        "ja": "ダッチオーブン"
    },
    {
        "num": "n03271574",
        "en": "electric_fan",
        "ja": "扇風機"
    },
    {
        "num": "n03272010",
        "en": "electric_guitar",
        "ja": "エレキギター"
    },
    {
        "num": "n03272562",
        "en": "electric_locomotive",
        "ja": "電気機関車"
    },
    {
        "num": "n03290653",
        "en": "entertainment_center",
        "ja": "娯楽施設"
    },
    {
        "num": "n03291819",
        "en": "envelope",
        "ja": "封筒"
    },
    {
        "num": "n03297495",
        "en": "espresso_maker",
        "ja": "エスプレッソマシーン"
    },
    {
        "num": "n03314780",
        "en": "face_powder",
        "ja": "フェースパウダー"
    },
    {
        "num": "n03325584",
        "en": "feather_boa",
        "ja": "フェザーボア"
    },
    {
        "num": "n03337140",
        "en": "file",
        "ja": "ファイル"
    },
    {
        "num": "n03344393",
        "en": "fireboat",
        "ja": "消防艇"
    },
    {
        "num": "n03345487",
        "en": "fire_engine",
        "ja": "消防車"
    },
    {
        "num": "n03347037",
        "en": "fire_screen",
        "ja": "ファイアースクリーン"
    },
    {
        "num": "n03355925",
        "en": "flagpole",
        "ja": "旗竿"
    },
    {
        "num": "n03372029",
        "en": "flute",
        "ja": "フルート"
    },
    {
        "num": "n03376595",
        "en": "folding_chair",
        "ja": "折り畳み式椅子"
    },
    {
        "num": "n03379051",
        "en": "football_helmet",
        "ja": "フットボールヘルメット"
    },
    {
        "num": "n03384352",
        "en": "forklift",
        "ja": "フォークリフト"
    },
    {
        "num": "n03388043",
        "en": "fountain",
        "ja": "噴水"
    },
    {
        "num": "n03388183",
        "en": "fountain_pen",
        "ja": "万年筆"
    },
    {
        "num": "n03388549",
        "en": "four-poster",
        "ja": "四柱"
    },
    {
        "num": "n03393912",
        "en": "freight_car",
        "ja": "貨車"
    },
    {
        "num": "n03394916",
        "en": "French_horn",
        "ja": "フレンチホルン"
    },
    {
        "num": "n03400231",
        "en": "frying_pan",
        "ja": "フライパン"
    },
    {
        "num": "n03404251",
        "en": "fur_coat",
        "ja": "毛皮のコート"
    },
    {
        "num": "n03417042",
        "en": "garbage_truck",
        "ja": "ごみ収集車"
    },
    {
        "num": "n03424325",
        "en": "gasmask",
        "ja": "ガスマスク"
    },
    {
        "num": "n03425413",
        "en": "gas_pump",
        "ja": "ガソリンポンプ"
    },
    {
        "num": "n03443371",
        "en": "goblet",
        "ja": "ゴブレット"
    },
    {
        "num": "n03444034",
        "en": "go-kart",
        "ja": "ゴーカート"
    },
    {
        "num": "n03445777",
        "en": "golf_ball",
        "ja": "ゴルフボール"
    },
    {
        "num": "n03445924",
        "en": "golfcart",
        "ja": "ゴルフカート"
    },
    {
        "num": "n03447447",
        "en": "gondola",
        "ja": "ゴンドラ"
    },
    {
        "num": "n03447721",
        "en": "gong",
        "ja": "ゴング"
    },
    {
        "num": "n03450230",
        "en": "gown",
        "ja": "ガウン"
    },
    {
        "num": "n03452741",
        "en": "grand_piano",
        "ja": "グランドピアノ"
    },
    {
        "num": "n03457902",
        "en": "greenhouse",
        "ja": "温室"
    },
    {
        "num": "n03459775",
        "en": "grille",
        "ja": "グリル"
    },
    {
        "num": "n03461385",
        "en": "grocery_store",
        "ja": "食料品店"
    },
    {
        "num": "n03467068",
        "en": "guillotine",
        "ja": "ギロチン"
    },
    {
        "num": "n03476684",
        "en": "hair_slide",
        "ja": "ヘアスライド"
    },
    {
        "num": "n03476991",
        "en": "hair_spray",
        "ja": "ヘアスプレー"
    },
    {
        "num": "n03478589",
        "en": "half_track",
        "ja": "半トラック"
    },
    {
        "num": "n03481172",
        "en": "hammer",
        "ja": "ハンマー"
    },
    {
        "num": "n03482405",
        "en": "hamper",
        "ja": "妨げます"
    },
    {
        "num": "n03483316",
        "en": "hand_blower",
        "ja": "ハンドブロワー"
    },
    {
        "num": "n03485407",
        "en": "hand-held_computer",
        "ja": "タブレット"
    },
    {
        "num": "n03485794",
        "en": "handkerchief",
        "ja": "ハンカチ"
    },
    {
        "num": "n03492542",
        "en": "hard_disc",
        "ja": "ハードディスク"
    },
    {
        "num": "n03494278",
        "en": "harmonica",
        "ja": "ハーモニカ"
    },
    {
        "num": "n03495258",
        "en": "harp",
        "ja": "ハープ"
    },
    {
        "num": "n03496892",
        "en": "harvester",
        "ja": "ハーベスタ"
    },
    {
        "num": "n03498962",
        "en": "hatchet",
        "ja": "斧"
    },
    {
        "num": "n03527444",
        "en": "holster",
        "ja": "ホルスター"
    },
    {
        "num": "n03529860",
        "en": "home_theater",
        "ja": "ホームシアター"
    },
    {
        "num": "n03530642",
        "en": "honeycomb",
        "ja": "ハニカム"
    },
    {
        "num": "n03532672",
        "en": "hook",
        "ja": "フック"
    },
    {
        "num": "n03534580",
        "en": "hoopskirt",
        "ja": "フープスカート"
    },
    {
        "num": "n03535780",
        "en": "horizontal_bar",
        "ja": "水平バー"
    },
    {
        "num": "n03538406",
        "en": "horse_cart",
        "ja": "馬車"
    },
    {
        "num": "n03544143",
        "en": "hourglass",
        "ja": "砂時計"
    },
    {
        "num": "n03584254",
        "en": "iPod",
        "ja": "アイフォーン"
    },
    {
        "num": "n03584829",
        "en": "iron",
        "ja": "鉄"
    },
    {
        "num": "n03590841",
        "en": "jack-o'-lantern",
        "ja": "ジャックオーランタン"
    },
    {
        "num": "n03594734",
        "en": "jean",
        "ja": "ジーンズ"
    },
    {
        "num": "n03594945",
        "en": "jeep",
        "ja": "ジープ"
    },
    {
        "num": "n03595614",
        "en": "jersey",
        "ja": "ジャージー"
    },
    {
        "num": "n03598930",
        "en": "jigsaw_puzzle",
        "ja": "ジグソーパズル"
    },
    {
        "num": "n03599486",
        "en": "jinrikisha",
        "ja": "人力車"
    },
    {
        "num": "n03602883",
        "en": "joystick",
        "ja": "ジョイスティック"
    },
    {
        "num": "n03617480",
        "en": "kimono",
        "ja": "着物"
    },
    {
        "num": "n03623198",
        "en": "knee_pad",
        "ja": "膝パッド"
    },
    {
        "num": "n03627232",
        "en": "knot",
        "ja": "結び目"
    },
    {
        "num": "n03630383",
        "en": "lab_coat",
        "ja": "白衣"
    },
    {
        "num": "n03633091",
        "en": "ladle",
        "ja": "ひしゃく"
    },
    {
        "num": "n03637318",
        "en": "lampshade",
        "ja": "ランプのかさ"
    },
    {
        "num": "n03642806",
        "en": "laptop",
        "ja": "ノートパソコン"
    },
    {
        "num": "n03649909",
        "en": "lawn_mower",
        "ja": "芝刈り機"
    },
    {
        "num": "n03657121",
        "en": "lens_cap",
        "ja": "レンズキャップ"
    },
    {
        "num": "n03658185",
        "en": "letter_opener",
        "ja": "レターオープナー"
    },
    {
        "num": "n03661043",
        "en": "library",
        "ja": "ライブラリ"
    },
    {
        "num": "n03662601",
        "en": "lifeboat",
        "ja": "救命ボート"
    },
    {
        "num": "n03666591",
        "en": "lighter",
        "ja": "ライター"
    },
    {
        "num": "n03670208",
        "en": "limousine",
        "ja": "リムジン"
    },
    {
        "num": "n03673027",
        "en": "liner",
        "ja": "ライナー"
    },
    {
        "num": "n03676483",
        "en": "lipstick",
        "ja": "口紅"
    },
    {
        "num": "n03680355",
        "en": "Loafer",
        "ja": "ローファー"
    },
    {
        "num": "n03690938",
        "en": "lotion",
        "ja": "ローション"
    },
    {
        "num": "n03691459",
        "en": "loudspeaker",
        "ja": "スピーカー"
    },
    {
        "num": "n03692522",
        "en": "loupe",
        "ja": "ルーペ"
    },
    {
        "num": "n03697007",
        "en": "lumbermill",
        "ja": "製材所"
    },
    {
        "num": "n03706229",
        "en": "magnetic_compass",
        "ja": "磁気コンパス"
    },
    {
        "num": "n03709823",
        "en": "mailbag",
        "ja": "郵袋"
    },
    {
        "num": "n03710193",
        "en": "mailbox",
        "ja": "メールボックス"
    },
    {
        "num": "n03710637",
        "en": "maillot",
        "ja": "マイヨ"
    },
    {
        "num": "n03710721",
        "en": "maillot",
        "ja": "マイヨ"
    },
    {
        "num": "n03717622",
        "en": "manhole_cover",
        "ja": "マンホールの蓋"
    },
    {
        "num": "n03720891",
        "en": "maraca",
        "ja": "マラカス"
    },
    {
        "num": "n03721384",
        "en": "marimba",
        "ja": "マリンバ"
    },
    {
        "num": "n03724870",
        "en": "mask",
        "ja": "マスク"
    },
    {
        "num": "n03729826",
        "en": "matchstick",
        "ja": "マッチ棒"
    },
    {
        "num": "n03733131",
        "en": "maypole",
        "ja": "メイポール"
    },
    {
        "num": "n03733281",
        "en": "maze",
        "ja": "迷路"
    },
    {
        "num": "n03733805",
        "en": "measuring_cup",
        "ja": "計量カップ"
    },
    {
        "num": "n03742115",
        "en": "medicine_chest",
        "ja": "薬箱"
    },
    {
        "num": "n03743016",
        "en": "megalith",
        "ja": "巨石"
    },
    {
        "num": "n03759954",
        "en": "microphone",
        "ja": "マイク"
    },
    {
        "num": "n03761084",
        "en": "microwave",
        "ja": "マイクロ波"
    },
    {
        "num": "n03763968",
        "en": "military_uniform",
        "ja": "軍服"
    },
    {
        "num": "n03764736",
        "en": "milk_can",
        "ja": "ミルク缶"
    },
    {
        "num": "n03769881",
        "en": "minibus",
        "ja": "ミニバス"
    },
    {
        "num": "n03770439",
        "en": "miniskirt",
        "ja": "ミニスカート"
    },
    {
        "num": "n03770679",
        "en": "minivan",
        "ja": "ミニバン"
    },
    {
        "num": "n03773504",
        "en": "missile",
        "ja": "ミサイル"
    },
    {
        "num": "n03775071",
        "en": "mitten",
        "ja": "ミトン"
    },
    {
        "num": "n03775546",
        "en": "mixing_bowl",
        "ja": "ミキシングボウル"
    },
    {
        "num": "n03776460",
        "en": "mobile_home",
        "ja": "移動住宅"
    },
    {
        "num": "n03777568",
        "en": "Model_T",
        "ja": "モデルT"
    },
    {
        "num": "n03777754",
        "en": "modem",
        "ja": "モデム"
    },
    {
        "num": "n03781244",
        "en": "monastery",
        "ja": "修道院"
    },
    {
        "num": "n03782006",
        "en": "monitor",
        "ja": "モニター"
    },
    {
        "num": "n03785016",
        "en": "moped",
        "ja": "モペット"
    },
    {
        "num": "n03786901",
        "en": "mortar",
        "ja": "モルタル"
    },
    {
        "num": "n03787032",
        "en": "mortarboard",
        "ja": "モルタルボード"
    },
    {
        "num": "n03788195",
        "en": "mosque",
        "ja": "モスク"
    },
    {
        "num": "n03788365",
        "en": "mosquito_net",
        "ja": "蚊帳"
    },
    {
        "num": "n03791053",
        "en": "motor_scooter",
        "ja": "スクーター"
    },
    {
        "num": "n03792782",
        "en": "mountain_bike",
        "ja": "マウンテンバイク"
    },
    {
        "num": "n03792972",
        "en": "mountain_tent",
        "ja": "山のテント"
    },
    {
        "num": "n03793489",
        "en": "mouse",
        "ja": "マウス"
    },
    {
        "num": "n03794056",
        "en": "mousetrap",
        "ja": "ネズミ捕り"
    },
    {
        "num": "n03796401",
        "en": "moving_van",
        "ja": "引っ越しトラック"
    },
    {
        "num": "n03803284",
        "en": "muzzle",
        "ja": "銃口"
    },
    {
        "num": "n03804744",
        "en": "nail",
        "ja": "ネイル"
    },
    {
        "num": "n03814639",
        "en": "neck_brace",
        "ja": "ネックブレース"
    },
    {
        "num": "n03814906",
        "en": "necklace",
        "ja": "ネックレス"
    },
    {
        "num": "n03825788",
        "en": "nipple",
        "ja": "乳首"
    },
    {
        "num": "n03832673",
        "en": "notebook",
        "ja": "ノート"
    },
    {
        "num": "n03837869",
        "en": "obelisk",
        "ja": "オベリスク"
    },
    {
        "num": "n03838899",
        "en": "oboe",
        "ja": "オーボエ"
    },
    {
        "num": "n03840681",
        "en": "ocarina",
        "ja": "オカリナ"
    },
    {
        "num": "n03841143",
        "en": "odometer",
        "ja": "オドメーター"
    },
    {
        "num": "n03843555",
        "en": "oil_filter",
        "ja": "オイルフィルター"
    },
    {
        "num": "n03854065",
        "en": "organ",
        "ja": "器官"
    },
    {
        "num": "n03857828",
        "en": "oscilloscope",
        "ja": "オシロスコープ"
    },
    {
        "num": "n03866082",
        "en": "overskirt",
        "ja": "オーバースカート"
    },
    {
        "num": "n03868242",
        "en": "oxcart",
        "ja": "牛車"
    },
    {
        "num": "n03868863",
        "en": "oxygen_mask",
        "ja": "酸素マスク"
    },
    {
        "num": "n03871628",
        "en": "packet",
        "ja": "パケット"
    },
    {
        "num": "n03873416",
        "en": "paddle",
        "ja": "パドル"
    },
    {
        "num": "n03874293",
        "en": "paddlewheel",
        "ja": "パドルホイール"
    },
    {
        "num": "n03874599",
        "en": "padlock",
        "ja": "南京錠"
    },
    {
        "num": "n03876231",
        "en": "paintbrush",
        "ja": "絵筆"
    },
    {
        "num": "n03877472",
        "en": "pajama",
        "ja": "パジャマ"
    },
    {
        "num": "n03877845",
        "en": "palace",
        "ja": "宮殿"
    },
    {
        "num": "n03884397",
        "en": "panpipe",
        "ja": "パンパイプ"
    },
    {
        "num": "n03887697",
        "en": "paper_towel",
        "ja": "ペーパータオル"
    },
    {
        "num": "n03888257",
        "en": "parachute",
        "ja": "パラシュート"
    },
    {
        "num": "n03888605",
        "en": "parallel_bars",
        "ja": "平行棒"
    },
    {
        "num": "n03891251",
        "en": "park_bench",
        "ja": "公園のベンチ"
    },
    {
        "num": "n03891332",
        "en": "parking_meter",
        "ja": "パーキングメーター"
    },
    {
        "num": "n03895866",
        "en": "passenger_car",
        "ja": "乗用車"
    },
    {
        "num": "n03899768",
        "en": "patio",
        "ja": "パティオ"
    },
    {
        "num": "n03902125",
        "en": "pay-phone",
        "ja": "有料電話"
    },
    {
        "num": "n03903868",
        "en": "pedestal",
        "ja": "台座"
    },
    {
        "num": "n03908618",
        "en": "pencil_box",
        "ja": "筆箱"
    },
    {
        "num": "n03908714",
        "en": "pencil_sharpener",
        "ja": "鉛筆削り"
    },
    {
        "num": "n03916031",
        "en": "perfume",
        "ja": "香水"
    },
    {
        "num": "n03920288",
        "en": "Petri_dish",
        "ja": "ペトリ皿"
    },
    {
        "num": "n03924679",
        "en": "photocopier",
        "ja": "コピー機"
    },
    {
        "num": "n03929660",
        "en": "pick",
        "ja": "選ぶ"
    },
    {
        "num": "n03929855",
        "en": "pickelhaube",
        "ja": "スパイク付き鉄かぶと"
    },
    {
        "num": "n03930313",
        "en": "picket_fence",
        "ja": "杭柵"
    },
    {
        "num": "n03930630",
        "en": "pickup",
        "ja": "拾う"
    },
    {
        "num": "n03933933",
        "en": "pier",
        "ja": "桟橋"
    },
    {
        "num": "n03935335",
        "en": "piggy_bank",
        "ja": "貯金箱"
    },
    {
        "num": "n03937543",
        "en": "pill_bottle",
        "ja": "錠剤瓶"
    },
    {
        "num": "n03938244",
        "en": "pillow",
        "ja": "枕"
    },
    {
        "num": "n03942813",
        "en": "ping-pong_ball",
        "ja": "ピンポン球"
    },
    {
        "num": "n03944341",
        "en": "pinwheel",
        "ja": "風車"
    },
    {
        "num": "n03947888",
        "en": "pirate",
        "ja": "海賊"
    },
    {
        "num": "n03950228",
        "en": "pitcher",
        "ja": "ピッチャー"
    },
    {
        "num": "n03954731",
        "en": "plane",
        "ja": "飛行機"
    },
    {
        "num": "n03956157",
        "en": "planetarium",
        "ja": "プラネタリウム"
    },
    {
        "num": "n03958227",
        "en": "plastic_bag",
        "ja": "ビニール袋"
    },
    {
        "num": "n03961711",
        "en": "plate_rack",
        "ja": "皿立て"
    },
    {
        "num": "n03967562",
        "en": "plow",
        "ja": "プラウ"
    },
    {
        "num": "n03970156",
        "en": "plunger",
        "ja": "プランジャー"
    },
    {
        "num": "n03976467",
        "en": "Polaroid_camera",
        "ja": "ポラロイドカメラ"
    },
    {
        "num": "n03976657",
        "en": "pole",
        "ja": "ポール"
    },
    {
        "num": "n03977966",
        "en": "police_van",
        "ja": "警察車"
    },
    {
        "num": "n03980874",
        "en": "poncho",
        "ja": "ポンチョ"
    },
    {
        "num": "n03982430",
        "en": "pool_table",
        "ja": "ビリヤード台"
    },
    {
        "num": "n03983396",
        "en": "pop_bottle",
        "ja": "ポップ・ボトル"
    },
    {
        "num": "n03991062",
        "en": "pot",
        "ja": "ポット"
    },
    {
        "num": "n03992509",
        "en": "potter's_wheel",
        "ja": "ろくろ"
    },
    {
        "num": "n03995372",
        "en": "power_drill",
        "ja": "パワードリル"
    },
    {
        "num": "n03998194",
        "en": "prayer_rug",
        "ja": "礼拝用敷物"
    },
    {
        "num": "n04004767",
        "en": "printer",
        "ja": "プリンタ"
    },
    {
        "num": "n04005630",
        "en": "prison",
        "ja": "刑務所"
    },
    {
        "num": "n04008634",
        "en": "projectile",
        "ja": "発射体"
    },
    {
        "num": "n04009552",
        "en": "projector",
        "ja": "プロジェクター"
    },
    {
        "num": "n04019541",
        "en": "puck",
        "ja": "パック"
    },
    {
        "num": "n04023962",
        "en": "punching_bag",
        "ja": "サンドバッグ"
    },
    {
        "num": "n04026417",
        "en": "purse",
        "ja": "財布"
    },
    {
        "num": "n04033901",
        "en": "quill",
        "ja": "クイル"
    },
    {
        "num": "n04033995",
        "en": "quilt",
        "ja": "キルト"
    },
    {
        "num": "n04037443",
        "en": "racer",
        "ja": "レーサー"
    },
    {
        "num": "n04039381",
        "en": "racket",
        "ja": "ラケット"
    },
    {
        "num": "n04040759",
        "en": "radiator",
        "ja": "ラジエーター"
    },
    {
        "num": "n04041544",
        "en": "radio",
        "ja": "無線"
    },
    {
        "num": "n04044716",
        "en": "radio_telescope",
        "ja": "電波望遠鏡"
    },
    {
        "num": "n04049303",
        "en": "rain_barrel",
        "ja": "天水桶"
    },
    {
        "num": "n04065272",
        "en": "recreational_vehicle",
        "ja": "RV車"
    },
    {
        "num": "n04067472",
        "en": "reel",
        "ja": "リール"
    },
    {
        "num": "n04069434",
        "en": "reflex_camera",
        "ja": "レフレックスカメラ"
    },
    {
        "num": "n04070727",
        "en": "refrigerator",
        "ja": "冷蔵庫"
    },
    {
        "num": "n04074963",
        "en": "remote_control",
        "ja": "リモコン"
    },
    {
        "num": "n04081281",
        "en": "restaurant",
        "ja": "レストラン"
    },
    {
        "num": "n04086273",
        "en": "revolver",
        "ja": "リボルバー"
    },
    {
        "num": "n04090263",
        "en": "rifle",
        "ja": "ライフル"
    },
    {
        "num": "n04099969",
        "en": "rocking_chair",
        "ja": "ロッキングチェア"
    },
    {
        "num": "n04111531",
        "en": "rotisserie",
        "ja": "焼肉料理店"
    },
    {
        "num": "n04116512",
        "en": "rubber_eraser",
        "ja": "消しゴム"
    },
    {
        "num": "n04118538",
        "en": "rugby_ball",
        "ja": "ラグビーボール"
    },
    {
        "num": "n04118776",
        "en": "rule",
        "ja": "ルール"
    },
    {
        "num": "n04120489",
        "en": "running_shoe",
        "ja": "ランニングシューズ"
    },
    {
        "num": "n04125021",
        "en": "safe",
        "ja": "安全"
    },
    {
        "num": "n04127249",
        "en": "safety_pin",
        "ja": "安全ピン"
    },
    {
        "num": "n04131690",
        "en": "saltshaker",
        "ja": "塩の入れ物"
    },
    {
        "num": "n04133789",
        "en": "sandal",
        "ja": "サンダル"
    },
    {
        "num": "n04136333",
        "en": "sarong",
        "ja": "サロン"
    },
    {
        "num": "n04141076",
        "en": "sax",
        "ja": "サックス"
    },
    {
        "num": "n04141327",
        "en": "scabbard",
        "ja": "鞘"
    },
    {
        "num": "n04141975",
        "en": "scale",
        "ja": "規模"
    },
    {
        "num": "n04146614",
        "en": "school_bus",
        "ja": "スクールバス"
    },
    {
        "num": "n04147183",
        "en": "schooner",
        "ja": "スクーナー"
    },
    {
        "num": "n04149813",
        "en": "scoreboard",
        "ja": "スコアボード"
    },
    {
        "num": "n04152593",
        "en": "screen",
        "ja": "画面"
    },
    {
        "num": "n04153751",
        "en": "screw",
        "ja": "スクリュー"
    },
    {
        "num": "n04154565",
        "en": "screwdriver",
        "ja": "ドライバー"
    },
    {
        "num": "n04162706",
        "en": "seat_belt",
        "ja": "シートベルト"
    },
    {
        "num": "n04179913",
        "en": "sewing_machine",
        "ja": "ミシン"
    },
    {
        "num": "n04192698",
        "en": "shield",
        "ja": "シールド"
    },
    {
        "num": "n04200800",
        "en": "shoe_shop",
        "ja": "靴屋"
    },
    {
        "num": "n04201297",
        "en": "shoji",
        "ja": "障子"
    },
    {
        "num": "n04204238",
        "en": "shopping_basket",
        "ja": "買い物かご"
    },
    {
        "num": "n04204347",
        "en": "shopping_cart",
        "ja": "ショッピングカート"
    },
    {
        "num": "n04208210",
        "en": "shovel",
        "ja": "シャベル"
    },
    {
        "num": "n04209133",
        "en": "shower_cap",
        "ja": "シャワーキャップ"
    },
    {
        "num": "n04209239",
        "en": "shower_curtain",
        "ja": "シャワーカーテン"
    },
    {
        "num": "n04228054",
        "en": "ski",
        "ja": "スキー"
    },
    {
        "num": "n04229816",
        "en": "ski_mask",
        "ja": "スキーマスク"
    },
    {
        "num": "n04235860",
        "en": "sleeping_bag",
        "ja": "寝袋"
    },
    {
        "num": "n04238763",
        "en": "slide_rule",
        "ja": "計算尺"
    },
    {
        "num": "n04239074",
        "en": "sliding_door",
        "ja": "引き戸"
    },
    {
        "num": "n04243546",
        "en": "slot",
        "ja": "スロット"
    },
    {
        "num": "n04251144",
        "en": "snorkel",
        "ja": "スノーケル"
    },
    {
        "num": "n04252077",
        "en": "snowmobile",
        "ja": "スノーモービル"
    },
    {
        "num": "n04252225",
        "en": "snowplow",
        "ja": "除雪機"
    },
    {
        "num": "n04254120",
        "en": "soap_dispenser",
        "ja": "ソープディスペンサー"
    },
    {
        "num": "n04254680",
        "en": "soccer_ball",
        "ja": "サッカーボール"
    },
    {
        "num": "n04254777",
        "en": "sock",
        "ja": "靴下"
    },
    {
        "num": "n04258138",
        "en": "solar_dish",
        "ja": "太陽の皿"
    },
    {
        "num": "n04259630",
        "en": "sombrero",
        "ja": "ソンブレロ"
    },
    {
        "num": "n04263257",
        "en": "soup_bowl",
        "ja": "スープ皿"
    },
    {
        "num": "n04264628",
        "en": "space_bar",
        "ja": "スペースキー"
    },
    {
        "num": "n04265275",
        "en": "space_heater",
        "ja": "スペースヒーター"
    },
    {
        "num": "n04266014",
        "en": "space_shuttle",
        "ja": "スペースシャトル"
    },
    {
        "num": "n04270147",
        "en": "spatula",
        "ja": "へら"
    },
    {
        "num": "n04273569",
        "en": "speedboat",
        "ja": "スピードボート"
    },
    {
        "num": "n04275548",
        "en": "spider_web",
        "ja": "クモの巣"
    },
    {
        "num": "n04277352",
        "en": "spindle",
        "ja": "スピンドル"
    },
    {
        "num": "n04285008",
        "en": "sports_car",
        "ja": "スポーツカー"
    },
    {
        "num": "n04286575",
        "en": "spotlight",
        "ja": "スポットライト"
    },
    {
        "num": "n04296562",
        "en": "stage",
        "ja": "ステージ"
    },
    {
        "num": "n04310018",
        "en": "steam_locomotive",
        "ja": "蒸気機関車"
    },
    {
        "num": "n04311004",
        "en": "steel_arch_bridge",
        "ja": "鋼アーチ橋"
    },
    {
        "num": "n04311174",
        "en": "steel_drum",
        "ja": "スチールドラム"
    },
    {
        "num": "n04317175",
        "en": "stethoscope",
        "ja": "聴診器"
    },
    {
        "num": "n04325704",
        "en": "stole",
        "ja": "ストール"
    },
    {
        "num": "n04326547",
        "en": "stone_wall",
        "ja": "石垣"
    },
    {
        "num": "n04328186",
        "en": "stopwatch",
        "ja": "ストップウォッチ"
    },
    {
        "num": "n04330267",
        "en": "stove",
        "ja": "レンジ"
    },
    {
        "num": "n04332243",
        "en": "strainer",
        "ja": "ストレーナー"
    },
    {
        "num": "n04335435",
        "en": "streetcar",
        "ja": "路面電車"
    },
    {
        "num": "n04336792",
        "en": "stretcher",
        "ja": "ストレッチャー"
    },
    {
        "num": "n04344873",
        "en": "studio_couch",
        "ja": "スタジオソファ"
    },
    {
        "num": "n04346328",
        "en": "stupa",
        "ja": "仏舎利塔"
    },
    {
        "num": "n04347754",
        "en": "submarine",
        "ja": "潜水艦"
    },
    {
        "num": "n04350905",
        "en": "suit",
        "ja": "スーツ"
    },
    {
        "num": "n04355338",
        "en": "sundial",
        "ja": "日時計"
    },
    {
        "num": "n04355933",
        "en": "sunglass",
        "ja": "サングラス"
    },
    {
        "num": "n04356056",
        "en": "sunglasses",
        "ja": "サングラス"
    },
    {
        "num": "n04357314",
        "en": "sunscreen",
        "ja": "日焼け止め剤"
    },
    {
        "num": "n04366367",
        "en": "suspension_bridge",
        "ja": "つり橋"
    },
    {
        "num": "n04367480",
        "en": "swab",
        "ja": "綿棒"
    },
    {
        "num": "n04370456",
        "en": "sweatshirt",
        "ja": "トレーナー"
    },
    {
        "num": "n04371430",
        "en": "swimming_trunks",
        "ja": "海パン"
    },
    {
        "num": "n04371774",
        "en": "swing",
        "ja": "スイング"
    },
    {
        "num": "n04372370",
        "en": "switch",
        "ja": "スイッチ"
    },
    {
        "num": "n04376876",
        "en": "syringe",
        "ja": "注射器"
    },
    {
        "num": "n04380533",
        "en": "table_lamp",
        "ja": "電気スタンド"
    },
    {
        "num": "n04389033",
        "en": "tank",
        "ja": "タンク"
    },
    {
        "num": "n04392985",
        "en": "tape_player",
        "ja": "テーププレーヤー"
    },
    {
        "num": "n04398044",
        "en": "teapot",
        "ja": "ティーポット"
    },
    {
        "num": "n04399382",
        "en": "teddy",
        "ja": "テディ"
    },
    {
        "num": "n04404412",
        "en": "television",
        "ja": "テレビ"
    },
    {
        "num": "n04409515",
        "en": "tennis_ball",
        "ja": "テニスボール"
    },
    {
        "num": "n04417672",
        "en": "thatch",
        "ja": "サッチ"
    },
    {
        "num": "n04418357",
        "en": "theater_curtain",
        "ja": "劇場のカーテン"
    },
    {
        "num": "n04423845",
        "en": "thimble",
        "ja": "指ぬき"
    },
    {
        "num": "n04428191",
        "en": "thresher",
        "ja": "脱穀機"
    },
    {
        "num": "n04429376",
        "en": "throne",
        "ja": "王位"
    },
    {
        "num": "n04435653",
        "en": "tile_roof",
        "ja": "瓦屋根"
    },
    {
        "num": "n04442312",
        "en": "toaster",
        "ja": "トースター"
    },
    {
        "num": "n04443257",
        "en": "tobacco_shop",
        "ja": "タバコ屋"
    },
    {
        "num": "n04447861",
        "en": "toilet_seat",
        "ja": "便座"
    },
    {
        "num": "n04456115",
        "en": "torch",
        "ja": "トーチ"
    },
    {
        "num": "n04458633",
        "en": "totem_pole",
        "ja": "トーテムポール"
    },
    {
        "num": "n04461696",
        "en": "tow_truck",
        "ja": "レッカー車"
    },
    {
        "num": "n04462240",
        "en": "toyshop",
        "ja": "玩具屋"
    },
    {
        "num": "n04465501",
        "en": "tractor",
        "ja": "トラクター"
    },
    {
        "num": "n04467665",
        "en": "trailer_truck",
        "ja": "トレーラートラック"
    },
    {
        "num": "n04476259",
        "en": "tray",
        "ja": "トレイ"
    },
    {
        "num": "n04479046",
        "en": "trench_coat",
        "ja": "トレンチコート"
    },
    {
        "num": "n04482393",
        "en": "tricycle",
        "ja": "三輪車"
    },
    {
        "num": "n04483307",
        "en": "trimaran",
        "ja": "三胴船"
    },
    {
        "num": "n04485082",
        "en": "tripod",
        "ja": "三脚"
    },
    {
        "num": "n04486054",
        "en": "triumphal_arch",
        "ja": "凱旋門"
    },
    {
        "num": "n04487081",
        "en": "trolleybus",
        "ja": "トロリーバス"
    },
    {
        "num": "n04487394",
        "en": "trombone",
        "ja": "トロンボーン"
    },
    {
        "num": "n04493381",
        "en": "tub",
        "ja": "バスタブ"
    },
    {
        "num": "n04501370",
        "en": "turnstile",
        "ja": "回転ドア"
    },
    {
        "num": "n04505470",
        "en": "typewriter_keyboard",
        "ja": "タイプライターのキーボード"
    },
    {
        "num": "n04507155",
        "en": "umbrella",
        "ja": "傘"
    },
    {
        "num": "n04509417",
        "en": "unicycle",
        "ja": "一輪車"
    },
    {
        "num": "n04515003",
        "en": "upright",
        "ja": "直立"
    },
    {
        "num": "n04517823",
        "en": "vacuum",
        "ja": "真空"
    },
    {
        "num": "n04522168",
        "en": "vase",
        "ja": "花瓶"
    },
    {
        "num": "n04523525",
        "en": "vault",
        "ja": "ボールト"
    },
    {
        "num": "n04525038",
        "en": "velvet",
        "ja": "ベルベット"
    },
    {
        "num": "n04525305",
        "en": "vending_machine",
        "ja": "自動販売機"
    },
    {
        "num": "n04532106",
        "en": "vestment",
        "ja": "祭服"
    },
    {
        "num": "n04532670",
        "en": "viaduct",
        "ja": "高架橋"
    },
    {
        "num": "n04536866",
        "en": "violin",
        "ja": "バイオリン"
    },
    {
        "num": "n04540053",
        "en": "volleyball",
        "ja": "バレーボール"
    },
    {
        "num": "n04542943",
        "en": "waffle_iron",
        "ja": "ワッフル焼き型"
    },
    {
        "num": "n04548280",
        "en": "wall_clock",
        "ja": "壁時計"
    },
    {
        "num": "n04548362",
        "en": "wallet",
        "ja": "財布"
    },
    {
        "num": "n04550184",
        "en": "wardrobe",
        "ja": "ワードローブ"
    },
    {
        "num": "n04552348",
        "en": "warplane",
        "ja": "戦闘機"
    },
    {
        "num": "n04553703",
        "en": "washbasin",
        "ja": "洗面器"
    },
    {
        "num": "n04554684",
        "en": "washer",
        "ja": "ワッシャー"
    },
    {
        "num": "n04557648",
        "en": "water_bottle",
        "ja": "水筒"
    },
    {
        "num": "n04560804",
        "en": "water_jug",
        "ja": "水差し"
    },
    {
        "num": "n04562935",
        "en": "water_tower",
        "ja": "給水塔"
    },
    {
        "num": "n04579145",
        "en": "whiskey_jug",
        "ja": "ウイスキージャグ"
    },
    {
        "num": "n04579432",
        "en": "whistle",
        "ja": "ホイッスル"
    },
    {
        "num": "n04584207",
        "en": "wig",
        "ja": "かつら"
    },
    {
        "num": "n04589890",
        "en": "window_screen",
        "ja": "窓網戸"
    },
    {
        "num": "n04590129",
        "en": "window_shade",
        "ja": "ブラインド"
    },
    {
        "num": "n04591157",
        "en": "Windsor_tie",
        "ja": "ウィンザーネクタイ"
    },
    {
        "num": "n04591713",
        "en": "wine_bottle",
        "ja": "ワインボトル"
    },
    {
        "num": "n04592741",
        "en": "wing",
        "ja": "翼"
    },
    {
        "num": "n04596742",
        "en": "wok",
        "ja": "中華鍋"
    },
    {
        "num": "n04597913",
        "en": "wooden_spoon",
        "ja": "木製スプーン"
    },
    {
        "num": "n04599235",
        "en": "wool",
        "ja": "ウール"
    },
    {
        "num": "n04604644",
        "en": "worm_fence",
        "ja": "ワームフェンス"
    },
    {
        "num": "n04606251",
        "en": "wreck",
        "ja": "難破船"
    },
    {
        "num": "n04612504",
        "en": "yawl",
        "ja": "ヨール"
    },
    {
        "num": "n04613696",
        "en": "yurt",
        "ja": "パオ"
    },
    {
        "num": "n06359193",
        "en": "web_site",
        "ja": "サイト"
    },
    {
        "num": "n06596364",
        "en": "comic_book",
        "ja": "コミックブック"
    },
    {
        "num": "n06785654",
        "en": "crossword_puzzle",
        "ja": "クロスワードパズル"
    },
    {
        "num": "n06794110",
        "en": "street_sign",
        "ja": "道路標識"
    },
    {
        "num": "n06874185",
        "en": "traffic_light",
        "ja": "交通信号灯"
    },
    {
        "num": "n07248320",
        "en": "book_jacket",
        "ja": "ブックカバー"
    },
    {
        "num": "n07565083",
        "en": "menu",
        "ja": "メニュー"
    },
    {
        "num": "n07579787",
        "en": "plate",
        "ja": "プレート"
    },
    {
        "num": "n07583066",
        "en": "guacamole",
        "ja": "グアカモーレ"
    },
    {
        "num": "n07584110",
        "en": "consomme",
        "ja": "コンソメ"
    },
    {
        "num": "n07590611",
        "en": "hot_pot",
        "ja": "ホットポット"
    },
    {
        "num": "n07613480",
        "en": "trifle",
        "ja": "パフェ"
    },
    {
        "num": "n07614500",
        "en": "ice_cream",
        "ja": "アイスクリーム"
    },
    {
        "num": "n07615774",
        "en": "ice_lolly",
        "ja": "アイスキャンディー"
    },
    {
        "num": "n07684084",
        "en": "French_loaf",
        "ja": "フランスパン"
    },
    {
        "num": "n07693725",
        "en": "bagel",
        "ja": "ベーグル"
    },
    {
        "num": "n07695742",
        "en": "pretzel",
        "ja": "プレッツェル"
    },
    {
        "num": "n07697313",
        "en": "cheeseburger",
        "ja": "チーズバーガー"
    },
    {
        "num": "n07697537",
        "en": "hotdog",
        "ja": "ホットドッグ"
    },
    {
        "num": "n07711569",
        "en": "mashed_potato",
        "ja": "マッシュポテト"
    },
    {
        "num": "n07714571",
        "en": "head_cabbage",
        "ja": "キャベツ"
    },
    {
        "num": "n07714990",
        "en": "broccoli",
        "ja": "ブロッコリー"
    },
    {
        "num": "n07715103",
        "en": "cauliflower",
        "ja": "カリフラワー"
    },
    {
        "num": "n07716358",
        "en": "zucchini",
        "ja": "ズッキーニ"
    },
    {
        "num": "n07716906",
        "en": "spaghetti_squash",
        "ja": "そうめんかぼちゃ"
    },
    {
        "num": "n07717410",
        "en": "acorn_squash",
        "ja": "ドングリかぼちゃ"
    },
    {
        "num": "n07717556",
        "en": "butternut_squash",
        "ja": "カボチャ"
    },
    {
        "num": "n07718472",
        "en": "cucumber",
        "ja": "キュウリ"
    },
    {
        "num": "n07718747",
        "en": "artichoke",
        "ja": "アーティチョーク"
    },
    {
        "num": "n07720875",
        "en": "bell_pepper",
        "ja": "ピーマン"
    },
    {
        "num": "n07730033",
        "en": "cardoon",
        "ja": "カルドン"
    },
    {
        "num": "n07734744",
        "en": "mushroom",
        "ja": "キノコ"
    },
    {
        "num": "n07742313",
        "en": "Granny_Smith",
        "ja": "リンゴ"
    },
    {
        "num": "n07745940",
        "en": "strawberry",
        "ja": "イチゴ"
    },
    {
        "num": "n07747607",
        "en": "orange",
        "ja": "オレンジ"
    },
    {
        "num": "n07749582",
        "en": "lemon",
        "ja": "レモン"
    },
    {
        "num": "n07753113",
        "en": "fig",
        "ja": "イチジク"
    },
    {
        "num": "n07753275",
        "en": "pineapple",
        "ja": "パイナップル"
    },
    {
        "num": "n07753592",
        "en": "banana",
        "ja": "バナナ"
    },
    {
        "num": "n07754684",
        "en": "jackfruit",
        "ja": "パラミツ"
    },
    {
        "num": "n07760859",
        "en": "custard_apple",
        "ja": "カスタードアップル"
    },
    {
        "num": "n07768694",
        "en": "pomegranate",
        "ja": "ザクロ"
    },
    {
        "num": "n07802026",
        "en": "hay",
        "ja": "干し草"
    },
    {
        "num": "n07831146",
        "en": "carbonara",
        "ja": "カルボナーラ"
    },
    {
        "num": "n07836838",
        "en": "chocolate_sauce",
        "ja": "チョコレートソース"
    },
    {
        "num": "n07860988",
        "en": "dough",
        "ja": "パン生地"
    },
    {
        "num": "n07871810",
        "en": "meat_loaf",
        "ja": "ミートローフ"
    },
    {
        "num": "n07873807",
        "en": "pizza",
        "ja": "ピザ"
    },
    {
        "num": "n07875152",
        "en": "potpie",
        "ja": "ポットパイ"
    },
    {
        "num": "n07880968",
        "en": "burrito",
        "ja": "ブリトー"
    },
    {
        "num": "n07892512",
        "en": "red_wine",
        "ja": "赤ワイン"
    },
    {
        "num": "n07920052",
        "en": "espresso",
        "ja": "エスプレッソ"
    },
    {
        "num": "n07930864",
        "en": "cup",
        "ja": "カップ"
    },
    {
        "num": "n07932039",
        "en": "eggnog",
        "ja": "エッグノッグ"
    },
    {
        "num": "n09193705",
        "en": "alp",
        "ja": "アルプス"
    },
    {
        "num": "n09229709",
        "en": "bubble",
        "ja": "バブル"
    },
    {
        "num": "n09246464",
        "en": "cliff",
        "ja": "崖"
    },
    {
        "num": "n09256479",
        "en": "coral_reef",
        "ja": "サンゴ礁"
    },
    {
        "num": "n09288635",
        "en": "geyser",
        "ja": "間欠泉"
    },
    {
        "num": "n09332890",
        "en": "lakeside",
        "ja": "湖畔"
    },
    {
        "num": "n09399592",
        "en": "promontory",
        "ja": "岬"
    },
    {
        "num": "n09421951",
        "en": "sandbar",
        "ja": "砂州"
    },
    {
        "num": "n09428293",
        "en": "seashore",
        "ja": "海岸"
    },
    {
        "num": "n09468604",
        "en": "valley",
        "ja": "谷"
    },
    {
        "num": "n09472597",
        "en": "volcano",
        "ja": "火山"
    },
    {
        "num": "n09835506",
        "en": "ballplayer",
        "ja": "野球選手"
    },
    {
        "num": "n10148035",
        "en": "groom",
        "ja": "新郎"
    },
    {
        "num": "n10565667",
        "en": "scuba_diver",
        "ja": "スキューバダイバー"
    },
    {
        "num": "n11879895",
        "en": "rapeseed",
        "ja": "菜種"
    },
    {
        "num": "n11939491",
        "en": "daisy",
        "ja": "デイジー"
    },
    {
        "num": "n12057211",
        "en": "yellow_lady's_slipper",
        "ja": "蘭"
    },
    {
        "num": "n12144580",
        "en": "corn",
        "ja": "トウモロコシ"
    },
    {
        "num": "n12267677",
        "en": "acorn",
        "ja": "ドングリ"
    },
    {
        "num": "n12620546",
        "en": "hip",
        "ja": "ヒップ"
    },
    {
        "num": "n12768682",
        "en": "buckeye",
        "ja": "トチノキ"
    },
    {
        "num": "n12985857",
        "en": "coral_fungus",
        "ja": "サンゴ菌"
    },
    {
        "num": "n12998815",
        "en": "agaric",
        "ja": "ハラタケ"
    },
    {
        "num": "n13037406",
        "en": "gyromitra",
        "ja": "シャグマアミガサタケ"
    },
    {
        "num": "n13040303",
        "en": "stinkhorn",
        "ja": "スッポンタケ"
    },
    {
        "num": "n13044778",
        "en": "earthstar",
        "ja": "ハラタケ"
    },
    {
        "num": "n13052670",
        "en": "hen-of-the-woods",
        "ja": "舞茸"
    },
    {
        "num": "n13054560",
        "en": "bolete",
        "ja": "きのこ"
    },
    {
        "num": "n13133613",
        "en": "ear",
        "ja": "耳"
    },
    {
        "num": "n15075141",
        "en": "toilet_tissue",
        "ja": "トイレットペーパー"
    }
];

export class SideCards extends React.Component {

    handleClick(newLabel, Loc, ID) {
        this.props.onLabelChange(newLabel, Loc, ID);
    }

    returntext(i) {
        var string = jptext[parseInt(i, 0)].en.replace(/_/g, " ");
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    createCard() {
        var cardItems = cardDir.map(asdf => {
            const crdName = asdf.cardName, crdID = jptext[parseInt(asdf.tabID, 0)].num, crdLoc = asdf.cardLoc;
            return (
                <button className="cardElement" key={asdf.tabID} onClick={this.handleClick.bind(this, crdName, crdLoc, crdID)}>
                    <Image size='tiny' floated='left' src={crdLoc} />
                    <div className="text">
                        <p>
                            {this.returntext(asdf.tabID)}
                            <br/>
                            {jptext[parseInt(asdf.tabID, 0)].ja}
                        </p>
                    </div>
                </button>
            );
        });
        return cardItems;
    }

    render() {
        return (
            <div> {this.createCard()} </div>
        );
    }
}