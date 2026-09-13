// Master Roster of 300 Prime Characters: 100 One Piece Prime + 100 Naruto Prime (0 Boruto) + 100 Marvel Prime
const DEFAULT_CHARACTERS = [
    {
        "id":  "op_1",
        "name":  "Gol D. Roger",
        "title":  "Pirate King (Prime Peak)",
        "role":  "Captain",
        "universe":  "onepiece",
        "basePrice":  15000,
        "bounty":  "5,564,800,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Roger"
    },
    {
        "id":  "op_2",
        "name":  "Edward Newgate",
        "title":  "Whitebeard (Prime Strongest Man)",
        "role":  "Yonko",
        "universe":  "onepiece",
        "basePrice":  14500,
        "bounty":  "5,046,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Whitebeard"
    },
    {
        "id":  "op_3",
        "name":  "Rocks D. Xebec",
        "title":  "Captain of Rocks (God Valley Ruler)",
        "role":  "Legendary Pirate",
        "universe":  "onepiece",
        "basePrice":  14800,
        "bounty":  "5,200,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Rocks"
    },
    {
        "id":  "op_4",
        "name":  "Monkey D. Garp",
        "title":  "Hero of the Marines (Prime Galaxy Impact)",
        "role":  "Marine Legend",
        "universe":  "onepiece",
        "basePrice":  14000,
        "bounty":  "3,000,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Garp"
    },
    {
        "id":  "op_5",
        "name":  "Sengoku the Buddha",
        "title":  "Fleet Admiral (Prime Daibutsu)",
        "role":  "Fleet Admiral",
        "universe":  "onepiece",
        "basePrice":  13500,
        "bounty":  "3,000,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Sengoku"
    },
    {
        "id":  "op_6",
        "name":  "Silvers Rayleigh",
        "title":  "Dark King (Prime Right Hand)",
        "role":  "First Mate",
        "universe":  "onepiece",
        "basePrice":  13000,
        "bounty":  "3,500,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Rayleigh"
    },
    {
        "id":  "op_7",
        "name":  "Scopper Gaban",
        "title":  "Left Hand of Pirate King (Dual Axes)",
        "role":  "Roger Pirates",
        "universe":  "onepiece",
        "basePrice":  12000,
        "bounty":  "2,800,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Gaban"
    },
    {
        "id":  "op_8",
        "name":  "Joy Boy",
        "title":  "Sun God Nika (Ancient Warrior)",
        "role":  "Ancient Legend",
        "universe":  "onepiece",
        "basePrice":  16000,
        "bounty":  "6,000,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=JoyBoy"
    },
    {
        "id":  "op_9",
        "name":  "Imu Nerona",
        "title":  "Supreme Sovereign of World Government",
        "role":  "Empty Throne",
        "universe":  "onepiece",
        "basePrice":  16000,
        "bounty":  "6,000,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Imu"
    },
    {
        "id":  "op_10",
        "name":  "Saint Jaygarcia Saturn",
        "title":  "Warrior God of Science \u0026 Defense",
        "role":  "Elder (Gorosei)",
        "universe":  "onepiece",
        "basePrice":  11000,
        "bounty":  "2,500,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Saturn"
    },
    {
        "id":  "op_11",
        "name":  "Saint Topman Warcury",
        "title":  "Warrior God of Justice",
        "role":  "Elder (Gorosei)",
        "universe":  "onepiece",
        "basePrice":  11500,
        "bounty":  "2,700,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Warcury"
    },
    {
        "id":  "op_12",
        "name":  "Saint Ethanbaron V. Nusjuro",
        "title":  "Warrior God of Finance (Bakotsu Blade)",
        "role":  "Elder (Gorosei)",
        "universe":  "onepiece",
        "basePrice":  11500,
        "bounty":  "2,700,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Nusjuro"
    },
    {
        "id":  "op_13",
        "name":  "Saint Marcus Mars",
        "title":  "Warrior God of Environment",
        "role":  "Elder (Gorosei)",
        "universe":  "onepiece",
        "basePrice":  11000,
        "bounty":  "2,500,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Mars"
    },
    {
        "id":  "op_14",
        "name":  "Saint Shepherd Ju Peter",
        "title":  "Warrior God of Agriculture",
        "role":  "Elder (Gorosei)",
        "universe":  "onepiece",
        "basePrice":  11000,
        "bounty":  "2,500,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=JuPeter"
    },
    {
        "id":  "op_15",
        "name":  "Saint Figarland Garling",
        "title":  "Supreme Commander Gods Knights",
        "role":  "God Knight",
        "universe":  "onepiece",
        "basePrice":  12500,
        "bounty":  "3,200,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Garling"
    },
    {
        "id":  "op_16",
        "name":  "Monkey D. Dragon",
        "title":  "Worlds Worst Criminal (Supreme Revolutionary)",
        "role":  "Revolutionary Leader",
        "universe":  "onepiece",
        "basePrice":  14500,
        "bounty":  "5,000,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Dragon"
    },
    {
        "id":  "op_17",
        "name":  "Red-Haired Shanks",
        "title":  "Emperor Shanks (Divine Departure Peak)",
        "role":  "Yonko",
        "universe":  "onepiece",
        "basePrice":  14200,
        "bounty":  "4,048,900,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Shanks"
    },
    {
        "id":  "op_18",
        "name":  "Dracule Mihawk",
        "title":  "Worlds Strongest Swordsman (Black Blade Yoru)",
        "role":  "Cross Guild",
        "universe":  "onepiece",
        "basePrice":  13800,
        "bounty":  "3,590,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Mihawk"
    },
    {
        "id":  "op_19",
        "name":  "Kaido of the Beasts",
        "title":  "Prime King of Beasts (Flame Dragon Torch)",
        "role":  "Yonko",
        "universe":  "onepiece",
        "basePrice":  14000,
        "bounty":  "4,611,100,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kaido"
    },
    {
        "id":  "op_20",
        "name":  "Charlotte Linlin",
        "title":  "Big Mom (Prime Soul Pocus \u0026 Misery)",
        "role":  "Yonko",
        "universe":  "onepiece",
        "basePrice":  13800,
        "bounty":  "4,388,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=BigMom"
    },
    {
        "id":  "op_21",
        "name":  "Marshall D. Teach",
        "title":  "Blackbeard (Dual Fruit Emperor)",
        "role":  "Yonko",
        "universe":  "onepiece",
        "basePrice":  13500,
        "bounty":  "3,996,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Blackbeard"
    },
    {
        "id":  "op_22",
        "name":  "Monkey D. Luffy",
        "title":  "Gear 5 Sun God Nika Awakened",
        "role":  "Yonko / Straw Hat",
        "universe":  "onepiece",
        "basePrice":  13500,
        "bounty":  "3,000,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Luffy"
    },
    {
        "id":  "op_23",
        "name":  "Sakazuki",
        "title":  "Akainu (Fleet Admiral Magma Hound)",
        "role":  "Fleet Admiral",
        "universe":  "onepiece",
        "basePrice":  13500,
        "bounty":  "3,000,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Akainu"
    },
    {
        "id":  "op_24",
        "name":  "Kuzan",
        "title":  "Aokiji (Ice Time \u0026 Titan Captain)",
        "role":  "Former Admiral",
        "universe":  "onepiece",
        "basePrice":  13000,
        "bounty":  "3,000,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Aokiji"
    },
    {
        "id":  "op_25",
        "name":  "Borsalino",
        "title":  "Kizaru (Glint-Glint Light Speed)",
        "role":  "Admiral",
        "universe":  "onepiece",
        "basePrice":  13000,
        "bounty":  "3,000,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kizaru"
    },
    {
        "id":  "op_26",
        "name":  "Issho",
        "title":  "Fujitora (Gravity Blade Meteor Master)",
        "role":  "Admiral",
        "universe":  "onepiece",
        "basePrice":  12000,
        "bounty":  "3,000,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Fujitora"
    },
    {
        "id":  "op_27",
        "name":  "Aramaki",
        "title":  "Ryokugyu (Woods-Woods Nature God)",
        "role":  "Admiral",
        "universe":  "onepiece",
        "basePrice":  11500,
        "bounty":  "3,000,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Ryokugyu"
    },
    {
        "id":  "op_28",
        "name":  "Kozuki Oden",
        "title":  "Lord of Kuri (Paradise Waterfall)",
        "role":  "Legendary Samurai",
        "universe":  "onepiece",
        "basePrice":  13200,
        "bounty":  "3,500,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Oden"
    },
    {
        "id":  "op_29",
        "name":  "Roronoa Zoro",
        "title":  "King of Hell (Ashura \u0026 Advanced CoC)",
        "role":  "Swordsman / Straw Hat",
        "universe":  "onepiece",
        "basePrice":  11500,
        "bounty":  "1,111,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Zoro"
    },
    {
        "id":  "op_30",
        "name":  "Vinsmoke Sanji",
        "title":  "Ifrit Jambe (Exoskeleton \u0026 Blue Flames)",
        "role":  "Cook / Straw Hat",
        "universe":  "onepiece",
        "basePrice":  11000,
        "bounty":  "1,032,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Sanji"
    },
    {
        "id":  "op_31",
        "name":  "Trafalgar D. Water Law",
        "title":  "KROOM Awakened Ope-Ope Surgeon",
        "role":  "Heart Pirates Captain",
        "universe":  "onepiece",
        "basePrice":  11800,
        "bounty":  "3,000,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Law"
    },
    {
        "id":  "op_32",
        "name":  "Eustass Kid",
        "title":  "Damned Punk Awakened Magnetic Railgun",
        "role":  "Kid Pirates Captain",
        "universe":  "onepiece",
        "basePrice":  11500,
        "bounty":  "3,000,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kid"
    },
    {
        "id":  "op_33",
        "name":  "Yamato",
        "title":  "Son of Kaido (Divine Okuchi-no-Makami)",
        "role":  "Wano Guardian",
        "universe":  "onepiece",
        "basePrice":  11000,
        "bounty":  "1,200,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Yamato"
    },
    {
        "id":  "op_34",
        "name":  "Marco the Phoenix",
        "title":  "Undying Blue Flame Rebirth",
        "role":  "1st Division Commander",
        "universe":  "onepiece",
        "basePrice":  10500,
        "bounty":  "1,374,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Marco"
    },
    {
        "id":  "op_35",
        "name":  "King the Conflagration",
        "title":  "Lunarian Flame Imperial Dragon",
        "role":  "All-Star Commander",
        "universe":  "onepiece",
        "basePrice":  10500,
        "bounty":  "1,390,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=King"
    },
    {
        "id":  "op_36",
        "name":  "Charlotte Katakuri",
        "title":  "Future Sight \u0026 Awakened Mochi",
        "role":  "Sweet Commander",
        "universe":  "onepiece",
        "basePrice":  10500,
        "bounty":  "1,057,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Katakuri"
    },
    {
        "id":  "op_37",
        "name":  "Queen the Plague",
        "title":  "Cyborg Brachiosaurus Virus Scientist",
        "role":  "All-Star Commander",
        "universe":  "onepiece",
        "basePrice":  9500,
        "bounty":  "1,320,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Queen"
    },
    {
        "id":  "op_38",
        "name":  "Charlotte Smoothie",
        "title":  "Giant Moisture Squeeze Sword Master",
        "role":  "Sweet Commander",
        "universe":  "onepiece",
        "basePrice":  9000,
        "bounty":  "932,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Smoothie"
    },
    {
        "id":  "op_39",
        "name":  "Charlotte Cracker",
        "title":  "Infinite Biscuit Soldier Army",
        "role":  "Sweet Commander",
        "universe":  "onepiece",
        "basePrice":  8800,
        "bounty":  "860,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Cracker"
    },
    {
        "id":  "op_40",
        "name":  "Sir Crocodile",
        "title":  "Desert King (Ground Death \u0026 Sables)",
        "role":  "Cross Guild Leader",
        "universe":  "onepiece",
        "basePrice":  10800,
        "bounty":  "1,965,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Crocodile"
    },
    {
        "id":  "op_41",
        "name":  "Donquixote Doflamingo",
        "title":  "Heavenly Yaksha (Awakened God Thread)",
        "role":  "Warlord Broker",
        "universe":  "onepiece",
        "basePrice":  9800,
        "bounty":  "1,000,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Doflamingo"
    },
    {
        "id":  "op_42",
        "name":  "Boa Hancock",
        "title":  "Pirate Empress (Slave Arrow \u0026 CoC)",
        "role":  "Kuja Empress",
        "universe":  "onepiece",
        "basePrice":  10500,
        "bounty":  "1,659,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Hancock"
    },
    {
        "id":  "op_43",
        "name":  "Bartholomew Kuma",
        "title":  "Tyrant of Sorbet (Awakened Ursus Shock)",
        "role":  "Revolutionary",
        "universe":  "onepiece",
        "basePrice":  9800,
        "bounty":  "1,100,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kuma"
    },
    {
        "id":  "op_44",
        "name":  "Jinbe",
        "title":  "Knight of Sea (Fish-Man Karate Ogi)",
        "role":  "Helmsman / Straw Hat",
        "universe":  "onepiece",
        "basePrice":  9800,
        "bounty":  "1,100,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Jinbe"
    },
    {
        "id":  "op_45",
        "name":  "Gecko Moria",
        "title":  "Prime Master of Shadows (Shadows Asgard)",
        "role":  "Former Warlord",
        "universe":  "onepiece",
        "basePrice":  8500,
        "bounty":  "800,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Moria"
    },
    {
        "id":  "op_46",
        "name":  "Enel",
        "title":  "God of Skypiea (200M Volts Amaru)",
        "role":  "God of Skypiea",
        "universe":  "onepiece",
        "basePrice":  9500,
        "bounty":  "1,000,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Enel"
    },
    {
        "id":  "op_47",
        "name":  "Rob Lucci",
        "title":  "Awakened Leopard CP0 Supreme",
        "role":  "CP0 Supreme Agent",
        "universe":  "onepiece",
        "basePrice":  9800,
        "bounty":  "1,200,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Lucci"
    },
    {
        "id":  "op_48",
        "name":  "Kaku",
        "title":  "Awakened Giraffe Tempest Master",
        "role":  "CP0 Agent",
        "universe":  "onepiece",
        "basePrice":  8000,
        "bounty":  "700,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kaku"
    },
    {
        "id":  "op_49",
        "name":  "Stussy",
        "title":  "Succubus Clone Vampire Agent",
        "role":  "CP0 Infiltrator",
        "universe":  "onepiece",
        "basePrice":  8000,
        "bounty":  "600,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Stussy"
    },
    {
        "id":  "op_50",
        "name":  "Shiryu of the Rain",
        "title":  "Clear-Clear Master Executioner",
        "role":  "Titanic Captain (2nd)",
        "universe":  "onepiece",
        "basePrice":  9500,
        "bounty":  "1,250,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Shiryu"
    },
    {
        "id":  "op_51",
        "name":  "Jesus Burgess",
        "title":  "Buff-Buff Mountain Lifter Champion",
        "role":  "Titanic Captain (1st)",
        "universe":  "onepiece",
        "basePrice":  8500,
        "bounty":  "750,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Burgess"
    },
    {
        "id":  "op_52",
        "name":  "Van Augur",
        "title":  "Warp-Warp Supersonic Sniper",
        "role":  "Titanic Captain (3rd)",
        "universe":  "onepiece",
        "basePrice":  8800,
        "bounty":  "800,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=VanAugur"
    },
    {
        "id":  "op_53",
        "name":  "Avalo Pizarro",
        "title":  "Isle-Isle Fruit Island Titan",
        "role":  "Titanic Captain (4th)",
        "universe":  "onepiece",
        "basePrice":  8800,
        "bounty":  "850,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Pizarro"
    },
    {
        "id":  "op_54",
        "name":  "Laffitte",
        "title":  "Demon Sheriff Hypnosis \u0026 Angel Wings",
        "role":  "Titanic Captain (5th)",
        "universe":  "onepiece",
        "basePrice":  8000,
        "bounty":  "600,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Laffitte"
    },
    {
        "id":  "op_55",
        "name":  "Catarina Devon",
        "title":  "Nine-Tailed Fox Crescent Hunter",
        "role":  "Titanic Captain (6th)",
        "universe":  "onepiece",
        "basePrice":  8200,
        "bounty":  "650,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Devon"
    },
    {
        "id":  "op_56",
        "name":  "Sanjuan Wolf",
        "title":  "Huge Battleship Mountain Colossus",
        "role":  "Titanic Captain (7th)",
        "universe":  "onepiece",
        "basePrice":  8000,
        "bounty":  "600,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Sanjuan"
    },
    {
        "id":  "op_57",
        "name":  "Vasco Shot",
        "title":  "Heavy Drinker Liquified Inferno",
        "role":  "Titanic Captain (8th)",
        "universe":  "onepiece",
        "basePrice":  7800,
        "bounty":  "550,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Vasco"
    },
    {
        "id":  "op_58",
        "name":  "Doc Q \u0026 Stronger",
        "title":  "Sick-Sick Plague Horse Rider",
        "role":  "Titanic Captain (9th)",
        "universe":  "onepiece",
        "basePrice":  7500,
        "bounty":  "500,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=DocQ"
    },
    {
        "id":  "op_59",
        "name":  "Portgas D. Ace",
        "title":  "Fire Fist (Dai Enkai Entei)",
        "role":  "2nd Division Commander",
        "universe":  "onepiece",
        "basePrice":  9500,
        "bounty":  "550,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Ace"
    },
    {
        "id":  "op_60",
        "name":  "Sabo",
        "title":  "Flame Emperor (Dragon Claw Master)",
        "role":  "Revolutionary Chief",
        "universe":  "onepiece",
        "basePrice":  11000,
        "bounty":  "1,500,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Sabo"
    },
    {
        "id":  "op_61",
        "name":  "Emporio Ivankov",
        "title":  "Queen of Kamabakka (Death Wink)",
        "role":  "Revolutionary Commander",
        "universe":  "onepiece",
        "basePrice":  8000,
        "bounty":  "550,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Ivankov"
    },
    {
        "id":  "op_62",
        "name":  "Karasu",
        "title":  "Soot-Soot Murders of Crows",
        "role":  "Revolutionary North Army",
        "universe":  "onepiece",
        "basePrice":  8200,
        "bounty":  "600,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Karasu"
    },
    {
        "id":  "op_63",
        "name":  "Morley",
        "title":  "Push-Push Subterranean Titan",
        "role":  "Revolutionary West Army",
        "universe":  "onepiece",
        "basePrice":  7800,
        "bounty":  "500,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Morley"
    },
    {
        "id":  "op_64",
        "name":  "Lindbergh",
        "title":  "Electro Invention Flight Strategist",
        "role":  "Revolutionary South Army",
        "universe":  "onepiece",
        "basePrice":  7500,
        "bounty":  "450,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Lindbergh"
    },
    {
        "id":  "op_65",
        "name":  "Belo Betty",
        "title":  "Pump-Pump Morale Rally Queen",
        "role":  "Revolutionary East Army",
        "universe":  "onepiece",
        "basePrice":  7500,
        "bounty":  "450,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=BeloBetty"
    },
    {
        "id":  "op_66",
        "name":  "Kozuki Sukiyaki",
        "title":  "Former Shogun Tenguyama Master",
        "role":  "Swordsmith Shogun",
        "universe":  "onepiece",
        "basePrice":  6000,
        "bounty":  "300,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Sukiyaki"
    },
    {
        "id":  "op_67",
        "name":  "Kozuki Toki",
        "title":  "Time-Time Maiden of Destiny",
        "role":  "Ancient Traveler",
        "universe":  "onepiece",
        "basePrice":  6000,
        "bounty":  "200,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Toki"
    },
    {
        "id":  "op_68",
        "name":  "Shimotsuki Ryuma",
        "title":  "Sword God of Wano (Dragon Slayer)",
        "role":  "Legendary Sword God",
        "universe":  "onepiece",
        "basePrice":  14000,
        "bounty":  "4,500,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Ryuma"
    },
    {
        "id":  "op_69",
        "name":  "Shimotsuki Ushimaru",
        "title":  "Daimyo of Ringo (Dual Blades)",
        "role":  "Wano Daimyo",
        "universe":  "onepiece",
        "basePrice":  8500,
        "bounty":  "800,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Ushimaru"
    },
    {
        "id":  "op_70",
        "name":  "Denjiro",
        "title":  "Kyoshiro (Master Akazaya Scabbard)",
        "role":  "Nine Red Scabbards",
        "universe":  "onepiece",
        "basePrice":  8200,
        "bounty":  "700,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Denjiro"
    },
    {
        "id":  "op_71",
        "name":  "Ashura Doji",
        "title":  "Strongest Bandit of Mt. Atama",
        "role":  "Nine Red Scabbards",
        "universe":  "onepiece",
        "basePrice":  8200,
        "bounty":  "700,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=AshuraDoji"
    },
    {
        "id":  "op_72",
        "name":  "Inuarashi",
        "title":  "Duke of Mokomo (Sulong Dog King)",
        "role":  "Scabbard / Mink King",
        "universe":  "onepiece",
        "basePrice":  8000,
        "bounty":  "650,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Inuarashi"
    },
    {
        "id":  "op_73",
        "name":  "Nekomamushi",
        "title":  "Master of Night (Sulong Cat King)",
        "role":  "Scabbard / Mink King",
        "universe":  "onepiece",
        "basePrice":  8000,
        "bounty":  "650,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Nekomamushi"
    },
    {
        "id":  "op_74",
        "name":  "Kawamatsu the Kappa",
        "title":  "Yokozuna Fish-Man Kappa Blade",
        "role":  "Nine Red Scabbards",
        "universe":  "onepiece",
        "basePrice":  7500,
        "bounty":  "500,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kawamatsu"
    },
    {
        "id":  "op_75",
        "name":  "Kinemon",
        "title":  "Foxfire Leader of Red Scabbards",
        "role":  "Red Scabbards Leader",
        "universe":  "onepiece",
        "basePrice":  7500,
        "bounty":  "500,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kinemon"
    },
    {
        "id":  "op_76",
        "name":  "Kiku",
        "title":  "Lingering Snow Kikunojo",
        "role":  "Nine Red Scabbards",
        "universe":  "onepiece",
        "basePrice":  7000,
        "bounty":  "400,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kiku"
    },
    {
        "id":  "op_77",
        "name":  "Raizo of the Mist",
        "title":  "Scroll Jutsu Flame Returning Ninja",
        "role":  "Nine Red Scabbards",
        "universe":  "onepiece",
        "basePrice":  7000,
        "bounty":  "400,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Raizo"
    },
    {
        "id":  "op_78",
        "name":  "Kanjuro",
        "title":  "Evening Shower Ink Creation Shaman",
        "role":  "Kurozumi Retainer",
        "universe":  "onepiece",
        "basePrice":  6800,
        "bounty":  "350,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kanjuro"
    },
    {
        "id":  "op_79",
        "name":  "Jozu",
        "title":  "Diamond Jozu (Brilliant Punk)",
        "role":  "3rd Division Commander",
        "universe":  "onepiece",
        "basePrice":  8500,
        "bounty":  "800,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Jozu"
    },
    {
        "id":  "op_80",
        "name":  "Vista",
        "title":  "Flower Sword Vista (Dual Rose Blades)",
        "role":  "5th Division Commander",
        "universe":  "onepiece",
        "basePrice":  8500,
        "bounty":  "850,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Vista"
    },
    {
        "id":  "op_81",
        "name":  "Izo",
        "title":  "Dual Pistol Samurai Commander",
        "role":  "16th Division Commander",
        "universe":  "onepiece",
        "basePrice":  7500,
        "bounty":  "510,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Izo"
    },
    {
        "id":  "op_82",
        "name":  "Charlotte Perospero",
        "title":  "Candy Wave Monster Manipulator",
        "role":  "Eldest Son Big Mom",
        "universe":  "onepiece",
        "basePrice":  8000,
        "bounty":  "700,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Perospero"
    },
    {
        "id":  "op_83",
        "name":  "Charlotte Daifuku",
        "title":  "Lamp Genie Summoner Halberd",
        "role":  "Big Mom Pirates",
        "universe":  "onepiece",
        "basePrice":  7000,
        "bounty":  "400,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Daifuku"
    },
    {
        "id":  "op_84",
        "name":  "Charlotte Oven",
        "title":  "High Heat Boil-Boil Destroyer",
        "role":  "Big Mom Pirates",
        "universe":  "onepiece",
        "basePrice":  7000,
        "bounty":  "400,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Oven"
    },
    {
        "id":  "op_85",
        "name":  "Whos-Who",
        "title":  "Ancient Saber-Tooth Fang Leader",
        "role":  "Tobiroppo Leader",
        "universe":  "onepiece",
        "basePrice":  7500,
        "bounty":  "546,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=WhosWho"
    },
    {
        "id":  "op_86",
        "name":  "Sasaki",
        "title":  "Triceratops Mechanical Chopper",
        "role":  "Tobiroppo",
        "universe":  "onepiece",
        "basePrice":  7200,
        "bounty":  "472,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Sasaki"
    },
    {
        "id":  "op_87",
        "name":  "Black Maria",
        "title":  "Rosamygale Demon Spider",
        "role":  "Tobiroppo",
        "universe":  "onepiece",
        "basePrice":  7200,
        "bounty":  "480,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=BlackMaria"
    },
    {
        "id":  "op_88",
        "name":  "Ulti",
        "title":  "Ulti-Meteor Pachycephalosaurus",
        "role":  "Tobiroppo",
        "universe":  "onepiece",
        "basePrice":  7000,
        "bounty":  "400,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Ulti"
    },
    {
        "id":  "op_89",
        "name":  "Page One",
        "title":  "Ancient Spinosaurus Juggernaut",
        "role":  "Tobiroppo",
        "universe":  "onepiece",
        "basePrice":  6800,
        "bounty":  "390,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=PageOne"
    },
    {
        "id":  "op_90",
        "name":  "X Drake",
        "title":  "Allosaurus Ancient Zoan SWORD",
        "role":  "SWORD Captain",
        "universe":  "onepiece",
        "basePrice":  7500,
        "bounty":  "500,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Drake"
    },
    {
        "id":  "op_91",
        "name":  "Killer",
        "title":  "Massacre Soldier (Sonic Scythe)",
        "role":  "Kid Pirates Combatant",
        "universe":  "onepiece",
        "basePrice":  8000,
        "bounty":  "600,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Killer"
    },
    {
        "id":  "op_92",
        "name":  "Bepo",
        "title":  "Sulong White Bear Berserker",
        "role":  "Heart Navigator",
        "universe":  "onepiece",
        "basePrice":  7000,
        "bounty":  "300,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Bepo"
    },
    {
        "id":  "op_93",
        "name":  "Jewelry Bonney",
        "title":  "Distortion Future Nika Mode",
        "role":  "Supernova Captain",
        "universe":  "onepiece",
        "basePrice":  8500,
        "bounty":  "600,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Bonney"
    },
    {
        "id":  "op_94",
        "name":  "Capone Bege",
        "title":  "Big Father Castle Fortress",
        "role":  "Fire Tank Captain",
        "universe":  "onepiece",
        "basePrice":  7000,
        "bounty":  "350,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Bege"
    },
    {
        "id":  "op_95",
        "name":  "Basil Hawkins",
        "title":  "Straw Man Card Destiny Shaman",
        "role":  "Hawkins Captain",
        "universe":  "onepiece",
        "basePrice":  7000,
        "bounty":  "320,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Hawkins"
    },
    {
        "id":  "op_96",
        "name":  "Scratchmen Apoo",
        "title":  "Roar of Sea (Music Exploder)",
        "role":  "On-Air Captain",
        "universe":  "onepiece",
        "basePrice":  7000,
        "bounty":  "350,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Apoo"
    },
    {
        "id":  "op_97",
        "name":  "Nico Robin",
        "title":  "Demonio Fleur (Awakened Devil)",
        "role":  "Archaeologist / Straw Hat",
        "universe":  "onepiece",
        "basePrice":  8500,
        "bounty":  "930,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Robin"
    },
    {
        "id":  "op_98",
        "name":  "Franky",
        "title":  "General Franky (Radical Beam)",
        "role":  "Shipwright / Straw Hat",
        "universe":  "onepiece",
        "basePrice":  8000,
        "bounty":  "394,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Franky"
    },
    {
        "id":  "op_99",
        "name":  "Brook",
        "title":  "Soul King (Soul Solid Blizzard)",
        "role":  "Musician / Straw Hat",
        "universe":  "onepiece",
        "basePrice":  7500,
        "bounty":  "383,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Brook"
    },
    {
        "id":  "op_100",
        "name":  "Nami",
        "title":  "Cat Burglar \u0026 Zeus (Thunderstorm)",
        "role":  "Navigator / Straw Hat",
        "universe":  "onepiece",
        "basePrice":  7500,
        "bounty":  "366,000,000 ฿",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Nami"
    },
    {
        "id":  "nr_1",
        "name":  "Kaguya Otsutsuki",
        "title":  "Progenitor of Chakra (Expansive TSO)",
        "role":  "Chakra Ancestor",
        "universe":  "naruto",
        "basePrice":  16000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kaguya"
    },
    {
        "id":  "nr_2",
        "name":  "Hagoromo Otsutsuki",
        "title":  "Sage of Six Paths (Creation of All)",
        "role":  "Six Paths Sage",
        "universe":  "naruto",
        "basePrice":  16000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Hagoromo"
    },
    {
        "id":  "nr_3",
        "name":  "Hamura Otsutsuki",
        "title":  "Tenseigan Ancestor (Moon Patriarch)",
        "role":  "Six Paths Guardian",
        "universe":  "naruto",
        "basePrice":  15000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Hamura"
    },
    {
        "id":  "nr_4",
        "name":  "Asura Otsutsuki",
        "title":  "Six Paths Avatar (Senju Ancestor)",
        "role":  "Ninjutsu Progenitor",
        "universe":  "naruto",
        "basePrice":  14500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Asura"
    },
    {
        "id":  "nr_5",
        "name":  "Indra Otsutsuki",
        "title":  "Master of Susanoo (Uchiha Ancestor)",
        "role":  "Genjutsu Progenitor",
        "universe":  "naruto",
        "basePrice":  14500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Indra"
    },
    {
        "id":  "nr_6",
        "name":  "Madara Uchiha",
        "title":  "Three-Eyed Juubi Jinchuriki (Infinite Tsukuyomi)",
        "role":  "Ghost of the Uchiha",
        "universe":  "naruto",
        "basePrice":  15500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Madara"
    },
    {
        "id":  "nr_7",
        "name":  "Naruto Uzumaki",
        "title":  "Six Paths Sage Mode \u0026 Ashura Kurama",
        "role":  "Seventh Hokage Hero",
        "universe":  "naruto",
        "basePrice":  15000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Naruto"
    },
    {
        "id":  "nr_8",
        "name":  "Sasuke Uchiha",
        "title":  "Six Paths Rinnegan \u0026 Indra Susanoo",
        "role":  "Shadow Hokage",
        "universe":  "naruto",
        "basePrice":  15000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Sasuke"
    },
    {
        "id":  "nr_9",
        "name":  "Hashirama Senju",
        "title":  "God of Shinobi (1000-Armed Kanon)",
        "role":  "First Hokage",
        "universe":  "naruto",
        "basePrice":  14500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Hashirama"
    },
    {
        "id":  "nr_10",
        "name":  "Might Guy",
        "title":  "8th Gate of Death (Night Guy Dragon)",
        "role":  "Sublime Green Beast",
        "universe":  "naruto",
        "basePrice":  14000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Guy"
    },
    {
        "id":  "nr_11",
        "name":  "Kakashi Hatake",
        "title":  "Dual Mangekyo Sharingan (Kamui Susanoo)",
        "role":  "Sixth Hokage",
        "universe":  "naruto",
        "basePrice":  14000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kakashi"
    },
    {
        "id":  "nr_12",
        "name":  "Obito Uchiha",
        "title":  "Ten-Tails Jinchuriki (Nunoboko Sword)",
        "role":  "Akatsuki Leader",
        "universe":  "naruto",
        "basePrice":  14000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Obito"
    },
    {
        "id":  "nr_13",
        "name":  "Minato Namikaze",
        "title":  "Yellow Flash (KCM Flying Raijin)",
        "role":  "Fourth Hokage",
        "universe":  "naruto",
        "basePrice":  13500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Minato"
    },
    {
        "id":  "nr_14",
        "name":  "Itachi Uchiha",
        "title":  "Prime Totsuka Blade \u0026 Yata Mirror",
        "role":  "Uchiha Prodigy",
        "universe":  "naruto",
        "basePrice":  13000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Itachi"
    },
    {
        "id":  "nr_15",
        "name":  "Nagato Uzumaki",
        "title":  "Prime Healthy Rinnegan (All 6 Paths)",
        "role":  "Leader of Akatsuki",
        "universe":  "naruto",
        "basePrice":  13000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Nagato"
    },
    {
        "id":  "nr_16",
        "name":  "Pain",
        "title":  "Tendo Deva Path (Shinra Tensei)",
        "role":  "God of Amegakure",
        "universe":  "naruto",
        "basePrice":  12000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Pain"
    },
    {
        "id":  "nr_17",
        "name":  "Jiraiya",
        "title":  "Toad Sage Mode (Giant Sage Rasengan)",
        "role":  "Legendary Sannin",
        "universe":  "naruto",
        "basePrice":  11500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Jiraiya"
    },
    {
        "id":  "nr_18",
        "name":  "Tsunade Senju",
        "title":  "100 Healings Byakugou Supreme",
        "role":  "Fifth Hokage / Sannin",
        "universe":  "naruto",
        "basePrice":  11500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Tsunade"
    },
    {
        "id":  "nr_19",
        "name":  "Orochimaru",
        "title":  "Prime Hydra Form (8-Headed Serpent)",
        "role":  "Legendary Sannin",
        "universe":  "naruto",
        "basePrice":  11500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Orochimaru"
    },
    {
        "id":  "nr_20",
        "name":  "Tobirama Senju",
        "title":  "Flying Raijin Creator \u0026 Water Dragon",
        "role":  "Second Hokage",
        "universe":  "naruto",
        "basePrice":  12500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Tobirama"
    },
    {
        "id":  "nr_21",
        "name":  "Hiruzen Sarutobi",
        "title":  "The Professor (5-Nature Enma Staff)",
        "role":  "Third Hokage",
        "universe":  "naruto",
        "basePrice":  11500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Hiruzen"
    },
    {
        "id":  "nr_22",
        "name":  "Danzo Shimura",
        "title":  "Izanagi Arm (10 Sharingan Master)",
        "role":  "Root Leader",
        "universe":  "naruto",
        "basePrice":  10500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Danzo"
    },
    {
        "id":  "nr_23",
        "name":  "Shisui Uchiha",
        "title":  "Kotoamatsukami \u0026 Body Flicker",
        "role":  "Uchiha Mirage",
        "universe":  "naruto",
        "basePrice":  12000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Shisui"
    },
    {
        "id":  "nr_24",
        "name":  "Gaara",
        "title":  "Prime Kazekage (Sand Tsunami Defense)",
        "role":  "Fifth Kazekage",
        "universe":  "naruto",
        "basePrice":  11000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Gaara"
    },
    {
        "id":  "nr_25",
        "name":  "Killer Bee",
        "title":  "Prime Eight-Tails Gyuki Acrobat",
        "role":  "Cloud Jinchuriki",
        "universe":  "naruto",
        "basePrice":  11500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=KillerBee"
    },
    {
        "id":  "nr_26",
        "name":  "Ay (Third Raikage)",
        "title":  "Hell Stab Spear \u0026 Lightning Shield",
        "role":  "Third Raikage",
        "universe":  "naruto",
        "basePrice":  12500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Ay3rd"
    },
    {
        "id":  "nr_27",
        "name":  "Ay (Fourth Raikage)",
        "title":  "Lightning Release Armor Liger Bomb",
        "role":  "Fourth Raikage",
        "universe":  "naruto",
        "basePrice":  11500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Ay4th"
    },
    {
        "id":  "nr_28",
        "name":  "Onoki",
        "title":  "Particle Release Atomic Dismantling",
        "role":  "Third Tsuchikage",
        "universe":  "naruto",
        "basePrice":  11500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Onoki"
    },
    {
        "id":  "nr_29",
        "name":  "Mu",
        "title":  "Nullification Camouflage Particle Style",
        "role":  "Second Tsuchikage",
        "universe":  "naruto",
        "basePrice":  12000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Mu"
    },
    {
        "id":  "nr_30",
        "name":  "Gengetsu Hozuki",
        "title":  "Steaming Danger Tyranny Mirage",
        "role":  "Second Mizukage",
        "universe":  "naruto",
        "basePrice":  11800,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Gengetsu"
    },
    {
        "id":  "nr_31",
        "name":  "Mei Terumi",
        "title":  "Boil \u0026 Lava Dissolving Acid",
        "role":  "Fifth Mizukage",
        "universe":  "naruto",
        "basePrice":  10000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Mei"
    },
    {
        "id":  "nr_32",
        "name":  "Kisame Hoshigaki",
        "title":  "Tailless Bijuu Samehada Shark Fusion",
        "role":  "Mist Monster / Akatsuki",
        "universe":  "naruto",
        "basePrice":  11000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kisame"
    },
    {
        "id":  "nr_33",
        "name":  "Sasori",
        "title":  "100 Puppet Iron Sand Army Master",
        "role":  "Akatsuki Puppeteer",
        "universe":  "naruto",
        "basePrice":  10500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Sasori"
    },
    {
        "id":  "nr_34",
        "name":  "Deidara",
        "title":  "C4 Karura \u0026 C0 Ultimate Explosive",
        "role":  "Akatsuki Artisan",
        "universe":  "naruto",
        "basePrice":  10000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Deidara"
    },
    {
        "id":  "nr_35",
        "name":  "Kakuzu",
        "title":  "5 Hearts Multi-Release Monster",
        "role":  "Akatsuki Immortal",
        "universe":  "naruto",
        "basePrice":  10000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kakuzu"
    },
    {
        "id":  "nr_36",
        "name":  "Hidan",
        "title":  "Immortal Jashin Blood Possession",
        "role":  "Akatsuki Immortal",
        "universe":  "naruto",
        "basePrice":  9000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Hidan"
    },
    {
        "id":  "nr_37",
        "name":  "Konan",
        "title":  "600 Billion Paper Explosives Angel",
        "role":  "Angel of Rain",
        "universe":  "naruto",
        "basePrice":  10500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Konan"
    },
    {
        "id":  "nr_38",
        "name":  "Kabuto Yakushi",
        "title":  "Dragon Sage Mode Reanimation Master",
        "role":  "Snake Sage",
        "universe":  "naruto",
        "basePrice":  12500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kabuto"
    },
    {
        "id":  "nr_39",
        "name":  "Kimimaro",
        "title":  "Curse Mark Stage 2 Shikotsumyaku",
        "role":  "Sound Five Leader",
        "universe":  "naruto",
        "basePrice":  9500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kimimaro"
    },
    {
        "id":  "nr_40",
        "name":  "Neji Hyuga",
        "title":  "128 Palms Rotation Prodigy",
        "role":  "Hyuga Genius",
        "universe":  "naruto",
        "basePrice":  9500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Neji"
    },
    {
        "id":  "nr_41",
        "name":  "Rock Lee",
        "title":  "6th Gate of Joy Drunken Fist",
        "role":  "Lotus Specialist",
        "universe":  "naruto",
        "basePrice":  9500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=RockLee"
    },
    {
        "id":  "nr_42",
        "name":  "Shikamaru Nara",
        "title":  "Shadow Strangle Supreme Strategist",
        "role":  "Leaf Jonin Commander",
        "universe":  "naruto",
        "basePrice":  9000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Shikamaru"
    },
    {
        "id":  "nr_43",
        "name":  "Choji Akimichi",
        "title":  "Butterfly Mode Multi-Size Titan",
        "role":  "Akimichi Head",
        "universe":  "naruto",
        "basePrice":  9000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Choji"
    },
    {
        "id":  "nr_44",
        "name":  "Ino Yamanaka",
        "title":  "Mind Body Yamanaka Sensory Link",
        "role":  "Sensory Leader",
        "universe":  "naruto",
        "basePrice":  8000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Ino"
    },
    {
        "id":  "nr_45",
        "name":  "Kiba \u0026 Akamaru",
        "title":  "Three-Headed Wolf Fang Over Fang",
        "role":  "Inuzuka Tracker",
        "universe":  "naruto",
        "basePrice":  8000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kiba"
    },
    {
        "id":  "nr_46",
        "name":  "Shino Aburame",
        "title":  "Giant Torune Parasitic Beetle Master",
        "role":  "Aburame Elite",
        "universe":  "naruto",
        "basePrice":  8500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Shino"
    },
    {
        "id":  "nr_47",
        "name":  "Hinata Hyuga",
        "title":  "Twin Lion Fists Byakugan Princess",
        "role":  "Hyuga Heiress",
        "universe":  "naruto",
        "basePrice":  8500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Hinata"
    },
    {
        "id":  "nr_48",
        "name":  "Sai",
        "title":  "Super Beast Painting Sealing Tiger",
        "role":  "Root Special Anbu",
        "universe":  "naruto",
        "basePrice":  8000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Sai"
    },
    {
        "id":  "nr_49",
        "name":  "Yamato",
        "title":  "Wood Release Deep Forest Dome",
        "role":  "Anbu Elite",
        "universe":  "naruto",
        "basePrice":  9000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=YamatoLeaf"
    },
    {
        "id":  "nr_50",
        "name":  "Torune Aburame",
        "title":  "Nano-Sized Venomous Rinkaichu",
        "role":  "Root Bodyguard",
        "universe":  "naruto",
        "basePrice":  8500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Torune"
    },
    {
        "id":  "nr_51",
        "name":  "Fu Yamanaka",
        "title":  "Mind Transfer Puppet Specialist",
        "role":  "Root Bodyguard",
        "universe":  "naruto",
        "basePrice":  8000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Fu"
    },
    {
        "id":  "nr_52",
        "name":  "Kushina Uzumaki",
        "title":  "Habanero Adamantine Sealing Chains",
        "role":  "Nine-Tails Host",
        "universe":  "naruto",
        "basePrice":  10500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kushina"
    },
    {
        "id":  "nr_53",
        "name":  "Mito Uzumaki",
        "title":  "First Kurama Host (Byakugou Seal)",
        "role":  "Senju Matriarch",
        "universe":  "naruto",
        "basePrice":  11500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Mito"
    },
    {
        "id":  "nr_54",
        "name":  "Sakumo Hatake",
        "title":  "White Fang of Leaf (Chakra Blade)",
        "role":  "Legendary Jonin",
        "universe":  "naruto",
        "basePrice":  12000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Sakumo"
    },
    {
        "id":  "nr_55",
        "name":  "Fugaku Uchiha",
        "title":  "Head of Uchiha (Mangekyo Master)",
        "role":  "Uchiha Police Chief",
        "universe":  "naruto",
        "basePrice":  11000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Fugaku"
    },
    {
        "id":  "nr_56",
        "name":  "Mikoto Uchiha",
        "title":  "Jonin Uchiha Clan Mother",
        "role":  "Uchiha Elite",
        "universe":  "naruto",
        "basePrice":  7000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Mikoto"
    },
    {
        "id":  "nr_57",
        "name":  "Izuna Uchiha",
        "title":  "Prime Mangekyo Sharingan Master",
        "role":  "Uchiha Co-Founder",
        "universe":  "naruto",
        "basePrice":  12000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Izuna"
    },
    {
        "id":  "nr_58",
        "name":  "Tajima Uchiha",
        "title":  "Warring States Uchiha Leader",
        "role":  "Uchiha Clan Head",
        "universe":  "naruto",
        "basePrice":  10000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Tajima"
    },
    {
        "id":  "nr_59",
        "name":  "Butsuma Senju",
        "title":  "Warring States Senju Patriarch",
        "role":  "Senju Clan Head",
        "universe":  "naruto",
        "basePrice":  10000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Butsuma"
    },
    {
        "id":  "nr_60",
        "name":  "Darui",
        "title":  "Black Lightning Laser Circus Master",
        "role":  "Fifth Raikage",
        "universe":  "naruto",
        "basePrice":  9500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Darui"
    },
    {
        "id":  "nr_61",
        "name":  "C",
        "title":  "Cloud Sensory Ninja Lightning Illusion",
        "role":  "Cloud Elite",
        "universe":  "naruto",
        "basePrice":  7500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=CCloud"
    },
    {
        "id":  "nr_62",
        "name":  "Omoi",
        "title":  "Cloud Style Crescent Moon Cleave",
        "role":  "Cloud Swordsman",
        "universe":  "naruto",
        "basePrice":  7500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Omoi"
    },
    {
        "id":  "nr_63",
        "name":  "Karui",
        "title":  "Cloud Kenjutsu Warrior Striker",
        "role":  "Cloud Swordsman",
        "universe":  "naruto",
        "basePrice":  7000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Karui"
    },
    {
        "id":  "nr_64",
        "name":  "Kankuro",
        "title":  "Kuroari Scorpion Puppeteer",
        "role":  "Sand Puppet Master",
        "universe":  "naruto",
        "basePrice":  8500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kankuro"
    },
    {
        "id":  "nr_65",
        "name":  "Temari",
        "title":  "Wind Scythe Kamatari Whirlwind",
        "role":  "Sand Princess",
        "universe":  "naruto",
        "basePrice":  8800,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Temari"
    },
    {
        "id":  "nr_66",
        "name":  "Baki",
        "title":  "Wind Blade Assassin Commander",
        "role":  "Sand Commander",
        "universe":  "naruto",
        "basePrice":  7800,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Baki"
    },
    {
        "id":  "nr_67",
        "name":  "Chiyo",
        "title":  "10 White Puppets of Chikamatsu",
        "role":  "Sand Elder",
        "universe":  "naruto",
        "basePrice":  9500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Chiyo"
    },
    {
        "id":  "nr_68",
        "name":  "Rasa",
        "title":  "Gold Dust Sand Drizzle Kazekage",
        "role":  "Fourth Kazekage",
        "universe":  "naruto",
        "basePrice":  10500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Rasa"
    },
    {
        "id":  "nr_69",
        "name":  "Third Kazekage",
        "title":  "Iron Sand World Order Strongest",
        "role":  "Third Kazekage",
        "universe":  "naruto",
        "basePrice":  11000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=ThirdKazekage"
    },
    {
        "id":  "nr_70",
        "name":  "Mangetsu Hozuki",
        "title":  "Master of All 7 Mist Swords",
        "role":  "Seven Swordsmen Leader",
        "universe":  "naruto",
        "basePrice":  9500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Mangetsu"
    },
    {
        "id":  "nr_71",
        "name":  "Zabuza Momochi",
        "title":  "Kubikiribocho Silent Killing Demon",
        "role":  "Seven Swordsmen",
        "universe":  "naruto",
        "basePrice":  9000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Zabuza"
    },
    {
        "id":  "nr_72",
        "name":  "Haku",
        "title":  "Demonic Ice Crystal Mirrors",
        "role":  "Ice Kekkei Genkai",
        "universe":  "naruto",
        "basePrice":  8500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Haku"
    },
    {
        "id":  "nr_73",
        "name":  "Suigetsu Hozuki",
        "title":  "Water Gun \u0026 Executioner Blade",
        "role":  "Taka Swordsman",
        "universe":  "naruto",
        "basePrice":  8500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Suigetsu"
    },
    {
        "id":  "nr_74",
        "name":  "Karin Uzumaki",
        "title":  "Adamantine Chains \u0026 Heal Bite",
        "role":  "Taka Sensory",
        "universe":  "naruto",
        "basePrice":  8000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Karin"
    },
    {
        "id":  "nr_75",
        "name":  "Jugo",
        "title":  "Sage Berserker Cell Cannon",
        "role":  "Taka Berserker",
        "universe":  "naruto",
        "basePrice":  8800,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Jugo"
    },
    {
        "id":  "nr_76",
        "name":  "Tayuya",
        "title":  "Curse Mark 2 Demon Flute Doki",
        "role":  "Sound Four",
        "universe":  "naruto",
        "basePrice":  7500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Tayuya"
    },
    {
        "id":  "nr_77",
        "name":  "Sakon \u0026 Ukon",
        "title":  "Curse Mark 2 Twin Rashomon",
        "role":  "Sound Four",
        "universe":  "naruto",
        "basePrice":  7500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Sakon"
    },
    {
        "id":  "nr_78",
        "name":  "Kidomaru",
        "title":  "Curse Mark 2 War Bow Spider Thread",
        "role":  "Sound Four",
        "universe":  "naruto",
        "basePrice":  7500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kidomaru"
    },
    {
        "id":  "nr_79",
        "name":  "Jirobo",
        "title":  "Curse Mark 2 Earth Dome Flip",
        "role":  "Sound Four",
        "universe":  "naruto",
        "basePrice":  7200,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Jirobo"
    },
    {
        "id":  "nr_80",
        "name":  "Guren",
        "title":  "Crystal Release Jade Hexagonal",
        "role":  "Crystal Specialist",
        "universe":  "naruto",
        "basePrice":  8500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Guren"
    },
    {
        "id":  "nr_81",
        "name":  "Utakata",
        "title":  "Six-Tails Saiken Acid Bubbles",
        "role":  "6-Tails Jinchuriki",
        "universe":  "naruto",
        "basePrice":  9500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Utakata"
    },
    {
        "id":  "nr_82",
        "name":  "Roshi",
        "title":  "Four-Tails Son Goku Lava Release",
        "role":  "4-Tails Jinchuriki",
        "universe":  "naruto",
        "basePrice":  9500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Roshi"
    },
    {
        "id":  "nr_83",
        "name":  "Han",
        "title":  "Five-Tails Kokuo Steam Strength",
        "role":  "5-Tails Jinchuriki",
        "universe":  "naruto",
        "basePrice":  9500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Han"
    },
    {
        "id":  "nr_84",
        "name":  "Yugito Nii",
        "title":  "Two-Tails Matatabi Blue Fire Cloak",
        "role":  "2-Tails Jinchuriki",
        "universe":  "naruto",
        "basePrice":  9500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Yugito"
    },
    {
        "id":  "nr_85",
        "name":  "Yagura Karatachi",
        "title":  "Three-Tails Isobu Coral Mirror",
        "role":  "Fourth Mizukage",
        "universe":  "naruto",
        "basePrice":  10000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Yagura"
    },
    {
        "id":  "nr_86",
        "name":  "Fuu",
        "title":  "Seven-Tails Chomei Cocoon Whirlwind",
        "role":  "7-Tails Jinchuriki",
        "universe":  "naruto",
        "basePrice":  9500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Fuu"
    },
    {
        "id":  "nr_87",
        "name":  "Kushimaru Kuriarare",
        "title":  "Nuibari Needle Sewing Executioner",
        "role":  "Seven Swordsmen",
        "universe":  "naruto",
        "basePrice":  8000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kushimaru"
    },
    {
        "id":  "nr_88",
        "name":  "Ameyuri Ringo",
        "title":  "Kiba Lightning Twin Swords Prodigy",
        "role":  "Seven Swordsmen",
        "universe":  "naruto",
        "basePrice":  8200,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Ameyuri"
    },
    {
        "id":  "nr_89",
        "name":  "Jinpachi Munashi",
        "title":  "Homatsu Blast Sword Demolisher",
        "role":  "Seven Swordsmen",
        "universe":  "naruto",
        "basePrice":  8000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Jinpachi"
    },
    {
        "id":  "nr_90",
        "name":  "Jinin Akebino",
        "title":  "Kabutowari Blunt Axe Splitter",
        "role":  "Seven Swordsmen",
        "universe":  "naruto",
        "basePrice":  8000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Jinin"
    },
    {
        "id":  "nr_91",
        "name":  "Hanzo of Salamander",
        "title":  "Ibuse Poison Gas Rain Legend",
        "role":  "Amegakure Leader",
        "universe":  "naruto",
        "basePrice":  11000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Hanzo"
    },
    {
        "id":  "nr_92",
        "name":  "Mifune",
        "title":  "Iaido Sword Flash Samurai General",
        "role":  "Iron Land General",
        "universe":  "naruto",
        "basePrice":  9500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Mifune"
    },
    {
        "id":  "nr_93",
        "name":  "Asuma Sarutobi",
        "title":  "Wind Blade Flying Swallow Ash",
        "role":  "Guardian Shinobi 12",
        "universe":  "naruto",
        "basePrice":  8500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Asuma"
    },
    {
        "id":  "nr_94",
        "name":  "Kurenai Yuhi",
        "title":  "Tree Binding Plum Mirage Genjutsu",
        "role":  "Leaf Genjutsu Master",
        "universe":  "naruto",
        "basePrice":  7500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kurenai"
    },
    {
        "id":  "nr_95",
        "name":  "Anko Mitarashi",
        "title":  "Twin Snakes Mutual Death Cursed Fire",
        "role":  "Special Jonin",
        "universe":  "naruto",
        "basePrice":  7500,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Anko"
    },
    {
        "id":  "nr_96",
        "name":  "Genma Shiranui",
        "title":  "Senbon Spit Special Jonin Guard",
        "role":  "Hokage Guard",
        "universe":  "naruto",
        "basePrice":  7000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Genma"
    },
    {
        "id":  "nr_97",
        "name":  "Raido Namiashi",
        "title":  "Black Flying Water Blade Guard",
        "role":  "Hokage Guard",
        "universe":  "naruto",
        "basePrice":  7000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Raido"
    },
    {
        "id":  "nr_98",
        "name":  "Aoba Yamashiro",
        "title":  "Scattering Thousand Crows Stun",
        "role":  "Special Jonin",
        "universe":  "naruto",
        "basePrice":  7000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Aoba"
    },
    {
        "id":  "nr_99",
        "name":  "Hayate Gekko",
        "title":  "Secret Sword Moonlight Dance",
        "role":  "Special Jonin",
        "universe":  "naruto",
        "basePrice":  7000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Hayate"
    },
    {
        "id":  "nr_100",
        "name":  "Sakura Haruno",
        "title":  "Byakugou Awakened Cherry Blossom",
        "role":  "Medical Master",
        "universe":  "naruto",
        "basePrice":  12000,
        "bounty":  "S-Rank Legend",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Sakura"
    },
    {
        "id":  "mv_1",
        "name":  "Iron Man",
        "title":  "Godbuster \u0026 Bleeding Edge Nanotech",
        "role":  "Avenger",
        "universe":  "marvel",
        "basePrice":  13500,
        "bounty":  "Stark Industries",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=IronMan"
    },
    {
        "id":  "mv_2",
        "name":  "Captain America",
        "title":  "Worthy Cap (Mjolnir \u0026 Vibranium Shield)",
        "role":  "Avengers Leader",
        "universe":  "marvel",
        "basePrice":  12500,
        "bounty":  "Super Soldier",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=CapAmerica"
    },
    {
        "id":  "mv_3",
        "name":  "Thor Odinson",
        "title":  "Rune King Thor (Stormbreaker \u0026 Mjolnir)",
        "role":  "King of Asgard",
        "universe":  "marvel",
        "basePrice":  15500,
        "bounty":  "God of Thunder",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Thor"
    },
    {
        "id":  "mv_4",
        "name":  "The Incredible Hulk",
        "title":  "World Breaker Hulk (Infinite Gamma Rage)",
        "role":  "Avenger Titan",
        "universe":  "marvel",
        "basePrice":  15000,
        "bounty":  "Gamma Titan",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Hulk"
    },
    {
        "id":  "mv_5",
        "name":  "Spider-Man",
        "title":  "Cosmic Captain Universe (Peter Parker)",
        "role":  "Hero of Queens",
        "universe":  "marvel",
        "basePrice":  12500,
        "bounty":  "Web-Slinger",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=SpiderMan"
    },
    {
        "id":  "mv_6",
        "name":  "Doctor Strange",
        "title":  "Sorcerer Supreme (Vishanti \u0026 Agamotto)",
        "role":  "Sorcerer Supreme",
        "universe":  "marvel",
        "basePrice":  15000,
        "bounty":  "Mystic Arts",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=DrStrange"
    },
    {
        "id":  "mv_7",
        "name":  "Scarlet Witch",
        "title":  "Chaos Magic Reality Warper (House of M)",
        "role":  "Nexus Being",
        "universe":  "marvel",
        "basePrice":  15500,
        "bounty":  "Chaos Sorceress",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=ScarletWitch"
    },
    {
        "id":  "mv_8",
        "name":  "Wolverine",
        "title":  "Phoenix Wolverine (Adamantium Skeleton)",
        "role":  "X-Men Berserker",
        "universe":  "marvel",
        "basePrice":  12000,
        "bounty":  "Weapon X",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Wolverine"
    },
    {
        "id":  "mv_9",
        "name":  "Deadpool",
        "title":  "Continuous Immortality \u0026 4th Wall Break",
        "role":  "Merc with a Mouth",
        "universe":  "marvel",
        "basePrice":  11500,
        "bounty":  "Regenerative Merc",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Deadpool"
    },
    {
        "id":  "mv_10",
        "name":  "Black Panther",
        "title":  "King of the Dead (Vibranium Panther)",
        "role":  "King of Wakanda",
        "universe":  "marvel",
        "basePrice":  12000,
        "bounty":  "Wakandan King",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=BlackPanther"
    },
    {
        "id":  "mv_11",
        "name":  "Thanos",
        "title":  "Infinity Gauntlet Mad Titan (Cosmic Ruin)",
        "role":  "Cosmic Conqueror",
        "universe":  "marvel",
        "basePrice":  16000,
        "bounty":  "Mad Titan",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Thanos"
    },
    {
        "id":  "mv_12",
        "name":  "Loki Laufeyson",
        "title":  "God of Stories (Master of Magic)",
        "role":  "God of Stories",
        "universe":  "marvel",
        "basePrice":  13500,
        "bounty":  "Asgardian Prince",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Loki"
    },
    {
        "id":  "mv_13",
        "name":  "Magneto",
        "title":  "Master of Magnetism (Planetary Field)",
        "role":  "Omega Mutant",
        "universe":  "marvel",
        "basePrice":  14000,
        "bounty":  "Brotherhood Leader",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Magneto"
    },
    {
        "id":  "mv_14",
        "name":  "Doctor Doom",
        "title":  "God Emperor Doom (Beyonder Magic)",
        "role":  "Monarch of Latveria",
        "universe":  "marvel",
        "basePrice":  16000,
        "bounty":  "Supreme Tyrant",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=DrDoom"
    },
    {
        "id":  "mv_15",
        "name":  "Charles Xavier",
        "title":  "Supreme Telepath (Cerebro Mind Crush)",
        "role":  "Founder of X-Men",
        "universe":  "marvel",
        "basePrice":  13500,
        "bounty":  "Omega Telepath",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=ProfX"
    },
    {
        "id":  "mv_16",
        "name":  "Jean Grey",
        "title":  "Dark Phoenix (Phoenix Force Cosmic)",
        "role":  "Omega Mutant",
        "universe":  "marvel",
        "basePrice":  16000,
        "bounty":  "Phoenix Force",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=JeanGrey"
    },
    {
        "id":  "mv_17",
        "name":  "Cyclops",
        "title":  "Phoenix Five (Full Optic Blast)",
        "role":  "Field Leader X-Men",
        "universe":  "marvel",
        "basePrice":  12000,
        "bounty":  "Optic Leader",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Cyclops"
    },
    {
        "id":  "mv_18",
        "name":  "Storm",
        "title":  "Goddess of Storm (Omega Atmokinesis)",
        "role":  "Omega Mutant",
        "universe":  "marvel",
        "basePrice":  13000,
        "bounty":  "Storm Goddess",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Storm"
    },
    {
        "id":  "mv_19",
        "name":  "Gambit",
        "title":  "Full Kinetic Charging Potential",
        "role":  "X-Men Thief",
        "universe":  "marvel",
        "basePrice":  10500,
        "bounty":  "Kinetic Master",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Gambit"
    },
    {
        "id":  "mv_20",
        "name":  "Rogue",
        "title":  "Absolute Mutation Absorption",
        "role":  "X-Men Powerhouse",
        "universe":  "marvel",
        "basePrice":  11500,
        "bounty":  "Power Absorber",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Rogue"
    },
    {
        "id":  "mv_21",
        "name":  "Silver Surfer",
        "title":  "The Power Cosmic Herald of Galactus",
        "role":  "Cosmic Herald",
        "universe":  "marvel",
        "basePrice":  14500,
        "bounty":  "Cosmic Wanderer",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=SilverSurfer"
    },
    {
        "id":  "mv_22",
        "name":  "Galactus",
        "title":  "Devourer of Worlds (Celestial Titan)",
        "role":  "Cosmic Entity",
        "universe":  "marvel",
        "basePrice":  16000,
        "bounty":  "World Devourer",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Galactus"
    },
    {
        "id":  "mv_23",
        "name":  "Reed Richards",
        "title":  "Mister Fantastic (Supreme Intellect)",
        "role":  "Leader Fantastic Four",
        "universe":  "marvel",
        "basePrice":  13000,
        "bounty":  "Genius Elastic",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=MisterFantastic"
    },
    {
        "id":  "mv_24",
        "name":  "Sue Storm",
        "title":  "Invisible Woman (Omega Forcefields)",
        "role":  "Fantastic Four",
        "universe":  "marvel",
        "basePrice":  12500,
        "bounty":  "Forcefield Master",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=InvisibleWoman"
    },
    {
        "id":  "mv_25",
        "name":  "Johnny Storm",
        "title":  "Human Torch (Supernova Flame)",
        "role":  "Fantastic Four",
        "universe":  "marvel",
        "basePrice":  11500,
        "bounty":  "Flame Blaster",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=HumanTorch"
    },
    {
        "id":  "mv_26",
        "name":  "Ben Grimm",
        "title":  "The Thing (Indestructible Rock Titan)",
        "role":  "Fantastic Four",
        "universe":  "marvel",
        "basePrice":  11000,
        "bounty":  "Clobberin Titan",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=TheThing"
    },
    {
        "id":  "mv_27",
        "name":  "Star-Lord",
        "title":  "Master of Sun Elements \u0026 Quad Blasters",
        "role":  "Guardians Leader",
        "universe":  "marvel",
        "basePrice":  10000,
        "bounty":  "Cosmic Outlaw",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=StarLord"
    },
    {
        "id":  "mv_28",
        "name":  "Gamora",
        "title":  "Deadliest Woman in the Galaxy",
        "role":  "Guardian Assassin",
        "universe":  "marvel",
        "basePrice":  10500,
        "bounty":  "Zen-Whoberi",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Gamora"
    },
    {
        "id":  "mv_29",
        "name":  "Drax the Destroyer",
        "title":  "Avatar of Destruction (Dual Daggers)",
        "role":  "Guardian Brawler",
        "universe":  "marvel",
        "basePrice":  10000,
        "bounty":  "Cosmic Destroyer",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Drax"
    },
    {
        "id":  "mv_30",
        "name":  "Rocket Raccoon",
        "title":  "Hadron Enforcer \u0026 Master Arsenal",
        "role":  "Guardian Tech",
        "universe":  "marvel",
        "basePrice":  9500,
        "bounty":  "Weapons Expert",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Rocket"
    },
    {
        "id":  "mv_31",
        "name":  "Groot",
        "title":  "King Groot (World Tree Colossus)",
        "role":  "Guardian Colossus",
        "universe":  "marvel",
        "basePrice":  10500,
        "bounty":  "Flora Colossus",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Groot"
    },
    {
        "id":  "mv_32",
        "name":  "Captain Marvel",
        "title":  "Binary Mode (White Hole Cosmic Energy)",
        "role":  "Cosmic Avenger",
        "universe":  "marvel",
        "basePrice":  14000,
        "bounty":  "Cosmic Heroine",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=CaptMarvel"
    },
    {
        "id":  "mv_33",
        "name":  "Ant-Man",
        "title":  "Giant-Man Quantum Particle Titan",
        "role":  "Avenger Scientist",
        "universe":  "marvel",
        "basePrice":  11000,
        "bounty":  "Size Shifter",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=AntMan"
    },
    {
        "id":  "mv_34",
        "name":  "Wasp",
        "title":  "Janet Van Dyne (Stinger Plasma Wings)",
        "role":  "Avenger Founder",
        "universe":  "marvel",
        "basePrice":  9500,
        "bounty":  "Bio-Wings",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Wasp"
    },
    {
        "id":  "mv_35",
        "name":  "Hawkeye",
        "title":  "Master Archer (Pym Trick Arrows)",
        "role":  "Avenger Marksman",
        "universe":  "marvel",
        "basePrice":  9000,
        "bounty":  "Marksman",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Hawkeye"
    },
    {
        "id":  "mv_36",
        "name":  "Black Widow",
        "title":  "Red Room Master (Widows Bite)",
        "role":  "Avenger Assassin",
        "universe":  "marvel",
        "basePrice":  9000,
        "bounty":  "Master Spy",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=BlackWidow"
    },
    {
        "id":  "mv_37",
        "name":  "Winter Soldier",
        "title":  "Vibranium Cybernetic Arm Assassin",
        "role":  "Super Soldier",
        "universe":  "marvel",
        "basePrice":  9500,
        "bounty":  "Shadow Assassin",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=WinterSoldier"
    },
    {
        "id":  "mv_38",
        "name":  "Falcon",
        "title":  "Captain America Vibranium Exo-Wings",
        "role":  "Avenger Aerial",
        "universe":  "marvel",
        "basePrice":  9500,
        "bounty":  "Aerial Avenger",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Falcon"
    },
    {
        "id":  "mv_39",
        "name":  "War Machine",
        "title":  "Iron Patriot Full Heavy Arsenal",
        "role":  "Avenger Artillery",
        "universe":  "marvel",
        "basePrice":  11000,
        "bounty":  "Heavy Artillery",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=WarMachine"
    },
    {
        "id":  "mv_40",
        "name":  "Vision",
        "title":  "Solar Gem Phasing Vibranium Android",
        "role":  "Synthezoid",
        "universe":  "marvel",
        "basePrice":  13000,
        "bounty":  "Synthezoid",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Vision"
    },
    {
        "id":  "mv_41",
        "name":  "Quicksilver",
        "title":  "Speed of Sound Molecular Vibration",
        "role":  "Avenger Speedster",
        "universe":  "marvel",
        "basePrice":  10500,
        "bounty":  "Speed Demon",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Quicksilver"
    },
    {
        "id":  "mv_42",
        "name":  "Ghost Rider",
        "title":  "Spirit of Vengeance (Penance Stare)",
        "role":  "Brimstone Spirit",
        "universe":  "marvel",
        "basePrice":  14500,
        "bounty":  "Demon Rider",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=GhostRider"
    },
    {
        "id":  "mv_43",
        "name":  "Moon Knight",
        "title":  "Fist of Khonshu (Lunar Immortality)",
        "role":  "Lunar Avatar",
        "universe":  "marvel",
        "basePrice":  10500,
        "bounty":  "Midnight Mission",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=MoonKnight"
    },
    {
        "id":  "mv_44",
        "name":  "Blade",
        "title":  "Daywalker Vampire Hunter (Katana)",
        "role":  "Vampire Slayer",
        "universe":  "marvel",
        "basePrice":  10500,
        "bounty":  "Daywalker",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Blade"
    },
    {
        "id":  "mv_45",
        "name":  "Punisher",
        "title":  "Cosmic Ghost Rider / Heavy Armory",
        "role":  "Vigilante",
        "universe":  "marvel",
        "basePrice":  9500,
        "bounty":  "Sole Executioner",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Punisher"
    },
    {
        "id":  "mv_46",
        "name":  "Daredevil",
        "title":  "Man Without Fear (Radar Sense Strike)",
        "role":  "Defender of Hells Kitchen",
        "universe":  "marvel",
        "basePrice":  9000,
        "bounty":  "Devil of Hells Kitchen",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Daredevil"
    },
    {
        "id":  "mv_47",
        "name":  "Luke Cage",
        "title":  "Power Man (Impenetrable Skin)",
        "role":  "Hero for Hire",
        "universe":  "marvel",
        "basePrice":  9500,
        "bounty":  "Unbreakable Brawler",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=LukeCage"
    },
    {
        "id":  "mv_48",
        "name":  "Iron Fist",
        "title":  "Immortal Iron Fist (Chi Dragon Strike)",
        "role":  "Defender of Kun-Lun",
        "universe":  "marvel",
        "basePrice":  10000,
        "bounty":  "Dragon Chi",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=IronFist"
    },
    {
        "id":  "mv_49",
        "name":  "Jessica Jones",
        "title":  "Jewel (Titanium Strength Detective)",
        "role":  "Private Investigator",
        "universe":  "marvel",
        "basePrice":  8500,
        "bounty":  "Alias Investigations",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=JessicaJones"
    },
    {
        "id":  "mv_50",
        "name":  "Elektra Natchios",
        "title":  "Daredevil Master of the Hand",
        "role":  "Hand Assassin",
        "universe":  "marvel",
        "basePrice":  9000,
        "bounty":  "Master Assassin",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Elektra"
    },
    {
        "id":  "mv_51",
        "name":  "Bullseye",
        "title":  "Lethal Precision (Adamantium Spine)",
        "role":  "Mercenary Marksman",
        "universe":  "marvel",
        "basePrice":  8500,
        "bounty":  "Lethal Assassin",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Bullseye"
    },
    {
        "id":  "mv_52",
        "name":  "Kingpin",
        "title":  "Wilson Fisk (Pure Physical Titan)",
        "role":  "Crime Kingpin",
        "universe":  "marvel",
        "basePrice":  8500,
        "bounty":  "Underworld King",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kingpin"
    },
    {
        "id":  "mv_53",
        "name":  "Venom",
        "title":  "King in Black (God of Symbiotes)",
        "role":  "Lethal Protector",
        "universe":  "marvel",
        "basePrice":  14000,
        "bounty":  "Symbiote God",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Venom"
    },
    {
        "id":  "mv_54",
        "name":  "Carnage",
        "title":  "Dark Carnage Absolute Symbiote",
        "role":  "Serial Symbiote",
        "universe":  "marvel",
        "basePrice":  13000,
        "bounty":  "Absolute Carnage",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Carnage"
    },
    {
        "id":  "mv_55",
        "name":  "Green Goblin",
        "title":  "Red Goblin Carnage Symbiote Glider",
        "role":  "Sinister Mastermind",
        "universe":  "marvel",
        "basePrice":  11500,
        "bounty":  "Goblin King",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=GreenGoblin"
    },
    {
        "id":  "mv_56",
        "name":  "Doctor Octopus",
        "title":  "Superior Spider-Man (Titanium Arms)",
        "role":  "Sinister Leader",
        "universe":  "marvel",
        "basePrice":  11000,
        "bounty":  "Master Planner",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=DocOck"
    },
    {
        "id":  "mv_57",
        "name":  "Mysterio",
        "title":  "Holographic Nightmare Drone Master",
        "role":  "Sinister Illusionist",
        "universe":  "marvel",
        "basePrice":  9000,
        "bounty":  "Illusion Master",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Mysterio"
    },
    {
        "id":  "mv_58",
        "name":  "Kraven the Hunter",
        "title":  "Enhanced Jungle Prowess Spear",
        "role":  "Apex Hunter",
        "universe":  "marvel",
        "basePrice":  9000,
        "bounty":  "Big Game Hunter",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kraven"
    },
    {
        "id":  "mv_59",
        "name":  "Sandman",
        "title":  "Planetary Sand Megalith Storm",
        "role":  "Sinister Elemental",
        "universe":  "marvel",
        "basePrice":  9500,
        "bounty":  "Sand Shifter",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Sandman"
    },
    {
        "id":  "mv_60",
        "name":  "Electro",
        "title":  "Pure Electric Overcharge Ion Titan",
        "role":  "Sinister Electric",
        "universe":  "marvel",
        "basePrice":  10000,
        "bounty":  "Pure Energy",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Electro"
    },
    {
        "id":  "mv_61",
        "name":  "Rhino",
        "title":  "Juggernaut Polymer Armor Stampede",
        "role":  "Sinister Brute",
        "universe":  "marvel",
        "basePrice":  8500,
        "bounty":  "Heavy Juggernaut",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Rhino"
    },
    {
        "id":  "mv_62",
        "name":  "Vulture",
        "title":  "High-Altitude Flight Harness Talon",
        "role":  "Sinister Flyer",
        "universe":  "marvel",
        "basePrice":  7500,
        "bounty":  "Aerial Predator",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Vulture"
    },
    {
        "id":  "mv_63",
        "name":  "Scorpion",
        "title":  "Acid Venom Stinger Cyber-Tail",
        "role":  "Sinister Slayer",
        "universe":  "marvel",
        "basePrice":  8000,
        "bounty":  "Cybernetic Stinger",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Scorpion"
    },
    {
        "id":  "mv_64",
        "name":  "Miles Morales",
        "title":  "Mega Venom Blast \u0026 Camouflage",
        "role":  "Brooklyn Spider-Man",
        "universe":  "marvel",
        "basePrice":  11500,
        "bounty":  "Spider-Hero",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Miles"
    },
    {
        "id":  "mv_65",
        "name":  "Spider-Gwen",
        "title":  "Ghost-Spider Symbiote Agility",
        "role":  "Spider-Verse Hero",
        "universe":  "marvel",
        "basePrice":  10000,
        "bounty":  "Ghost-Spider",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=SpiderGwen"
    },
    {
        "id":  "mv_66",
        "name":  "Silk",
        "title":  "Silk Sense Hyper-Instinct \u0026 Webs",
        "role":  "Spider-Totem",
        "universe":  "marvel",
        "basePrice":  9500,
        "bounty":  "Organic Weaver",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Silk"
    },
    {
        "id":  "mv_67",
        "name":  "Spider-Man 2099",
        "title":  "Talon Fangs \u0026 Accelerated Decoy",
        "role":  "2099 Hero",
        "universe":  "marvel",
        "basePrice":  11000,
        "bounty":  "Futuristic Spider",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Spidey2099"
    },
    {
        "id":  "mv_68",
        "name":  "Cable",
        "title":  "Omega Telekinesis \u0026 Techno Arsenal",
        "role":  "Time Traveler",
        "universe":  "marvel",
        "basePrice":  12500,
        "bounty":  "Cybernetic Mutant",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Cable"
    },
    {
        "id":  "mv_69",
        "name":  "Bishop",
        "title":  "Kinetic Energy Absorption \u0026 Blast",
        "role":  "X-Men Enforcer",
        "universe":  "marvel",
        "basePrice":  10500,
        "bounty":  "Temporal Enforcer",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Bishop"
    },
    {
        "id":  "mv_70",
        "name":  "Colossus",
        "title":  "Organic Steel Juggernaut Armor",
        "role":  "X-Men Powerhouse",
        "universe":  "marvel",
        "basePrice":  11000,
        "bounty":  "Steel Giant",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Colossus"
    },
    {
        "id":  "mv_71",
        "name":  "Nightcrawler",
        "title":  "Brimstone Teleportation \u0026 Rapier",
        "role":  "X-Men Swashbuckler",
        "universe":  "marvel",
        "basePrice":  10000,
        "bounty":  "Brimstone Teleporter",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Nightcrawler"
    },
    {
        "id":  "mv_72",
        "name":  "Beast",
        "title":  "Super-Genius Gorilla Agility",
        "role":  "X-Men Scientist",
        "universe":  "marvel",
        "basePrice":  9500,
        "bounty":  "Mutant Polymath",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Beast"
    },
    {
        "id":  "mv_73",
        "name":  "Iceman",
        "title":  "Omega Absolute Zero Frost Titan",
        "role":  "Omega Mutant",
        "universe":  "marvel",
        "basePrice":  13500,
        "bounty":  "Absolute Zero",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Iceman"
    },
    {
        "id":  "mv_74",
        "name":  "Archangel",
        "title":  "Techno-Organic Razor Wing Death",
        "role":  "Horseman of Death",
        "universe":  "marvel",
        "basePrice":  10000,
        "bounty":  "Razor Angel",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Archangel"
    },
    {
        "id":  "mv_75",
        "name":  "Psylocke",
        "title":  "Psychic Katana Telepathic Ninja",
        "role":  "X-Men Ninja",
        "universe":  "marvel",
        "basePrice":  10500,
        "bounty":  "Psychic Blade",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Psylocke"
    },
    {
        "id":  "mv_76",
        "name":  "Emma Frost",
        "title":  "Diamond Form \u0026 Omega Telepathy",
        "role":  "Hellfire White Queen",
        "universe":  "marvel",
        "basePrice":  12500,
        "bounty":  "Diamond Mind",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=EmmaFrost"
    },
    {
        "id":  "mv_77",
        "name":  "Mystique",
        "title":  "Supreme Metamorph \u0026 Infiltration",
        "role":  "Brotherhood Spy",
        "universe":  "marvel",
        "basePrice":  9500,
        "bounty":  "Shapeshifter",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Mystique"
    },
    {
        "id":  "mv_78",
        "name":  "Juggernaut",
        "title":  "Avatar of Cyttorak (Unstoppable)",
        "role":  "Unstoppable Force",
        "universe":  "marvel",
        "basePrice":  13500,
        "bounty":  "Exemplar of Cyttorak",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Juggernaut"
    },
    {
        "id":  "mv_79",
        "name":  "Sabretooth",
        "title":  "Adamantium Claws \u0026 Feral Healing",
        "role":  "Brotherhood Predator",
        "universe":  "marvel",
        "basePrice":  10500,
        "bounty":  "Feral Savage",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Sabretooth"
    },
    {
        "id":  "mv_80",
        "name":  "Apocalypse",
        "title":  "Celestial Armor \u0026 Molecular Control",
        "role":  "First Mutant",
        "universe":  "marvel",
        "basePrice":  15000,
        "bounty":  "Ancient Overlord",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Apocalypse"
    },
    {
        "id":  "mv_81",
        "name":  "Mister Sinister",
        "title":  "Genetic Clone Mastery \u0026 Immortality",
        "role":  "Master Geneticist",
        "universe":  "marvel",
        "basePrice":  13000,
        "bounty":  "Essex Clones",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=MrSinister"
    },
    {
        "id":  "mv_82",
        "name":  "Sentry",
        "title":  "Million Exploding Suns (Void Entity)",
        "role":  "Golden Guardian",
        "universe":  "marvel",
        "basePrice":  16000,
        "bounty":  "Golden Sun Titan",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Sentry"
    },
    {
        "id":  "mv_83",
        "name":  "Hyperion",
        "title":  "Atomic Vision Sun God of Squadron",
        "role":  "Squadron Supreme",
        "universe":  "marvel",
        "basePrice":  14500,
        "bounty":  "Solar Paragon",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Hyperion"
    },
    {
        "id":  "mv_84",
        "name":  "Nova",
        "title":  "Full Nova Prime Nova Force Avatar",
        "role":  "Nova Centurion",
        "universe":  "marvel",
        "basePrice":  13500,
        "bounty":  "Human Rocket",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Nova"
    },
    {
        "id":  "mv_85",
        "name":  "Adam Warlock",
        "title":  "Infinity Watch Guardian (Soul Gem)",
        "role":  "Cosmic Avatar",
        "universe":  "marvel",
        "basePrice":  14500,
        "bounty":  "Sovereign Avatar",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=AdamWarlock"
    },
    {
        "id":  "mv_86",
        "name":  "Beta Ray Bill",
        "title":  "Worthy Korbinite (Stormbreaker Master)",
        "role":  "Korbinite Hero",
        "universe":  "marvel",
        "basePrice":  13500,
        "bounty":  "Stormbreaker Hero",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=BetaRayBill"
    },
    {
        "id":  "mv_87",
        "name":  "Valkyrie",
        "title":  "Dragonfang Blade \u0026 Asgardian Steed",
        "role":  "Shieldmaiden",
        "universe":  "marvel",
        "basePrice":  10500,
        "bounty":  "Asgardian Chooser",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Valkyrie"
    },
    {
        "id":  "mv_88",
        "name":  "Hela",
        "title":  "Goddess of Death (Necrosword Blades)",
        "role":  "Queen of Hel",
        "universe":  "marvel",
        "basePrice":  14500,
        "bounty":  "Undead Overlord",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Hela"
    },
    {
        "id":  "mv_89",
        "name":  "Gorr the God Butcher",
        "title":  "All-Black Necrosword (God Slayer)",
        "role":  "Slayer of Gods",
        "universe":  "marvel",
        "basePrice":  15500,
        "bounty":  "Shadow Realm God",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Gorr"
    },
    {
        "id":  "mv_90",
        "name":  "Kang the Conqueror",
        "title":  "He Who Remains (31st Chrono-Armor)",
        "role":  "Temporal Master",
        "universe":  "marvel",
        "basePrice":  14500,
        "bounty":  "Master of Time",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Kang"
    },
    {
        "id":  "mv_91",
        "name":  "Ultron",
        "title":  "Prime Vibranium Adamantium Hivemind",
        "role":  "AI Conqueror",
        "universe":  "marvel",
        "basePrice":  14000,
        "bounty":  "Synthezoid Hive",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Ultron"
    },
    {
        "id":  "mv_92",
        "name":  "Red Skull",
        "title":  "Cosmic Cube Avatar \u0026 HYDRA Supreme",
        "role":  "HYDRA Supreme",
        "universe":  "marvel",
        "basePrice":  11000,
        "bounty":  "Cosmic Tyrant",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=RedSkull"
    },
    {
        "id":  "mv_93",
        "name":  "Taskmaster",
        "title":  "Photographic Reflexes Copy Master",
        "role":  "Mercenary Elite",
        "universe":  "marvel",
        "basePrice":  9500,
        "bounty":  "Mimic Master",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Taskmaster"
    },
    {
        "id":  "mv_94",
        "name":  "Shang-Chi",
        "title":  "Master of Ten Rings (Dragon Strike)",
        "role":  "Master of Kung Fu",
        "universe":  "marvel",
        "basePrice":  11500,
        "bounty":  "Dragon Fighter",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=ShangChi"
    },
    {
        "id":  "mv_95",
        "name":  "She-Hulk",
        "title":  "Savage Gamma Strength \u0026 Legal Wit",
        "role":  "Avenger Lawyer",
        "universe":  "marvel",
        "basePrice":  11000,
        "bounty":  "Gamma Power",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=SheHulk"
    },
    {
        "id":  "mv_96",
        "name":  "Red Hulk",
        "title":  "Gamma Inferno Heat Discharge Titan",
        "role":  "Thunderbolt Titan",
        "universe":  "marvel",
        "basePrice":  12500,
        "bounty":  "Inferno Brute",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=RedHulk"
    },
    {
        "id":  "mv_97",
        "name":  "Abomination",
        "title":  "Super-Soldier Gamma Spike Behemoth",
        "role":  "Gamma Behemoth",
        "universe":  "marvel",
        "basePrice":  11000,
        "bounty":  "Spike Behemoth",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Abomination"
    },
    {
        "id":  "mv_98",
        "name":  "Namor the Sub-Mariner",
        "title":  "King of Atlantis (Trident \u0026 Wings)",
        "role":  "King of the Oceans",
        "universe":  "marvel",
        "basePrice":  12000,
        "bounty":  "Sub-Mariner",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Namor"
    },
    {
        "id":  "mv_99",
        "name":  "Black Bolt",
        "title":  "Quasi-Sonic Destruction Voice King",
        "role":  "Inhuman King",
        "universe":  "marvel",
        "basePrice":  14000,
        "bounty":  "Midnight King",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=BlackBolt"
    },
    {
        "id":  "mv_100",
        "name":  "Medusa",
        "title":  "Living Trichokinesis Steel Hair Queen",
        "role":  "Inhuman Queen",
        "universe":  "marvel",
        "basePrice":  9500,
        "bounty":  "Steel Strands",
        "image":  "https://api.dicebear.com/7.x/bottts/svg?seed=Medusa"
    }
];

const STORAGE_KEY = 'prime_anime_marvel_v6';

function loadCharacters() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length >= 100) return parsed;
        }
    } catch (e) {
        console.warn('Failed to load characters from localStorage:', e);
    }
    saveCharacters(DEFAULT_CHARACTERS);
    return [...DEFAULT_CHARACTERS];
}

function saveCharacters(chars) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(chars));
    } catch (e) {
        console.warn('Failed to save characters to localStorage:', e);
    }
}

function resetCharactersToDefault() {
    localStorage.removeItem(STORAGE_KEY);
    ['prime_anime_marvel_v5', 'prime_anime_v4', 'prime_anime_v3', 'one_piece_auction_characters_v2', 'one_piece_characters'].forEach(k => {
        try { localStorage.removeItem(k); } catch(e) {}
    });
    saveCharacters(DEFAULT_CHARACTERS);
    return [...DEFAULT_CHARACTERS];
}

