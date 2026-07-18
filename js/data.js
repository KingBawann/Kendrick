// ============================================================
// data.js — Master data store for the Kendrick Lamar Fan Site
// ============================================================

export const KL = {
  // ─── ALBUMS ────────────────────────────────────────────────
  albums: [
    {
      id: 'overly-dedicated',
      title: 'Overly Dedicated',
      year: 2010,
      tracks: 17,
      genres: ['Hip-Hop', 'West Coast', 'Conscious Rap'],
      description: 'A critically acclaimed mixtape that showcased Kendrick\'s lyrical depth and storytelling ability before his major label debut.',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/03/Kendrick_Lamar_-_Overly_Dedicated.jpg',
      color: '#2c3e50',
      producers: ['Dave Free', 'Sounwave', 'THC'],
      awards: [],
      commercial: 'Free mixtape — widely praised within the underground hip-hop community.',
      critical: 'HipHopDX praised it as one of the best mixtapes of 2010.',
      tracklist: [
        'Send It Up','Average Joe','Average Joe Pt. 2','She Needs Me','Barbed Wire',
        'Alien Girl (Today with Her)','She Needs Me','Cut You Off','P&P 1.5','Average Joe Pt. 3',
        'The Heart Pt. 2','Alien Girl Pt. 2 (No Tomorrow)','Michael Jordan','Black Panther',
        'Alien Girl Pt. 3 (Interlude)','Opposites Attract (Tomorrow w/o Her)','Average Joe Pt. 4 (Today w/o Her)'
      ]
    },
    {
      id: 'section-80',
      title: 'Section.80',
      year: 2011,
      tracks: 16,
      genres: ['Hip-Hop', 'Conscious Rap', 'Jazz Rap'],
      description: 'Kendrick\'s major label debut exploring themes of Generation X struggles, systemic racism, and the crack cocaine epidemic\'s aftermath.',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/48/Section.80-Cover.jpg',
      color: '#6d3b2f',
      producers: ['Sounwave', 'Dave Free', 'LoveDragon', 'Wyldfyer'],
      awards: ['BET Hip Hop Award nomination'],
      commercial: 'Debuted at No. 113 on the Billboard 200 as an independent release via iTunes.',
      critical: '9.0 from Pitchfork. Widely lauded as one of the most significant debut albums in rap.',
      tracklist: [
        'Fuck Your Ethnicity','Hol\' Up','HiiiPoWeR','MMXIV','Chapter Six','Ronald Reagan Era',
        'Poe Man\'s Dreams (His Vice)','Chapter Six','Rigamortis','Barbed Wire','Chapter Six',
        'Blow My High (Members Only)','Kush & Corinthians (His Pain)','Chapter Six',
        'Poe Man\'s Dreams (His Vice)','Alien Girl (Today with Her)','No Makeup','Keisha\'s Song (Her Pain)','Chapter Six',
        'Chapter Six (Interlude)','Tammy\'s Song (Her Evils)','Ab-Soul\'s Outro','HiiiPoWeR'
      ]
    },
    {
      id: 'good-kid-maad-city',
      title: 'good kid, m.A.A.d city',
      year: 2012,
      tracks: 12,
      genres: ['Hip-Hop', 'West Coast', 'Concept Album'],
      description: 'A cinematic short film in album form. Kendrick narrates his adolescent years in Compton through a single day — peer pressure, gang culture, faith, and transformation.',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9a/50/a1/9a50a1d8-01c2-2504-8d99-3f2fc7e5c2ff/12UMGIM52988.rgb.jpg/1000x1000bb.jpg',
      color: '#5d4037',
      producers: ['Pharrell Williams', 'Hit-Boy', 'Sounwave', 'Dr. Dre', 'Just Blaze'],
      awards: ['Grammy nomination for Best Rap Album', '5× Platinum (RIAA)'],
      commercial: 'Debuted at #2 on Billboard 200. Over 6 million copies sold worldwide.',
      critical: '91 on Metacritic. Named Album of the Year by numerous publications.',
      tracklist: [
        'Sherane a.k.a Master Splinter\'s Daughter','Bitch Don\'t Kill My Vibe','Backseat Freestyle',
        'The Art of Peer Pressure','Money Trees','Poetic Justice','good kid','m.A.A.d city',
        'Swimming Pools (Drank)','Sing About Me, I\'m Dying of Thirst','Real','Compton'
      ]
    },
    {
      id: 'to-pimp-a-butterfly',
      title: 'To Pimp a Butterfly',
      year: 2015,
      tracks: 16,
      genres: ['Hip-Hop', 'Jazz Rap', 'Funk', 'Soul', 'Spoken Word'],
      description: 'A sprawling jazz-funk masterpiece grappling with Black identity, institutional racism, depression, survivor\'s guilt, and self-actualization through the lens of the African American experience.',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/b5/a6/91/b5a69171-5232-3d5b-9c15-8963802f83dd/15UMGIM15814.rgb.jpg/1000x1000bb.jpg',
      color: '#1a237e',
      producers: ['Thundercat', 'Flying Lotus', 'Terrace Martin', 'Sounwave', 'Pharrell Williams'],
      awards: ['Grammy Award – Best Rap Album', '5× Grammy nominations', 'Grammy Award – Best Rap Song (Alright)'],
      commercial: 'Debuted at #1 on Billboard 200. Leaked one week early and still dominated.',
      critical: '96 on Metacritic. Widely considered one of the greatest albums ever made.',
      tracklist: [
        'Wesley\'s Theory','For Free? (Interlude)','King Kunta','Institutionalized','These Walls',
        'u','Alright','For Sale? (Interlude)','Momma','Hood Politics','How Much a Dollar Cost',
        'Complexion (A Zulu Love)','The Blacker the Berry','You Ain\'t Gotta Lie (Momma Said)',
        'i','Mortal Man'
      ]
    },
    {
      id: 'untitled-unmastered',
      title: 'untitled unmastered.',
      year: 2016,
      tracks: 8,
      genres: ['Hip-Hop', 'Jazz Rap', 'Experimental'],
      description: 'A collection of unfinished studio outtakes from the TPAB sessions released as a surprise, further exploring the jazz-funk territory.',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/60/68/5b/60685bdb-5f89-b56f-ad14-06a92d4f6fac/16UMGIM10771.rgb.jpg/1000x1000bb.jpg',
      color: '#263238',
      producers: ['Sounwave', 'Terrace Martin', 'Flying Lotus', 'Thundercat'],
      awards: ['Grammy Award – Best Rap Album (2017)'],
      commercial: 'Debuted at #1 on Billboard 200.',
      critical: '85 on Metacritic. Praised for its raw, improvisational energy.',
      tracklist: [
        'untitled 01 | 08.19.2014','untitled 02 | 06.23.2014','untitled 03 | 05.28.2013',
        'untitled 04 | 08.14.2014','untitled 05 | 09.21.2014','untitled 06 | 06.30.2014',
        'untitled 07 | 2014 - 2016','untitled 08 | 09.06.2014'
      ]
    },
    {
      id: 'damn',
      title: 'DAMN.',
      year: 2017,
      tracks: 14,
      genres: ['Hip-Hop', 'Trap', 'Conscious Rap'],
      description: 'A meditation on duality — wickedness vs. weakness, pride vs. humility — told through 14 interconnected chapters. The album that won Kendrick the Pulitzer Prize for Music.',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ab/16/ef/ab16efe9-e7f1-66ec-021c-5592a23f0f9e/17UMGIM88793.rgb.jpg/1000x1000bb.jpg',
      color: '#b71c1c',
      producers: ['Mike WiLL Made It', 'DJ Dahi', 'Sounwave', 'Ricci Riera', '9th Wonder'],
      awards: ['Pulitzer Prize for Music (2018)', 'Grammy Award – Best Rap Album', '5× Grammy Awards total', 'Diamond Certified (RIAA)'],
      commercial: 'Debuted at #1 on Billboard 200. Over 10 million copies sold. First non-classical/jazz album to win Pulitzer.',
      critical: '95 on Metacritic. Pulitzer committee called it "a virtuosic song collection."',
      tracklist: [
        'BLOOD.','DNA.','YAH.','ELEMENT.','FEEL.','LOYALTY.','PRIDE.','HUMBLE.',
        'LUST.','LOVE.','XXX.','FEAR.','GOD.','DUCKWORTH.'
      ]
    },
    {
      id: 'black-panther',
      title: 'Black Panther: The Album',
      year: 2018,
      tracks: 14,
      genres: ['Hip-Hop', 'R&B', 'Afrobeats', 'Trap'],
      description: 'Curator and executive producer of the Black Panther soundtrack, uniting African and African-American voices in a groundbreaking musical statement.',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/4d/16/55/4d165549-3d11-86dc-fcbf-be7fe0bcadfb/18UMGIM00002.rgb.jpg/1000x1000bb.jpg',
      color: '#311b92',
      producers: ['Kendrick Lamar', 'Sounwave', 'Various'],
      awards: ['Grammy Award – Best Rap Album', 'Oscar nomination for Best Original Song (All The Stars)'],
      commercial: 'Debuted at #1. Generated over 1 billion streams worldwide.',
      critical: '81 on Metacritic.',
      tracklist: [
        'Black Panther','All the Stars','X','The Ways','Pray for Me','Opps','I Am','Seasons',
        'Big Shot','Paramedic!','Bloody Waters','King\'s Dead','Redemption Interlude',
        'Redemption','Nile'
      ]
    },
    {
      id: 'mr-morale',
      title: 'Mr. Morale & the Big Steppers',
      year: 2022,
      tracks: 18,
      genres: ['Hip-Hop', 'Alternative R&B', 'Conscious Rap'],
      description: 'A deeply introspective double album about therapy, generational trauma, accountability, and radical empathy. Kendrick\'s most personal and polarizing work.',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/6b/17/e6/6b17e679-70e0-e00e-93e1-5af4d25ee8c8/22UMGIM52376.rgb.jpg/1000x1000bb.jpg',
      color: '#3e2723',
      producers: ['Sounwave', 'Pharrell Williams', 'Baby Keem', 'DJ Dahi'],
      awards: ['Grammy Award – Best Rap Album (2023)', '5 Grammy nominations'],
      commercial: 'Debuted at #1 worldwide. 2 billion+ streams in first week.',
      critical: '90 on Metacritic. Polarizing but acclaimed for emotional honesty.',
      tracklist: [
        'United in Grief','N95','Worldwide Steppers','Die Hard','Father Time',
        'Rich (Interlude)','Rich Spirit','We Cry Together','Purple Hearts',
        'Count Me Out','Crown','Silent Hill','Savior (Interlude)','Savior','Auntie Diaries',
        'Mr. Morale','Mother I Sober','Mirror'
      ]
    },
    {
      id: 'gnx',
      title: 'GNX',
      year: 2024,
      tracks: 12,
      genres: ['Hip-Hop', 'West Coast', 'Trap'],
      description: 'Released as a surprise during the Drake feud era, GNX is a triumphant return to West Coast roots, celebrating Kendrick\'s legacy and cultural dominance.',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/54/28/14/54281424-eece-0935-299d-fdd2ab403f92/24UM1IM28978.rgb.jpg/1000x1000bb.jpg',
      color: '#0d1b2a',
      producers: ['Sounwave', 'Jack Antonoff', 'Mustard', 'Kamasi Washington'],
      awards: ['Fastest album to debut at #1 in streaming history at release'],
      commercial: 'Debuted at #1 globally. Broke streaming records.',
      critical: 'Extremely positive reception. Critics praised it as career-defining.',
      tracklist: [
        'wacced out murals','squabble up','luther','man at the garden','hey now',
        'reincarnated','tv off','dodger blue','peekaboo','heart pt. 6',
        'gloria','gnx'
      ]
    }
  ],

  // ─── SONGS ─────────────────────────────────────────────────
  songs: [
    { id: 'alright', title: 'Alright', album: 'to-pimp-a-butterfly', year: 2015, duration: '3:39', mood: 'Triumphant', popularity: 98, producers: ['Pharrell Williams'], themes: ['Resilience','Black Lives Matter','Systemic Racism','Hope'], analysis: 'Often considered the anthem of the Black Lives Matter movement. The song confronts systemic racism and police brutality while declaring an unwavering faith that things will be alright. The hook became a chant at protests across America.', symbolism: 'The Lucy character represents the devil/temptation. The line "we gon\' be alright" represents collective Black resilience in the face of oppression.', awards: ['Grammy Award for Best Rap Song'] },
    { id: 'humble', title: 'HUMBLE.', album: 'damn', year: 2017, duration: '2:57', mood: 'Aggressive', popularity: 99, producers: ['Mike WiLL Made It'], themes: ['Ego','Authenticity','Media Criticism','Self-awareness'], analysis: 'A scathing takedown of fakeness in hip-hop culture and society at large. The Michelangelo-inspired visuals and papal imagery create a complex critique of vanity. Kendrick turns the mirror on himself as much as others.', symbolism: 'The Last Supper imagery positions Kendrick as a Christ-like figure while simultaneously critiquing that very elevation. The "photo" line critiques Photoshop culture and unrealistic beauty standards.', awards: ['Grammy Award for Best Rap Song', 'Grammy Award for Best Music Video'] },
    { id: 'money-trees', title: 'Money Trees', album: 'good-kid-maad-city', year: 2012, duration: '6:26', mood: 'Reflective', popularity: 95, producers: ['DJ Dahi'], themes: ['Poverty','Dreams','Compton','Survival'], analysis: 'A sprawling meditation on ambition and survival in Compton. Featuring Jay Rock, the song captures the duality of wanting to escape poverty through either crime or music. The extended runtime allows the narrative to breathe.', symbolism: '"A dollar might just turn your life around" — the money tree is the dream of financial freedom that hangs just out of reach for those in poverty.', awards: [] },
    { id: 'how-much-a-dollar-cost', title: 'How Much a Dollar Cost', album: 'to-pimp-a-butterfly', year: 2015, duration: '4:20', mood: 'Spiritual', popularity: 93, producers: ['Ronald Isley', 'Sounwave'], themes: ['Greed','Spirituality','Judgment','Humility'], analysis: 'Barack Obama\'s favorite song of 2015. The story of Kendrick ignoring a homeless man who turns out to be God. A parable about the corrupting nature of success and the danger of prioritizing money over humanity.', symbolism: 'The homeless man as God inverts society\'s value hierarchy. The dollar amount is symbolic — Kendrick had $75,000 in his pocket but couldn\'t spare $1, representing spiritual poverty within material wealth.', awards: [] },
    { id: 'swimming-pools', title: 'Swimming Pools (Drank)', album: 'good-kid-maad-city', year: 2012, duration: '5:13', mood: 'Dark', popularity: 92, producers: ['T-Minus'], themes: ['Peer Pressure','Alcohol','Generational Trauma','Temptation'], analysis: 'Disguised as a party anthem, Swimming Pools is actually a dark meditation on peer pressure and alcoholism. The internal dialogue between Kendrick and his subconscious is a narrative device borrowed from Syd Barrett.', symbolism: 'The swimming pool represents the social pressure to "drown" in substance abuse. The repeated "drank" loop mimics the numbing effect of alcohol.', awards: [] },
    { id: 'dna', title: 'DNA.', album: 'damn', year: 2017, duration: '3:05', mood: 'Aggressive', popularity: 97, producers: ['Mike WiLL Made It'], themes: ['Identity','Heritage','Duality','Black Excellence'], analysis: 'Opens DAMN. with an explosive statement of identity. Kendrick declares his contradictions — "I got loyalty, got royalty inside my DNA" — presenting both the trauma and triumph encoded in Black identity.', symbolism: 'DNA as literal genetic code and cultural inheritance. The Fox News clip breakdown shows how mainstream media misrepresents Black art.', awards: ['Grammy nomination for Best Rap Song'] },
    { id: 'poetic-justice', title: 'Poetic Justice', album: 'good-kid-maad-city', year: 2012, duration: '4:38', mood: 'Romantic', popularity: 88, producers: ['Scoop DeVille'], themes: ['Romance','Film','Youth','Compton'], analysis: 'Named after the 1993 John Singleton film, this love song is a rare tender moment on GKMC. Featuring Drake, it captures adolescent romantic yearning in the midst of a story otherwise focused on gang violence.', symbolism: 'The film reference connects Kendrick\'s Compton to the broader history of Black Los Angeles storytelling in cinema.', awards: [] },
    { id: 'n95', title: 'N95', album: 'mr-morale', year: 2022, duration: '3:16', mood: 'Introspective', popularity: 85, producers: ['Sounwave', 'Tae Beast'], themes: ['Authenticity','Social Media','Post-Pandemic','Ego Death'], analysis: 'A deconstruction of performative identity in the social media age, using the COVID N95 mask as a metaphor for the "masks" people wear online and in society.', symbolism: 'The N95 mask represents both pandemic-era literal masks and the metaphorical facades people maintain for social approval.', awards: [] },
    { id: 'father-time', title: 'Father Time', album: 'mr-morale', year: 2022, duration: '4:02', mood: 'Introspective', popularity: 82, producers: ['Sounwave'], themes: ['Fatherhood','Masculinity','Therapy','Generational Trauma'], analysis: 'A brave examination of toxic masculinity and the failure of fathers to model emotional vulnerability. Featuring Sampha, it\'s among Kendrick\'s most emotionally raw performances.', symbolism: 'Father Time represents the perpetual cycle of generational trauma passed from father to son. Kendrick acknowledges his own emotional limitations while seeking to break the cycle.', awards: [] },
    { id: 'element', title: 'ELEMENT.', album: 'damn', year: 2017, duration: '3:26', mood: 'Boastful', popularity: 90, producers: ['DJ Dahi'], themes: ['Competition','Legacy','Authenticity','West Coast'], analysis: 'A statement of dominance that doubles as a meditation on mortality. The Gordon Parks-inspired music video is a visual masterpiece. Kendrick challenges his peers to match his level.', symbolism: 'The element is both his natural environment (Compton) and the element of surprise. The line "If I gotta slap a pussy-ass n****" refers to artistic rather than physical competition.', awards: [] },
    { id: 'luther', title: 'luther', album: 'gnx', year: 2024, duration: '3:31', mood: 'Triumphant', popularity: 96, producers: ['Sounwave', 'Jack Antonoff'], themes: ['Love','Victory','Legacy','West Coast'], analysis: 'The lead single from GNX, featuring SZA. A triumphant love song that also signals Kendrick\'s victory in the Drake beef. The Luther Vandross sample adds a warm, classic soul dimension.', symbolism: 'Luther Vandross represents timeless Black romantic music. The song bridges classic soul and modern hip-hop, symbolizing Kendrick\'s connection to the Black musical tradition.', awards: [] },
    { id: 'squabble-up', title: 'squabble up', album: 'gnx', year: 2024, duration: '2:54', mood: 'Aggressive', popularity: 91, producers: ['Mustard'], themes: ['Competition','West Coast Pride','Victory'], analysis: 'A celebratory diss track that plays like a victory lap. The Mustard-produced beat brings classic West Coast energy while Kendrick dissects his dominance in the rap beef.', symbolism: 'squabble up refers to confrontation, both physical and lyrical. The West Coast production is deliberately nostalgic, anchoring Kendrick\'s win in the tradition of Compton rap.', awards: [] },
    { id: 'mirrors', title: 'Mirror', album: 'mr-morale', year: 2022, duration: '5:19', mood: 'Introspective', popularity: 80, producers: ['Sounwave'], themes: ['Self-love','Accountability','Legacy','Closure'], analysis: 'The closing track of Mr. Morale, Kendrick\'s "I choose me, I\'m sorry" statement. A deeply personal meditation on his responsibility to himself over his public persona.', symbolism: 'The mirror as self-reflection and self-acceptance. After chapters of examining trauma and others\' pain, Kendrick finally turns the gaze inward and chooses self-preservation.', awards: [] },
    { id: 'united-in-grief', title: 'United in Grief', album: 'mr-morale', year: 2022, duration: '3:47', mood: 'Introspective', popularity: 78, producers: ['Sounwave', 'Baby Keem'], themes: ['Grief','Therapy','Success Paradox','Mental Health'], analysis: 'Opens Mr. Morale with Kendrick counting his therapy sessions and admitting that success hasn\'t cured his grief. Sets the confessional tone for the entire double album.', symbolism: 'The 1,855 days count represents the time since his last album — a period of immense external success but internal struggle. Grief as the universal human connector.', awards: [] },
    { id: 'blacker-the-berry', title: 'The Blacker the Berry', album: 'to-pimp-a-butterfly', year: 2015, duration: '5:28', mood: 'Aggressive', popularity: 89, producers: ['Boi-1da', 'Sounwave'], themes: ['Anti-racism','Hypocrisy','Black Self-destruction','Identity'], analysis: 'One of Kendrick\'s most confrontational tracks, accusing America of hypocrisy while also turning the critique inward on Black-on-Black violence. The ending twist remains one of rap\'s most discussed moments.', symbolism: '"The blacker the berry, the sweeter the juice" — a saying reclaimed to celebrate Black excellence before pivoting to a shocking self-critique that implicates Kendrick in the same systemic failures he condemns.', awards: [] },
    { id: 'humble-added', title: 'HUMBLE.', album: 'damn', year: 2017, duration: '2:57', mood: 'Aggressive', popularity: 98, producers: ['Mike WiLL Made-It'], themes: ['Ego', 'Success', 'Authenticity', 'Braggadocio'], analysis: 'Kendrick’s first solo #1 Billboard hit. A minimalist, piano-driven beat where Kendrick forcefully demands respect while ironically repeating "be humble." It acts as a powerful flex masking as a lesson in modesty.', symbolism: 'The juxtaposition of the boastful lyrics with the command to "be humble" reflects the internal battle between ego and spiritual grounding.', awards: ['Grammy Award for Best Rap Performance', 'Grammy Award for Best Rap Song', 'Grammy Award for Best Music Video'] },
    { id: 'maad-city', title: 'm.A.A.d city', album: 'good-kid-maad-city', year: 2012, duration: '5:50', mood: 'Aggressive', popularity: 94, producers: ['Sounwave', 'THC', 'Terrace Martin'], themes: ['Gang Violence', 'Trauma', 'Compton', 'Survival'], analysis: 'A harrowing, high-energy recount of the gang violence and PTSD Kendrick experienced growing up in Compton. Features a terrifyingly authentic vocal delivery and an iconic beat switch.', symbolism: 'The phrase "m.A.A.d" stands for "My Angry Adolescence Divided" and "My Angels on Angel Dust," capturing the dual nature of growing up in a hostile environment.', awards: [] },
    { id: 'bitch-dont-kill-my-vibe', title: 'Bitch, Don\'t Kill My Vibe', album: 'good-kid-maad-city', year: 2012, duration: '5:10', mood: 'Reflective', popularity: 93, producers: ['Sounwave'], themes: ['Isolation', 'Industry Pressure', 'Spiritual Energy'], analysis: 'An incredibly smooth, ethereal track where Kendrick protects his creative and spiritual energy from the superficiality of the music industry.', symbolism: 'The "vibe" is Kendrick’s artistic integrity and spiritual peace. The people trying to kill it represent industry executives and fair-weather friends.', awards: [] },
    { id: 'money-trees-added', title: 'Money Trees', album: 'good-kid-maad-city', year: 2012, duration: '6:26', mood: 'Reflective', popularity: 96, producers: ['DJ Dahi'], themes: ['Hustle', 'Poverty', 'Temptation', 'Consequences'], analysis: 'Featuring Jay Rock, this atmospheric classic examines the desperate measures people take to escape poverty and the false promise that money solves all problems.', symbolism: 'The "Money Tree" represents the illusion that wealth provides shelter from the harsh realities of life—"the perfect place for shade" that ultimately doesn\'t exist.', awards: [] }
  ],

  // ─── BIOGRAPHY TIMELINE ────────────────────────────────────
  biography: [
    { year: '1987', title: 'Born in Compton', description: 'Kendrick Lamar Duckworth is born on June 17, 1987, in Compton, California. His parents, Kenny Duckworth and Paula Oliver, move to Compton from Chicago. He grows up in one of the most dangerous neighborhoods in America.', fact: 'Kendrick witnessed Tupac Shakur and Dr. Dre filming the "California Love" music video at age 8.' },
    { year: '2003', title: 'First Rap Steps', description: 'At age 16, Kendrick releases his first project under the name K-Dot, a mixtape called "Youngest Head Nigga in Charge (Y.H.N.I.C)." He signs with Yo-Yo\'s label Top Dawg Entertainment (TDE).', fact: 'He wrote his first rap at age 13, inspired by Tupac and Jay-Z.' },
    { year: '2009', title: 'Overly Dedicated Era', description: 'After several mixtapes including "Hub City Threat: Minor of the Year," Kendrick begins recording what will become "Overly Dedicated." He builds a loyal underground following in Los Angeles.', fact: 'Dr. Dre heard Kendrick\'s music through his protégé Game and was immediately impressed.' },
    { year: '2011', title: 'Section.80 & Major Label Deal', description: 'Signs with Dr. Dre\'s Aftermath Entertainment and Interscope Records while remaining under TDE. Releases Section.80, his first major-label album, independently distributed through iTunes. Pitchfork gives it a 9.0.', fact: 'Section.80 was entirely self-funded by TDE and distributed without a major label advance.' },
    { year: '2012', title: 'good kid, m.A.A.d city', description: 'Releases one of the most acclaimed rap albums ever made. Features collaborations with Pharrell, Dr. Dre, and Jay Rock. Goes 5× Platinum. Nominated for Best Rap Album Grammy. Becomes the face of the new generation of hip-hop.', fact: 'The album\'s narrative structure was inspired by John Singleton\'s "Boyz n the Hood."' },
    { year: '2013', title: 'Control Verse', description: 'Drops a guest verse on Big Sean\'s "Control" that sends shockwaves through the rap world, calling out Jay-Z, Drake, J. Cole, Meek Mill, and others by name, declaring himself the king of New York.', fact: 'The "Control" verse was written in 30 minutes backstage at a concert.' },
    { year: '2015', title: 'To Pimp a Butterfly', description: 'Releases TPAB, a jazz-funk opus that redefines what hip-hop can be. Features "Alright," which becomes the anthem of the Black Lives Matter movement. Performs at the Grammy Awards with Thundercat and dancers draped in African imagery.', fact: 'Barack Obama named "How Much a Dollar Cost" his favorite song of 2015.' },
    { year: '2016', title: 'untitled unmastered. & Compton Performance', description: 'Surprise-releases outtakes from TPAB sessions. Delivers one of the most celebrated Grammy performances in history — shackled prisoners, African drums, and a map of Africa projected on stage.', fact: 'The Grammy performance was planned in just three weeks.' },
    { year: '2017', title: 'DAMN. & Pulitzer Prize History', description: 'Releases DAMN., which debuts at #1 and wins 5 Grammys. In 2018, becomes the first non-classical or jazz musician to win the Pulitzer Prize for Music. Diamond certified by the RIAA.', fact: 'The Pulitzer committee called DAMN. "a virtuosic song collection unified by its vernacular authenticity."' },
    { year: '2018', title: 'Black Panther & Super Bowl', description: 'Curates and performs on the Black Panther: The Album soundtrack. "All the Stars" ft. SZA receives an Oscar nomination. Headlines Coachella alongside former NFL players and dancers.', fact: 'Kendrick turned down the Super Bowl halftime show unless the NFL took a clear stance on player protests.' },
    { year: '2022', title: 'Mr. Morale & the Big Steppers', description: 'Returns after a 5-year hiatus with his most personal album. Headlines Glastonbury, the first rapper to headline since Jay-Z in 2008. Wins Grammy for Best Rap Album.', fact: 'He headlined Glastonbury the same week the album was released, performing entirely new material.' },
    { year: '2023-24', title: 'Drake Feud & GNX', description: 'Releases a series of diss tracks targeting Drake, including "Euphoria," "6:16 in LA," "Meet the Grahams," and the #1 hit "Not Like Us." Releases surprise album GNX in November 2024 to universal acclaim.', fact: '"Not Like Us" becomes the fastest rap song to reach #1 on the Billboard Hot 100.' },
    { year: '2025', title: 'Super Bowl & World Tour', description: 'Headlines the Super Bowl LIX halftime show in New Orleans — widely praised as one of the greatest halftime performances in history. Announces the Grand National Tour with SZA.', fact: 'The Super Bowl performance featured over 200 dancers and cameos from Dr. Dre and Samuel L. Jackson.' }
  ],

  // ─── AWARDS ────────────────────────────────────────────────
  awards: [
    { category: 'Grammy Awards', count: 27, icon: '🏆', color: '#d4af37', items: ['Best Rap Album (TPAB, 2016)', 'Best Rap Album (untitled unmastered., 2017)', 'Best Rap Album (DAMN., 2018)', 'Best Rap Album (Black Panther, 2019)', 'Best Rap Album (Mr. Morale, 2023)', 'Best Rap Song (Alright)', 'Best Rap Song (HUMBLE.)', 'Best Music Video (HUMBLE.)', '+ 19 additional Grammy wins'] },
    { category: 'Pulitzer Prize', count: 1, icon: '📜', color: '#c0392b', items: ['Pulitzer Prize for Music (2018) — DAMN. — First non-classical/jazz musician ever'] },
    { category: 'BET Hip Hop Awards', count: 12, icon: '🎤', color: '#8e44ad', items: ['Hip Hop Artist of the Year (multiple)', 'Album of the Year (multiple)', 'MVP of the Year', 'Best Club Banger', 'Track of the Year'] },
    { category: 'MTV Awards', count: 8, icon: '🎬', color: '#2980b9', items: ['Video of the Year (HUMBLE.)', 'Best Hip-Hop Video (multiple)', 'Best Editing', 'Best Art Direction'] },
    { category: 'Billboard Awards', count: 5, icon: '📊', color: '#27ae60', items: ['Top Rap Artist', 'Top Rap Album (DAMN.)', 'Top Rap Song', 'Top Streaming Artist'] },
    { category: 'American Music Awards', count: 4, icon: '🎵', color: '#e67e22', items: ['Favorite Rap/Hip-Hop Artist (multiple)', 'Favorite Rap/Hip-Hop Album', 'Video of the Year'] }
  ],

  // ─── COLLABORATIONS ────────────────────────────────────────
  collaborations: [
    { name: 'SZA', songs: ['All the Stars', 'luther', 'Purple Hearts'], role: 'Frequent collaborator & TDE labelmate', color: '#9b59b6' },
    { name: 'Dr. Dre', songs: ['Compton', 'The Recipe', 'Bitch Don\'t Kill My Vibe (remix)'], role: 'Mentor & producer', color: '#3498db' },
    { name: 'Jay Rock', songs: ['Money Trees', 'ADHD', 'Pay for It'], role: 'TDE labelmate & longtime friend', color: '#e74c3c' },
    { name: 'Baby Keem', songs: ['family ties', 'Range Brothers', 'United in Grief'], role: 'Nephew & PgLang signee', color: '#f39c12' },
    { name: 'Pharrell Williams', songs: ['Alright', 'LOYALTY.', 'Money Trees'], role: 'Legendary producer', color: '#1abc9c' },
    { name: 'Thundercat', songs: ['These Walls', 'u', 'For Free?'], role: 'Jazz bassist & TPAB collaborator', color: '#e67e22' },
    { name: 'Future', songs: ['Mask Off (remix)', 'King\'s Dead'], role: 'Atlanta rap peer', color: '#95a5a6' },
    { name: 'Taylor Swift', songs: ['Bad Blood (remix)'], role: 'Pop crossover collaboration', color: '#f1c40f' },
    { name: 'Rihanna', songs: ['LOYALTY.'], role: 'Grammy-winning feature', color: '#c0392b' },
    { name: 'J. Cole', songs: ['Apparently', 'Black Friday', 'First Person Shooter'], role: 'Rap peer & occasional rival', color: '#2c3e50' },
    { name: 'The Weeknd', songs: ['Pray for Me'], role: 'Black Panther soundtrack collaborator', color: '#8e44ad' },
    { name: 'Drake', songs: ['Poetic Justice', 'Buried Alive Interlude'], role: 'Former collaborator turned rival', color: '#16a085' },
    { name: 'Beyoncé', songs: ['Freedom (remix discussion)', 'Grand National Tour'], role: 'Music industry icon & peer', color: '#d4af37' },
    { name: 'Zacari', songs: ['LOVE.'], role: 'TDE singer & frequent collaborator', color: '#e74c3c' }
  ],

  // ─── QUOTES ────────────────────────────────────────────────
  quotes: [
    { text: 'I come from a generation where a n**** might shoot you just to see how it feels. There\'s no honor in that. I\'ve seen too much of that.', source: 'Interview, Rolling Stone, 2012' },
    { text: 'I want to be better than the best. That\'s what drives me every time I walk in the studio.', source: 'Interview, XXL Magazine, 2013' },
    { text: 'The world has to change through music. Music is a gift and a curse. You can use it to manipulate people, or you can use it to uplift people.', source: 'Glastonbury Press Conference, 2022' },
    { text: 'If I\'m going to tell a real story, I\'m going to start with my name. That\'s the first truth I learned — identity.', source: 'Pulitzer Prize Acceptance Statement, 2018' },
    { text: 'I think rap chose me. I never chose rap. God put it in me. And I think God wants me to say things that other people are afraid to say.', source: 'Interview, Complex, 2015' },
    { text: 'The most powerful thing is to be yourself. That\'s the biggest risk you can take in this world.', source: 'BET Hip Hop Awards Speech, 2013' },
    { text: 'My greatest challenge is to never stay stagnant. My greatest fear is to be misunderstood.', source: 'Interview, Vibe Magazine, 2014' },
    { text: 'When you know who you are, and what God put in you, no one can ever take that from you. No beef, no hate, no amount of money.', source: 'TDE Holiday Message, 2017' },
    { text: 'Hip-hop isn\'t just a genre. It\'s an emotion. It\'s documentation of an experience that no other art form captures.', source: 'Interview, The Guardian, 2016' },
    { text: 'Anybody who wants to be great has to understand that greatness is a process. You don\'t just wake up great. You have to work for it every single day.', source: 'Commencement Address Reference, 2018' }
  ],

  // ─── FUN FACTS ─────────────────────────────────────────────
  facts: [
    { fact: 'Kendrick is the first non-classical or jazz musician to win the Pulitzer Prize for Music.', category: 'Historic' },
    { fact: 'He was born in Compton, California — the same city that Dr. Dre, Eazy-E, and Ice Cube called home.', category: 'Origins' },
    { fact: 'His legal name is Kendrick Lamar Duckworth. "Duckworth" is the last name of his father, Kenny.', category: 'Personal' },
    { fact: 'At 8 years old, Kendrick witnessed Tupac and Dr. Dre filming "California Love" near his home.', category: 'Childhood' },
    { fact: 'Barack Obama publicly declared "How Much a Dollar Cost" his favorite song of 2015.', category: 'Cultural Impact' },
    { fact: 'DAMN. is the only rap album to ever win the Pulitzer Prize — beating out classical and jazz compositions.', category: 'Historic' },
    { fact: 'He was discovered by Top Dawg Entertainment at age 16 and has been with TDE ever since.', category: 'Career' },
    { fact: '"Alright" became the anthem of the Black Lives Matter movement in 2015, chanted at protests across America.', category: 'Cultural Impact' },
    { fact: 'Kendrick has won 27 Grammy Awards, making him one of the most Grammy-decorated rappers in history.', category: 'Awards' },
    { fact: 'He headlined the 2025 Super Bowl LIX halftime show with over 200 dancers — widely called the greatest halftime show ever.', category: 'Performances' },
    { fact: 'He turned down the Super Bowl halftime show offer unless the NFL took a clear stance on player protests.', category: 'Values' },
    { fact: '"Not Like Us" is one of the fastest rap songs to reach #1 on the Billboard Hot 100.', category: 'Records' },
    { fact: 'He is only the second rapper (after Jay-Z in 2008) to headline Glastonbury Festival.', category: 'Milestones' },
    { fact: 'To Pimp a Butterfly was recorded over 18 months across studios in LA, New York, and London.', category: 'Process' },
    { fact: 'Kendrick is ambidextrous but prefers writing with his left hand.', category: 'Personal' },
    { fact: 'The cover of DAMN. was shot by Kendrick\'s longtime creative director Dave Free using an iPhone.', category: 'Behind the Scenes' }
  ],

  // ─── QUIZ QUESTIONS ────────────────────────────────────────
  quiz: [
    { q: 'In what city was Kendrick Lamar born?', options: ['Los Angeles', 'Compton', 'Inglewood', 'Long Beach'], answer: 1 },
    { q: 'What is Kendrick Lamar\'s legal last name?', options: ['Lamar', 'Duckworth', 'King', 'Carter'], answer: 1 },
    { q: 'What album won the first ever Pulitzer Prize for a hip-hop record?', options: ['To Pimp a Butterfly', 'Mr. Morale', 'DAMN.', 'good kid, m.A.A.d city'], answer: 2 },
    { q: 'Who was Kendrick\'s mentor and signed him to Aftermath Entertainment?', options: ['Jay-Z', 'Pharrell Williams', 'Dr. Dre', 'Rick Rubin'], answer: 2 },
    { q: 'Which album features the song "Alright"?', options: ['DAMN.', 'good kid, m.A.A.d city', 'Section.80', 'To Pimp a Butterfly'], answer: 3 },
    { q: 'What is the name of Kendrick\'s management company and creative agency?', options: ['TDE', 'PgLang', 'Aftermath', 'Roc Nation'], answer: 1 },
    { q: 'Which former US president named "How Much a Dollar Cost" his favorite song of 2015?', options: ['George W. Bush', 'Bill Clinton', 'Barack Obama', 'Joe Biden'], answer: 2 },
    { q: 'Kendrick headlined which iconic UK festival in 2022?', options: ['Reading', 'Coachella', 'Glastonbury', 'Lollapalooza'], answer: 2 },
    { q: 'What movie soundtrack did Kendrick executive produce in 2018?', options: ['Black Panther', 'Creed', 'Space Jam', 'Spider-Man: Into the Spider-Verse'], answer: 0 },
    { q: 'How many tracks are on DAMN.?', options: ['12', '14', '16', '18'], answer: 1 },
    { q: 'What is Kendrick\'s most commercially successful album by certifications?', options: ['TPAB', 'good kid, m.A.A.d city', 'DAMN.', 'GNX'], answer: 2 },
    { q: 'Which rapper did Kendrick famously call out in the "Control" verse?', options: ['Lil Wayne, Nicki Minaj', 'Jay-Z, Drake, J. Cole', 'Eminem, Kanye West', 'Future, Travis Scott'], answer: 1 },
    { q: 'What is the final track on To Pimp a Butterfly?', options: ['Alright', 'i', 'Mortal Man', 'The Blacker the Berry'], answer: 2 },
    { q: 'In what year was Kendrick Lamar born?', options: ['1985', '1987', '1989', '1991'], answer: 1 },
    { q: 'Which Kendrick song features Rihanna?', options: ['LOVE.', 'LOYALTY.', 'HUMBLE.', 'DNA.'], answer: 1 },
    { q: 'How many Grammy Awards has Kendrick Lamar won as of 2024?', options: ['10', '13', '27', '32'], answer: 2 },
    { q: 'Which album did Kendrick release as a surprise in November 2024?', options: ['Mr. Morale Pt. 2', 'GNX', 'The Heart Pt. 7', 'Compton'], answer: 1 },
    { q: 'What is the name of Kendrick\'s collaboration with SZA on GNX?', options: ['gloria', 'luther', 'squabble up', 'peekaboo'], answer: 1 },
    { q: 'Which Kendrick album opens with the song "United in Grief"?', options: ['DAMN.', 'To Pimp a Butterfly', 'Mr. Morale & the Big Steppers', 'GNX'], answer: 2 },
    { q: 'In 2025, Kendrick headlined which major US event?', options: ['NBA All-Star', 'Super Bowl LIX Halftime Show', 'Met Gala', 'Oscars'], answer: 1 },
    { q: 'What alter ego does Kendrick frequently use in his music?', options: ['Slim Shady', 'Kung Fu Kenny', 'Makaveli', 'Snoop Lion'], answer: 1 },
    { q: 'Which song features the famous phrase "Bitch, don\'t kill my vibe"?', options: ['Bitch, Don\'t Kill My Vibe', 'Backseat Freestyle', 'Swimming Pools', 'Money Trees'], answer: 0 },
    { q: 'What is the name of Kendrick\'s childhood friend who inspired parts of GKMC?', options: ['Dave', 'Sherane', 'Keisha', 'Paula'], answer: 1 },
    { q: 'Which artist did NOT feature on To Pimp a Butterfly?', options: ['George Clinton', 'Snoop Dogg', 'Thundercat', 'Drake'], answer: 3 },
    { q: 'What instrument is prominently featured throughout Mr. Morale & The Big Steppers?', options: ['Saxophone', 'Tap dancing shoes', 'Violin', 'Electric guitar'], answer: 1 },
    { q: 'Kendrick\'s first mixtape was released under what stage name?', options: ['K-Dot', 'Kenny', 'K.L.', 'Kendrick Duckworth'], answer: 0 },
    { q: 'Which track off DAMN. features a beat produced by The Alchemist?', options: ['FEAR.', 'DUCKWORTH.', 'PRIDE.', 'LUST.'], answer: 0 },
    { q: 'Which song was the first single released for GNX?', options: ['luther', 'squabble up', 'wacced out murals', 'tv off'], answer: 1 },
    { q: 'What major historical event is referenced visually in the "Alright" music video?', options: ['Civil Rights Movement', 'Police brutality protests', 'Rodney King riots', 'Black Panther Party'], answer: 1 },
    { q: 'What color is heavily associated with the aesthetic of DAMN.?', options: ['Blue', 'Green', 'Red', 'Gold'], answer: 2 },
    { q: 'What phrase does Kendrick famously repeat in "Family Ties" with Baby Keem?', options: ['I am the greatest', 'Amazing brother', 'Top of the morning', 'Smoking on top fives'], answer: 2 },
    { q: 'Which classic 1990s movie heavily inspired the narrative of GKMC?', options: ['Menace II Society', 'Boyz n the Hood', 'Friday', 'Juice'], answer: 1 },
    { q: 'Who provides the spoken word intro on To Pimp a Butterfly\'s "Wesley\'s Theory"?', options: ['Dr. Dre', 'Snoop Dogg', 'George Clinton', 'Josef Leimberg'], answer: 2 },
    { q: 'Kendrick Lamar\'s Pulitzer Prize was historically significant because...', options: ['He was the youngest winner', 'He was the first non-classical/jazz winner', 'He tied with Bob Dylan', 'It was awarded posthumously'], answer: 1 },
    { q: 'Which track on DAMN. tells the true story of Top Dawg almost killing Kendrick\'s father?', options: ['FEAR.', 'BLOOD.', 'DNA.', 'DUCKWORTH.'], answer: 3 },
    { q: 'What does the acronym "GNX" stand for?', options: ['Grand National Experimental', 'Generation X', 'Buick Grand National', 'Good Nation X'], answer: 2 },
    { q: 'What is the name of Kendrick\'s creative agency launched in 2020?', options: ['TDE', 'Aftermath', 'pgLang', 'Oklama'], answer: 2 },
    { q: 'Which female artist is heavily featured on the GNX album?', options: ['Rihanna', 'SZA', 'Summer Walker', 'Beyoncé'], answer: 1 },
    { q: 'What is Kendrick\'s legal middle name?', options: ['Duckworth', 'Lamar', 'King', 'Carl'], answer: 1 },
    { q: 'The song "Sing About Me, I\'m Dying of Thirst" features how many distinct parts/perspectives?', options: ['One', 'Two', 'Three', 'Four'], answer: 2 }
  ],

  // ─── STATS ─────────────────────────────────────────────────
  stats: {
    grammyWins: 27,
    albumsSold: 40000000,
    spotifyMonthlyListeners: 65000000,
    yearsActive: 21,
    albumCount: 9,
    pulitzerPrize: 1,
    countriesOnTour: 40
  }
};
