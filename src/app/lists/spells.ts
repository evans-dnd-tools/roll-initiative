import { SpellSchool } from 'src/models/enums/spell-school';
import { Spell } from '../../models/spell';
import { IndexElementType } from 'src/models/enums/index-element-type';

/* ================================================= */
/*                       AAAA                        */
/* ================================================= */

export const ENLARGE_REDUCE: Spell = {
  type: IndexElementType.Spell,
  id: "enlarge-reduce",
  name: "Agrandissement & Rapetissement",
  level: 2,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S, M (une pincée de limaille de fer)",
  duration: "Concentration, jusqu'à 1 minute",
  description: `<p>Vous agrandissez ou rétrécissez une créature ou un objet situé à portée et dans votre champ de vision. Choisissez soit une créature, soit un objet qui n'est ni porté ni transporté. Si la cible n'est pas consentante, elle a droit à un jet de sauvegarde de Constitution Si elle le réussit, le sort reste sans effet.</p>
  <p>Si la cible est une créature, tout ce qu'elle porte et transporte change de taille avec elle. En revanche, si elle lâche un objet, il reprend sa taille normale immédiatement.</p>
  <br />
  <p><b>Agrandissement :</b> La cible double dans toutes les dimensions, et son poids est multiplié par huit. Cette croissance augmente sa catégorie de taille d'un cran, de Moyenne à Grande par exemple. Si la cible n'a pas assez de place pour doubler de volume, elle atteint la taille maximale possible dans l'espace dont elle dispose. Elle est avantagée lors des tests de Force et des jets de sauvegarde de Force jusqu'à la fin du sort. Les armes de la cible grandissent pour s'adapter à sa nouvelle taille. Tant qu'elles sont ainsi agrandies, elles infligent 1d4 dégâts de plus.</p>
  <br />
  <p><b>Rapetissement :</b> La cible réduit de moitié dans toutes les dimensions et son poids est divisé par huit. Ce rétrécissement réduit sa catégorie de taille d'un cran, de Moyenne à Petite par exemple. La cible est désavantagée lors des tests de Force et des jets de sauvegarde de Force jusqu'à la fin du sort. Les armes de la cible rétrécissent pour s'adapter à sa nouvelle taille. Tant qu'elles sont ainsi réduites, elles infligent 1d4 dégâts de moins (mais cela ne peut pas faire passer les dégâts en dessous de 1).</p>`
};

export const HELP: Spell = {
  type: IndexElementType.Spell,
  id: "help",
  name: "Aide",
  level: 2,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S, M (une bandellette de tissu blanc)",
  duration: "8 heures",
  description: `<p>Le sort renforce vos alliés qui deviennent plus robustes et plus résolus. Choisissez jusqu'à 3 créatures à portée. Le maximum de points de vie et les points de vie actuels de chacune d'entre elles augmentent de 5 pendant toute la durée du sort.</p>
  <br />
  <p><b>A plus haut niveau :</b> Lorsque vous lancez ce sort en utilisant un emplacement de sort de niveau 3 ou plus, les points de vie de chaque cible augmentent de 5 points supplémentaires pour chaque niveau au-delà du 2ème.</p>`
};

export const ALARM: Spell = {
  type: IndexElementType.Spell,
  id: "alarm",
  name: "Alarme",
  level: 1,
  school: SpellSchool.Abjuration,
  castingTime: "1 minute / Rituel",
  range: "9 mètres",
  components: "V, S, M (une petite clochette et un filament en argent)",
  duration: "8 heures",
  description: `<p>Vous installez une alarme pour vous avertir en cas d'intrusion. Choisissez une porte, une fenêtre ou une zone d'une superficie ne dépassant pas 6 mètres de côté. Tant que le sort fait effet, une alarme vous avertit mentalement dès qu'une créature pénètre dans la zone protégée.</p>
  <p>Au moment où vous lancez le sort, vous pouvez désigner des créatures qui ne déclencheront pas l'alarme. Vous pouvez aussi choisir si l'alarme ser audible ou mentale.</p>
  <p>Une alarme mentale vous avertit d'un tintement dans votre tête tant que vous vous trouvez dans un rayon de 1,5 kilomètre autour de la zone protégée. Ce tintement suffit à vous réveiller si vous êtes endormi.</p>
  <p>Une alarme audible émet le même son qu'une cloche d'alerte pendant 10 secondes et retentit dans un rayon de 18 mètres.</p>`
};

export const PLANAR_ALLY: Spell = {
  type: IndexElementType.Spell,
  id: "planar-ally",
  name: "Allié planaire",
  level: 6,
  school: SpellSchool.Conjuration,
  castingTime: "10 minutes",
  range: "18 mètres",
  components: "V, S",
  duration: "instantanée",
  description: `<p>Vous demandez de l'aide à une entité appartenant à un autre monde. Vous devez connaître cet être, que ce soit un dieu, un primordial, un prince démoniaque ou une autre créature à la puissance cosmique. L'entité vous envoie un céleste, un élémentaire ou un fiélon qui lui est loyal. Cette créature apparaît dans un espace inoccupé à portée. Si vous connaissez le nom d'une créature spécifique, vous pouvez le mentionner lors de l'incantation pour demander à ce que ce soit elle que l'entité vous envoie, bien qu'elle puisse tout de même vous envoyer un autre émissaire (au MD de décider).</p>
  <br />
  <p>Quand la créature apparaît, elle n'a aucune obligation de se comporter d'une manière particulière. Vous pouvez lui demander d'accomplir un service rémunéré, mais elle n'est pas obligée d'accepter. Votre requête peut être très simple (nous faire passer en volant au-dessus de ce précipice, nous aider à livrer un combat...) ou plus complexe (espionner nos ennemis, nous protéger lors de l'exploration de ce donjon...).</p>
  <p>Pour négocier un service, vous devez être en mesure de communiquer avec la créature.</p>
  <p>Le paiement peut se faire sous diverses formes. Un céleste peut demander une importante donation en or ou en objets magiques à un temple allié tandis qu'un fiélon peut exiger un sacrifice vivant ou un trésor. Certaines créatures monnayent leurs services contre une quête à accomplir de votre côté.</p>
  <p>En règle générale, une tâche qui s'accomplit en quelques minutes se paie 100 po la minute. Une tâche qui demande plusieurs heures coûte 1 000 po de l'heure, et une tâche effectuée sur plusieurs jours (10 au maximum) vaut 10 000 po la journée. Le MD peut modifier le montant en fonction des circonstances dans lesquelles vous lancez le sort. Si la tâche à accomplir s'accorde avec l'éthique de la créature, elle peut réduire son salaire de moitié ou même y renoncer. Les tâches qui ne présentent aucun risque coûtent souvent la moitié du prix indiqué précédemment tandis que les missions particulièrement dangereuses valent parfois bien plus cher. Une créature accepte rarement une tâche visiblement suicidaire.</p>
  <br />
  <p>Une fois que la créature a accompli la tâche demandée ou quand la durée de service décidée est arrivée à son terme, elle retourne sur son plan d'origine après vous avoir fait son rapport, si la tâche l'exige et qu'elle est en mesure de le faire.</p>
  <p>Si vous êtes incapable de vous mettre d'accord avec la créature sur le prix de ses services, elle retourne immédiatement sur son plan natal.</p>
  <p>Une créature enrôlée dans votre groupe compte comme un membre à part entière et reçoit sa part de points d'expérience.</p>`
};

export const ENHANCE_ABILITY: Spell = {
  type: IndexElementType.Spell,
  id: "enhance-ability",
  name: "Amélioration de caractéristique",
  level: 2,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S, M (des poils ou des plumes d'un animal)",
  duration: "Concentration, jusqu'à 1 heure",
  description: `<p>Vous touchez une créature pour lui accorder une amélioration magique. Choisissez l'un des effets suivants dont la cible bénéficiera jusqu'à la fin du sort.</p>
  <br />
  <p><b>Endurance de l'ours :</b> La cible est avantagée lors des tests de Constitution. Elle gagne aussi 2d6 points de vie temporaires qui disparaissent quand le sort se termine.</p>
  <br />
  <b>Force du taureau :</b> La cible est avantagée lors des test de Force et sa capacité de charge est doublée.</p>
  <br />
  <b>Grâce du chat :</b> La cible est avantagée lors des tests de Dextérité. De plus, elle ne subit pas de dégâts quand elle chute sur 6 mètres ou moins, à condition qu'elle ne soit pas neutralisée.</p>
  <br />
  <b>Splendeur de l'aigle :</b> La cible est avantagée lors des tests de Charisme.</p>
  <br />
  <b>Ruse du renard :</b> La cible est avantagée lors des tests d'Intelligence.</p>
  <br />
  <b>Sagesse du hibou :</b> La cible est avantagée lors des tests de Sagesse.</p>
  <br />
  <b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou plus, vous pouvez prendre une créature de plus pour cible par niveau au-delà du 2ème.</p>`
};

export const ANIMAL_FRIENDSHIP: Spell = {
  type: IndexElementType.Spell,
  id: "animal-friendship",
  name: "Amitié avec les animaux",
  level: 1,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S, M (un peu de nourriture)",
  duration: "24 heures",
  description: `<p>Grâce à ce sort, vous convainquez une bête que vous ne lui voulez pas de mal. Choisissez une bête située à portée dans votre champ de vision. Elle doit vous voir et vous entendre. Le sort échoue si elle possède une Inteliigence de 4 ou plus. Dans le cas contraire, elle doit réussir un jet de Sagesse, sans quoi vous la charmez. Le sort se termine si vous ou l'un de vos camarades blseez la cible.</p>
  <br />
  <p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, vous pouvez affecter une bête supplémentaire par emplacement de sort au-delà du 1er.</p>`
};

export const ANIMATE_DEAD: Spell = {
  type: IndexElementType.Spell,
  id: "animate-dead",
  name: "Animation des morts",
  level: 3,
  school: SpellSchool.Necromancy,
  castingTime: "1 minute",
  range: "3 mètres",
  components: "V, S, M (une goutte de sang, un lambeau de chair et une pincée de poussière d'os)",
  duration: "Instantanée",
  description: `<p>Ce sort crée un serviteur mort-vivant. Choisissez un tas d'os ou le cadavre d'un humanoïde de taille Moyenne ou Petite situé à portée. Votre sort imprègne la cible d'un ignoble simulacre de vie, la relevant sous forme de mort-vivant. Elle devient un squelette si vous avez lancé le sort sur un tas d'os, et un zombi si vous avez opté pour un cadavre (le MD dispose des statistiques de jeu de la créature).</p>
  <br />
  <p>À chacun de vos tours, vous pouvez dépenser une action bonus pour donner un ordre mental à la créature générée via ce sort si elle se trouve dans un rayon de 18 mètres (si vous contrôlez plusieurs créatures, vous pouvez donner un ordre à l'une d'elles, certaines d'entre elles ou à toutes à la fois, à condition de transmettre le même ordre à chacune). À vous de décider quelles actions la créature va entreprendre et à quel endroit elle se déplacera au cours du tour suivant, mais vous pouvez aussi lui donner un ordre plus générique, comme de garder une salle ou un couloir. En l'absence d'ordre, la créature se contente de se défendre contre les créatures hostiles.</p>
  <p>Une fois qu'elle a reçu un ordre, elle continue à le suivre jusqu'à ce qu'elle ait accompli sa tâche.</p>
  <p>La créature est placée sous votre contrôle pendant 24 heures, après quoi elle cesse d'obéir aux ordres que vous lui avez donnés. Pour la contrôler pendant 24 heures de plus, il vous faut lui relancer ce sort avant la fin de la période de 24 heures pendant laquelle il fait effet. Si vous utilisez ce sort ainsi, il vous permet de réaffirmer votre contrôle sur un maximum de quatre créatures animées grâce à lui plutôt que d'en animer une nouvelle.</p>
  <br />
  <p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, vous animez ou réaffirmez votre contrôle sur deux créatures de plus par niveau au-delà du 3ème. Chaque créature doit venir d'un tas d'os ou d'un cadavre différent.</p>`
};

export const ANIMATE_OBJECTS: Spell = {
  type: IndexElementType.Spell,
  id: "animate-objects",
  name: "Animation des objets",
  level: 5,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description: `<p></p>`
};

export const CONTIGENCY: Spell = {
  type: IndexElementType.Spell,
  id: "contingency",
  name: "Anticipation",
  level: 6,
  school: SpellSchool.Evocation,
  castingTime: "10 minutes",
  range: "Personnelle",
  components: "V, S, M (une statuette de vous taillée dans l'ivoire et ornée de gemmes d'une valeur minimum de 1 500 po)",
  duration: "10 jours",
  description: `<p></p>`
};

export const NONDETECTION: Spell = {
  type: IndexElementType.Spell,
  id: "nondetection",
  name: "Antidétéction",
  level: 3,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S, M (une pincée de poudre de diamant d'une valeur de 25 po, que le sort consomme)",
  duration: "8 heures",
  description: `<p></p>`
};

export const CALM_EMOTIONS: Spell = {
  type: IndexElementType.Spell,
  id: "calm-emotions",
  name: "Apaisement des émotions",
  level: 2,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description: `<p></p>`
};

export const SEEMING: Spell = {
  type: IndexElementType.Spell,
  id: "seeming",
  name: "Apparence trompeuse",
  level: 5,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S",
  duration: "8 heures",
  description: `<p></p>`
};

export const FIND_STEED: Spell = {
  type: IndexElementType.Spell,
  id: "find-steed",
  name: "Appel de destrier",
  level: 2,
  school: SpellSchool.Conjuration,
  castingTime: "10 minutes",
  range: "9 mètres",
  components: "V, S",
  duration: "Instantanée",
  description: `<p></p>`
};

export const FIND_FAMILIAR: Spell = {
  type: IndexElementType.Spell,
  id: "find-familiar",
  name: "Appel de familier",
  level: 1,
  school: SpellSchool.Conjuration,
  castingTime: "1 heure",
  range: "3 mètres",
  components: "V, S, M (10 po en charbons, herbes et encens que le sort consomme)",
  duration: "Instantanée",
  description: `<p></p>`
};

export const CALL_LIGHTNING: Spell = {
  type: IndexElementType.Spell,
  id: "call-lightning",
  name: "Appel de la foudre",
  level: 3,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 10 minutes",
  description: `<p></p>`
};

export const ELEMENTAL_WEAPON: Spell = {
  type: IndexElementType.Spell,
  id: "elemental-weapon",
  name: "Arme élémentaire",
  level: 3,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 heure",
  description: `<p></p>`
};

export const MAGIC_WEAPON: Spell = {
  type: IndexElementType.Spell,
  id: "magic-weapon",
  name: "Arme magique",
  level: 2,
  school: SpellSchool.Transmutation,
  castingTime: "1 action bonus",
  range: "Contact",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 heure",
  description: `<p></p>`
};

export const SPIRITUAL_WEAPON: Spell = {
  type: IndexElementType.Spell,
  id: "spiritual-weapon",
  name: "Arme spirituelle",
  level: 2,
  school: SpellSchool.Evocation,
  castingTime: "1 action bonus",
  range: "18 mètres",
  components: "V, S",
  duration: "1 minute",
  description: `<p></p>`
};

export const ARMOR_OF_AGATHYS: Spell = {
  type: IndexElementType.Spell,
  id: "armor-of-agathys",
  name: "Armure d'Agathys",
  level: 1,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S, M (un peu d'eau)",
  duration: "1 heure",
  description: `<p></p>`
};

export const MAGE_ARMOR: Spell = {
  type: IndexElementType.Spell,
  id: "mage-armor",
  name: "Armure de mage",
  level: 1,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S, M (une bout de cuir tanné)",
  duration: "8 heures",
  description: `<p></p>`
};

export const TIME_STOP: Spell = {
  type: IndexElementType.Spell,
  id: "time-stop",
  name: "Arrêt du temps",
  level: 9,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V",
  duration: "Instantanée",
  description: `<p></p>`
};

export const ACID_SPLASH: Spell = {
  type: IndexElementType.Spell,
  id: "acid-splash",
  name: "Aspersion acide",
  level: 0,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S",
  duration: "Instantanée",
  description: `<p></p>`
};

export const PHANTASMAL_KILLER: Spell = {
  type: IndexElementType.Spell,
  id: "phantasmal-killer",
  name: "Assassin imaginaire",
  level: 4,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description: `<p></p>`
};

export const GUIDANCE: Spell = {
  type: IndexElementType.Spell,
  id: "guidance",
  name: "Assistance",
  level: 0,
  school: SpellSchool.Divination,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description: `<p></p>`
};

export const AUGURY: Spell = {
  type: IndexElementType.Spell,
  id: "augury",
  name: "Augure",
  level: 2,
  school: SpellSchool.Divination,
  castingTime: "1 minute",
  range: "Personnelle",
  components: "V, S, M (des batonnets, des osselets ou petits objets similaires d'une valeur de 25 po portant des marques spéciales)",
  duration: "Instantanée",
  description: `<p></p>`
};

export const AURA_OF_PURITY: Spell = {
  type: IndexElementType.Spell,
  id: "aura-of-purity",
  name: "Aura de pureté",
  level: 4,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "Personnelle (9m de rayon)",
  components: "V",
  duration: "Concentration, jusqu'à 10 minutes",
  description: `<p></p>`
};

export const AURA_OF_LIFE: Spell = {
  type: IndexElementType.Spell,
  id: "aura-of-life",
  name: "Aura de vie",
  level: 4,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "Personnelle (9m de rayon)",
  components: "V",
  duration: "Concentration, jusqu'à 10 minutes",
  description: `<p></p>`
};

export const AURA_OF_VITALITY: Spell = {
  type: IndexElementType.Spell,
  id: "aura-of-vitality",
  name: "Aura de vitalité",
  level: 3,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "Personnelle (9m de rayon)",
  components: "V",
  duration: "Concentration, jusqu'à 1 minute",
  description: `<p></p>`
};

export const CRUSADERS_MANTLE: Spell = {
  type: IndexElementType.Spell,
  id: "crusaders-mantle",
  name: "Aura du croisé",
  level: 3,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V",
  duration: "Concentration, jusqu'à 1 minute",
  description: `<p></p>`
};

export const NYSTULS_MAGIC_AURA: Spell = {
  type: IndexElementType.Spell,
  id: "nystuls-magic-aura",
  name: "Aura magique de Nystul",
  level: 2,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S, M (un petit carré de soie)",
  duration: "24 jours",
  description: `<p></p>`
};

export const HOLY_AURA: Spell = {
  type: IndexElementType.Spell,
  id: "holy-aura",
  name: "Aura sacrée",
  level: 8,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S, M (un petit reliquaire d'une valeur minimum de 1000po contenant une relique sacrée, comme un morceau de tissu provenant de la robe d'un saint ou un morceau de parchemin provenant d'un texte sacré)",
  duration: "Concentration, jusqu'à 1 minute",
  description: `<p></p>`
};

export const ANTIPATHY_SYMPATHY: Spell = {
  type: IndexElementType.Spell,
  id: "antipathy-sympathy",
  name: "Aversion & attirance",
  level: 8,
  school: SpellSchool.Enchantment,
  castingTime: "1 heure",
  range: "18 mètres",
  components: "V, S, M (un cristal d'alun trempé dans le vinaigre pour l'aversion, une goutte de miel pour l'attirance)",
  duration: "10 jours",
  description: `<p></p>`
};

/* ================================================= */
/*                       BBBB                        */
/* ================================================= */

export const BAGOU: Spell = {
  type: IndexElementType.Spell,
  id: "bagou",
  name: "Bagou",
  level: 8,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V",
  duration: "1 heure",
  description: `<p>Jusqu'à la fin du sort, chaque fois que vous faites un test de Charisme, vous pouvez remplacer le nombre obtenu au dé par un 15. De plus, quoi que vous disiez, la magie visant à déterminer si vous dites la vérité vous croit toujours sincère.</p>`
};

export const BAIES_NOURRICIERES: Spell = {
  type: IndexElementType.Spell,
  id: "baies-nourricieres",
  name: "Baies nourricières",
  level: 1,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S, M (un brin de gui)",
  duration: "Instantanée",
  description: `<p>Jusqu'à dix baies apparaissent dans votre main. Elles sont imprégnées de magie pendant une journée. Une créature peut utiliser son action pour manger une baie, ce qui lui rend un point de vie et la nourrit pour la journée.</p>
  <br />
  <p>Les baies perdent leurs propriétés si personne ne les mange dans les 24 heures qui suivent l'incantation.</p>`
};

export const BANISSEMENT : Spell = {
  type: IndexElementType.Spell,
  id: "bannissement",
  name: "Bannissement",
  level: 4,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S, M (un objet qui répugne à la cible)",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Vous tentez d'envoyer une créature située dans votre champ de vision dans un autre plan d'existence. Elle doit réussir un jet de sauvegarde de Charisme ou se faire bannir.</p><br/><p>Si la cible est native du plan d'existence sur lequel vous vous trouvez, vous l'exilez dans un demi-plan inoffensif.</p><br/><p>Elle est neutralisée tant qu'elle se trouve là-bas et y reste jusqu'à la fin du sort. À ce moment, elle réapparaît à l'endroit qu'elle a quitté ou dans l'espace inoccupé le plus proche si son espace de départ est occupé.</p><br/><p>Si la cible est originaire d'un plan d'existence autre que celui sur lequel vous vous trouvez, une légère détonation accompagne son retour de force sur son plan d'origine.</p><br/><p>Si le sort se termine avant qu'une minute ne se soit écoulée. la cible réapparaît à l'endroit qu'elle a quitté ou dans lespace inoccupé le plus proche si son espace de départ est occupé. Sinon, elle ne revient pas.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 5 ou plus, vous pouvez viser une créature de plus par niveau au-delà du 4ème.</p><br/>"
};

export const BARRIERE_DE_LAMES : Spell = {
  type: IndexElementType.Spell,
  id: "barrière-de-lames",
  name: "Barrière de lames",
  level: 6,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "27 mètres",
  components: "V. S",
  duration: "Concentration, jusqu'à 10 minutes",
  description: "<p>Vous créez un mur vertical constitué de lames tournoyantes faites d'énergie magique et tranchantes comme des rasoirs.</p><br/><p>Le mur apparaît à portée et persiste pour toute la durée du sort. Vous pouvez créer un mur droit d'un maximum de 30 mètres de long, 6 mètres de haut et 1,50 mètre d'épaisseur, ou un mur circulaire d'un maximum de 18 mètres de diamètre, 6 mètres de haut et 1,50 mètre d'épaisseur. Le mur offre un abri supérieur aux créatures qui se trouvent derrière lui, et son espace est traité comme un terrain difficile.</p><br/><p>Quand une créature pénètre dans la zone du mur pour la première fois au cours de son tour ou quand elle commence son tour dans cette zone, elle doit faire un jet de sauvegarde de Dextérité. Si elle le rate, elle subit 6d10 dégâts tranchants; si elle le réussit, elle en reçoit seulement la moitié.</p><br/>"
};

export const BENEDICTION : Spell = {
  type: IndexElementType.Spell,
  id: "bénédiction",
  name: "Bénédiction",
  level: 1,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S, M (un peu d'eau bénite à asperger)",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Vous bénissez jusqu'à trois créatures de votre choix situées à portée. Quand une cible fait un jet d'attaque ou de sauvegarde avant la fin du sort, elle lance 1d4 et ajoute le montant obtenu au jet d'attaque ou de sauvegarde.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, vous pouvez affecter une créature de plus par niveau au-delà du 1.</p><br/>"
};

export const BLESSURE : Spell = {
  type: IndexElementType.Spell,
  id: "blessure",
  name: "Blessure",
  level: 1,
  school: SpellSchool.Necromancy,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S",
  duration: "Instantanée",
  description: "<p>Faites une attaque de sort au corps à corps contre une créature située à une distance inférieure ou égale à votre allonge. Si vous la touchez, elle subit 3d10 dégâts nécrotiques.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, les dégâts augmentent de 1d10 par niveau au-delà du 1*.</p><br/>"
};

export const BOUCHE_MAGIQUE : Spell = {
  type: IndexElementType.Spell,
  id: "bouche-magique",
  name: "Bouche magique",
  level: null,
  school: SpellSchool.Illusion,
  castingTime: "1 minute",
  range: "9 mètres",
  components: "V, 5, M (un rayon de miel et de la poussière de jade d'une valeur de 10 po, que le sort consume)",
  duration: "Jusqu'à dissipation",
  description: "<p>Vous implantez un message dans un objet situé à portée.</p><br/><p>On entend le message dès que les conditions le déclenchant sont remplies. Choisissez un objet situé dans votre champ de vision qui n'est ni porté ni transporté par une autre créature. Prononcez ensuite le message, qui doit se composer de 25 mots au maximum, mais peut se répéter pendant un maximum de 10 minutes. Enfin, déterminez les circonstances dans lesquelles le message s'activera.</p><br/><p>Quand les conditions de déclenchement sont remplies, une bouche magique apparaît sur l'objet et récite le message avec la même voix que vous et au volume où vous l'avez prononcé. Si l'objet choisi possède une bouche ou quelque chose qui y ressemble (comme la bouche d'une statue), la bouche magique apparait de manière à donner l'impression que les paroles sortent des lèvres de l'objet. Lors de l'incantation, vous pouvez décider que le sort se termine une fois le message transmis ou qu'il reste actif et répète le message chaque fois que les conditions de déclenchement sont remplies.</p><br/><p>Ces dernières peuvent être aussi génériques ou spécifiques que vous le désirez, mais elles doivent se baser sur des données visuelles ou audibles, perceptibles dans un rayon de 9 mètres autour de l'objet. Par exemple, vous pouvez ordonner à la bouche de parler des qu'une créature approche à 9 mètres ou moins de l'objet ou quand une cloche d'argent retentit dans un rayon de 9 mètres.</p><br/>"
};

export const BOUCLIER : Spell = {
  type: IndexElementType.Spell,
  id: "bouclier",
  name: "Bouclier",
  level: 1,
  school: SpellSchool.Abjuration,
  castingTime: "1 réaction à effectuer lorsque vous êtes touché par une attaque ou un sort de projectile magique",
  range: "Personnelle",
  components: "V, S",
  duration: "1 round",
  description: "<p>Une barrière invisible faite de force magique apparaît autour de vous et vous protege. Jusqu'au début de votre prochain tour, vous avez un bonus de +5 à la CA, y compris contre l'attaque qui a déclenché l'incantation du sort, et vous ne subissez aucun dégât de la part de projectile magique.</p><br/>"
};

export const BOUCLIER_DE_FEU : Spell = {
  type: IndexElementType.Spell,
  id: "bouclier-de-feu",
  name: "Bouclier de feu",
  level: 4,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S, M (un morceau de phosphore ou une luciole)",
  duration: "10 minutes",
  description: "<p>De fines volutes de flammes enveloppent votre corps pendant toute la durée du sort, émettant une lumière vive dans un rayon de 3 mètres et une lumière faible dans un rayon de 3 metres de plus. Vous pouvez mettre un terme prématuré au sort en utilisant une action.</p><br/><p>Les flammes vous offrent un bouclier chaud ou froid, comme bon vous semble. Le bouclier chaud vous apporte une résistance contre les dégâts de froid, le bouclier froid une résistance contre les dégâts de feu.</p><br/><p>De plus, quand une créature située dans un rayon de 1,50 mètre autour de vous vous touche avec une attaque au corps à corps, le bouclier génère une gerbe de flammes.</p><br/><p>Si le bouclier est chaud, il infige 2d8 dégâts de feu à l'assaillant, s'il est froid, il lui inflige 2d8 dégâts de froid.</p><br/>"
};

export const BOUCLIER_DE_LA_FOI : Spell = {
  type: IndexElementType.Spell,
  id: "bouclier-de-la-foi",
  name: "Bouclier de la foi",
  level: 1,
  school: SpellSchool.Abjuration,
  castingTime: "1 action bonus",
  range: "18 mètres",
  components: "V, S, M (un petit parchemin avec un extrait de texte sacré",
  duration: "Concentration, jusqu'a 10 minutes",
  description: "<p>Un champ scintillant apparaît autour d'une créature de votre choix située à portée et lui donne un bonus de +2 à la CA pendant toute la durée du sort.</p><br/>"
};

export const BOUFFEE_DE_POISON : Spell = {
  type: IndexElementType.Spell,
  id: "bouffée-de-poison",
  name: "Bouffée de poison",
  level: 0,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "3 mètres",
  components: "V, S",
  duration: "Instantanée",
  description: "<p>Vous tendez la main en direction d'une créature située à portée dans votre champ de vision et projetez une bouffée de gaz toxique sortie de votre paume. La créature doit réussir un jet de sauvegarde de Constitution ou subir 1d12 dégâts de poison.</p><br/><p>Les dégâts du sort augmentent de 1d12 quand vous atteignez le niveau 5 (2d12), le niveau 11 (3d12) et le niveau 17 (4d12).</p><br/>"
};

export const BOULE_DE_FEU : Spell = {
  type: IndexElementType.Spell,
  id: "boule-de-feu",
  name: "Boule de feu",
  level: 3,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "45 mètres",
  components: "V, S, M (une petite boule de guano de chauvesouris et du soufre)",
  duration: "Instantanée",
  description: "<p>Une traînée luisante part de votre doigt tendu et file vers un point de votre choix situé à portée et dans votre champ de vision, où elle explose dans une gerbe de flammes grondantes.</p><br/><p>Chaque créature située dans une sphère de 6 mètres de rayon centrée sur ce point doit faire un jet de sauvegarde de Dextérité.</p><br/><p>Celles qui échouent subissent 8d6 dégâts de feu, les autres la moitié seulement.</p><br/><p>Le feu s'étend en contournant les angles. Il embrase les objets inflammables de la zone, à moins que quelqu'un ne les porte ou ne les transporte.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, les dégâts augmentent de 1d6 par niveau au-delà du 3ème.</p><br/>"
};

export const BOULE_DE_FEU_A_RETARDEMENT : Spell = {
  type: IndexElementType.Spell,
  id: "boule-de-feu-à-retardement",
  name: "Boule de feu à retardement",
  level: 7,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "45 mètres",
  components: "V, S, M (une petite boule de guano de chauve-souris et du soufre)",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Un rayon de lumière jaune jaillit de votre doigt tendu et se condense pour former une bille luisante en un point de votre choix situé à portée pendant toute la durée du sort. Quand le sort se termine, soit parce que votre concentration se brise, soit parce que vous y mettez volontairement un terme, la bille se dilate dans un grondement sourd et explose en une gerbe de feu qui s'étend en franchissant les angles éventuels.</p><br/><p>Toutes les créatures situées dans une sphère de 6 mètres de rayon centrée sur le point où se trouvait la bille doivent faire un jet de sauvegarde de Dextérité. Celles qui échouent reçoivent un montant de dégâts de feu égal au total de dégars accumulés (voir plus loin), les autres reçoivent la moitié de ce montant seulement.</p><br/><p>De base, le sort inflige 12d6 dégâts de feu. À la fin de votre tour, si la bille n'a pas encore explosé, ces dégâts augmentent de 1d6.</p><br/><p>Si quelqu'un touche la bille avant la fin de l'intervalle, il doit faire un jet de sauvegarde de Dextérité. S'il échoue, le sort se termine immédiatement et la bille explose. S'il réussit, il peut lancer la bille à une distance maximale de 12 mètres. Si elle touche un objet solide ou une créature, le sort se termine et la</p><br/><p>bille explose.</p><br/><p>Les flammes endommagent les objets qui se trouvent dans la zone et embrasent les objets inflammables qui ne sont ni portés ni transportés.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 8 ou plus, les dégâts de base augmentent de 1d6 par niveau au-delà du 7ème.</p><br/>"
};

export const BOURRASQUE : Spell = {
  type: IndexElementType.Spell,
  id: "bourrasque",
  name: "Bourrasque",
  level: 2,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "Personnelle (ligne de 18 mètres)",
  components: "V, S, M (une graine de légume)",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Une zone de vent fort de 18 mètres de long sur 3 de large souffle depuis votre position dans la direction que vous avez choisie pendant toute la durée du sort. Chaque créature commençant son tour dans la zone doit réussir un jet de sauvegarde de Force, sans quoi elle est repoussée de 4,50 mètres à l'opposé de vous, dans la direction où souffle le vent.</p><br/><p>Une créature qui se trouve dans la zone doit dépenser</p><br/><p>60 centimètres de mouvement pour se rapprocher de vous de 30 centimètres.</p><br/><p>La bourrasque disperse les gaz et les vapeurs et éteint les bougies, les torches et autres flammes nues similaires dans la zone. Les flammes protégées, par une lanterne par exemple, s'agitent follement et ont 50% de chance de s'éteindre.</p><br/><p>Vous pouvez changer la direction dans laquelle souffle la bourrasque par une action bonus à chacun de vos tours jusqu'à la fin du sort.</p><br/>"
};

export const BRUME_MORTELLE : Spell = {
  type: IndexElementType.Spell,
  id: "brume-mortelle",
  name: "Brume mortelle",
  level: 5,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 10 minutes",
  description: "<p>Vous créez une sphère de 6 mètres de rayon faite d'un brouillard vert jaunâtre empoisonné. Il est centré sur un point de votre choix situé à portée. Le brouillard s'étend en contournant les coins au besoin. Il persiste pendant toute la durée du sort ou jusqu'à ce qu'un vent fort le disperse el mette un terme au sort. La visibilité est lourdement obstruée dans sa zone d'effet.</p><br/><p>Quand une créature entre dans la zone du sort pour la première fois de son tour ou qu'elle y démarre son tour, elle doit faire un jet de sauvegarde de Constitution. Elle subit 5d5</p><br/><p>ciele de poisons le rac de de Const ulion. El moit sd ete le réussit. Le brouillard affecte même les créatures qui retiennent leur souffle ou qui n'ont pas besoin de respirer.</p><br/><p>Le brouillard s'éloigne de vous sur une distance de 3 mètres au début de chacun de vos tours, rampant à la surface du sol.</p><br/><p>Comme ses vapeurs sont plus lourdes que l'air, il s'enfonce dans les replis du terrain et s'infiltre même dans les ouvertures.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou plus, les dégâts augmentent de 1d8 par niveau au-delà du 5ème.</p><br/>"
};

/* ================================================= */
/*                       CCCC                        */
/* ================================================= */

export const CAGE_DE_FORCE : Spell = {
  type: IndexElementType.Spell,
  id: "cage-de-force",
  name: "Cage de force",
  level: 7,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "30 mètres",
  components: "V. S, M (poussière de rubis d'une valeur de 1 500 po)",
  duration: "1 heure",
  description: "<p>Une prison immobile et invisible, en forme de cube et faite de force magique, se forme soudain autour d'une zone de votre choix située à portée. Ce peut être une cage ou une boite hermétique, à votre guise.</p><br/><p>Une prison en forme de cage peut faire un maximum de 6 mètres d'arête et dispose de barreaux d'un centimètre d'épaisseur placés à un centimètre d'intervalle.</p><br/><p>Une prison en forme de boîte peut faire un maximum de 3 mètres d'arête et forme une barrière pleine qui empêche la matière de passer. Elle bloque aussi le passage des sorts lancés vers l'intérieur ou l'extérieur.</p><br/><p>Quand vous lancez ce sort, chaque créature qui se trouve entièrement au sein de la zone affectée se retrouve prise au piège. Une créature qui s'y trouve seulement en partie ou qui s'avère trop grande pour y tenir est repoussée vers l'extérieur de la zone jusqu'à ce qu'elle la quitte complètement.</p><br/><p>Une créature enfermée dans la cage ne peut pas la quitter par des moyens non magiques. Si elle tente d'utiliser la téléportation ou les déplacements interplanaires pour séchapper, elle doit d'abord faire un jet de sauvegarde de Charisme. Si elle le réussit, elle peut utiliser cette magie pour fuir, sinon elle ne parvient pas à quitter la cage et l'utilisation du sort ou de l'effet est gaspillée. La cage s'étend aussi sur le plan éthéré, ce qui bloque les déplacements éthérés.</p><br/><p>La dissipation de la magie est sans effet sur ce sort.</p><br/>"
};

export const CARESSE_DU_VAMPIRE : Spell = {
  type: IndexElementType.Spell,
  id: "caresse-du-vampire",
  name: "Caresse du vampire",
  level: 3,
  school: SpellSchool.Necromancy,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Le simple contact de votre main enveloppée d'ombres peut siphonner la force vitale d'autrui pour soigner vos propres plaies. Faites une attaque de sort au corps à corps contre une créature située à une distance inférieure ou égale à votre allonge. Si vous touchez, elle subit 3d6 dégâts nécrotiques et vous récupérez un montant de points de vie égal à la moitié des dégâts infligés. Vous pouvez dépenser voire action à chacun de vos tours pour répéter cette attaque jusqu'à la fin du sort.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, les dégâts augmentent de 1d6 par niveau au-delà du 3ème.</p><br/>"
};

export const CECITE_SURDITE : Spell = {
  type: IndexElementType.Spell,
  id: "cécité-surdité",
  name: "Cécité & Surdité",
  level: 2,
  school: SpellSchool.Necromancy,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V",
  duration: "1 minute",
  description: "<p>Vous pouvez rendre un ennemi sourd ou aveugle.</p><br/><p>Choisissez une créature autre que vous qui se situe à portée et dans votre champ de vision. Elle doit faire un jet de sauvegarde de Constitution. Si elle échoue, elle est soit aveugle, soit sourde (à vous de choisir) pendant toute la durée du sort. Elle a droit à un nouveau jet de sauvegarde de Constitution à la fin de chacun de ses tours, le sort se terminant si elle le réussit.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou plus, vous pouvez viser une créature de plus par niveau au-delà du 2ème.</p><br/>"
};

export const CERCLE_DE_MORT : Spell = {
  type: IndexElementType.Spell,
  id: "cercle-de-mort",
  name: "Cercle de mort",
  level: 6,
  school: SpellSchool.Necromancy,
  castingTime: "1 action",
  range: "45 mètres",
  components: "V, S, M (la poudre d'une perle noire broyée d'une valeur minimale de 500 po)",
  duration: "Instantanée",
  description: "<p>Une sphère d'énergie négative s'étend dans un rayon de 18 mètres à partir d'un point situé à portée. Chaque créature située dans la sphère doit faire un jet de sauvegarde de Constitution. Celles qui échouent subissent 8d6 dégâts nécrotiques, les autres la moitié seulement.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou plus, les dégâts augmentent de 2d6 par niveau au-delà du 6ème.</p><br/>"
};

export const CERCLE_DE_POUVOIR : Spell = {
  type: IndexElementType.Spell,
  id: "cercle-de-pouvoir",
  name: "Cercle de pouvoir",
  level: 5,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "Personnelle (9 mètres de rayon)",
  components: "V",
  duration: "Concentration, jusqu'à 10 minutes",
  description: "<p>Une énergie divine émane de vous, qui déforme les énergies magiques pour les diffuser dans un rayon de 9 mètres autour de votre personne. La sphère est centrée sur vous et se déplace avec vous jusqu'à la fin du sort. Pendant toute la durée du sort, toutes les créatures amicales de la zone (vous y compris) ont l'avantage lors de leurs jets de sauvegarde contre les sorts et autres effets magiques. De plus, quand une créature affectée réussit son jet de sauvegarde contre un sort ou un effet magique qui inflige des dégâts réduits de moitié en cas de jet de sauvegarde réussi, elle ne subit absolument aucun dégât.</p><br/>"
};

export const CERCLE_DE_TELEPORTATION : Spell = {
  type: IndexElementType.Spell,
  id: "cercle-de-téléportation",
  name: "Cercle de téléportation",
  level: 5,
  school: SpellSchool.Conjuration,
  castingTime: "1 minute",
  range: "3 mètres",
  components: "V, M (des craies et des encres rares contenant des extraits de pierres précieuses pour une valeur de 50 po, que le sort consume)",
  duration: "1 round",
  description: "<p>Lorsque vous lancez ce sort, vous tracez un cercle de 3 mètres de diamètre au sol et y inscrivez des symboles qui relient l'endroit où vous vous trouvez actuellement à un cercle de téléportation permanent de votre choix dont vous connaissez la séquence de symboles et qui se trouve sur le même plan d'existence que vous. Un portail scintillant souvre dans le cercle que vous avez tracé et reste ouvert jusqu'à la fin de votre prochain tour. Toute créature qui franchit ce portail apparait instantanément dans un rayon de 1,50 mètre autour du cercle de destination ou dans l'espace inoccupé le plus proche si le reste est occupe.</p><br/><p>Nombre de temples majeurs, de guildes et d'autres lieux d'importance possèdent des cercles de téléportation permanents tracés quelque part dans leur enceinte. Chacun de ces cercles utilise une séquence de symboles uniques: une série de runes magiques disposées selon un motif particulier.</p><br/><p>Lorsque vous apprenez à lancer ce sort, vous apprenez la séquence associée à deux destinations situées sur le plan matériel et déterminées par le MD. Vous pouvez apprendre d'autres séquences de symboles au cours de vos aventures.</p><br/><p>Pour en mémoriser une, vous devez l'étudier pendant 1 minute.</p><br/><p>Vous pouvez créer un cercle de téléportation permanent en lançant ce sort au même endroit tous les jours pendant un an.</p><br/><p>Vous n'avez pas besoin d'utiliser le cercle pour vous téléporter quand vous lancez ce sort pour cela.</p><br/>"
};

export const CERCLE_MAGIQUE : Spell = {
  type: IndexElementType.Spell,
  id: "cercle-magique",
  name: "Cercle magique",
  level: 3,
  school: SpellSchool.Abjuration,
  castingTime: "1 minute",
  range: "3 mètres",
  components: "V. S, M (eau bénite ou poudre d'argent et de fer d'une valeur minimale de 100 po, que le sort consume)",
  duration: "1 heure",
  description: "<p>Vous créez un cylindre d'énergie magique de 3 mètres de rayon pour 6 mètres de haut, centré sur un point au sol situé à portée et dans votre champ de vision. Des runes luisantes apparaissent là où le cylindre touche le sol ou une autre surface.</p><br/><p>Choisissez l'un des types de créatures suivants: célestes, élémentaires, fées, fiélons ou morts-vivants. Le cercle affecte une créature du type choisi de la manière suivante.</p><br/><p>La créature ne peut pas entrer de son plein gré dans le cylindre par des moyens non magiques. Si elle tente d'utiliser la téléportation ou le voyage extraplanaire pour y pénétrer, elle doit auparavant réussir un jet de sauvegarde de Charisme.</p><br/><p>La créature est désavantagée lors des jets d'attaque contre les créatures se trouvant dans le cylindre.</p><br/><p>La créature ne peut ni charmer, ni effrayer, ni posséder les créatures situées dans le cylindre.</p><br/><p>Quand vous lancez ce sort, vous pouvez décider que sa magie agira à l'envers, empêchant les créatures du type choisi de quitter le cercle et protégeant contre elles les individus situés à l'extérieur du cercle.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, la durée du sort augmente d'une heure par niveau au-delà du 3ème.</p><br/>"
};

export const CHAINE_D_ECLAIRS : Spell = {
  type: IndexElementType.Spell,
  id: "chaîne-d'éclairs",
  name: "Chaîne d'éclairs",
  level: 6,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "45 mètres",
  components: "V, S, M ( un éclat d'ambre, de verre ou de cristal, trois épingles en argent et un morceau de fourrure)",
  duration: "Instantanée",
  description: "<p>Vous créez un are électrique qui file vers une cible de votre choix, située à portée dans votre champ de vision. Trois éclairs bondissent ensuite de cette cible sur un maximum de trois autres cibles qui doivent toutes se trouver dans un rayon de 9 mètres autour de la première. Une cible peut être une créature ou un objet et ne peut recevoir qu'un seul éclair.</p><br/><p>Chaque cible doit faire un jet de sauvegarde de Dextérité et subit 10d8 dégâts de foudre en cas d'échec, la moitié en cas de réussite.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou plus, un éclair de plus bondit de la première cible vers une autre pour chaque niveau au-delà du 6ème.</p><br/>"
};

export const CHAMP_ANTIMAGIE : Spell = {
  type: IndexElementType.Spell,
  id: "champ-antimagie",
  name: "Champ antimagie",
  level: 8,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "Personnelle (sphère de 3 mètres de rayon)",
  components: "V, S, M (une pincée de poudre de fer ou de limaille)",
  duration: "Concentration, jusqu'à 1 heure",
  description: "<p>Une sphère d'antimagie invisible de 3 mètres de rayon vous entoure. La zone qu'elle englobe est coupée de l'énergie magique qui imprègne le multivers. En son sein, il est impossible de lancer un sort, les créatures invoquées disparaissent et même les objets magiques deviennent ordinaires. La sphère reste centrée sur vous et se déplace avec vous jusqu'à la fin du sort.</p><br/><p>Les sorts et autres effets magiques, en dehors de ceux émanant d'un artefact ou d'une divinité, sont supprimés au sein de la sphère et ne peuvent pénétrer dans son espace.</p><br/><p>Un emplacement dépensé pour lancer un sort ainsi supprimé est tout de même consommé. L'effet ne fonctionne pas tant qu'il est supprimé, mais le temps passé sous suppression est tout de même décompté de sa durée d'efficacité.</p><br/><p>Effets visant une cible. Les sorts et autres effets magiques visant une créature ou un objet situé dans la sphère, comme projectile magique ou charme-personne, n'ont aucun effet sur cette cible.</p><br/><p>Zones de magie. L'aire d'un sort ou d'un effet magique, comme celle d'une boule de feu, ne peut pas s'étendre au sein de la sphère. Si la sphère recouvre une zone de magie existante, l'effet de cette dernière est supprimé dans la partie recouverte par la sphère. Par exemple, les flammes d'un mur de feu sont supprimées au sein de la sphère, créant un trou dans le mur si la partie recouverte est assez grande.</p><br/><p>Sorts. Tout sort ou effet magique actif sur une créature ou un objet est supprimé dès qu'elle ou il se trouve à l'intérieur et pendant tout le temps qu'elle ou il y reste.</p><br/><p>Objets magiques. Les propriétés et les pouvoirs d'un objet magique sont supprimés une fois au sein de la sphère.</p><br/><p>Par exemple, une épée longue +1 située dans la sphère fonctionne comme une épée longue ordinaire.</p><br/><p>Les propriétés et les pouvoirs d'une arme magique sont supprimés si son utilisateur la manie contre une cible située dans la sphère ou s'il se trouve dans la sphère. Si une arme ou une munition magique quitte entièrement la sphère (par exemple si vous tirez une flèche magique ou projetez une lance magique en dehors de la sphère), la suppression de magie cesse d'affecter l'objet dès qu'il quitte la sphère.</p><br/><p>Déplacement magique. La téléportation et les voyages planaires échouent systématiquement au sein de la sphère, que cette dernière serve de destination ou de point de départ à ce type de déplacement. Un portail menant en un autre lieu, sur un autre monde ou sur un autre plan d'existence se ferme temporairement tant qu'il est englobé dans la sphère, de même que l'ouverture sur un espace extradimensionnel telle celle créée par le sort corde enchantée.</p><br/><p>Créatures et objets. Une créature ou un objet invoqués ou créés par magie disparaissent temporairement si la sphère les recouvre. Ils réapparaissent instantanément des que l'espace qu'ils occupent ne se trouve plus au sein de la sphère.</p><br/><p>Dissipation de la magie. Les sorts et les effets magiques comme dissipation de la magie n'ont aucun effet sur la sphère. De même, les sphères issues de divers sorts de champ antimagie ne s'annulent pas les unes les autres.</p><br/>"
};

export const CHANGEMENT_DE_FORME : Spell = {
  type: IndexElementType.Spell,
  id: "changement-de-forme",
  name: "Changement de forme",
  level: 9,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V. S, M (un diadème de jade d'une valeur minimale de 1 500 po, que vous devez coiffer avant de lancer le sort)",
  duration: "Concentration, jusqu'à 1 heure",
  description: "<p>Vous prenez la forme d'une créature différente pendant toute la durée du sort. Vous pouvez revêtir l'apparence de n'importe quelle créature dotée d'un facteur de puissance égal ou inférieur au vôtre. En revanche, vous ne pouvez pas vous changer en artificiel ni en mort-vivant, et vous devez avoir vu au moins une fois la créature que vous imitez. Vous vous changez en un spécimen ordinaire de cette créature, sans niveau de classe et sans le trait incantation.</p><br/><p>Vos statistiques de jeu sont remplacées par celles de la créature choisie, mais vous conservez votre alignement et vos valeurs d'Intelligence, de Sagesse et de Charisme. Vous gardez également vos compétences et vos maîtrises de jet de sauvegarde, en plus de gagner celles de la créature. Si elle possède les mêmes maîtrises que vous, mais que son bonus est plus élevé, utilisez-le à la place du vôtre. Vous ne pouvez pas utiliser les actions d'antre ni les actions légendaires de la créature.</p><br/><p>Vous adoptez les dés de vie et les points de vie de votre nouvelle forme. Quand vous reprenez votre forme normale, vous revenez au nombre de points de vie qui était le vôtre avant de vous transformer. Si vous reprenez votre forme normale parce que vous êtes tombé à 0 point de vie, les dégâts en surplus sont déduits des points de vie de votre forme normale. Tant que ces dégâts ne font pas tomber les points de vie de votre forme normale à 0, vous n'êtes pas inconscient.</p><br/><p>Vous conservez les avantages de vos pouvoirs de race, de classe et autre et vous êtes toujours en mesure de les utiliser, à condition que votre nouvelle forme soit physiquement capable de le faire. Vous ne pouvez pas utiliser vos sens spéciaux (comme la vision dans le noir), à moins que votre nouvelle forme n'en soit aussi dotée. Vous pouvez parler uniquement si votre nouvelle forme en est normalement capable.</p><br/><p>Quand vous vous transformez, vous choisissez si votre équipement tombe au sol, s'il fusionne avec votre nouvelle forme ou si cette nouvelle forme le porte sur elle, auquel cas il fonctionne normalement. C'est au MD de déterminer si la nouvelle forme peut porter une pièce d'équipement. en fonction de sa taille et de sa morphologie. Votre équipement ne change pas de forme ni de taille pour s'accorder à votre nouvelle forme ; si cette dernière ne peut s'en accommoder, l'équipement ou certaines pièces d'équipement tombent à terre ou fusionnent avec votre nouvelle silhouette. L'équipement fusionné ne génère aucun effet.</p><br/><p>Pendant la durée du sort, vous pouvez utiliser votre action pour prendre une nouvelle forme répondant aux mêmes critères et aux mêmes règles que précédemment, à une exception : si votre nouvelle forme possède plus de points de vie que la précédente, votre nombre de points de vie reste tel qu'il était.</p><br/>"
};

export const CHANGEMENT_DE_PLAN : Spell = {
  type: IndexElementType.Spell,
  id: "changement-de-plan",
  name: "Changement de plan",
  level: 7,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S, M (un diapason de métal valant au moins 250 po, harmonisé avec un plan d'existence donne)",
  duration: "Instantanée",
  description: "<p>Vous et un maximum de huit autres créatures consentantes vous donnez la main pour former un cercle et êtes transportés sur un autre plan d'existence. Vous pouvez spécifier une destination en termes génériques, comme la Cité d'airain sur le plan élémentaire du Feu ou le palais de Dispater dans la deuxième strate des Neuf Enfers. Vous apparaîtrez alors à cet endroit ou à proximité. Par exemple, si vous tentez d'atteindre la Cité d'airain, vous pouvez arriver dans sa rue de l'Acier, devant la Porte des cendres ou de l'autre côté de la mer de Feu d'où vous la contemplez. C'est au MD de décider.</p><br/><p>Sinon, si vous connaissez la séquence de glyphes magiques d'un cercle de téléportation présent sur un autre plan d'existence, ce sort peut vous conduire dans ce cercle. S'il est trop étroit pour accueillir toutes les créatures qui voyagent avec vous, les créatures en trop apparaissent dans les espaces inoccupés les plus proches du cercle.</p><br/><p>Vous pouvez aussi utiliser ce sort pour bannir une créature non consentante sur un autre plan. Choisissez une créature à votre portée et faites une attaque de sort au corps à corps contre elle. Si vous touchez, elle doit faire un jet de sauvegarde de Charisme. Si elle le rate, elle est emportée en un endroit aléatoire du plan d'existence que vous nommez. Une fois là, c'est à elle de trouver un moyen de rentrer sur son plan natal.</p><br/>"
};

export const CHARME_PERSONNE : Spell = {
  type: IndexElementType.Spell,
  id: "charme-personne",
  name: "Charme-personne",
  level: 1,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S",
  duration: "1 heure",
  description: "<p>Vous tentez de charmer un humanoïde se trouvant à portée et dans votre champ de vision. Il doit faire un jet de sauvegarde de Sagesse, pour lequel il est avantagé si vous ou vos compagnons êtes actuellement en train de le combattre.</p><br/><p>S'il rate son test, vous le charmez jusqu'à la fin du sort ou jusqu'à ce que vous ou vos compagnons lui fassiez du mal.</p><br/><p>La créature charmée vous considère comme un ami. Quand le sort se termine, elle sait que vous l'avez charmée.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, vous pouvez charmer une créature de plus par niveau au-delà du 1\". Toutes les cibles doivent se trouver à 9 mètres ou moins les unes des autres lorsque vous lancez le sort.</p><br/>"
};

export const CHATIMENT_AVEUGLANT : Spell = {
  type: IndexElementType.Spell,
  id: "châtiment-aveuglant",
  name: "Châtiment aveuglant",
  level: 3,
  school: SpellSchool.Evocation,
  castingTime: "1 action bonus",
  range: "Personnelle",
  components: "V",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Lors de la prochaine attaque arméc au corps à corps qui vous permet de toucher une créature avant la fin de ce sort voit votre arme briller d'une vive lumière et inflige 3d8 dégâts radiants de plus à votre cible. De plus, la cible doit réussir un jet de sauvegarde de Constitution, sans quoi elle est aveuglée jusqu'à la fin du sort.</p><br/><p>Une créature aveuglée par ce sort a droit à un nouveau jet de sauvegarde de Constitution à la fin de chacun de ses tours. Dès qu'elle en réussit un, elle n'est plus aveuglée.</p><br/>"
};

export const CHATIMENT_CALCINANT : Spell = {
  type: IndexElementType.Spell,
  id: "châtiment-calcinant",
  name: "Châtiment calcinant",
  level: 1,
  school: SpellSchool.Evocation,
  castingTime: "1 action bonus",
  range: "Personnelle",
  components: "V",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Lors de la prochaine attaque armée au corps à corps qui vous permet de toucher une créature pendant la durée du sort, votre arme flamboie, comme chauffée à blanc, et l'attaque inflige 1d6 dégâts de feu supplémentaires. Elle embrase également la cible qui doit faire un jet de sauvegarde de Constitution au début de chacun de ses tours jusqu'à la fin du sort. Si elle échoue, elle subit 1d6 dégâts de feu, si elle réussit le sort se termine. Si la cible ou une créature située dans un rayon de 1,50 mètre autour d'elle utilise une action pour éteindre les flammes ou si un effet les étouffe (si la cible est plongée dans l'eau par exemple), le sort se termine.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, les dégâts initiaux augmentent de 1d6 par emplacement de sort au-delà du 1er.</p><br/>"
};

export const CHATIMENT_COURROUCE : Spell = {
  type: IndexElementType.Spell,
  id: "châtiment-courroucé",
  name: "Châtiment courroucé",
  level: 1,
  school: SpellSchool.Evocation,
  castingTime: "1 action bonus",
  range: "Personnelle",
  components: "V",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Lorsque vous touchez une cible avec une attaque armée au corps à corps pour la première fois pendant la durée de ce sort, votre attaque inflige 1d6 dégâts psychiques supplémentaires. De plus, si la cible est une créature, elle doit reussir un jet de sauvegarde de Sagesse, sans quoi elle est effrayée à votre vue jusqu'à ce que le sort se termine. Par une action, elle peut faire un jet de sauvegarde de Sagesse contre le DD du jet de sauvegarde de votre sort pour rassembler son courage et mettre fin au sort.</p><br/>"
};

export const CHATIMENT_DEBILITANT : Spell = {
  type: IndexElementType.Spell,
  id: "châtiment-débilitant",
  name: "Châtiment débilitant",
  level: 4,
  school: SpellSchool.Evocation,
  castingTime: "1 action bonus",
  range: "Personnelle",
  components: "V",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Lors de la prochaine attaque armée au corps à corps qui vous permet de toucher une créature pendant la durée du intivotre arme transperce le corps et lesprit de la cible et lui taire 4d6 dégâts psychiques supplementaires. La cible doit faire un jet de sauvegarde des applementaires houe, elle est</p><br/><p>désavantagée lors des jets dittaguse, de eleateristique et ne peut pas utiliser de réaction avant la fin de son prochain tour.</p><br/>"
};

export const CHATIMENT_DU_BAN : Spell = {
  type: IndexElementType.Spell,
  id: "châtiment-du-ban",
  name: "Châtiment du ban",
  level: 5,
  school: SpellSchool.Abjuration,
  castingTime: "1 action bonus",
  range: "Personnelle",
  components: "V",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>La prochaine attaque armée qui vous permet de toucher une créature avant la fin de ce sort voit votre arme crépiter d'énergie et inflige 5d10 dégâts de force à votre cible. De plus, si cette attaque réduit la cible à 50 pv ou moins, elle la bannit.</p><br/><p>Si la cible est originaire d'un plan d'existence différent de celui sur lequel vous vous trouvez, elle disparaît, renvoyée dans son plan d'origine. Si elle est originaire du plan sur lequel vous vous trouvez, elle disparaît dans un demi-plan inoffensif. Elle est neutralisée tant qu'elle s'y trouve, c'est-à-dire jusqu'à la fin du sort. À ce moment, elle réapparaît à l'espace qu'elle a quitté ou dans l'espace le plus proche si le précédent est occupé.</p><br/>"
};

export const CHATIMENT_REVELATEUR : Spell = {
  type: IndexElementType.Spell,
  id: "châtiment-révélateur",
  name: "Châtiment révélateur",
  level: 2,
  school: SpellSchool.Evocation,
  castingTime: "1 action bonus",
  range: "Personnelle",
  components: "V",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>La prochaine attaque armée qui vous permet de toucher une créature avant la fin de ce sort voit votre arme briller d'une lumière astrale et inflige 2d6 dégâts radiants de plus à votre cible, qui devient visible si elle était invisible et émet une lumière faible dans un rayon de 1,50 mètre jusqu'à la fin du sort. Elle ne peut plus devenir invisible pendant toute cette durée.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou plus, les dégâts supplémentaires augmentent de 1d6 par emplacement de sort au-delà du 2ème.</p><br/>"
};

export const CHATIMENT_TONITRUANT : Spell = {
  type: IndexElementType.Spell,
  id: "châtiment-tonitruant",
  name: "Châtiment tonitruant",
  level: 1,
  school: SpellSchool.Evocation,
  castingTime: "1 action bonus",
  range: "Personnelle",
  components: "V",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Lorsque vous touchez une cible avec une attaque armée au corps à corps pour la première fois pendant la durée de ce sort, votre arme fait retentir un fracas tonitruant audible dans un rayon de 90 mètres autour de vous, et l'attaque inflige 2d6 dégâts de tonnerre supplémentaires. De plus, si la cible est une créature, elle doit réussir un jet de sauvegarde de Force ou se trouver repoussée sur 3 mètres a l'opposé de votre position et tomber à terre.</p><br/>"
};

export const CHIEN_DE_GARDE_DE_MORDENKAINEN : Spell = {
  type: IndexElementType.Spell,
  id: "chien-de-garde-de-mordenkainen",
  name: "Chien de garde de mordenkainen",
  level: 4,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S, M (un petit sifflet en argent, un éclat d'os et une ficelle)",
  duration: "8 heures",
  description: "<p>Vous invoquez un chien de garde fantomatique dans un espace inoccupé situé à portée et dans votre champ de vision.</p><br/><p>Il reste là pendant toute la durée du sort ou jusqu'à ce que vous le renvoyiez par une action ou que vous vous éloigniez à plus de 30 mètres de lui.</p><br/><p>Le chien est invisible pour tout le monde sauf pour vous et il est impossible de le blesser. Il se met à aboyer dès qu'une créature de taille Petite ou supérieure arrive à 9 mètres de lui sans prononcer d'abord le mot de passe que vous avez choisi lors de l'incantation. Le chien perçoit les créatures invisibles et voit ce qui se passe sur le plan éthéré. Il ignore les illusions.</p><br/><p>Au début de votre tour, le chien tente de mordre une créature qui vous est hostile et située dans un rayon de 1,50 mètre autour de lui. Son bonus d'attaque est égal à votre modificateur de caractéristique d'incantation + votre bonus de maîtrise. S'il touche, il inflige 4d8 dégâts perforants.</p><br/>"
};

export const CLAIRVOYANCE : Spell = {
  type: IndexElementType.Spell,
  id: "clairvoyance",
  name: "Clairvoyance",
  level: 3,
  school: SpellSchool.Divination,
  castingTime: "10 minutes",
  range: "1,5 kilomètre",
  components: "V, S, M (un focaliseur d'une valeur minimale de 100 po, soit une corne incrustée de pierreries pour l'ouie, soit un œil de verre pour la vue)",
  duration: "Concentration, jusqu'à 10 minutes",
  description: "<p>Vous créez un organe sensoriel invisible à portée dans un endroit qui vous est familier (un endroit où vous vous êtes déjà rendu ou que vous avez déjà vu) ou dans un endroit évident qui ne vous est pas familier (comme de l'autre côté d'une porte, derrière un coin, dans un bosquet..). L'organe reste là pendant toute la durée du sort. Il est impossible de l'attaquer ou d'interagir avec.</p><br/><p>Vous choisissez la vue ou l'ouie au moment où vous lancez le sort. Vous pouvez alors utiliser le sens choisi à travers l'organe comme si vous occupiez son espace. Vous pouvez dépenser une action pour passer de la vue à l'ouie ou inversement.</p><br/><p>Une créature capable de voir l'organe sensoriel (en bénéficiant par exemple de détection de l'invisibilité ou de vision lucide) le perçoit comme un orbe lumineux intangible de la taille de votre poing.</p><br/>"
};

export const CLIGNOTEMENT : Spell = {
  type: IndexElementType.Spell,
  id: "clignotement",
  name: "Clignotement",
  level: 3,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S",
  duration: "1 minute",
  description: "<p>Pendant toute la durée du sort, vous lancez 1d20 à la fin de chacun de vos tours. Sur un 11 ou plus, vous disparaissez de votre plan d'existence actuel et apparaissez sur le plan éthéré (si vous vous trouviez déjà là, le sort échoue et l'incantation est gaspillée). Au début de votre tour suivant et quand le sort se termine alors que vous vous trouvez sur le plan éthéré, vous retournez sur un espace inoccupé de votre choix que vous pouvez voir dans un rayon de 3 mètres autour de l'espace dont vous avez disparu. S'il n'y a pas d'espace disponible dans ce rayon, vous apparaissez dans l'espace inoccupé le plus proche (choisi au hasard s'il y en a plusieurs à égale distance). Vous pouvez révoquer ce sort par une action.</p><br/><p>Tant que vous êtes sur le plan éthéré, vous voyez et entendez ce qui se passe sur le plan d'où vous venez, qui apparaît sous forme d'ombres grises, mais votre vision ne porte pas au-delà de 18 mètres. Vous pouvez seulement affecter des créatures se trouvant sur le plan éthéré et elles sont les seules à pouvoir vous affecter. Les créatures qui ne se trouvent pas sur ce plan ne peuvent ni vous percevoir, ni interagir avec vous, à moins qu'elles ne disposent d'un pouvoir le leur permettant.</p><br/>"
};

export const CLONE : Spell = {
  type: IndexElementType.Spell,
  id: "clone",
  name: "Clone",
  level: 8,
  school: SpellSchool.Necromancy,
  castingTime: "1 heure",
  range: "Contact",
  components: "V, S, M (un diamant valant au moins 1 000 po et un cube d'au moins 2,5 centimètres d'arête de chair de la créature à cloner, le sort consommant ces deux composantes, ainsi qu'un réceptacle d'une valeur minimale de 2 000 po disposant d'un couvercle susceptible d'être scellé, et assez grand pour contenir la créature à cloner, comme une grande urne, un cercueil, une cavité remplie de boue creusée dans la terre ou un récipient de cristal rempli d'eau salée)",
  duration: "Instantanée",
  description: "<p>Ce sort génère la réplique inerte d'une créature vivante, pour la protéger de la mort. Le clone se forme au sein du réceptacle employé à l'incantation et grandit jusqu'à atteindre sa taille adulte et sa maturité en 120 jours; cependant, vous pouvez décider que le clone sera une version plus jeune de la créature qu'il reproduit. Il reste inerte et indéfiniment dans le même état tant que le réceptacle reste scellé.</p><br/><p>Une fois que le clone est arrivé à maturité, si la créature originale meurt, son âme se transfère dans le clone, à condition que cette âme soit libre et désireuse de revenir à la vie. D'un point de vue physique, le clone est identique à l'original. De plus, il possède la même personnalité, les mêmes souvenirs et les mêmes capacités, mais il n'hérite pas de son équipement. Les restes physiques de la créature originale ne disparaissent pas.</p><br/><p>S'ils ne sont pas détruits, ils deviennent inertes et ne peuvent pas servir à ramener la créature à la vie puisque son âme se trouve ailleurs.</p><br/>"
};

export const COFFRE_SECRET_DE_LEOMUND : Spell = {
  type: IndexElementType.Spell,
  id: "coffre-secret-de-léomund",
  name: "Coffre secret de léomund",
  level: 4,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S, M (un superbe coffre de 90 x 60 x 60 centimètres, fait de matériaux rares d'une valeur minimale de 5 000 po et une réplique du coffre de taille Très Petite, faite des mêmes matériaux et valant au moins 50 po)",
  duration: "Instantanée",
  description: "<p>Vous dissimulez un coffre et son contenu sur le plan éthéré.</p><br/><p>Pour cela, vous devez toucher le coffre et la réplique qui sert de composante matérielle au sort. Le coffre peut contenir un maximum de 324 décimètres cubes (90 x 60 x 60 centimètres) de matière non vivante.</p><br/><p>Tant que le coffre reste sur le plan éthéré, vous pouvez utiliser une action pour toucher la réplique et le rappeler à vous. Il apparaît en un espace inoccupé au sol, situé dans un rayon de 1,50 mètre autour de vous. Vous pouvez renvoyer le coffre dans le plan éthéré en utilisant une action et en touchant le coffre et sa réplique.</p><br/><p>Au bout de 60 jours, il y a 5% de chances cumulatifs par jour que les effets du sort se terminent. Ils s'achèvent aussi si vous lancez de nouveau le sort, si la petite réplique du coffre est détruite ou si vous décidez de mettre un terme au sort par une action. Si le sort se termine alors que le grand coffre est encore sur le plan éthéré, ce coffre est irrémédiablement perdu.</p><br/>"
};

export const COLONNE_DE_FLAMME : Spell = {
  type: IndexElementType.Spell,
  id: "colonne-de-flamme",
  name: "Colonne de flamme",
  level: 5,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V. S, M (une pincée de soufre)",
  duration: "Instantanée",
  description: "<p>Une colonne verticale de feu divin rugissant surgit des cieux et s'abat à l'endroit de votre choix. Toute créature située dans un cylindre de 3 mètres de rayon et 12 mètres de haut centré sur le point à portée de votre choix doit faire un jet de sauvegarde de Dextérité. Celles qui échouent subissent 4d6 dégâts de feu et 4d6 dégâts radiants, les autres la moitié seulement.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou plus, les dégâts de feu ou les dégâts radiants (à vous de choisir) augmentent de 1d6 par niveau au-delà du 5ème.</p><br/>"
};

export const COMMUNICATION_A_DISTANCE : Spell = {
  type: IndexElementType.Spell,
  id: "communication-à-distance",
  name: "Communication à distance",
  level: 3,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "Illimitée",
  components: "V, S, M (un petit bout de fil de cuivre)",
  duration: "1 round",
  description: "<p>Vous envoyez un court message d'au maximum 25 mots à une créature qui vous est familière. Elle entend le message dans son esprit, sait que cest vous qui le lui avez envoyé si elle vous connaît, et peut vous répondre immédiatement de la même manière. Le sort permet aux créatures dotées d'une Intelligence minimale de 1 de comprendre le sens de votre message.</p><br/><p>Vous pouvez envoyer votre message à n'importe quelle distance et même sur un autre plan d'existence, mais si la cible est sur un autre plan, il y a 5% de chances que le message n'arrive pas à destination.</p><br/>"
};

export const COMMUNICATION_AVEC_LES_ANIMAUX : Spell = {
  type: IndexElementType.Spell,
  id: "communication-avec-les-animaux",
  name: "Communication avec les animaux",
  level: null,
  school: SpellSchool.Divination,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V. S",
  duration: "10 minutes",
  description: "<p>Vous devenez capable de comprendre les bêtes et de communiquer verbalement avec elles pendant toute la durée du sort. Les connaissances et le degré de conscience de nombreuses bêtes sont limités par leur intelligence réduite, mais elles peuvent au moins vous renseigner sur les environs et les monstres avoisinants, ainsi que sur ce qu'elles perçoivent aujourd'hui ou ont perçu la veille. Si le MD accepte, vous pouvez convaincre une bête de vous accorder une petite faveur.</p><br/>"
};

export const COMMUNICATION_AVEC_LES_MORTS : Spell = {
  type: IndexElementType.Spell,
  id: "communication-avec-les-morts",
  name: "Communication avec les morts",
  level: 3,
  school: SpellSchool.Necromancy,
  castingTime: "1 action",
  range: "3 mètres",
  components: "V, S, M (encens incandescent)",
  duration: "10 minutes",
  description: "<p>Vous donnez un semblant de vie et d'intelligence à un cadavre de votre choix situé à portée. Il est alors en mesure de répondre à vos questions. Le cadavre doit encore disposer d'une bouche et ne doit pas être devenu mort-vivant. Le sort échoue si le cadavre choisi a déjà été la cible de ce sort au cours des dix jours précédents.</p><br/><p>Vous pouvez poser jusqu'à cinq questions avant la fin de la durée du sort. Les connaissances du cadavre se limitent à ce qu'il savait de son vivant, y compris au niveau des langues qu'il parle. Les réponses sont souvent brèves, cryptiques ou répétitives et le cadavre n'est absolument pas obligé de vous</p><br/><p>donner une reponse sincere si vous lui etes hostile ou s'il vous reconnaît comme étant un ennemi. Ce sort ne ramène pas l'âme de la cible dans son corps, juste l'esprit qui l'animait ; le cadavre ne peut donc pas apprendre de nouvelles informations, ne comprend rien de ce qui s'est passé après sa mort et est incapable de faire des spéculations sur l'avenir.</p><br/>"
};

export const COMMUNICATION_AVEC_LES_PLANTES : Spell = {
  type: IndexElementType.Spell,
  id: "communication-avec-les-plantes",
  name: "Communication avec les plantes",
  level: 3,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "Personnelle (9 mètres de rayon)",
  components: "V, S",
  duration: "10 minutes",
  description: "<p>Vous imprégnez la végétation située dans un rayon de 9 mètres autour de vous d'une conscience et d'une mobilité limitées, ce qui permet aux plantes de communiquer avec vous et de suivre des ordres simples. Vous pouvez interroger les végétaux sur les événements qui se sont déroulés la veille dans la zone du sort et ainsi obtenir des informations sur les créatures qui sont passées, sur les conditions météorologiques et autres.</p><br/><p>Vous pouvez également transformer un terrain rendu difficile à cause de la végétation (comme des buissons ou d'épais taillis) en terrain ordinaire pendant toute la durée du sort. Ou vous pouvez transformer un terrain ordinaire où poussent des plantes en terrain difficile pendant toute la durée du sort, par exemple de manière à ce que des plantes grimpantes et des branches gênent vos poursuivants.</p><br/><p>Les plantes peuvent exécuter d'autres tâches pour vous, si le MD donne son accord. Le sort ne leur permet pas de se déraciner et de se déplacer, mais elles peuvent agiter leurs branches, leurs vrilles et leurs tiges.</p><br/><p>Si une créature végétale se trouve dans la zone, vous pouvez communiquer avec elle comme si vous partagiez un même langage, mais vous ne gagnez pas de capacité magique permettant de l'influencer.</p><br/><p>Ce sort permet de libérer une créature entravée par les plantes nées d'un sort d'enchevêtrement.</p><br/>"
};

export const COMMUNION : Spell = {
  type: IndexElementType.Spell,
  id: "communion",
  name: "Communion",
  level: null,
  school: SpellSchool.Divination,
  castingTime: "1 minute",
  range: "Personnelle",
  components: "V, S, M (de l'encens et une fiole d'eau bénite ou maudite)",
  duration: "1 minute",
  description: "<p>Vous entrez en contact avec votre divinité ou l'un de ses représentants et lui posez jusqu'à trois questions auxquelles on peut répondre par oui ou par non. Vous devez les poser avant la fin du sort et vous recevez une réponse correcte à chacune d'entre elles.</p><br/><p>Les êtres divins ne sont pas forcément omniscients, il se peut donc que vous obteniez « obscur » comme réponse, si votre question porte sur des informations sortant du champ des connaissances de votre divinité. Si une réponse d'un seul mot risque de se révéler trompeuse ou contraire aux intérêts de la divinité, le MD peut lui substituer une courte phrase.</p><br/><p>Si vous lancez ce sort à deux reprises ou plus avant un repos long, il y a 25% de chances (cumulables) que chaque incantation en sus de la première ne reçoive pas de réponse. Le MD effectue ce jet en secret.</p><br/>"
};

export const COMMUNION_AVEC_LA_NATURE : Spell = {
  type: IndexElementType.Spell,
  id: "communion-avec-la-nature",
  name: "Communion avec la nature",
  level: null,
  school: SpellSchool.Divination,
  castingTime: "1 minute",
  range: "Personnelle",
  components: "V, S",
  duration: "Instantanée",
  description: "<p>Pendant un court instant, vous ne faites plus qu'un avec la nature et obtenez des informations sur le territoire environnant. En extérieur, ce sort vous transmet des informations sur le terrain qui vous entoure dans un rayon de 4,5 kilomètres. Dans une grotte ou un autre environnement naturel souterrain, le rayon d'action est de 90 mètres. Ce sort ne fonctionne pas là où les constructions ont remplacé la nature, comme en ville ou dans un donjon.</p><br/><p>Vous obtenez instantanément des informations sur un maximum de trois éléments de votre choix portant sur l'un des sujets suivants dans votre zone.</p><br/><p>﻿﻿Le terrain et les étendues d'eau.</p><br/><p>﻿﻿Les plantes, les minéraux, les animaux et les peuples majoritaires.</p><br/><p>﻿﻿Les célestes, les fées, les fiélons, les élémentaires ou les morts-vivants dotés d'une certaine puissance.</p><br/><p>﻿﻿L'influence émanant des autres plans d'existence.</p><br/><p>﻿﻿Les constructions.</p><br/><p>Par exemple, vous pouvez apprendre où se trouve un puissant mort-vivant résidant dans la zone, où sont situés les points d'eau potable majeurs et où se trouvent les villages les plus proches.</p><br/>"
};

export const COMPREHENSION_DES_LANGUES : Spell = {
  type: IndexElementType.Spell,
  id: "compréhension-des-langues",
  name: "Compréhension des langues",
  level: null,
  school: SpellSchool.Divination,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S, M (une pincée de suie et de sel)",
  duration: "1 heure",
  description: "<p>Pendant toute la durée du sort, vous comprenez le sens littéral de tout langage parlé que vous entendez. Vous comprenez aussi les langues écrites que vous voyez, à condition de toucher la surface sur laquelle on a tracé les mots. Il vous faut 1 minute pour lire une page de texte.</p><br/><p>Ce sort ne décode pas les messages secrets compris dans un texte ni les glyphes qui n'appartiennent pas à un langage écrit, comme un symbole magique.</p><br/>"
};

export const COMPULSION : Spell = {
  type: IndexElementType.Spell,
  id: "compulsion",
  name: "Compulsion",
  level: 4,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "9 m",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Les créatures de votre choix situées à portée dans votre champ de vision et en mesure de vous entendre doivent faire un jet de sauvegarde de Sagesse. Une cible impossible à charmer réussit automatiquement son jet. Si la cible rate son jet, elle est affectée par le sort. Jusqu'à la fin de celui-ci, vous pouvez, à chaque tour, utiliser une action bonus pour désigner une direction horizontale par rapport à vous. Chaque cible affectée doit alors utiliser son déplacement au mieux pour aller dans cette direction à son prochain tour. Elle peut effectuer son action avant de se déplacer. Une fois qu'elle s'est ainsi déplacée, elle peut faire un nouveau jet de sauvegarde de Sagesse pour tenter de mettre un terme à l'effet du sort.</p><br/><p>Une cible n'est pas obligée de se rendre au sein d'une zone à l'évidence dangereuse, comme un brasier ou une fosse béante, mais elle est prête à provoquer des attaques d'opportunité pour se déplacer dans la direction indiquée.</p><br/>"
};

export const CONE_DE_FROID : Spell = {
  type: IndexElementType.Spell,
  id: "cône-de-froid",
  name: "Cône de froid",
  level: 5,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "Personnelle (cône de 18 mètres)",
  components: "V, S, M (un petit cône de cristal ou de verre)",
  duration: "Instantanée",
  description: "<p>Une bouffée d'air froid jaillit de vos mains. Toutes les créatures présentes dans un cône de 18 mètres doivent faire un jet de sauvegarde de Constitution. Celles qui le ratent subissent 8d8 dégâts de froid, les autres la moitié seulement.</p><br/><p>Une créature qui succombe suite à ce sort se transforme en statue de glace jusqu'à ce qu'elle fonde.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou plus, les dégâts augmentent de 1d8 par niveau au-delà du 5ème.</p><br/>"
};

export const CONFUSION : Spell = {
  type: IndexElementType.Spell,
  id: "confusion",
  name: "Confusion",
  level: 4,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "27 mètres",
  components: "V, S, M (trois coquilles de noix)",
  duration: "Concentration, jusqu'à 1 minute",
  description: `<p>Ce sort assaille et pervertit l'esprit des créatures, générant des hallucinations et provoquant des réactions incontrôlées. Toutes les créatures situées dans une sphère de 3 mètres de rayon autour d'un point de votre choix situé à portée doivent faire un jet de sauvegarde de Sagesse quand vous lancez le sort. Si elles échouent, le sort les affecte.</p><br/>
  <p>Une cible affectée ne peut pas accomplir de réaction et doit lancer 1d10 au début de chacun de ses tours pour déterminer comment elle se comporte pendant le tour.</p><br/>
  <table>
    <thead>
      <tr>
        <th>d10</th>
        <th>Comportement</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>La cible utilise la totalité de son mouvement pour se déplacer dans une direction aléatoire. Pour déterminer cette dernière, lancez un d8 en assignant une direction à chaque face. La cible n'effectue aucune action pour ce tour.</td>
      </tr>
      <tr>
        <td>2-6</td>
        <td>La cible ne bouge pas et n'entreprend pas la moindre action pour ce tour.</td>
      </tr>
      <tr>
        <td>7-8</td>
        <td>La cible utilise son action pour porter une attaque au corps à corps contre une créature aléatoire à portée d'allonge. S'il n'y a pas de créature à portée, elle ne fait rien du tour.</td>
      </tr>
      <tr>
        <td>9-10</td>
        <td>La cible peut agir et se déplacer normalement.</td>
      </tr>
    </tbody>
  </table><br/>
  <p>Une créature affectée peut faire un jet de sauvegarde de Sagesse à la fin de chacun de ses tours. En cas de succès, l'effet se termine pour elle.</p><br/>
  <p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 5 ou plus, le rayon de la sphère augmente de 1,50 mètre par niveau au-delà du 4ème.</p>`
}

/* ================================================= */
/*                  LISTE DE SORTS                   */
/* ================================================= */

export const SPELLS: Spell[] = [
  ENLARGE_REDUCE,
  HELP,
  ALARM,
  PLANAR_ALLY,
  ENHANCE_ABILITY,
  ANIMAL_FRIENDSHIP,
  ANIMATE_DEAD,
  ANIMATE_OBJECTS,
  CONTIGENCY,
  NONDETECTION,
  FIND_STEED,
  FIND_FAMILIAR,
  CALL_LIGHTNING,
  ELEMENTAL_WEAPON,
  MAGIC_WEAPON,
  SPIRITUAL_WEAPON,
  ARMOR_OF_AGATHYS,
  MAGE_ARMOR,
  TIME_STOP,
  ACID_SPLASH,
  PHANTASMAL_KILLER,
  GUIDANCE,
  AUGURY,
  AURA_OF_PURITY,
  AURA_OF_LIFE,
  AURA_OF_VITALITY,
  CRUSADERS_MANTLE,
  NYSTULS_MAGIC_AURA,
  HOLY_AURA,
  ANTIPATHY_SYMPATHY,
  BAGOU,
  BAIES_NOURRICIERES,
  BANISSEMENT,
  BARRIERE_DE_LAMES,
  BENEDICTION,
  BLESSURE,
  BOUCHE_MAGIQUE,
  BOUCLIER,
  BOUCLIER_DE_FEU,
  BOUCLIER_DE_LA_FOI,
  BOUFFEE_DE_POISON,
  BOULE_DE_FEU,
  BOULE_DE_FEU_A_RETARDEMENT,
  BOURRASQUE,
  BRUME_MORTELLE,
  CAGE_DE_FORCE,
  CARESSE_DU_VAMPIRE,
  CECITE_SURDITE,
  CERCLE_DE_MORT,
  CERCLE_DE_POUVOIR,
  CERCLE_DE_TELEPORTATION,
  CERCLE_MAGIQUE,
  CHAINE_D_ECLAIRS,
  CHAMP_ANTIMAGIE,
  CHANGEMENT_DE_FORME,
  CHANGEMENT_DE_PLAN,
  CHARME_PERSONNE,
  CHATIMENT_AVEUGLANT,
  CHATIMENT_CALCINANT,
  CHATIMENT_COURROUCE,
  CHATIMENT_DEBILITANT,
  CHATIMENT_DU_BAN,
  CHATIMENT_REVELATEUR,
  CHATIMENT_TONITRUANT,
  CHIEN_DE_GARDE_DE_MORDENKAINEN,
  CLAIRVOYANCE,
  CLIGNOTEMENT,
  CLONE,
  COFFRE_SECRET_DE_LEOMUND,
  COLONNE_DE_FLAMME,
  COMMUNICATION_A_DISTANCE,
  COMMUNICATION_AVEC_LES_ANIMAUX,
  COMMUNICATION_AVEC_LES_MORTS,
  COMMUNICATION_AVEC_LES_PLANTES,
  COMMUNION,
  COMMUNION_AVEC_LA_NATURE,
  COMPREHENSION_DES_LANGUES,
  COMPULSION,
  CONE_DE_FROID,
  CONFUSION
];