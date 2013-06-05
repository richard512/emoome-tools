// feeling_1.js
module.exports = {
	title: 'Feeling Words',
	full: 'feeling',
	language: 'english',
	type: 'E',
	topic: 'FE',
	url: 'http://www.enchantedlearning.com/wordlist/emotions.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "acceptance<br> admiration<br> adoration<br> affection<br> afraid<br> agitation<br> aggressive<br> aggravation<br> agony<br> alarm<br> alienation<br> amazement<br> amusement<br> anger<br> angry<br> anguish<br> annoyance<br> anticipation<br> anxiety<br> apprehension<br> assured<br> astonishment<br> attachment<br> attraction<br> awe<br> bewitched<br> bitterness<br> bliss<br> blue<br> boredom<br> calculating<br> calm<br> capricious<br> caring<br> cautious<br> charmed<br> cheerful<br> closeness<br> compassion<br> composed<br> contempt<br> concerned<br> contentment<br> crabby<br> crazed<br> crazy<br> cross<br> cruel<br> defeat<br> defiance<br> delighted<br> dependence<br> depressed<br> desire<br> disappointment<br> disapproval<br> discontent<br> disenchanted<br> disgust<br> disillusioned<br> dislike<br> dismay<br> displeasure<br> dissatisfied<br> distraction<br> distress<br> disturbed<br> dread<br> eager<br> earnest<br> easy-going<br> ecstasy<br> ecstatic<br> elation<br> embarrassment<br> emotion<br> emotional<br> enamored<br> enchanted<br> enjoyment<br> enraged<br> enraptured<br> enthralled<br> enthusiasm<br> envious<br> envy<br> equanimity<br> euphoria<br> exasperation<br> excited<br> exhausted<br> extroverted<br> exuberant<br> fascinated<br> fear<br> fearful<br> ferocity<br> fondness<br> fright<br> frightened<br> frustration<br> furious<br> fury<br> generous<br> glad<br> gloomy<br> glum<br> greedy<br> grief<br> grim<br> grouchy<br> grumpy<br> guilt<br> happiness<br> happy<br> homesick<br> hopeless<br> horror<br> hostility<br> humiliation<br> hurt<br> hysteria<br> infatuated<br> insecurity<br> insulted<br> interested<br> introverted<br> irritation<br> isolation<br> jaded<br> jealous<br> jittery<br> jolliness<br> jolly<br> joviality<br> jubilation<br> joy<br> keen<br> kind<br> kindhearted<br> kindly<br> laid back<br> lazy<br> like<br> liking<br> loathing<br> lonely<br> longing<br> loneliness<br> love<br> lulled<br> lust<br> mad<br> misery<br> modesty<br> mortification<br> naughty<br> neediness<br> neglected<br> nervous<br> nirvana<br> open<br> optimism<br> ornery<br> outgoing<br> outrage<br> panic<br> passion<br> peaceful<br> pensive<br> pessimism<br> pity<br> placid<br> pleased<br> pride<br> pushy<br> quarrelsome<br> queasy<br> querulous<br> quick-witted<br> quiet<br> quirky<br> rage<br> rapture<br> rejection<br> relief<br> relieved<br> remorse<br> repentance<br> resentment<br> revulsion<br> roused<br> sad<br> sadness<br> sarcastic<br> sardonic<br> satisfaction<br> scared<br> scorn<br> self-assured<br> sentimentality<br> serenity<br> shame<br> shock<br> sorrow<br> sorry<br> spellbound<br> spite<br> stingy<br> submission<br> suffering<br> surprise<br> sympathy<br> tenderness<br> tense<br> terror<br> threatening<br> thrill<br> timidity<br> torment<br> tranquil<br> triumph<br> trust<br> uncomfortable<br> unhappiness<br> unhappy<br> upset<br> vain<br> vanity<br> venal<br> vengeful<br> vigilance<br> vivacious<br> wary<br> watchfulness<br> weariness<br> weary<br> woe<br> wonder<br> worried<br> wrathful<br> zeal<br> zest<br> amused<br> beaming<br> blissful<br> blithe<br> buoyant<br> carefree<br> cheerful<br> cheery<br> content<br> contented<br> delighted<br> ecstatic<br> elated<br> enraptured<br> euphoric<br> exhilarated<br> exultant<br> glad<br> gleeful<br> gratified<br> grinning<br> jolly<br> jovial<br> joyful<br> joyous<br> jubilant<br> lighthearted<br> merry<br> overjoyed<br> pleased<br> radiant<br> rapturous<br> satisfied<br> smiling<br> sunny<br> thrilled<br> untroubled".split('<br> ')
		};

		return output;
	}
};