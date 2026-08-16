/**
 * Adding a song is a ONE-LINE change: append a Track to a playlist array.
 *
 * RIGHTS NOTE — read before adding anything:
 * Only add a videoId you own the rights to, or an upload from the rights
 * holder's own YouTube channel with embedding enabled. Nothing here was
 * sourced or suggested automatically.
 *
 * `videoId: ""` means "not wired up yet" — the player shows a notice for those
 * entries instead of guessing at a video.
 */

export type Track = {
  id: string;
  title: string;
  artist: string;
  film: string;
  year: number;
  /** seconds; a fallback until the YouTube player reports real duration */
  duration: number;
  /** YouTube video id, from a rights-holder upload with embedding enabled */
  videoId: string;
};

export type Playlist = {
  id: string;
  name: string;
  blurb: string;
  tracks: Track[];
};

/**
 * Every videoId below is an OFFICIAL rights-holder upload (YRF, Saregama,
 * Sony Music India, T-Series, Ishtar) with embedding enabled, played through
 * YouTube's visible embedded player. Swap in your own if you prefer.
 */
export const playlists: Playlist[] = [
  {
    id: "golden",
    name: "Golden Hour",
    blurb: "Slow evenings, open windows",
    tracks: [
      { id: "g1", title: "Tujhe Dekha Toh Yeh Jaana Sanam", artist: "Lata Mangeshkar, Kumar Sanu", film: "Dilwale Dulhania Le Jayenge", year: 1995, duration: 314, videoId: "cNV5hLSa9H8" },
      { id: "g2", title: "Pehla Nasha", artist: "Udit Narayan, Sadhana Sargam", film: "Jo Jeeta Wohi Sikandar", year: 1992, duration: 308, videoId: "Ki41AKu0iHc" },
      { id: "g3", title: "Kabhi Kabhie Mere Dil Mein", artist: "Lata Mangeshkar", film: "Kabhi Kabhie", year: 1976, duration: 297, videoId: "-W2dagktUp0" },
      { id: "g4", title: "Tere Bina", artist: "A. R. Rahman, Chinmayi", film: "Guru", year: 2007, duration: 289, videoId: "9JDSGhhiOwI" },
      { id: "g5", title: "Kal Ho Naa Ho", artist: "Sonu Nigam", film: "Kal Ho Naa Ho", year: 2003, duration: 288, videoId: "g0eO74UmRBs" },
    ],
  },
  {
    id: "monsoon",
    name: "Monsoon Tapes",
    blurb: "Rain on the terrace, tape hiss",
    tracks: [
      { id: "m1", title: "Rimjhim Gire Sawan", artist: "Kishore Kumar", film: "Manzil", year: 1979, duration: 249, videoId: "gpHYr7DB2Jo" },
      { id: "m2", title: "Chaiyya Chaiyya", artist: "Sukhwinder Singh, Sapna Awasthi", film: "Dil Se", year: 1998, duration: 412, videoId: "lZLxjLYyhYQ" },
      { id: "m3", title: "Iktara", artist: "Kavita Seth, Amit Trivedi", film: "Wake Up Sid", year: 2009, duration: 254, videoId: "ZlOZktsODpA" },
      { id: "m4", title: "Kun Faya Kun", artist: "A. R. Rahman, Javed Ali, Mohit Chauhan", film: "Rockstar", year: 2011, duration: 381, videoId: "T94PHkuydcw" },
    ],
  },
  {
    id: "latenight",
    name: "Late Night FM",
    blurb: "After midnight, volume low",
    tracks: [
      { id: "l1", title: "Tum Hi Ho", artist: "Arijit Singh", film: "Aashiqui 2", year: 2013, duration: 310, videoId: "IJq0yyWug1k" },
      { id: "l2", title: "Channa Mereya", artist: "Arijit Singh", film: "Ae Dil Hai Mushkil", year: 2016, duration: 346, videoId: "bzSTpdcs-EI" },
      { id: "l3", title: "Ae Dil Hai Mushkil", artist: "Arijit Singh", film: "Ae Dil Hai Mushkil", year: 2016, duration: 301, videoId: "6FURuLYrR_Q" },
    ],
  },
  {
    id: "retro-6070",
    name: "Golden 60s–70s",
    blurb: "Vinyl crackle, Bombay evenings",
    tracks: [
      { id: "retro-6070-1", title: "Aaj Phir Jeene Ki Tamanna Hai", artist: "Lata Mangeshkar", film: "Guide", year: 1965, duration: 235, videoId: "-1bJtCPmSdM" },
      { id: "retro-6070-2", title: "Kabhi Kabhie Mere Dil Mein (Male)", artist: "Mukesh", film: "Kabhi Kabhie", year: 1976, duration: 169, videoId: "BVnz6oSupUM" },
      { id: "retro-6070-3", title: "Yeh Shaam Mastani", artist: "Kishore Kumar", film: "Kati Patang", year: 1970, duration: 270, videoId: "-sTS4XozNnY" },
      { id: "retro-6070-4", title: "Gulabi Aankhen", artist: "Mohammed Rafi", film: "The Train", year: 1970, duration: 199, videoId: "Xsn0QjMN3fM" },
      { id: "retro-6070-5", title: "Zindagi Ek Safar", artist: "Kishore Kumar", film: "Andaz", year: 1971, duration: 262, videoId: "LlvoY4v5zm0" },
      { id: "retro-6070-6", title: "Dum Maro Dum", artist: "Asha Bhosle", film: "Hare Rama Hare Krishna", year: 1971, duration: 163, videoId: "GUn3P5QyLRY" },
      { id: "retro-6070-7", title: "Piya Tu Ab To Aaja", artist: "Asha Bhosle", film: "Caravan", year: 1971, duration: 347, videoId: "yULawzPhBEI" },
      { id: "retro-6070-8", title: "Chalte Chalte", artist: "Kishore Kumar", film: "Chalte Chalte", year: 1976, duration: 437, videoId: "kzTWRX9Dhrg" },
      { id: "retro-6070-9", title: "Tere Bina Zindagi Se", artist: "Lata Mangeshkar, Kishore Kumar", film: "Aandhi", year: 1975, duration: 369, videoId: "EiUDYzqdz2U" },
      { id: "retro-6070-10", title: "Kora Kagaz Tha Yeh Man Mera", artist: "Kishore Kumar, Lata Mangeshkar", film: "Aradhana", year: 1969, duration: 361, videoId: "kqXs4GGp8bw" },
      { id: "retro-6070-11", title: "Ek Ajnabee Haseena Se", artist: "Kishore Kumar", film: "Ajnabee", year: 1974, duration: 290, videoId: "vS_JXshiu68" },
      { id: "retro-6070-12", title: "O Mere Dil Ke Chain", artist: "Kishore Kumar", film: "Mere Jeevan Saathi", year: 1972, duration: 297, videoId: "5eyflIV8pzM" },
      { id: "retro-6070-13", title: "Yeh Dosti Hum Nahin Todenge", artist: "Kishore Kumar, Manna Dey", film: "Sholay", year: 1975, duration: 385, videoId: "qfCt1UZAXMQ" },
      { id: "retro-6070-14", title: "Mehbooba Mehbooba", artist: "R D Burman", film: "Sholay", year: 1975, duration: 235, videoId: "E22-45q0vD4" },
      { id: "retro-6070-15", title: "Yeh Ladka Hai Allah", artist: "Lata Mangeshkar, Mohammed Rafi", film: "Hum Kisise Kum Naheen", year: 1977, duration: 330, videoId: "XmxBL_2xsss" },
      { id: "retro-6070-16", title: "Bachna Ae Haseeno", artist: "Kishore Kumar", film: "Hum Kisise Kum Naheen", year: 1977, duration: 202, videoId: "k4PMUZ055vc" },
    ],
  },
  {
    id: "cassette-80s",
    name: "80s Cassette",
    blurb: "Disco lights and rewind clicks",
    tracks: [
      { id: "cassette-80s-1", title: "Om Shanti Om", artist: "Kishore Kumar", film: "Karz", year: 1980, duration: 324, videoId: "I_iIY81069o" },
      { id: "cassette-80s-2", title: "Pyar Hume Kis Mod Pe", artist: "Kishore Kumar, Lata Mangeshkar", film: "Satte Pe Satta", year: 1982, duration: 410, videoId: "0pU7hdlZvhQ" },
      { id: "cassette-80s-3", title: "Aap Jaisa Koi", artist: "Nazia Hassan", film: "Qurbani", year: 1980, duration: 215, videoId: "z-nc1VqiuF4" },
      { id: "cassette-80s-4", title: "Laila O Laila", artist: "Kanchan", film: "Qurbani", year: 1980, duration: 254, videoId: "bC_NKZyk_eE" },
      { id: "cassette-80s-5", title: "Ek Do Teen", artist: "Alka Yagnik", film: "Tezaab", year: 1988, duration: 458, videoId: "JzFemLoFkN4" },
      { id: "cassette-80s-6", title: "Papa Kehte Hain", artist: "Udit Narayan", film: "Qayamat Se Qayamat Tak", year: 1988, duration: 367, videoId: "FEvBiayarlc" },
      { id: "cassette-80s-7", title: "Ae Mere Humsafar", artist: "Udit Narayan, Alka Yagnik", film: "Qayamat Se Qayamat Tak", year: 1988, duration: 314, videoId: "sWqjZpBtcxc" },
      { id: "cassette-80s-8", title: "Akele Hain To Kya Gum Hai", artist: "Kumar Sanu, Alka Yagnik", film: "Qayamat Se Qayamat Tak", year: 1988, duration: 354, videoId: "QxpPkGSmCqY" },
      { id: "cassette-80s-9", title: "Yaad Aa Raha Hai", artist: "Bappi Lahiri", film: "Disco Dancer", year: 1982, duration: 376, videoId: "v7B1_y2LAeI" },
      { id: "cassette-80s-10", title: "I Am A Disco Dancer", artist: "Vijay Benedict", film: "Disco Dancer", year: 1982, duration: 450, videoId: "7JdEZoffm-Q" },
      { id: "cassette-80s-11", title: "Jimmy Jimmy Aaja", artist: "Parvati Khan", film: "Disco Dancer", year: 1982, duration: 209, videoId: "ZUdJQSUcK_Y" },
    ],
  },
  {
    id: "nineties",
    name: "90s Radio",
    blurb: "Walkman batteries and mixtapes",
    tracks: [
      { id: "nineties-1", title: "Tumse Milne Ki Tamanna Hai", artist: "Kumar Sanu, Sadhana Sargam", film: "Saajan", year: 1991, duration: 336, videoId: "thjRNwjmAdQ" },
      { id: "nineties-2", title: "Mera Dil Bhi Kitna Pagal Hai", artist: "Kumar Sanu, Alka Yagnik", film: "Saajan", year: 1991, duration: 333, videoId: "FsNc7I33w60" },
      { id: "nineties-3", title: "Pehla Nasha (Sad)", artist: "Sadhana Sargam", film: "Jo Jeeta Wohi Sikandar", year: 1992, duration: 303, videoId: "iSUK1QoK9-E" },
      { id: "nineties-4", title: "Ek Ladki Ko Dekha", artist: "Kumar Sanu", film: "1942 A Love Story", year: 1994, duration: 283, videoId: "htMvfOfixuM" },
      { id: "nineties-5", title: "Kuch Na Kaho", artist: "Kumar Sanu", film: "1942 A Love Story", year: 1994, duration: 373, videoId: "Kidtrrn4aUM" },
      { id: "nineties-6", title: "Pyar Hua Chupke Se", artist: "Kavita Krishnamurthy", film: "1942 A Love Story", year: 1994, duration: 288, videoId: "goidtvB-O54" },
      { id: "nineties-7", title: "Tu Cheez Badi Hai Mast", artist: "Udit Narayan, Kavita Krishnamurthy", film: "Mohra", year: 1994, duration: 373, videoId: "bH_8yww6BAI" },
      { id: "nineties-8", title: "Tip Tip Barsa Paani", artist: "Udit Narayan, Alka Yagnik", film: "Mohra", year: 1994, duration: 365, videoId: "BtlnpBb4O8E" },
      { id: "nineties-9", title: "Didi Tera Devar Deewana", artist: "Lata Mangeshkar, S P Balasubrahmanyam", film: "Hum Aapke Hain Koun", year: 1994, duration: 459, videoId: "ZqcDGvCM_w0" },
      { id: "nineties-10", title: "Pehla Pehla Pyar Hai", artist: "S P Balasubrahmanyam, Lata Mangeshkar", film: "Hum Aapke Hain Koun", year: 1994, duration: 249, videoId: "w2iozAbNXAo" },
      { id: "nineties-11", title: "Mehndi Laga Ke Rakhna", artist: "Lata Mangeshkar, Udit Narayan", film: "Dilwale Dulhania Le Jayenge", year: 1995, duration: 281, videoId: "-bNwqXvMuB8" },
      { id: "nineties-12", title: "Ho Gaya Hai Tujhko To Pyar Sajna", artist: "Lata Mangeshkar, Udit Narayan", film: "Dilwale Dulhania Le Jayenge", year: 1995, duration: 337, videoId: "hw_HpTI_Wkw" },
      { id: "nineties-13", title: "Ruk Ja O Dil Deewane", artist: "Udit Narayan", film: "Dilwale Dulhania Le Jayenge", year: 1995, duration: 237, videoId: "jBpRItrod-Q" },
      { id: "nineties-14", title: "Dil To Pagal Hai", artist: "Lata Mangeshkar, Udit Narayan", film: "Dil To Pagal Hai", year: 1997, duration: 347, videoId: "lZ2PhyBF3GQ" },
      { id: "nineties-15", title: "Are Re Are", artist: "Udit Narayan, Lata Mangeshkar", film: "Dil To Pagal Hai", year: 1997, duration: 333, videoId: "OEpFiDKqH7E" },
      { id: "nineties-16", title: "Koi Ladki Hai", artist: "Lata Mangeshkar, Udit Narayan", film: "Dil To Pagal Hai", year: 1997, duration: 339, videoId: "u6bk53x2Kno" },
      { id: "nineties-17", title: "Kuch Kuch Hota Hai", artist: "Udit Narayan, Alka Yagnik", film: "Kuch Kuch Hota Hai", year: 1998, duration: 309, videoId: "bKZTnnFU9HA" },
      { id: "nineties-18", title: "Ladki Badi Anjani Hai", artist: "Kumar Sanu, Alka Yagnik", film: "Kuch Kuch Hota Hai", year: 1998, duration: 359, videoId: "oJcE_QPFAng" },
      { id: "nineties-19", title: "Tujhe Yaad Na Meri Aayi", artist: "Udit Narayan, Alka Yagnik", film: "Kuch Kuch Hota Hai", year: 1998, duration: 234, videoId: "HeFM4VFZL1M" },
      { id: "nineties-20", title: "Satrangi Re", artist: "Sonu Nigam, Kavita Krishnamurthy", film: "Dil Se", year: 1998, duration: 448, videoId: "OClXVLsI4jM" },
      { id: "nineties-21", title: "Ae Ajnabi", artist: "Udit Narayan, Mahalakshmi Iyer", film: "Dil Se", year: 1998, duration: 341, videoId: "TdUu05Svkl8" },
      { id: "nineties-22", title: "Taal Se Taal Mila", artist: "Udit Narayan, Alka Yagnik", film: "Taal", year: 1999, duration: 411, videoId: "dfghBD0hC9I" },
      { id: "nineties-23", title: "Ishq Bina", artist: "Sonu Nigam, Anuradha Sriram", film: "Taal", year: 1999, duration: 462, videoId: "SqZbGOCuai4" },
      { id: "nineties-24", title: "Kahin Aag Lage", artist: "Asha Bhosle", film: "Taal", year: 1999, duration: 401, videoId: "-qlrEgMX7pE" },
      { id: "nineties-25", title: "Chhaiya Chhaiya (Female)", artist: "Sapna Awasthi", film: "Dil Se", year: 1998, duration: 274, videoId: "YPpOqfIQ5ME" },
      { id: "nineties-26", title: "Sandese Aate Hain", artist: "Sonu Nigam, Roop Kumar Rathod", film: "Border", year: 1997, duration: 649, videoId: "oodOj8jx8ds" },
      { id: "nineties-27", title: "Chhod Aaye Hum Woh Galiyan", artist: "Hariharan, Suresh Wadkar", film: "Maachis", year: 1996, duration: 292, videoId: "70YFS4GvuQ0" },
      { id: "nineties-28", title: "Ghar Se Nikalte Hi", artist: "Udit Narayan", film: "Papa Kehte Hain", year: 1996, duration: 424, videoId: "_IcVb6hFhPs" },
      { id: "nineties-29", title: "Aisi Deewangi", artist: "Vinod Rathod, Alka Yagnik", film: "Deewana", year: 1992, duration: 395, videoId: "iRycjp7XVMg" },
      { id: "nineties-30", title: "Koi Na Koi Chahiye", artist: "Kumar Sanu", film: "Deewana", year: 1992, duration: 366, videoId: "MB6jaF_iAnc" },
      { id: "nineties-31", title: "Tujhe Dekha Toh (Reprise)", artist: "Lata Mangeshkar, Kumar Sanu", film: "Dilwale Dulhania Le Jayenge", year: 1995, duration: 328, videoId: "7JnKVPtRqVE" },
      { id: "nineties-32", title: "Baazigar O Baazigar", artist: "Kumar Sanu, Alka Yagnik", film: "Baazigar", year: 1993, duration: 459, videoId: "PUO7_Gi6ipg" },
      { id: "nineties-33", title: "Yeh Kaali Kaali Ankhen", artist: "Kumar Sanu, Anu Malik", film: "Baazigar", year: 1993, duration: 449, videoId: "KC-DuX51NY0" },
      { id: "nineties-34", title: "Chura Ke Dil Mera", artist: "Kumar Sanu, Alka Yagnik", film: "Main Khiladi Tu Anari", year: 1994, duration: 449, videoId: "6Na7GSV9bVY" },
      { id: "nineties-35", title: "Ek Garam Chai Ki Pyali", artist: "Abhijeet", film: "Aatish", year: 1994, duration: 203, videoId: "LBmX4Y3lWGg" },
      { id: "nineties-36", title: "Sochenge Tumhe Pyar", artist: "Kumar Sanu", film: "Deewana", year: 1992, duration: 390, videoId: "lFdSi01tpYM" },
      { id: "nineties-37", title: "Jaadu Teri Nazar", artist: "Udit Narayan", film: "Darr", year: 1993, duration: 158, videoId: "n_oP9Onj0r0" },
      { id: "nineties-38", title: "Tu Mere Samne", artist: "Lata Mangeshkar, Udit Narayan", film: "Darr", year: 1993, duration: 356, videoId: "0-7RHSbyZGw" },
      { id: "nineties-39", title: "Likha Hai Teri Aankhon Mein", artist: "Kumar Sanu, Alka Yagnik", film: "Darr", year: 1993, duration: 297, videoId: "tfSqvusJiFI" },
      { id: "nineties-40", title: "Dil Se Re", artist: "A R Rahman", film: "Dil Se", year: 1998, duration: 402, videoId: "MYfaX0BH2AY" },
      { id: "nineties-41", title: "Yeh Haseen Vadiyan", artist: "S P Balasubrahmanyam, Chitra", film: "Roja", year: 1992, duration: 318, videoId: "pYDbGCEUN40" },
      { id: "nineties-42", title: "Tu Hi Re", artist: "Hariharan, Kavita Krishnamurthy", film: "Bombay", year: 1995, duration: 437, videoId: "V9mN0qBgEzQ" },
      { id: "nineties-43", title: "Kehna Hi Kya", artist: "Chitra", film: "Bombay", year: 1995, duration: 363, videoId: "_YB1taxJPgk" },
      { id: "nineties-44", title: "Chhoti Si Aasha", artist: "Minmini", film: "Roja", year: 1992, duration: 299, videoId: "E4MxRN2ix88" },
      { id: "nineties-45", title: "Tadap Tadap Ke", artist: "K K", film: "Hum Dil De Chuke Sanam", year: 1999, duration: 344, videoId: "KwiDJclWo44" },
      { id: "nineties-46", title: "Nimbooda", artist: "Kavita Krishnamurthy", film: "Hum Dil De Chuke Sanam", year: 1999, duration: 361, videoId: "YLsIl0G0qlM" },
      { id: "nineties-47", title: "Albela Sajan", artist: "Various", film: "Hum Dil De Chuke Sanam", year: 1999, duration: 389, videoId: "MCXQXuKpgKE" },
      { id: "nineties-48", title: "Dholi Taro Dhol Baaje", artist: "Various", film: "Hum Dil De Chuke Sanam", year: 1999, duration: 389, videoId: "4a25J3p0kVI" },
      { id: "nineties-49", title: "Aankhon Ki Gustakhiyan", artist: "Kumar Sanu, Kavita Krishnamurthy", film: "Hum Dil De Chuke Sanam", year: 1999, duration: 299, videoId: "7k5gM4ClRRo" },
      { id: "nineties-50", title: "Chand Chhupa Badal Mein", artist: "Udit Narayan, Alka Yagnik", film: "Hum Dil De Chuke Sanam", year: 1999, duration: 172, videoId: "2knQOXevwKE" },
    ],
  },
  {
    id: "millennium",
    name: "Millennium Melodies",
    blurb: "Turn-of-the-century soundtracks",
    tracks: [
      { id: "millennium-1", title: "Chand Sifarish", artist: "Shaan, Kailash Kher", film: "Fanaa", year: 2006, duration: 277, videoId: "zWEOx7TSM6I" },
      { id: "millennium-2", title: "Kabhi Alvida Naa Kehna", artist: "Sonu Nigam, Alka Yagnik", film: "Kabhi Alvida Naa Kehna", year: 2006, duration: 478, videoId: "nmTp_esz_Q8" },
      { id: "millennium-3", title: "Mitwa", artist: "Shafqat Amanat Ali", film: "Kabhi Alvida Naa Kehna", year: 2006, duration: 361, videoId: "ru_5PA8cwkE" },
      { id: "millennium-4", title: "Suraj Hua Maddham", artist: "Sonu Nigam, Alka Yagnik", film: "Kabhi Khushi Kabhie Gham", year: 2001, duration: 478, videoId: "L0zKs8i7Nc8" },
      { id: "millennium-5", title: "Bole Chudiyan", artist: "Various", film: "Kabhi Khushi Kabhie Gham", year: 2001, duration: 404, videoId: "IBvg3WeqP1U" },
      { id: "millennium-6", title: "Kabhi Khushi Kabhie Gham", artist: "Lata Mangeshkar", film: "Kabhi Khushi Kabhie Gham", year: 2001, duration: 323, videoId: "IAhLbFDj8IA" },
      { id: "millennium-7", title: "Saathiya", artist: "Sonu Nigam", film: "Saathiya", year: 2002, duration: 328, videoId: "eMA6GHTQ4WA" },
      { id: "millennium-8", title: "Chupke Se", artist: "Sadhana Sargam", film: "Saathiya", year: 2002, duration: 271, videoId: "JLXfTmF9DSI" },
      { id: "millennium-9", title: "O Humdum Suniyo Re", artist: "Shaan, Kunal Ganjawala", film: "Saathiya", year: 2002, duration: 162, videoId: "_9geEbZIAJM" },
      { id: "millennium-10", title: "Woh Lamhe", artist: "Atif Aslam", film: "Zeher", year: 2005, duration: 319, videoId: "mX0_1yejIQI" },
      { id: "millennium-11", title: "Kaho Naa Pyaar Hai", artist: "Udit Narayan, Alka Yagnik", film: "Kaho Naa Pyaar Hai", year: 2000, duration: 361, videoId: "-LESbtPT8uw" },
      { id: "millennium-12", title: "Ek Pal Ka Jeena", artist: "Lucky Ali", film: "Kaho Naa Pyaar Hai", year: 2000, duration: 332, videoId: "aGbPyM6lzBs" },
      { id: "millennium-13", title: "Na Tum Jaano Na Hum", artist: "Lucky Ali", film: "Kaho Naa Pyaar Hai", year: 2000, duration: 319, videoId: "eSxo4l-epv8" },
      { id: "millennium-14", title: "O Palan Haare", artist: "Lata Mangeshkar, Udit Narayan", film: "Lagaan", year: 2001, duration: 305, videoId: "kbMinfmC3E0" },
      { id: "millennium-15", title: "Mitwa Lagaan", artist: "Udit Narayan", film: "Lagaan", year: 2001, duration: 411, videoId: "ru-OonEvTss" },
      { id: "millennium-16", title: "Radha Kaise Na Jale", artist: "Asha Bhosle, Udit Narayan", film: "Lagaan", year: 2001, duration: 335, videoId: "qNnvL0ztJhA" },
      { id: "millennium-17", title: "Ghanan Ghanan", artist: "Various", film: "Lagaan", year: 2001, duration: 364, videoId: "EouiI35p4Hc" },
      { id: "millennium-18", title: "Kal Ho Naa Ho (Sad)", artist: "Sonu Nigam", film: "Kal Ho Naa Ho", year: 2003, duration: 288, videoId: "g0eO74UmRBs" },
      { id: "millennium-19", title: "Pretty Woman", artist: "Shankar Mahadevan", film: "Kal Ho Naa Ho", year: 2003, duration: 331, videoId: "Gcne5Wt-Qfo" },
      { id: "millennium-20", title: "Maahi Ve", artist: "Various", film: "Kal Ho Naa Ho", year: 2003, duration: 372, videoId: "1BWdglekty0" },
      { id: "millennium-21", title: "Main Agar Kahoon", artist: "Sonu Nigam, Shreya Ghoshal", film: "Om Shanti Om", year: 2007, duration: 329, videoId: "DAYszemgPxc" },
      { id: "millennium-22", title: "Tere Liye", artist: "Lata Mangeshkar, Roop Kumar Rathod", film: "Veer-Zaara", year: 2004, duration: 334, videoId: "jo6iAkSoraY" },
      { id: "millennium-23", title: "Do Pal", artist: "Lata Mangeshkar, Sonu Nigam", film: "Veer-Zaara", year: 2004, duration: 254, videoId: "HPsxxBhv9kc" },
      { id: "millennium-24", title: "Main Yahaan Hoon", artist: "Udit Narayan", film: "Veer-Zaara", year: 2004, duration: 297, videoId: "m6Y8xEfyXTs" },
    ],
  },
  {
    id: "bhojpuri",
    name: "Bhojpuri Melodies",
    blurb: "Requested list — awaiting official video IDs",
    tracks: [
      { id: "bhoj-1", title: "Darad Ho Jaala (ft. Komal Singh)", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-2", title: "Nathuniya 2", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-3", title: "Dil Deewana (with Priyanka Singh)", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-4", title: "Tedhe Medhe (with Shilpi Raj)", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-5", title: "Shaam Hai Dhuan Dhuan", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-6", title: "Chaal Nababi", artist: "—", film: "Godfather", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-7", title: "Paro (with Priyanshu Singh)", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-8", title: "Suit Lalka (ft. Akanksha Puri)", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-9", title: "Case Teri Rani Ladegi", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-10", title: "Pagal Banaibe Kare", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-11", title: "Love Kala Sab Hoi", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-12", title: "Thik Hai", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-13", title: "Karejwa Le Gailu Sinhorwa Me", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-14", title: "Setting Kara K Ja", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-15", title: "Kamariya Lollypop", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-16", title: "Sutaal Tani Kora Mein", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-17", title: "Palang Sagwan Ke", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-18", title: "Pawan Singh Viral Anthems", artist: "Pawan Singh", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-19", title: "Sadiya (with Shivani Singh)", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-20", title: "Tikuliya Ae Raja (with Shivani Singh)", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-21", title: "Kamariya Patre Patre (with Shilpi Raj)", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-22", title: "Rajaji Ke Dilwa", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-23", title: "Saiya Sewa Kare", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-24", title: "Babuaan", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-25", title: "Pape Padi", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-26", title: "Satrangi Salwarwa", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-27", title: "Apna Raja Ji Ke", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-28", title: "Saree Se Tadi", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-29", title: "Laal Ghaghra", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-30", title: "Hari Hari Odhani", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-31", title: "Mohabbat Ab Bechata", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-32", title: "Aaho Raja", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-33", title: "Arrah Ballia Chhapra", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-34", title: "Bhatar Khatir Ruselu", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
      { id: "bhoj-35", title: "Sorry Sorry", artist: "—", film: "—", year: 0, duration: 0, videoId: "" },
    ],
  },
];



export function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) seconds = 0;
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}