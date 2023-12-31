//Movies Array
let moviesArr = [
  [
    "იკარუსი",
    "Icarus",
    "6.7",
    "2022",
    "საფრანგეთი, ბელგია. ლუქსენბურგი",
    "კარლო ვოგელე",
    ["ვულფ ვან კაპელენი", "ფედორ ატკინი", "კამილ კოტენი", "ნილს შნაიერი"],
    "კუნძულ კრეტაზე, მეფე მინოსის მეფობის დროს, ხალხი თაყვანს სცემს ოლიმპოს ღერთებს, რომლებიც შთააგონებენ შიშს და რისხვას...",
    "https://m.media-amazon.com/images/M/MV5BZmRmODE2YTctNzBkNS00NDE5LWJiN2UtOTNhMjU3MDFkOGY1XkEyXkFqcGdeQXVyMTM2MDY0OTYx._V1_.jpg",
    "https://thumb.canalplus.pro/http/unsafe/1440x810/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/106396438",
  ],
  [
    "გრან ტურიზმო ",
    "GRAN TURISMO",
    "7.3",
    "2023",
    "აშშ, იაპონია",
    "ნილ ბლომკამპი",
    [""],
    "ამავე სახელწოდების ვიდეო თამაშით შთაგონებული და თინეიჯერი ნიჭიერი გეიმერის, იან მარდენბოროს ნამდვილ ამბავზე დაფუძნებული მძაფრსიუძეტიანი სპორტული-დრამა, რომელიც ბავშვობიდან იყო მანქანების და ვიდეო თამაშის “Gran Turismo”-ს მოყვარული, რაშიც მან დიდ წარმატებას მიაღწია. საბოლოოდ, იანი გახდება ნამდვილი პროფესიონალი ავტომრბოლელი მას შემდეგ, რაც მოიგებს Nissan-ის შეჯიბრებების სერიას თავისი მწვრთნელის ჯეკ სელეტერის და გეიმერული შესაძლებლობების წყალობით.",
    "https://dx35vtwkllhj9.cloudfront.net/sonypictures/gran-turismo/images/regions/au/updates/onesheet.jpg",
    "https://wallpapercg.com/media/ts_orig/15375.webp",
  ],
  [
    "ჯონ ვიკი: თავი 4",
    "john wick: chapter 4",
    "6.8",
    "2023",
    "აშშ",
    "ჩად სტაჰელსკი",
    ["კიანუ რივზი, დონი იენი, ბილ სკარსგარდი"],
    "მის თავზე ფასი მუდმივად იზრდება და ჯონ ვიკი პოულობს გზას მაღალი მაგიდის დასამარცხებლად. მაგრამ სანამ თავის თავისუფლებას მოიპოვებს, ვიკი უნდა შეებრძოლოს ახალ მტერს მთელ მსოფლიოში ძლიერი ალიანსებით და ძალებით, რომლებიც ძველ მეგობრებს მტრებად აქცევენ.",
    "https://www.thevillagesentertainment.com/wp-content/uploads/2023/03/John-wick-4-poster-scaled.jpg",
    "https://knightedgemedia.com/wp-content/uploads/2022/11/john-wick-4-theatrical-trailer-banner1.jpg",
  ],
  [
    "ექვალაიზერი 3",
    "Equalizer 3",
    "7.7",
    "2023",
    "აშშ",
    "ანტუან ფუკუა",
    ["დენზელ ვაშინგტონი", "დაკოტა ფენინგი", "დევიდ დენმანი"],
    "რობერტ მაკკოლი აღმოჩნდება სახლში სამხრეთ იტალიაში, მაგრამ აღმოაჩენს, რომ მისი ეგობრები ავტორიტეტული კრიმინალული ავტორიტეტების...",
    "https://media.gv.com.sg/imagesresize/img1056.jpg",
    "https://s.abcnews.com/images/GMA/the-equalizer-1-ht-gmh-230831_1693495747695_hpMain_16x9_992.jpg",
  ],
  [
    "შეუსრულებელი მისია 7: სასიკვდილო გაანგარიშება",
    "Mission: Impossible - Dead Reckoning Part 7",
    "7.7",
    "2023",
    "აშშ",
    "კრისტოფერ მაკქუორი",
    ["ტომ კრუზი", "რებეკა ფერგიუსონი", "ვანელა კირბი პომ კლემენტეფი"],
    "ეთან ჰანთი (ტომ გრუზი) ერთგულ გუნდთან და მოკავშირეებთან ერთად ისევ კაცობრიობის გადარჩენას ცდილობს. გმირები იწყებენ ყველაზე...",
    "https://images.hdqwalls.com/download/mission-impossible-dead-reckoning-part-one-2f-1080x1920.jpg",
    "https://images8.alphacoders.com/132/1322365.jpeg",
  ],
  [
    "ჯუნგლები",
    "Jungle",
    "6.7",
    "2017",
    "ავსტრალია, კოლუმბია",
    "გრეგ მაქლეინი",
    [
      "დენიელ რედკლიფი",
      "თომას კრეჩმანი",
      "იაცეკ კომანი",
      "ალეკს რასელი",
      "ჯოელ",
    ],
    "ეგზოტიკური თავგადასავლების მაძიებელი მეგობრები ბოლივიის გაუვალ ჯუნგლებში მიემგზავრებიან. მაგრამ მას შემდეგ რაც წინამძღოლი ქრება...",
    "https://m.media-amazon.com/images/M/MV5BNDE4OTk4MTk0M15BMl5BanBnXkFtZTgwODQ4MTg0MzI@._V1_.jpg",
    "https://img3.hulu.com/user/v3/artwork/9853f50b-e63c-439b-87a5-3bc004e8d493?base_image_bucket_name=image_manager&base_image=e1687463-2236-496a-81ce-bed6bba37e77&region=US&format=jpeg&size=952x536",
  ],
  [
    "ფინჩი",
    "Finch",
    "7.0",
    "2021",
    "აშშ, დიდი ბრიტანეთი",
    "მიგელ საფონჩიკი",
    [
      "ტომ ჰენქსი",
      "კალებ ლანდრი",
      "ლორა მარტინეზ-კუნინგჰემი",
      "კრისტოფერ ფარარი",
    ],
    "მოვლენები პოსტ-აპოკალიპსურ მომავალში ვითარდება და დედამიწაზე ერთ-ერთი უკანასკნელი გადარჩენილი ადამიანის - მომაკვდავი ნიჭიერი...",
    "https://m.media-amazon.com/images/M/MV5BMmExZDc4NjEtZjY1ZS00OWU5LWExZGYtYTc4NDM1ZmRhMDZhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    "../images/finch2.jpg",
  ],
  [
    "კუ-ნინძები: ქაოსი მუტანტებს შორის",
    "Teenage Mutant Ninja Turtles: Chaos between mutants",
    "8.2",
    "2023",
    "აშშ",
    ["ჯეფ როუ", "კაილერ სპირსი"],
    [
      "მიკა ები",
      "შამონ ბრაუნ უმც.",
      "ნიკოლას კანტუ",
      "ბრეიდი ნუნი",
      "აიო ედებირი",
    ],
    "2007 წლის ანიმაციური ფილმის 'კუ ნინძები' გაგრძელება ანთროპომორფული ძმები კუების, ლეონარდოს, მიქელანჯელოს, დონატელოს და რაფაელოს...",
    "https://www.rivoli.net/wp-content/uploads/2023/07/teenage_mutant_ninja_turtles_mutant_mayhem_tmdb-gyh0eece2iqrw8gwl3kohbfc45j-XhXzG3.tmp_.jpg",
    "https://preview.redd.it/tmnt-mutant-mayhem-desktop-wallpapers-4k-v0-88uvwc97cu3b1.jpg?width=640&crop=smart&auto=webp&s=c5bb45e4f8ec3ddd5c6902049fb816d5761c4aa6",
  ],
];

let movieListNames = [
  "ფილმები ქართულად",
  "სერიალები ქართულად",
  "ტოპ ფილმები",
  "ახალი დამატებული ფილმები",
  "ახალი დამატებული ეპიზოდები",
  "თურქული სერიალები",
];
