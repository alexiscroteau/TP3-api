import Axios from "axios";

const defaultContent = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar at tortor a hendrerit. Fusce id justo ultricies, imperdiet arcu vel, tempus lectus. Nullam eu posuere quam, at ultrices neque. Cras eu metus eget velit dapibus feugiat. Curabitur nec aliquet dui. Aliquam diam lectus, malesuada ut tortor ac, pulvinar pharetra augue. Morbi gravida sit amet purus at egestas. Duis neque sapien, tincidunt sed neque at, porta ultricies arcu. Aenean eget erat lacus. Proin molestie cursus sollicitudin. Nam faucibus luctus massa, nec bibendum orci.</p>
<p>Proin pulvinar fringilla risus, sed molestie magna finibus nec. Pellentesque eu viverra ante. Aliquam imperdiet, elit quis pretium venenatis, erat magna finibus mauris, ac gravida nisl ante ut ante. Fusce nulla risus, sagittis sit amet ligula a, tristique commodo diam. Ut porttitor sollicitudin elementum. Nullam orci erat, elementum ac commodo quis, semper at erat. Mauris porttitor eros ac est facilisis, at cursus urna mollis. Fusce ac semper eros. Nulla tincidunt purus in molestie blandit. Fusce sollicitudin, elit vel gravida imperdiet, urna tortor consequat metus, quis sollicitudin mauris dolor ut diam. Proin bibendum, mi id scelerisque lacinia, odio diam ullamcorper risus, a dapibus orci est id ipsum.</p>
<p>Mauris consequat metus orci, at vehicula turpis placerat vitae. Fusce malesuada neque a ultricies pretium. Aliquam accumsan in sapien vel mattis. Curabitur scelerisque ullamcorper aliquet. Ut laoreet faucibus tortor, in rutrum velit vehicula vestibulum. Sed ac bibendum lorem. Morbi nec vulputate tellus. Nunc non magna at magna bibendum interdum. Aliquam vulputate, libero sit amet rutrum gravida, elit justo luctus est, ac eleifend dui nisl quis ipsum. Nullam vitae risus vel ex ullamcorper fermentum non ut elit. Cras odio odio, malesuada a urna ac, egestas mattis risus. Ut commodo, risus a ultrices rutrum, dolor neque euismod eros, ut vehicula mi nunc sed elit. Duis vel lectus sit amet enim laoreet ullamcorper id finibus sapien.</p>
<p>Maecenas non venenatis mi, quis fermentum nulla. In molestie volutpat tellus, non vulputate diam volutpat vitae. Nam tincidunt facilisis nunc, ac congue dui tincidunt eget. Vivamus faucibus neque ac urna viverra molestie. Vestibulum tempus at magna at aliquam. Donec in scelerisque lacus. Fusce tincidunt tortor ac sagittis posuere. Proin sodales sollicitudin ipsum sit amet pharetra. Curabitur consectetur bibendum tempus.</p>
<p>Nulla eget nisi in neque sodales commodo. Mauris malesuada augue nulla, quis molestie urna dignissim ac. Duis dignissim blandit sapien, nec mattis tortor cursus quis. Vestibulum vel sapien augue. Donec placerat mi sit amet velit pharetra egestas. Mauris nec porta tortor. Donec interdum neque sit amet urna rutrum, vitae ultrices nisi hendrerit. Vestibulum porta diam massa, non sollicitudin lorem efficitur vulputate. Aliquam quis tincidunt neque, sit amet luctus dolor. Curabitur sapien urna, tincidunt id nulla in, ullamcorper euismod nunc. Sed in convallis leo, vel mattis metus. Mauris tristique dapibus tellus, id finibus libero tempus in. Mauris condimentum auctor lacus, nec ultricies magna imperdiet sed. Praesent id feugiat quam, in porta turpis.</p>
<p>Nullam aliquam quam ante, ut consectetur ipsum laoreet eu. Fusce nec ultrices turpis, id dignissim ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur lorem arcu, faucibus in nulla eu, porttitor ultricies nunc. Nullam a fringilla ligula, et luctus eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin vitae orci ut convallis. Sed ornare enim ac venenatis blandit. Suspendisse potenti. Sed aliquet nisl sed blandit tempus. Aliquam pellentesque magna vel magna viverra, rutrum venenatis tellus placerat. Nam malesuada ut diam sit amet sollicitudin. Vestibulum dapibus neque vitae purus iaculis lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis at porta mi. Sed pellentesque iaculis arcu, nec imperdiet nunc pharetra a.</p>
<p>Donec a lectus risus. Mauris urna metus, mattis a accumsan id, hendrerit sed augue. In tempor efficitur lectus, in dapibus velit dapibus eget. Maecenas nisl ante, porta sit amet nulla id, mollis sollicitudin turpis. Integer convallis dui sit amet ligula mollis rutrum. Morbi ut luctus lacus. Nullam ullamcorper arcu et felis dignissim ullamcorper. Integer nec nulla augue. Duis at arcu eu tellus rhoncus molestie. Nullam cursus maximus tellus non rutrum. Cras a augue in augue sodales molestie a a nisi. Nulla molestie magna egestas malesuada posuere. Mauris egestas et lectus volutpat egestas. Vestibulum imperdiet congue libero sit amet dictum. Aenean leo metus, semper vitae ante sed, rhoncus consequat tortor.</p>
<p>Cras lobortis fringilla ex quis fermentum. Maecenas faucibus quis felis accumsan pulvinar. Fusce diam enim, tincidunt eu massa id, viverra mattis massa. Aenean fringilla ex molestie, pharetra augue non, scelerisque urna. Pellentesque malesuada a magna nec pretium. Fusce id elit leo. In nec feugiat orci, eu facilisis neque. Phasellus consectetur velit id diam lobortis convallis. Duis at aliquet sapien. Etiam purus nibh, bibendum eget gravida eu, consectetur at velit. In purus lectus, auctor nec arcu sit amet, lobortis pellentesque urna. Proin a scelerisque neque, nec volutpat dui. Maecenas tempor quam ut fermentum interdum.</p>
<p>Donec posuere velit augue, tempor dapibus magna venenatis vel. Curabitur aliquam justo sit amet ligula fringilla elementum. Proin pharetra vitae justo ac consectetur. Cras ornare diam quis lobortis lacinia. Vestibulum eleifend diam eget sapien auctor, ut ornare arcu tincidunt. Curabitur nec aliquam lacus. Ut pretium risus orci, at pharetra ante malesuada ut. Pellentesque mollis purus nibh, eu imperdiet neque interdum at. Duis tincidunt blandit turpis, non iaculis enim hendrerit non. Donec a ultrices mauris.</p>
<p>Integer molestie quis lacus sed aliquam. Proin blandit eu tellus in tristique. Nunc fringilla tristique tortor, non semper nisi aliquam convallis. Donec at felis sit amet velit tincidunt blandit. Curabitur vitae neque gravida, rhoncus nunc ut, gravida odio. Cras ullamcorper vel ligula non cursus. Aliquam scelerisque tincidunt tortor vel condimentum. Proin eros lorem, volutpat vitae nisl in, tempor ullamcorper eros. Cras semper odio in fringilla pellentesque. Curabitur at aliquet nunc. Pellentesque condimentum tincidunt tellus, sed fringilla ligula tristique sit amet. Cras ornare nisi vitae semper vestibulum.</p>
<p>Nunc ultrices sapien diam, vel finibus dolor suscipit at. Duis sed scelerisque turpis, vitae vestibulum mi. Cras ullamcorper orci et fringilla bibendum. Pellentesque tempus tortor augue, nec viverra quam viverra sit amet. Sed dignissim lobortis tellus nec faucibus. Aenean eu elementum erat, vitae tincidunt lorem. Nulla viverra neque lorem, in egestas sem fermentum at. Donec sodales vulputate felis, ac commodo nisi ornare vitae. Sed interdum auctor sapien efficitur porttitor. Vivamus convallis, magna eget imperdiet vulputate, sem neque tincidunt ipsum, vitae suscipit dui sapien quis velit. In mollis turpis enim. Sed molestie velit massa, a pellentesque libero bibendum blandit.</p>
<p>Nullam mi ipsum, porttitor at malesuada et, tempus eu ante. Proin ac nunc vel velit auctor facilisis. Aenean tempor enim lacinia viverra consequat. Nulla in feugiat velit. Etiam scelerisque neque vitae leo ullamcorper, vel mollis elit maximus. Sed eleifend, mi in dapibus ultricies, elit orci facilisis ante, ac fermentum tortor sem eget tellus. Suspendisse imperdiet, leo venenatis porta lobortis, augue eros scelerisque sapien, id porta arcu tellus non dolor. Morbi suscipit arcu et leo placerat, quis luctus elit vestibulum. Donec auctor ultricies ligula malesuada fringilla. Mauris tristique, odio vitae accumsan tempus, est nunc rutrum purus, in euismod odio mauris tempus justo. Morbi luctus erat vel neque elementum dapibus eget a massa.</p>
<p>Donec rutrum viverra arcu, sed facilisis nisi maximus a. Nulla semper eros a odio vulputate, in ullamcorper enim pulvinar. Nunc tempor dui sapien, id luctus ante dignissim in. Proin euismod vitae velit vel lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam a velit pellentesque, molestie justo ut, elementum turpis. Donec interdum consectetur iaculis. Quisque sed orci ut arcu tristique tempus sit amet eu massa. Nunc vehicula sagittis lacinia. Nullam volutpat neque a lacus blandit, vitae euismod diam vehicula. Donec id odio eu massa aliquam iaculis nec a sem. Ut tempus tempus ligula, sed mollis turpis placerat a. Nulla facilisi. Cras feugiat aliquet nisl ut pharetra. Mauris at erat a nunc aliquet pellentesque ac quis sapien. Nunc eu mauris condimentum, sodales tellus nec, faucibus nulla.</p>
<p>Nam iaculis eu dolor quis pellentesque. Cras eu tellus nec mi consectetur maximus a nec metus. Donec vehicula nisl ante, id imperdiet enim fermentum eget. Vivamus scelerisque felis at diam accumsan, sit amet egestas magna molestie. Sed non venenatis dui, ut gravida enim. Donec vitae dignissim metus. Nunc fringilla auctor magna, eget volutpat tortor porta non. Vivamus hendrerit eu ipsum eu congue. Mauris efficitur neque odio, nec faucibus nisl consectetur id. Nam porta bibendum diam eget pharetra. Sed non posuere ligula, efficitur efficitur ligula.</p>
<p>Nulla laoreet libero eu commodo tincidunt. Ut tincidunt enim et mollis tempor. Fusce blandit mauris nibh, at dignissim erat auctor ac. Aenean porttitor feugiat lectus. Integer quis tempus orci, luctus accumsan nisl. Duis gravida elit mauris, ut tempor lacus dapibus ut. Donec at mollis sapien, non vehicula ipsum. Donec arcu orci, tincidunt non turpis interdum, volutpat semper ante.</p>
<p>Donec dapibus sed lectus facilisis mollis. Nunc at nibh a turpis sagittis vehicula. Nam pellentesque elementum ex. Nulla facilisi. Phasellus mollis gravida tellus eu euismod. Proin mattis urna elit, ac finibus arcu dignissim non. Suspendisse consectetur, nulla accumsan placerat vulputate, neque libero vehicula nulla, id imperdiet dolor ex sed massa. Donec non tellus efficitur, bibendum magna a, lobortis quam. In a placerat sapien. Ut eu risus velit. Donec posuere ullamcorper dolor, quis fringilla velit placerat et. Donec interdum luctus nisl nec consequat. Cras at ex sed libero hendrerit lacinia. Praesent a malesuada massa.</p>
<p>Etiam molestie eu ligula non faucibus. Mauris quam sapien, vulputate vel tempus a, commodo vel nibh. Nulla vulputate sapien eu rutrum lacinia. Proin placerat congue gravida. Ut quam nisl, dignissim quis pellentesque non, congue sit amet nisi. Maecenas tincidunt sit amet massa id scelerisque. Aliquam convallis libero ut augue convallis mattis. Morbi tortor justo, bibendum ac vehicula eleifend, tincidunt vitae nibh. Fusce eget ex vestibulum ligula semper ullamcorper vel in dolor. In porta nibh at leo feugiat, non posuere risus tempus. Cras commodo nisi fringilla felis rhoncus ullamcorper. Nunc vitae turpis non urna blandit dignissim. Pellentesque nulla lacus, rhoncus sit amet odio eu, consectetur fermentum augue. Proin elit sapien, blandit et lobortis sed, tempus nec lectus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum lectus vitae cursus tincidunt. Nulla nulla elit, congue at tristique eu, lacinia elementum augue. Phasellus finibus tellus at mauris hendrerit, vitae aliquam mi gravida. Aenean sed tortor euismod eros pretium efficitur a non elit. Suspendisse lectus libero, posuere nec tortor vitae, rutrum venenatis libero. Vivamus et arcu ut nulla mattis consectetur. Praesent venenatis egestas velit eget ornare. Donec mattis mauris non ligula euismod viverra at quis diam. Proin vestibulum eleifend enim vitae aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque velit ante, convallis nec lacinia sed, accumsan ac ex. Aenean sit amet mauris tortor. Donec ipsum lacus, mattis in odio sit amet, faucibus mattis mauris. Nullam feugiat, nisl non blandit ullamcorper, est elit aliquam dui, nec vulputate ex magna eget magna.</p>
<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus rhoncus sodales sem, nec tincidunt neque. Donec id porta purus, ut lobortis lectus. Vestibulum convallis lorem id elit gravida, vitae ullamcorper magna iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum dapibus turpis at gravida. Donec vitae accumsan massa, ut dapibus orci. Suspendisse viverra bibendum orci ut faucibus. In sed congue libero. Vestibulum eu urna eu odio interdum imperdiet. Suspendisse ac euismod quam, vel euismod sapien. Nunc lorem justo, aliquet quis ultricies pharetra, consequat sed augue. Aliquam rhoncus et erat viverra gravida. Nulla consectetur pharetra egestas. Donec condimentum nunc quis ipsum varius, et lacinia ipsum consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
<p>Curabitur efficitur porttitor nisl eu malesuada. Vestibulum porttitor eleifend ullamcorper. Suspendisse porttitor, tortor non euismod convallis, lorem enim malesuada ligula, eu varius dolor tortor non risus. Suspendisse facilisis libero eu pretium pellentesque. Mauris nec lacus id turpis semper sollicitudin. Aliquam vitae aliquet libero. Etiam at mauris sit amet augue vulputate porttitor. Cras varius luctus sapien sit amet fermentum.</p>
<p>Mauris ut placerat nisl. Nunc quis tellus mattis, viverra odio in, tristique nisl. Aliquam vestibulum purus vitae tortor consectetur, vel varius risus auctor. Sed ac ante dictum, commodo lectus in, pretium velit. Proin tincidunt purus mauris, id congue magna sollicitudin quis. Proin dapibus, lorem non tempus consectetur, elit massa ultrices sapien, ut sodales lectus justo accumsan mauris. Nulla eleifend libero vel efficitur eleifend. Donec lobortis a ante sit amet tempor. Mauris scelerisque lobortis semper. Fusce at ultricies lacus. Donec volutpat risus ac eros molestie sollicitudin. Suspendisse interdum ante quis semper blandit.</p>
<p>Sed elementum sem cursus sapien scelerisque, sit amet vestibulum neque auctor. Proin porta lorem sit amet nisi feugiat viverra. Integer faucibus velit non massa cursus, ac imperdiet eros ultrices. Vivamus feugiat hendrerit iaculis. Pellentesque at magna a sapien elementum vestibulum. Phasellus imperdiet tortor id consectetur tempor. Maecenas nec dictum erat. Aenean in dui eget ante ultricies condimentum at sit amet ipsum. Donec neque tortor, convallis quis volutpat eget, rhoncus eu metus. Maecenas faucibus nisi odio, id faucibus diam interdum quis. Phasellus cursus commodo mauris, at ullamcorper nisi efficitur id.</p>
<p>Donec posuere ultrices lacus in posuere. Suspendisse quis venenatis eros. Pellentesque nec porttitor quam. Vestibulum varius lobortis pharetra. Sed at est eget metus ultricies laoreet. Praesent iaculis iaculis ligula ac condimentum. Curabitur bibendum mi posuere, luctus risus quis, molestie nunc. Sed ex massa, sodales id mi fringilla, porttitor ultricies diam. Morbi nec sodales tellus, in aliquam nulla. Mauris ut pulvinar elit, non posuere ligula.</p>
<p>Cras quis tincidunt est. Sed luctus arcu non nunc convallis bibendum. Curabitur aliquet porttitor diam viverra sagittis. Maecenas aliquam placerat orci semper lobortis. In mi mauris, vestibulum et fringilla et, vulputate in eros. Aliquam fermentum nulla non blandit congue. Nullam hendrerit viverra leo sed suscipit. Duis convallis id est vel rhoncus. Mauris velit lacus, condimentum in aliquet at, convallis id arcu. Duis molestie orci quis risus malesuada, non malesuada libero rutrum. Vestibulum fringilla hendrerit lacus eu rutrum. Sed quis risus at dui feugiat malesuada. Morbi malesuada nunc sit amet metus vulputate, et aliquet eros varius. Nulla nulla tellus, maximus in ornare et, dignissim non nunc. Donec mollis gravida velit vitae suscipit.</p>
<p>Nullam accumsan mattis ipsum, ac ultrices ligula dapibus ac. Pellentesque arcu eros, finibus vitae sapien in, dictum interdum diam. Nulla condimentum pretium luctus. Quisque vel tortor mattis arcu bibendum posuere quis venenatis mi. Aenean finibus tincidunt lorem nec elementum. Phasellus vitae velit quis tortor laoreet lacinia. Suspendisse ullamcorper turpis id nunc placerat auctor. Praesent congue nec tortor id viverra. In faucibus efficitur justo, id sagittis odio vulputate non. Sed sed urna sit amet urna posuere viverra interdum ut lectus.</p>`;

const authors = [
  'Yoann Dijoux',
  'Kylick Jorhel',
  'Atsuki Tatsu',
  'Tsumi Nobunoki',
];

let banners = [];

const titles = [
  'Borderlands 3 - Quand amour est synonyme de flingues à tentacules',
  'Yes, Your Grace - Le roi dans sa narration',
  'Paper Beast - Le VR contemplatif parsemmé de reflexion',
  'Saints Row Re-Elected - Vous avez dit switch ?',
  "13 Sentinels Aegis Rim - Le sci fi d'Osaka",
  'Granblue Fantasy Versus - Du tekken moderne !',
  'Teamfight Tactics - Mobilité intelligente',
  "My Hero One's Justice 2 - Le service à l'ordre du fan",
  'Animal Crossing New Horizons - Le meilleur des enfers',
  'Persona 5 Royal - Le J-RPG dans sa forme la plus exquise !',
  'Doom Eternal - Reflexe et survie',
  'Offworld Trading Company - Le capitalisme marsien',
];

const names = [
  'Borderlands 3',
  'Yes, Your Grace',
  'Paper Beast',
  'Saints Row Re-Elected',
  "13 Sentinels Aegis Rim",
  'Granblue Fantasy Versus',
  'Teamfight Tactics',
  "My Hero One's Justice 2",
  'Animal Crossing New Horizons',
  'Persona 5 Royal',
  'Doom Eternal',
  'Offworld Trading Company',
]
const privacy = [
  true,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  false,
  false,
  false,
  false,
]

const config = {
  generation: {
    rpg: 2,
    fps: 4,
    mmo: 3,
    rts: 3
  }
}

let tempGames = [];

const fixIndex = (index, max) => index % max;

const getAuthor = index => authors[fixIndex(index, authors.length)];

const getBanner = index => banners[fixIndex(index, banners.length)];

const getTitle = index => titles[fixIndex(index, titles.length)];

const getName = index => names[fixIndex(index, names.length)];

const getGrade = () => {
  return Math.floor(Math.random() * Math.floor(100));
}

const getPrivacy = index => privacy[fixIndex(index, privacy.length)];

const get = id => ({
  id,
  title: getTitle(id),
  author: getAuthor(id),
  bannerPath: getBanner(id),
  name: getName(id),
  grade: getGrade(),
  category: null,
  content: defaultContent,
  createdDate: new Date(`December ${fixIndex(id + 1, 30)}, 2019 12:00:00`),
  isPublic: getPrivacy(id),
});

const getList = (count, category) => {
  const games = [];
  const idGenerated = tempGames.length;
  const max = idGenerated + count
  for (let i = idGenerated; i < max; i += 1) {
    const game = get(i);
    game.category = category
    games.push(game);
  }

  return games
};

const generateImages = async () => {
  let response = {};
  try {
    response = await Axios.get("https://picsum.photos/v2/list");
  } catch(e) {
    throw "ERROR - get picsum image list"
  }

  banners = response.data;
  banners.map(x => {
    const urlParts = x.download_url.split("/");
    const width = 800;
    const height = 600;

    urlParts.splice(urlParts.length - 2, 2);
    x.download_url = `${urlParts.join("/")}/${width}/${height}.jpg`;
    return x;
  });
}

const generateGames = () => {
  for (const category in config.generation) {
    const GameToGenerateCount = config.generation[category];
    tempGames = [...tempGames, ...getList(GameToGenerateCount, category)]
  }

  return tempGames.sort((item1, item2) => item1.createdDate - item2.createdDate);
}

const generate = async () => {
  await generateImages();
  return generateGames();
}

const gameGenerator = {
  generate,
  getDefaultImageUrl: (index) => getBanner(index)
};

export default gameGenerator;
