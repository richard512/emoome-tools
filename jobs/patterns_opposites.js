// patterns_opposites.js
module.exports = {
	title: 'Opposites',
	full: 'patterns',
	language: 'english',
	type: 'opposites',
	topic: 'patterns',
	url: 'http://www.enchantedlearning.com/wordlist/opposites.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "absent - present<br> abundant - scarce<br> accept - decline, refuse<br> accurate - inaccurate<br> admit - deny<br> advantage - disadvantage<br> against - for<br> agree - disagree<br> alive - dead<br> all - none, nothing<br> ally - enemy<br> always - never<br> ancient - modern<br> answer - question<br> antonym - synonym<br> apart - together<br> appear - disappear, vanish<br> approve - disapprove<br> arrive - depart<br> artificial - natural<br> ascend - descend<br> attic - cellar<br> attractive - repulsive<br> awake - asleep<br> backward - forward<br> bad - good<br> beautiful - ugly<br> before - after<br> begin - end<br> below - above<br> bent - straight<br> best - worst<br> better - worse, worst<br> big - little, small<br> black - white<br> blame - praise<br> bless - curse<br> bitter - sweet<br> borrow - lend<br> bottom - top<br> boy - girl<br> brave - cowardly<br> build - destroy<br> bold - meek, timid<br> borrow - lend<br> bound - unbound, free<br> boundless - limited<br> bright - dim, dull<br> brighten - fade<br> broad - narrow<br> calm - windy, troubled<br> can - cannot, can't<br> capable - incapable<br> captive - free<br> careful - careless<br> cheap - expensive<br> cheerful - sad, discouraged, dreary<br> clear - cloudy, opaque<br> clever - stupid<br> clockwise - counterclockwise<br> close - far, distant<br> closed - ajar, open<br> clumsy - graceful<br> cold - hot<br> combine - separate<br> come - go<br> comfort - discomfort<br> common - rare<br> conceal - reveal<br> contract - expand<br> cool - warm<br> correct - incorrect, wrong<br> courage - cowardice<br> create - destroy<br> crooked - straight<br> cruel - kind<br> compulsory - voluntary<br> courteous - discourteous, rude<br> dangerous - safe<br> dark - light<br> day - night<br> daytime - nighttime<br> dead - alive<br> decline - accept, increase<br> decrease - increase<br> deep - shallow<br> definite - indefinite<br> demand - supply<br> despair - hope<br> dim - bright<br> disappear - appear<br> discourage - encourage<br> diseased - healthy<br> down - up<br> downwards - upwards<br> dreary - cheerful<br> dry - moist, wet<br> dull - bright, shiny<br> dusk - dawn<br> early - late<br> east - west<br> easy - hard, difficult<br> empty - full<br> encourage - discourage<br> end - begin, start<br> enter - exit<br> even - odd<br> expand - contract<br> export - import<br> exterior - interior<br> external - internal<br> fade - brighten<br> fail - succeed<br> false - true<br> famous - unknown<br> far - near<br> fast - slow<br> fat - thin<br> feeble - strong, powerful<br> few - many<br> find - lose<br> first - last<br> float - sink<br> foolish - wise<br> fore - aft<br> free - bound, captive<br> fold - unfold<br> forget - remember<br> found - lost<br> fresh - stale<br> frequent - seldom<br> friend - enemy<br> for - against<br> fortunate - unfortunate<br> full - empty<br> generous - stingy<br> gentle - rough<br> get - give<br> giant - tiny, small, dwarf<br> girl - boy<br> give - receive, take<br> glad - sad, sorry<br> gloomy - cheerful<br> go - stop<br> good - bad, evil<br> grant - refuse<br> great - tiny, small, unimportant<br> grow - shrink<br> guest - host<br> guilty - innocent<br> happy - sad<br> hard - easy<br> hard - soft<br> harmful - harmless<br> harsh - mild<br> hate - love<br> haves - have-nots<br> healthy - diseased, ill, sick<br> heaven - hell<br> heavy - light<br> help - hinder<br> here - there<br> hero - coward<br> high - low<br> hill - valley<br> hinder - help<br> honest - dishonest<br> horizontal - vertical<br> hot - cold<br> humble - proud<br> ill - healthy, well<br> immense - tiny, small<br> important - trivial<br> in - out<br> include - exclude<br> increase - decrease<br> inferior - superior<br> inhale - exhale<br> inner - outer<br> inside - outside<br> intelligent - stupid, unintelligent<br> interesting - boring<br> interior - exterior<br> interesting - dull, uninteresting<br> internal - external<br> intentional - accidental<br> join - separate<br> junior - senior<br> just - unjust<br> justice - injustice<br> knowledge - ignorance<br> known - unknown<br> landlord - tenant<br> large - small<br> last - first<br> laugh - cry<br> lawful - unlawful, illegal<br> lazy - industrious<br> leader - follower<br>left - right<br> lend -borrow<br> lengthen - shorten<br> lenient - strict<br> left - right<br> less - more<br> light - dark, heavy<br> like - dislike, hate<br> likely - unlikely<br> limited - boundless<br> little - big<br> long - short<br> loose - tight<br> lose - find<br> loss - win<br> loud - quiet<br> love - hate<br> low - high<br> loyal - disloyal<br> mad - happy, sane<br> major - minor<br> many - few<br> mature - immature<br> maximum - minimum<br> melt - freeze<br> merry - sad<br> messy - neat<br> minor - major<br> minority - majority<br> miser - spendthrift<br> misunderstand - understand<br> more - less<br> nadir - zenith<br> narrow - wide<br> near - far, distant<br> neat - messy, untidy<br> never - always<br> new - old<br> night - day<br> nighttime - daytime<br> no - yes<br> noisy - quiet<br> none - some<br> north - south<br> obedient - disobedient<br> odd - even<br> offer - refuse<br> old - young<br> old - new<br> on - off<br> open - closed, shut<br> opposite- same, similar<br> optimist - pessimist<br> out - in<br> outer - inner<br> over - under<br> past - present<br> patient - impatient<br> peace - war<br> permanent - temporary<br> plentiful - scarce<br> plural - singular<br> poetry - prose<br> polite - rude, impolite<br> possible - impossible<br> poverty - wealth, riches<br> powerful - weak<br> pretty - ugly<br> private - public<br> prudent - imprudent<br> pure - impure, contaminated<br> push - pull<br> qualified - unqualified<br> question - answer<br> quiet - loud, noisy<br> raise - lower<br> rapid - slow<br> rare - common<br> regular - irregular<br> real - fake<br> rich - poor<br> right - left, wrong<br> right-side-up - upside-down<br> rough - smooth<br> rude - courteous<br> safe - unsafe<br> same - opposite<br> satisfactory - unsatisfactory<br> secure - insecure<br> scatter - collect<br> separate - join, together<br> serious - trivial<br> second-hand - new<br> shallow - deep<br> shrink - grow<br> sick - healthy, ill<br> simple - complex, hard<br> singular - plural<br> sink - float<br> slim - fat, thick<br> slow - fast<br> sober - drunk<br> soft - hard<br> some - none<br> sorrow - joy<br> sour - sweet<br> sow -reap<br> straight - crooked<br> start - finish<br> stop - go<br> strict - lenient<br> strong - weak<br> success - failure<br> sunny - cloudy<br> synonym - antonym<br> sweet - sour<br> take - give<br> tall - short<br> tame - wild<br> them - us<br> there - here<br> thick - thin<br> tight - loose, slack<br> tiny - big, huge<br> together - apart<br> top - bottom<br> tough - easy, tender<br> transparent - opaque<br> true - false<br> truth - flasehood, lie, untruth<br> under - over<br> unfold - fold<br> unknown - known<br> unqualified - qualified<br> unsafe - safe<br> up - down<br> upside-down - right-side-up<br> upstairs - downstairs<br> us - them<br> useful - useless<br> vacant - occupied<br> vanish - appear<br> vast - tiny<br> victory - defeat<br> virtue - vice<br> visible - invisible<br> voluntary - compulsory<br> war - peace<br> wax - wane<br> weak - strong<br> wet - dry<br> white - black<br> wide - narrow<br> win - lose<br> wisdom - folly, stupidity<br> within - outside<br> wrong - right<br> yes - no<br> yin - yang<br> young - old<br> zip - unzip<br> zenith - nadir".split('<br> ')
		};

		return output;
	}
};