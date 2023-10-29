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
  name: "Chien de garde de Mordenkainen",
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
};

export const CONTACT_AVEC_LES_PLANS: Spell = {
  type: IndexElementType.Spell,
  id: "contact-avec-les-plans",
  name: "Contact avec les plans",
  level: null,
  school: SpellSchool.Divination,
  castingTime: "1 minute / Rituel",
  range: "Personnelle",
  components: "V",
  duration: "1 minute",
  description: "<p>Vous contactez mentalement un demi-dieu, l'esprit d'un sage décédé il y a longtemps, ou une autre entité mystérieuse issue d'un autre plan. Le contact avec cette intelligence extraplanaire met votre esprit à rude épreuve et risque même de le briser.</p><br/><p>Quand vous lancez ce sort, vous devez faire un jet de sauvegarde d'Intelligence DD 15. En cas d'échec, vous recevez 6d6 dégâts psychiques et vous devenez fou jusqu'à ce que vous ayez bénéficié d'un repos long. Tant que vous êtes fou, vous ne pouvez pas entreprendre la moindre action, vous ne comprenez pas ce que disent les autres créatures, vous êtes incapable de lire et vous ne bredouillez que des paroles insensées.</p><br/><p>Une tierce personne peut mettre un terme à cet effet en vous lançant le sort de restauration suprême.</p><br/><p>Si vous réussissez votre jet de sauvegarde, vous pouvez poser jusqu'à cinq questions à l'entité. Vous devez les poser avant la fin du sort. C'est le MD qui répond à chacune d'entre elles avec un mot, comme « oui », « non », « peut-être », « jamais », « hors sujet » ou « obscur » (si l'entité ignore la réponse à votre question). Si une réponse limitée à un seul mot risque de se révéler trompeuse, le MD peut la remplacer par une courte phrase.</p><br/>"
};

export  const CONTACT_GLACIAL: Spell = {
  type: IndexElementType.Spell,
  id: "contact-glacial",
  name: "Contact glacial",
  level: 0,
  school: SpellSchool.Necromancy,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S",
  duration: "1 round",
  description: "<p>Vous faites apparaître une main fantomatique et squelettique dans l'espace d'une créature située à portée.</p><br/><p>Faites un jet d'attaque de sort à distance contre la créature pour la transir de froid. Si l'attaque touche, la victime reçoit 1d8 dégâts nécrotiques et ne peut pas récupérer de point de vie avant le début de votre prochain tour. Jusque-là, la main s'accroche à elle.</p><br/><p>Si votre cible est un mort-vivant, il est en plus désavantagé lors des jets d'attaque effectués contre vous jusqu'à la fin de votre prochain tour.</p><br/><p>Les dégâts du sort augmentent de 1d8 quand vous atteignez le niveau 5 (2d8), le niveau 11 (3d8) et le niveau 17 (4d8).</p><br/>"
};

export  const CONTAGION: Spell = {
  type: IndexElementType.Spell,
  id: "contagion",
  name: "Contagion",
  level: 5,
  school: SpellSchool.Necromancy,
  castingTime: "1 action",
  range: "Contact",
  components: "V,S",
  duration: "7 jours",
  description: "<p>Votre simple contact transmet des maladies. Faites une attaque de sort au corps à corps contre une créature à portée.</p><br/><p>Si vous touchez, la cible est empoisonnée.</p><br/><p>À la fin de chaque tour de la cible empoisonnée, elle doit effectuer un jet de sauvegarde de Constitution. Si elle réussit trois de ces JS, la cible n'est plus empoisonnée et le sott prend fin. Si elle rate trois de ces JS, la cible n'est plus empoisonnée, mais vous choisissez l'une des maladies ci-après. La cible en souffre alors pour toute la durée du sort.</p><br/><p>Comme le sort déclenche une maladie naturelle chez. la cible, tout effet qui guérit une maladie ou améliore ses symptômes s y applique.</p><br/><p>Mal aveuglant. La créature est en proie à de violentes douleurs cérébrales et ses yeux deviennent d'un blanc laiteux.</p><br/><p>Elle est désavantagée lors des tests de Sagesse et des jets de sauvegarde de Sagesse et elle est aveugle.</p><br/><p>Fièvre répugnante. Une forte fièvre s'empare de la créature qui est désavantagée lors des tests de Force, des jets de sauvegarde de Force et des jets d'attaque basés sur la Force.</p><br/><p>Pourriture. La chair de la créature se met à pourrir.</p><br/><p>Elle est désavantagée lors des tests de Charisme et devient vulnérable à tous les dégâts.</p><br/><p>Bouille-crâne. La créature a soudain l'esprit enfiévré. Elle est désavantagée lors des tests d'Intelligence et des jets de sauvegarde d'Intelligence. De plus, au combat, elle se comporte comme si elle était sous l'effet d'un sort de confusion.</p><br/><p>Convulsions. La créature est agitée de tremblements. Elle est désavantagée lors des tests de Dextérité, des jets de sauvegarde de Dextérité et des jets d'attaque basés sur la Dextérité.</p><br/><p>Mort poisseuse. La créature est affligée de saignements incontrôlables. Elle est désavantagée lors des tests de Constitution et des jets de sauvegarde de Constitution. De plus, elle est étourdie jusqu'à la fin de son prochain tour à chaque fois qu'elle subit des dégâts.</p><br/>"
};

export  const CONTAMINATION: Spell = {
  type: IndexElementType.Spell,
  id: "contamination",
  name: "Contamination",
  level: 6,
  school: SpellSchool.Necromancy,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S",
  duration: "Instantanée",
  description: "<p>Vous transmettez une maladie virulente à une créature située à portée dans votre champ de vision. La cible doit faire un jet de sauvegarde de Constitution. Si elle échoue, elle subit 14d6 dégâts nécrotiques, la moitié seulement si elle réussit.</p><br/><p>Ces ne peuvent pas faire passer les points de vie de la cible au-dessous de 1. Si la cible rate son jet de sauvegarde, son total de points de vie maximum est réduit, pendant 1 heure, d'un montant égal aux dégâts nécrotiques reçus. Tout effet qui guérit les maladies ramène le maximum de points de vie de la cible à la normale sans avoir besoin d'attendre une heure.</p><br/>"
};

export  const CONTRESORT: Spell = {
  type: IndexElementType.Spell,
  id: "contresort",
  name: "Contresort",
  level: 3,
  school: SpellSchool.Abjuration,
  castingTime: "1 réaction à utiliser quand vous voyez une créature située dans un rayon de 18 mètres autour de vous lancer un sort",
  range: "18 mètres",
  components: "S",
  duration: "Instantanée",
  description: "<p>Vous tentez d'interrompre une créature en pleine incantation. Si elle essayait de lancer un sort de niveau 3 ou moins, il échoue et reste sans effet. Si le sort est de niveau 4 ou plus, faites un test de caractéristique en utilisant votre caractéristique d'incantation. Le DD est de 10 + niveau du sort. Si vous réussissez, le sort de la créature échoue et reste sans effet.</p><br/><p>Au moment de l'incantation, vous pouvez désigner plusieurs créatures de votre choix que le sort ignorera.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, le sort à interrompre est automatiquement sans effet s'il est d'un niveau égal ou inférieur à celui de l'emplacement de sort utilisé.</p><br/>"
};

export  const CONTROLE_DE_LEAU: Spell = {
  type: IndexElementType.Spell,
  id: "contrôle-de-l'eau",
  name: "Contrôle de l'eau",
  level: 4,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "90 mètres",
  components: "V, S, M (une goutte d'eau et une pincée de poussière)",
  duration: "Concentration, jusqu'à 10 minutes",
  description: "<p>Jusqu'à la fin du sort, vous contrôlez toute étendue d'eau indépendante située dans la zone de votre choix, cette dernière devant tenir dans un cube d'au maximum 30 mètres d'arête.</p><br/><p>Quand vous lancez ce sort, vous pouvez choisir l'un des effets suivants. À votre tour, vous pouvez utiliser une action pour répéter l'effet ou en appliquer un nouveau.</p><br/><p>Inondation. Vous faites monter le niveau d'une étendue d'eau isolée d'un maximum de 6 mètres. Si la zone comprend une rive, l'eau déborde et se répand sur la terre ferme.</p><br/><p>Si vous avez lancé le sort sur une grande étendue d'eau, vous créez une vague de 6 mètres de haut qui traverse la zone affectée d'un bout à l'autre pour se briser une fois arrivée à la fin de la zone. Tous les véhicules de taille Très Grande ou inférieure qui se trouvent sur le chemin de la vague sont emportés jusqu'au bout de la zone. Tous ces véhicules ont 25% de chances de chavirer.</p><br/><p>Le niveau de l'eau reste plus élevé jusqu'à la fin du sort ou jusqu'à ce que vous choisissiez un autre effet. Si l'effet d'inondation produit une vague, elle se reforme au début de votre prochain tour tant que vous gardez cet effet actif.</p><br/><p>Écarter les eaux. Vous écartez les eaux de la zone pour y créer un passage. Il traverse toute la zone, les eaux formant une muraille de chaque côté. Le passage demeure jusqu'à la fin du sort ou jusqu'à ce que vous optiez pour un effet différent. Dans ces deux cas, l'eau remplit alors progressivement le passage, au fil du round suivant, jusqu'à ce que le niveau de l'eau revienne à la normale.</p><br/><p>Modifier le cours de l'eau. Vous changez l'itinéraire de l'eau courante qui traverse la zone et l'envoyez dans la direction de votre choix, même si elle doit pour cela franchir des obstacles comme passer par-dessus un mur ou couler dans une direction improbable.</p><br/><p>L'eau suit vos instructions dans la zone affectée, mais dès qu'elle en sort, elle reprend un cours normal défini par le terrain qu'elle parcourt. L'eau continue de couler là où vous l'avez choisi jusqu'à la fin du sort ou jusqu'à ce que vous décidiez d'un autre effet.</p><br/><p>Tourbillon. Cet effet nécessite une étendue d'eau d'au moins 15 mètres carrés pour 7,50 mètres de fond et se traduit par la formation d'un tourbillon au centre de la zone. Il se présente sous forme d'un vortex de 1,50 mètre de large à sa base pour un maximum de 15 mètres de large au sommet et une hauteur de 7,50 mètres. Toutes les créatures et tous les objets qui se trouvent dans l'eau et dans un rayon de 7,50 mètres autour du tourbillon sont entraînés vers lui sur 3 mètres. Une créature peut s'éloigner à la nage si elle réussit un test de Force (Athlétisme) contre le DD du jet de sauvegarde de votre sort.</p><br/><p>Quand une créature entre dans le vortex pour la première fois de son tour ou qu'elle y commence son tour, elle doit faire un jet de sauvegarde de Force. Si elle échoue, elle reçoit 2d8 dégâts contondants et se fait emporter par le vortex jusqu'à la fin du sort. Si elle réussit son jet, elle subit seulement la moitié des dégâts et n'est pas prise dans le vortex. Une créature emportée par le vortex peut utiliser une action pour tenter de s'en éloigner comme décrit plus haut, mais elle est désavantagée lors de son test de Force (Athlétisme). À chaque tour, la première fois qu'un objet entre dans le vortex, il subit 2d8 dégâts contondants. Ces dégâts se répètent à chaque round passé dans le vortex.</p><br/>"
};

export const CONTROLE_DU_CLIMAT : Spell = {
  type: IndexElementType.Spell,
  id: "contrôle-du-climat",
  name: "Contrôle du climat",
  level: 8,
  school: SpellSchool.Transmutation,
  castingTime: "10 minutes",
  range: "Personnelle (rayon de 7.5 km)",
  components: "V, S, M (encens incandescent et un peu de bois et de terre mélangés dans de l'eau)",
  duration: "Concentration, jusqu'à 8 heures",  
  description: `<p>Vous prenez le contrôle de la météo dans un rayon de 7,5 kilomètres autour de vous pendant toute la durée du sort. Vous devez être en extérieur au moment de l'incantation<p></br>
  <p>Si vous vous rendez dans un endroit d'où vous ne voyez pas le ciel, le sort se termine prématurément.</p></br>
  <p>Au moment de l'incantation, vous changez les conditions météorologiques actuelles déterminées par le MD en fonction du climat de la saison. Vous pouvez modifier les précipitations, la température et le vent. Il faut 1d4 x 10 minutes pour que les nouvelles conditions s'installent. Vous pouvez ensuite les modifier à nouveau. Le temps retourne progressivement à la normale une fois le sort terminé.</p></br>
  <p> Quand vous modifiez les conditions météorologiques, cherchez les conditions actuelles dans les tables suivantes ; vous pouvez les décaler d'un cran vers le haut ou le bas. Quans vous modifiez le vent, vous pouvez changer sa direction.</p></br>
  <p><b>Précipitations</b></p>
  <table>
    <thead>
      <tr>
        <th>Étape</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Ciel dégagé</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Quelques nuages</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Ciel couvert ou brume au sol</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Pluie, grêle ou neige</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Pluie torrentielles, forte grêle ou blizzard</td>
      </tr>
    </tbody>
    </table></br>
    <p><b>Température</b></p>
    <table>
      <thead>
        <tr>
          <th>Étape</th>
          <th>Condition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Chaleur insoutenable</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Forte chaleur</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Tiède</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Frais</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Grand froid</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Froid polaire</td>
        </tr>
      </tbody>
    </table></br>
    <p><b>Vent</b></p>
    <table>
      <thead>
        <tr>
          <th>Étape</th>
          <th>Condition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Temps calme</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Vent modéré</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Vent fort</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Grand vent</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Tempête</td>
        </tr>
      </tbody>
    </table>`
};

export  const CONVOCATIONS_INSTANTANEES_DE_DRAWMIJ: Spell = {
  type: IndexElementType.Spell,
  id: "convocations-instantanées-de-drawmij",
  name: "Convocations instantanées de Drawmij",
  level: null,
  school: SpellSchool.Conjuration,
  castingTime: "1 minute / Rituel",
  range: "Contact",
  components: "V, S, M (un saphir d'une valeur de 1 000 po)",
  duration: "Jusqu'à dissipation",
  description: "<p>Vous touchez un objet pesant 5 kilos ou moins et dont la dimension la plus longue est de 1,80 mètre ou moins. Le sort laisse une marque invisible sur la surface de l'objet et inscrit le nom de l'objet sur le saphir que vous utilisez comme composante matérielle. Chaque fois que vous lancez ce sort, vous devez utiliser un saphir différent.</p><br/><p>Ensuite, vous pouvez utiliser une action quand vous le désirez pour prononcer le nom de l'objet et broyer le saphir.</p><br/><p>L'objet apparaît immédiatement dans votre main, en dépit des distances physiques et planaires, et le sort se termine.</p><br/><p>Si l'objet est actuellement porté ou transporté par quelqu'un d'autre, il n'arrive pas jusqu'à vous quand vous broyez le saphir, mais vous apprenez qui est la creature qui détient lobjet et vous savez à peu près où elle se trouve à ce moment-là.</p><br/><p>Dissipation de la magie ou un effet similaire appliqué sur le saphir met un terme à l'effet du sort.</p><br/>"
};

export  const CONQUILLE_ANTIVIE: Spell = {
  type: IndexElementType.Spell,
  id: "coquille-antivie",
  name: "Coquille antivie",
  level: 5,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "Personnelle (3 mètres de rayon)",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 heure",
  description: "<p>Une barrière scintillante se déploie depuis votre personne jusqu'à englober une zone d'un rayon de 3 mètres. Elle se déplace avec vous, reste centrée sur vous et repousse les créatures autres que les morts-vivants et les artificiels. Cette barrière persiste pendant toute la durée du sort.</p><br/><p>La barrière empêche les créatures affectées de la franchir ou de passer un membre au travers. Une créature affectée peut lancer des sorts ou porter des attaques à distance ou via une arme à allonge, tout cela franchissant la barrière.</p><br/><p>Si vous vous déplacez de telle manière qu'une créature affectée est contrainte de traverser la barrière, le sort se termine.</p><br/>"
};

export  const CORDE_ENCHANTEE: Spell = {
  type: IndexElementType.Spell,
  id: "corde-enchantée",
  name: "Corde enchantée",
  level: 2,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S, M (extrait de maïs en poudre et boucle de parchemin torsade)",
  duration: "1 heure",
  description: "<p>Vous touchez une longueur de corde d'au maximum</p><br/><p>18 mètres. L'une de ses extrémités s'élève alors dans les airs, jusqu'à ce que toute la corde se dresse perpendiculairement au sol. Une entrée invisible s'ouvre à l'extrémité supérieure de la corde et débouche sur un espace extradimensionnel qui persiste jusqu'à la fin du sort.</p><br/><p>On peut atteindre cet espace extradimensionnel en grimpan:</p><br/><p>jusqu'au sommet de la corde. Il peut accueillir un maximum de huit créatures de taille Moyenne ou inférieure. On peut ensuite tirer la corde dans l'espace extradimensionnel, afin que personne ne la voie en dehors de l'abri.</p><br/><p>Les attaques et les sorts ne peuvent pas traverser l'entrée de l'espace extradimensionnel, ni depuis l'intérieur ni depuis l'extérieur. En revanche, les créatures qui se trouvent à l'intérieur peuvent regarder dehors grâce à une fenêtre de 90 centimètres sur 1,50 mètre centrée sur la corde.</p><br/><p>Tout ce qui se trouve dans l'espace extradimensionnel tombe à l'extérieur quand le sort se termine.</p><br/>"
};

export  const CORDON_DE_FLECHES: Spell = {
  type: IndexElementType.Spell,
  id: "cordon-de-flèches",
  name: "Cordon de flèches",
  level: 2,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "1,50 mètre",
  components: "V, S, M (quatre flèches ou carreaux ou plus)",
  duration: "8 heures",
  description: "<p>Vous fichez quatre projectiles (flèches ou carreaux) non magiques en terre, à portée, et les imprégnez de magie afin de protéger une zone. Jusqu'à la fin du sort, dès qu'une créature autre que vous approche dans un rayon de 9 mètres autour des projectiles pour la première fois de son tour ou finit son tour à un tel endroit, une munition s'envole pour la frapper.</p><br/><p>La créature doit réussir un jet de sauvegarde de Dextérité, sans quoi elle subit 1d6 dégâts perforants. Le projectile est ensuite détruit. Le sort se termine s'il ne reste plus de projectiles.</p><br/><p>Au moment de l'incantation, vous pouvez désigner plusieurs créatures de votre choix que le sort ignorera.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou plus, vous pouvez enchanter deux projectiles de plus par niveau au-delà du 2ème.</p><br/>"
};

export  const COULEURS_DANSANTES: Spell = {
  type: IndexElementType.Spell,
  id: "couleurs-dansantes",
  name: "Couleurs dansantes",
  level: 1,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "Personnelle (cône de 4,50 mètres)",
  components: "V, S, M (une poignée de poudre ou de sable, colorée en rouge, jaune et bleu)",
  duration: "1 round",
  description: "<p>Un éventail de lumières colorées éblouissantes jaillit de votre main. Lancez 6d10. Le total représente le nombre de points de vie de créatures que le sort affecte. Les créatures situées dans un cône de 4,50 mètres, prenant votre personne comme point d'origine, sont affectées dans l'ordre croissant de leurs points de vie actuels (en ignorant les créatures inconscientes et les créatures aveugles).</p><br/><p>Chaque créature affectée, en commençant par celle qui possède actuellement le moins de points de vie, est aveuglée jusqu'à la fin de votre prochain tour. Soustrayez du total obtenu le nombre de points de vie actuel de chaque créature affectée avant de passer à la suivante, en choisissant chaque fois celle qui possède le moins de points de vie. Pour qu'une créature soit affectée, elle doit posséder un nombre de points de vie actuel inférieur ou égal au total restant.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, lancez 2d10 supplémentaires par niveau au-delà du 1er.</p><br/>"
};

export  const COUP_AU_BUT: Spell = {
  type: IndexElementType.Spell,
  id: "coup-au-but",
  name: "Coup au but",
  level: 0,
  school: SpellSchool.Divination,
  castingTime: "1 action",
  range: "9 mètres",
  components: "S",
  duration: "Concentration, jusqu'à 1 round",
  description: "<p>Vous tendez la main et pointez du doigt une cible à portée.</p><br/><p>Votre magie vous donne un bref aperçu de ses défenses.</p><br/><p>À votre prochain tour, vous êtes avantagé lors de votre premier jet d'attaque contre elle, à condition que le sort ne se soit pas terminé avant.</p><br/>"
};

export  const COURONNE_DU_DEMENT: Spell = {
  type: IndexElementType.Spell,
  id: "couronne-du-dement",
  name: "Couronne du dément",
  level: 2,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Choisissez un humanoïde situé à portée dans votre champ de vision. Il doit réussir un jet de sauvegarde de Sagesse, sans quoi vous le charmez pendant toute la durée du sort. Tant que la cible est sous votre charme, une couronne tordue en acier dentelé apparaît sur sa tête et une lueur démente brille dans son regard.</p><br/><p>À chacun de ses tours, avant de se déplacer, la cible doit utiliser son action pour porter une attaque armée contre une créature (autre qu'elle-même) que vous choisissez mentalement. Si vous ne choisissez pas de créature ou qu'il n'y en a pas à portée, la cible agit normalement.</p><br/><p>Lors de vos tours suivants, vous devez utiliser votre action pour garder le contrôle de la cible, sinon le sort se termine.</p><br/><p>La cible peut faire un jet de sauvegarde de Sagesse à la fin de chacun de ses tours. Si elle réussit, le sort se termine.</p><br/>"
};

export const CREATION: Spell = {
  type: IndexElementType.Spell,
  id: "creation",
  name: "Création",
  level: 5,
  school: SpellSchool.Illusion,
  castingTime: "1 minute",
  range: "9 mètres",
  components: "V, S, M (un petit bout de matière du type de l'objet que vous créez)",
  duration: "Spéciale",
  description: `<p>Vous tirez des bribes de matière ombreuse de la Gisombre pour créer à portée des objets inertes en matière végétale : du tissu, de la corde, du bois ou des objets similaires. Ce sort permet aussi de créer des objets minéraux comme de la pierre, du cristal ou du métal. L'objet créé ne doit pas être plus grand qu'un cube de 1,50 mètre d'arête et doit impérativement être d'une forme et d'un matériau que vous avez déjà vus.<p><br/>
  <p>La durée du sort dépend du matériau choisi pour façonner l'objet. S'il est fait de plusieurs matières, c'est la durée la plus courte qui s'applique.<p><br/>
  <table>
    <thead>
      <tr>
        <th>Matériau</th>
        <th>Durée</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Matière végétale</td>
        <td>1 jour</td>
      </tr>
      <tr>
        <td>Pierre ou cristal</td>
        <td>12 heures</td>
      </tr>
      <tr>
        <td>Métaux précieux</td>
        <td>1 heure</td>
      </tr>
      <tr>
        <td>Gemmes</td>
        <td>10 minutes</td>
      </tr>
      <tr>
        <td>Adamantium ou mithral</td>
        <td>1 minute</td>
      </tr>
    </tbody>
  </table></br>
  <p>Si vous utilisez les matériaux créés via ce sort comme composantes matérielles pour un autre sort, ce dernier échoue.</p><br/>
  <p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou plus, l'arête du cube augmente de 1,50 mètre par niveau au-delà du 5ème</p><br/>`
}

export  const CREATION_DE_MORT_VIVANT: Spell = {
  type: IndexElementType.Spell,
  id: "création-de-mort-vivant",
  name: "Création de mort-vivant",
  level: 6,
  school: SpellSchool.Necromancy,
  castingTime: "1 minute",
  range: "3 mètres",
  components: "V, S, M (un pot d'argile rempli de poussière tombale, un pot d'argile rempli d'eau saumâtre et un onyx noir d'une valeur de 150 po par cadavre)",
  duration: "Instantanée",
  description: "<p>Ce sort se lance uniquement de nuit. Choisissez jusqu'à trois cadavres de créatures humanoïdes de taille Moyenne ou Petite situés à portée. Chacun se change en goule placée sous votre contrôle. (Le MD dispose des statistiques de ces créatures).</p><br/><p>À chacun de vos tours, vous pouvez utiliser une action bonus pour contrôler mentalement les créatures que vous avez animées avec ce sort si elles se trouvent dans un rayon de 36 mètres (Si vous en contrôlez plusieurs, vous pouvez en commander une ou plusieurs à la fois, à condition de donner le même ordre à toutes). Vous pouvez décider de l'action que la créature va entreprendre et de l'endroit où elle va se rendre lors de son prochain tour, ou donner des consignes plus génériques, comme de garder une salle ou un couloir.</p><br/><p>En l'absence d'ordre de votre part, la créature se contente de se défendre contre les créatures hostiles. Dès qu'une créature a reçu un ordre, elle s'y conforme jusqu'à avoir accompli sa tâche.</p><br/><p>La créature reste sous votre contrôle pendant 24 heures, après quoi elle cesse d'obéir aux ordres que vous lui avez donnés. Pour la maintenir sous votre contrôle pendant 24 heures de plus, vous devez lui relancer ce sort avant que les 24 heures de contrôle en cours ne se soient écoulées.</p><br/><p>Cette nouvelle utilisation du sort vous permet de réaffirmer votre contrôle sur un maximum de trois créatures que vous avez déjà animées via ce sort au lieu d'en animer de nouvelles.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou plus, vous pouvez animer ou maintenir votre contrôle sur quatre goules. Quand vous le lancez à partir d'un emplacement de niveau 8, vous pouvez animer ou maintenir votre contrôle sur cinq goules ou deux blêmes ou deux nécrophages. Quand vous le lancez à partir d'un emplacement de niveau 9, vous pouvez animer ou maintenir votre contrôle sur six goules ou trois blêmes ou trois nécrophages ou deux momies.</p><br/>"
};

export  const CREATION_DE_NOURRITURE_ET_DEAU: Spell = {
  type: IndexElementType.Spell,
  id: "création-de-nourriture-et-d'eau",
  name: "Création de nourriture et d'eau",
  level: 3,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S",
  duration: "Instantanée",
  description: "<p>Vous créez 22,5 kilos de nourriture et 120 litres d'eau, soit par terre, soit dans des récipients installés à portée.</p><br/><p>Cela suffit à nourrir et abreuver un maximum de quinze humanoïdes ou de cinq montures pendant 24 heures. Les vivres sont fades mais nourrissants. Ils se gâtent si personne ne les a mangés dans les 24 heures suivant leur création. L'eau est claire et ne croupit pas.</p><br/>"
};

export  const CREATION_OU_DESTRUCTION_DEAU: Spell = {
  type: IndexElementType.Spell,
  id: "création-ou-destruction-d'eau",
  name: "Création ou destruction d'eau",
  level: 1,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S, M (une goutte d'eau pour créer de l'eau ou quelques grains de sable pour en détruire)",
  duration: "Instantanée",
  description: "<p>Vous créez ou détruisez de l'eau.</p><br/><p>Création d'eau. Vous créez jusqu'à 40 litres d'eau potable qui apparaissent à portée, dans un récipient ouvert.</p><br/><p>Sinon, l'eau peut tomber en pluie dans un cube de 9 mètres d'arête à portée, éteignant toutes les flammes à nu dans la zone.</p><br/><p>Destruction d'eau. Vous détruisez jusqu'à 40 litres d'eau situés à portée dans un récipient ouvert.</p><br/><p>Sinon, vous pouvez détruire le brouillard dans un cube de 9 mètres d'arête situé à portée.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, vous créez ou détruisez 40 litres d'eau de plus par niveau au-delà du 1* ou bien l'arête du cube affecté augmente de 1,50 mètre par niveau au-delà du 1er.</p><br/>"
};

export  const CROISSANCE_DEPINES: Spell = {
  type: IndexElementType.Spell,
  id: "croissance-d'épines",
  name: "Croissance d'épines",
  level: 2,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "45 mètres",
  components: "V, S, M (sept épines acérées ou sept brindilles taillées en pointe)",
  duration: "Concentration, jusqu'à 10 minutes",
  description: "<p>Dans une zone de 6 mètres de rayon centrée sur un point à portée, le sol se met à se déformer et donne naissance à un tapis de pointes et d'épines. La zone se mue en terrain difficile pendant toute la durée du sort. Quand une créature entre dans la zone ou s'y déplace, elle reçoit 2d4 dégâts perforants par tranche de 1,50 mètre parcouru.</p><br/><p>La transformation du sol est camouflée, de manière à ce que le terrain ait l'air naturel. Une créature dans l'incapacité de voir la zone au moment de l'incantation doit faire un test de Sagesse (Perception) contre le DD du jet de sauvegarde de votre sort.</p><br/><p>Si elle le réussit, elle remarque que le terrain est dangereux avant d'y entrer.</p><br/>"
};

export  const CROISSANGE_VEGETALE: Spell = {
  type: IndexElementType.Spell,
  id: "croissance-végétale",
  name: "Croissance végétale",
  level: 3,
  school: SpellSchool.Transmutation,
  castingTime: "1 action ou 8 heures",
  range: "45 mètres",
  components: "V, S",
  duration: "Instantanée",
  description: "<p>Ce sort décuple la vitalité des plantes d'une zone donnée.</p><br/><p>Le sort a deux modes d'utilisation, l'un apportant des avantages immédiats, l'autre sur le long terme.</p><br/><p>Si vous lancez ce sort en une action, choisissez un point à portée. Toutes les plantes ordinaires situées dans un rayon de 30 mètres autour de ce point deviennent particulièrement touffues et la végétation s'épaissit. Une créature qui se déplace dans cette zone doit dépenser 1,20 mètre de déplacement pour parcourir 30 centimètres.</p><br/><p>Vous pouvez exclure une ou plusieurs portions, de n'importe quelle taille, de la zone affectée par le sort.</p><br/><p>Si vous lancez le sort sur une période de huit heures, vous enrichissez la terre. Toute la végétation dans un rayon de 800 mètres autour d'un point de votre choix situé à portée devient luxuriante pendant un an. Elle donne deux fois plus de nourriture que la normale lors de la récolte.</p><br/>"
};

export  const CROSSE_DES_DRUIDES: Spell = {
  type: IndexElementType.Spell,
  id: "crosse-des-druides",
  name: "Crosse des druides",
  level: 0,
  school: SpellSchool.Transmutation,
  castingTime: "1 action bonus",
  range: "Contact",
  components: "V, S, M (du gui, une feuille de trèfle et un bâton ou un gourdin)",
  duration: "1 minute",
  description: "<p>La puissance du monde naturel imprègne le bois du bâton ou du gourdin que vous tenez. Pendant toute la durée du sort, vous pouvez utiliser votre caractéristique d'incantation au lieu de votre Force pour effectuer les jets d'attaque et de dégâts au corps à corps avec cette arme. Le dé de dégâts de l'arme devient un d8. L'arme devient magique si elle ne l'était pas déjà. Le sort se termine si vous le lancez de nouveau ou si vous lâchez votre arme.</p><br/>"
};

export  const DANSES_IRRESISTIBLE_DOTTO: Spell = {
  type: IndexElementType.Spell,
  id: "danse-irrésistible-d'otto",
  name: "Danse irrésistible d'otto",
  level: 6,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Choisissez une créature située à portée dans votre champ de vision. La cible entame une danse comique, se mettant à taper du pied et à caracoler sur place.</p><br/><p>Les créatures insensibles au charme sont immunisées contre ce sort.</p><br/><p>Une fois que la créature s'est mise à danser, elle doit dépenser la totalité de son déplacement pour danser sans quitter son espace. De plus, elle est désavantagée lors des jets de sauvegarde de Dextérité et des jets d'attaque. Tant que la cible est affectée par ce sort, les autres créatures sont avantagees par rapport à elle lors des jets d'attaque. Une créature en train de danser peut utiliser son action pour faire un jet de sauvegarde de Sagesse et reprendre le contrôle de son corps. Si elle réussit, le sort se termine.</p><br/>"
};

export  const DEBLOCAGE: Spell = {
  type: IndexElementType.Spell,
  id: "déblocage",
  name: "Déblocage",
  level: 2,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V",
  duration: "Instantanée",
  description: "<p>Choisissez un objet situé à portée et dans votre champ de vision. Ce peut être une porte, une boîte, un coffre, des menottes, un cadenas ou un autre objet disposant d'un système de fermeture ordinaire ou magique.</p><br/><p>Une cible fermée par une serrure ordinaire, coincée ou bloquée par une barre se déverrouille ou se débloque. Si l'objet a plusieurs serrures, le sort en ouvre une seule.</p><br/><p>Si vous visez une cible fermée par un verrou magique, ce dernier est supprimé pendant 10 minutes, au cours desquelles on peut ouvrir et fermer la cible normalement.</p><br/><p>Quand vous lancez le sort, un cliquetis émane de l'objet et retentit si fort qu'on l'entend dans un rayon de 90 mètres.</p><br/>"
};

export  const DECHARGE_OCCULTE: Spell = {
  type: IndexElementType.Spell,
  id: "décharge-occulte",
  name: "Décharge occulte",
  level: 0,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V,S",
  duration: "Instantanée",
  description: "<p>Un éclair d'énergie crépitante file vers une créature à portée.</p><br/><p>Faites un jet d'attaque de sort à distance contre la cible. Si vous réussissez, elle subit 1d10 dégâts de force.</p><br/><p>Le sort crée des rayons supplémentaires quand vous atteignez certains niveaux: il lance deux rayons au niveau 5, trois au niveau 11 et quatre au niveau 17. Vous pouvez diriger tous les rayons sur une même cible ou les répartir entre plusieurs. Faites un jet d'attaque distinct pour chaque rayon.</p><br/>"
};

export  const DEDALE: Spell = {
  type: IndexElementType.Spell,
  id: "dédale",
  name: "Dédale",
  level: 8,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 10 minutes",
  description: "<p>Vous bannissez une créature située à portée dans votre champ de vision dans un demi-plan labyrinthique. La cible y reste pendant toute la durée du sort ou jusqu'à ce qu'elle s'échappe du dédale.</p><br/><p>Elle peut utiliser une action pour tenter de s'évader.</p><br/><p>Pour cela, elle effectue un test d'Intelligence DD 20.</p><br/><p>Si elle le réussit, elle s'échappe et le sort se termine (les minotaures et les démons goristros réussissent automatiquement).</p><br/><p>Quand le sort se termine, la cible réapparaît à l'emplacement qu'elle a quitté ou, s'il est occupé, dans l'emplacement libre le plus proche.</p><br/>"
};

export  const DEGUISEMENT: Spell = {
  type: IndexElementType.Spell,
  id: "déguisement",
  name: "Déguisement",
  level: 1,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S",
  duration: "1 heure",
  description: "<p>Vous faites en sorte que votre personne (y compris vos vêtements, votre armure, vos armes et les autres objets en votre possession) prenne une apparence différente jusqu'à la fin du sort ou jusqu'à ce que vous utilisiez une action pour y mettre un terme. Vous pouvez passer pour une personne de trente centimètres de plus ou de moins, sembler gros, maigre ou entre les deux. Vous ne pouvez pas changer le type de votre corps, vous devez choisir une forme possédant la même conformation que vous au niveau des membres. En dehors de cela, les détails de l'illusion sont laissés à votre imagination.</p><br/><p>Les changements qu'apporte le sort ne résistent pas à un examen physique. Par exemple, si vous l'utilisez pour ajouter un chapeau à votre tenue, les objets passent au travers et toute personne qui essaie de le toucher ne sentira que de l'air, ou des cheveux et un crâne. Si vous utilisez le sort pour paraître plus mince qu'en réalité, la main de quelqu'un qui tente de vous toucher se heurtera à vous alors que, visuellement, elle semble encore dans le vide.</p><br/><p>Pour percer votre déguisement à jour, une créature peut dépenser une action pour vous examiner. Elle doit alors réussir un test d'Intelligence (Investigation) contre le DD du jet de sauvegarde du sort.</p><br/>"
};

export  const DELIVRANCE_DES_MALEDICTIONS: Spell = {
  type: IndexElementType.Spell,
  id: "délivrance-des-malédictions",
  name: "Délivrance des malédictions",
  level: 3,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S",
  duration: "Instantanée",
  description: "<p>À votre contact, toutes les malédictions qui affectent une créature ou un objet disparaissent. Si l'objet est un objet magique maudit, la malédiction persiste, mais le sort rompt l'harmonisation entre l'objet et son détenteur, ce qui permet à ce dernier de l'ôter ou de s'en débarrasser.</p><br/>"
};

export  const DEMI_PLAN: Spell = {
  type: IndexElementType.Spell,
  id: "demi-plan",
  name: "Demi-plan",
  level: 8,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "18 mètres",
  components: "S",
  duration: "1 heure",
  description: "<p>Vous créez une porte floue sur une surface plate et solide située à portée dans votre champ de vision. Elle est assez large pour laisser passer sans mal des créatures de taille Moyenne.</p><br/><p>Quand quelqu'un ouvre la porte, elle donne sur un demi-plan ressemblant à une pièce vide de 9 mètres de côté (dans toutes les dimensions) faite de bois ou de pierre. La porte disparaît quand le sort se termine et les créatures et les objets encore dans le demi-plan y restent piégés, car elle sefface aussi de leur côté.</p><br/><p>Vous pouvez créer un nouveau demi-plan pour chaque incantation du sort ou relier la porte à un demi-plan que vous avez précédemment créé via ce sort. De plus, si vous connaissez la nature et le contenu d'un demi-plan qu'une autre créature a créé grâce à ce sort, vous pouvez lui relier votre propre porte.</p><br/>"
};

export  const DESINTEGRATION: Spell = {
  type: IndexElementType.Spell,
  id: "désintégration",
  name: "Désintégration",
  level: 6,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S, M (de la magnétite et une pincee de poussière)",
  duration: "Instantanée",
  description: "<p>Un mince rayon de lumière verte jaillit de votre doigt pointé vers une cible située à portée dans votre champ de vision.</p><br/><p>La cible peut être une créature, un objet ou une création de force magique, comme un mur issu d'un mur de force.</p><br/><p>Une créature visée par ce sort doit faire un jet de sauvegarde de Dextérité. Si elle le rate, elle subit 10d6+40 dégâts de force.</p><br/><p>La cible est désintégrée si ces dégâts la laissent à 0 point de vie.</p><br/><p>Une créature désintégrée est réduite à l'état de fine poussière grise, tout comme tous les objets qu'elle porte et transporte, à l'exception des objets magiques. Pour ressusciter une créature ainsi désintégrée, il faut impérativement recourir à une résurrection suprême ou un souhait.</p><br/><p>Ce sort désintègre automatiquement les objets non magiques de taille Grande ou inférieure et les créations de force magique.</p><br/><p>Si la cible est un objet de Très Grande taille ou plus, le sort désintègre un cube de 3 mètres d'arête au sein de l'objet.</p><br/><p>Ce sort reste sans effet sur les objets magiques.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou plus, les dégâts augmentent de 3d6 par niveau au-delà du 6.</p><br/>"
};

export  const DETECTION_DE_LA_MAGIE: Spell = {
  type: IndexElementType.Spell,
  id: "détection-de-la-magie",
  name: "Détection de la magie",
  level: null,
  school: SpellSchool.Divination,
  castingTime: "1 action / Rituel",
  range: "Personnelle",
  components: "V, S",
  duration: "Concentration, jusqu'à 10 minutes",
  description: "<p>Pendant toute la durée du sort, vous percevez la présence de magie dans un rayon de 9 mètres. Si vous percevez ainsi une magie, vous pouvez dépenser votre action pour discerner une faible aura autour d'une créature ou d'un objet visible dans la zone et imprégné de magie. Vous découvrez aussi à quelle école appartient cette magie, le cas échéant.</p><br/><p>Le sort ignore la plupart des obstacles, mais il ne peut pas franchir 30 centimètres de pierre, 2,5 centimètres de metal ordinaire, une mince feuille de plomb, ni 1 mètre de bois ou de terre.</p><br/>"
};

export  const DETECTION_DE_LINVISIBILITE: Spell = {
  type: IndexElementType.Spell,
  id: "détection-de-l'invisibilité",
  name: "Détection de l'invisibilité",
  level: 2,
  school: SpellSchool.Divination,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S, M (une pincée de tale et un saupoudrage de poudre d'argent)",
  duration: "1 heure",
  description: "<p>Pendant toute la durée du sort, vous voyez les créatures et les objets invisibles comme s'ils étaient bien visibles et vous pouvez aussi observer le plan éthéré. Les créatures et les objets éthérés vous apparaissent comme des silhouettes translucides et fantomatiques.</p><br/>"
};

export  const DETECTION_DES_PENSEES: Spell = {
  type: IndexElementType.Spell,
  id: "détection-des-pensées",
  name: "Détection des pensées",
  level: 2,
  school: SpellSchool.Divination,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S, M (une pièce de cuivre)",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Pendant toute la durée du sort, vous parvenez à lire les pensées de certaines créatures. Quand vous lancez ce sort, puis en tant qu'action à votre tour jusquà la fin du sort, vous pouvez focaliser vos pensées sur une créature située dans votre champ de vision et dans un rayon de 9 mètres. Si elle dispose d'une Intelligence de 3 ou moins ou ne parle aucune langue, elle n'est pas affectée.</p><br/><p>Au départ, vous découvrez les pensées de surface de la créature, c'est-à-dire ce qu'elle a à l'esprit à ce moment-là.</p><br/><p>Par une action, vous pouvez tourner votre attention vers les pensées d'une autre créature ou tenter de vous enfoncer plus profondément dans l'esprit de celle que vous sondez actuellement. Dans ce cas, cette créature doit faire un jet de sauvegarde de Sagesse. Si elle échoue, vous avez un aperçu de son mode de raisonnement (le cas échéant), de son état émotionnel ou de ce qui occupe une place importante dans son esprit (par exemple quelque chose qui l'inquiète fortement, qu'elle aime, qu'elle détest..). Si elle réussit, le sort se termine.</p><br/><p>Dans les deux cas, la cible sait que vous sondez son esprit et, à moins que vous ne tourniez votre attention vers une autre créature, votre cible peut utiliser son action à son tour pour faire un test d'Intelligence opposé au vôtre. Si elle réussit, le sort se termine.</p><br/><p>Les questions directement posées à l'oral à une cible orientent naturellement le cours de ses pensées, ce sort est donc particulièrement utile lors d'un interrogatoire.</p><br/><p>Vous pouvez aussi utiliser ce sort pour détecter la présence de créatures intelligentes que vous ne voyez pas. Vous pouvez chercher les pensées qui se trouvent dans un rayon de 9 mètres autour de vous au moment où vous lancez ce sort ou bien par une action tandis que le sort est actif. Le sort peut franchir des obstacles, mais il est arrêté par soixante centimètres de roche, 2,5 centimètres de métal autre que le plomb ou une mince feuille de plomb. Vous ne pouvez pas repérer les créatures dotées d'une Intelligence de 3 ou moins, ni celles qui ne parlent aucune langue.</p><br/><p>Une fois que vous avez ainsi détecté la présence d'une créature, vous pouvez lire ses pensées pendant le reste de la durée du sort, comme expliqué plus haut, même si vous ne la voyez pas, mais elle doit tout de même se trouver à portée.</p><br/>"
};

export  const DETECTION_DES_PIEGES: Spell = {
  type: IndexElementType.Spell,
  id: "détection-des-pièges",
  name: "Détection des pièges",
  level: 2,
  school: SpellSchool.Divination,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S",
  duration: "Instantanée",
  description: "<p>Vous percevez la présence de tout piège se trouvant à portée et dans votre champ de vision. Concernant ce sort, le terme de piège désigne toute chose qui inflige soudainement ou de façon inattendue un effet considéré comme néfaste ou indésirable et que son créateur a conçue dans ce but. Ainsi, le sort prévient si une zone est affectée par une alarme, un glyphe de garde ou une fosse piégée mécanique, mais il ne révèle pas une faiblesse naturelle dans un plancher, un plafond instable ou une doline cachée.</p><br/><p>Le sort indique simplement qu'il y a un piège; il ne précise pas où, mais vous donne une idée générale de la nature du danger qu'il représente.</p><br/>"
};

export  const DETECTION_DU_MAL_ET_DU_BIEN: Spell = {
  type: IndexElementType.Spell,
  id: "detection-du-mal-et-du-bien",
  name: "Detection du mal et du bien",
  level: 1,
  school: SpellSchool.Divination,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S",
  duration: "Concentration, jusqu'à 10 minutes",
  description: "<p>Pendant toute la durée du sort, vous savez s'il y a une aberration, un céleste, un élémentaire, une fée, un fiélon ou un mort-vivant dans un rayon de 9 mètres autour de vous et vous savez précisément où il se trouve. De même, vous savez. si un lieu ou un objet situé dans un rayon de 9 mètres a été consacré ou profané.</p><br/><p>Le sort ignore la plupart des obstacles, mais il ne peut pas franchir 30 centimètres de pierre, 2,5 centimètres de métal ordinaire, une mince feuille de plomb, ni 1 mètre de bois ou de terre.</p><br/>"
};

export  const DETECTION_DU_POISON_ET_DES_MALADIES: Spell = {
  type: IndexElementType.Spell,
  id: "détection-du-poison-et-des-maladies",
  name: "Détection du poison et des maladies",
  level: null,
  school: SpellSchool.Divination,
  castingTime: "1 action / Rituel",
  range: "Personnelle",
  components: "V, S, M (un brin d'if)",
  duration: "Concentration, jusqu'à 10 minutes",
  description: "<p>Pendant toute la durée du sort, vous percevez la présence de poisons, de créatures venimeuses et de maladies dans un rayon de 9 mètres autour de vous. Vous déterminez également leur position et identifiez à chaque fois le type de poison, de creature ou de maladie concerné.</p><br/><p>Le sort ignore la plupart des obstacles, mais il ne peut pas franchir 30 centimètres de pierre, 2,5 centimètres de métal ordinaire, une mince feuille de plomb, ni 1 mètre de bois ou de terre.</p><br/>"
};

export  const DISCOURS_CAPTIVANT: Spell = {
  type: IndexElementType.Spell,
  id: "discours-captivant",
  name: "Discours captivant",
  level: 2,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V,S",
  duration: "1 minute",
  description: "<p>Vous entonnez une suite de paroles envoûtantes qui obligent les créatures de votre choix qui vous entendent et sont situées à portée et dans votre champ de vision à faire un jet de sauvegarde de Sagesse. Une créature qui ne peut pas être charmée réussit automatiquement ce jet de sauvegarde.</p><br/><p>Si vous ou vos compagnons vous battez contre une de ces créatures, elle est avantagée lors du jet de sauvegarde. Si la créature rate son jet, elle est désavantagée lors des tests de Sagesse (Perception) destinés à percevoir une créature autre que vous jusqu'à ce que le sort se termine ou jusqu'à ce qu'elle ne puisse plus vous entendre. Le sort se termine si vous êtes neutralisé ou dans l'incapacité de parler.</p><br/>"
};

export  const DISQUE_FLOTTANT_DE_TENSER: Spell = {
  type: IndexElementType.Spell,
  id: "disque-flottant-de-tenser",
  name: "Disque flottant de tenser",
  level: null,
  school: SpellSchool.Conjuration,
  castingTime: "1 action / Rituel",
  range: "9 mètres",
  components: "V, S, M (une goutte de mercure)",
  duration: "1 heure",
  description: "<p>Ce sort crée un plan de force circulaire horizontal d'un mètre de diamètre pour 2,5 centimètres d'épaisseur. 11 fotte à un mètre du sol dans un espace inoccupé de votre choix situé à portée et dans votre champ de vision. Le disque persiste pendant toute la durée du sort et peut accueillir jusqu'à 250 kilos. Si on pose plus de poids dessus, le sort se termine et tout ce qui se trouvait sur le disque tombe à terre.</p><br/><p>Le disque reste immobile tant que vous vous tenez dans un rayon de 6 mètres. Si vous vous en éloignez plus que cela, il vous suit de manière à rester dans les 6 mètres autour de vous. Il peut se déplacer sur un terrain irrégulier, monter ou descendre des escaliers, des pentes, etc. Mais il ne peut pas franchir une différence de niveau de trois mètres ou plus.</p><br/><p>Par exemple, il ne peut pas passer au-dessus d'une fosse de 3 mètres de profondeur ni la quitter s'il a été formé au fond.</p><br/><p>Si vous vous éloignez à plus de 30 mètres du disque (typiquement parce qu'il ne peut pas contourner un obstacle pour vous suivre), le sort se termine.</p><br/>"
};

export  const DISSIMULATION_SUPREME: Spell = {
  type: IndexElementType.Spell,
  id: "dissimulation-suprême",
  name: "Dissimulation suprême",
  level: 7,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S, M (une poudre de diamant, d'émeraude, de rubis et de saphir d'une valeur minimum de 5 000 po, que le sort consume)",
  duration: "Jusqu'à dissipation",
  description: "<p>Grâce à ce sort, vous pouvez dissimuler une créature consentante ou un objet qui sera invisible à tout moyen de détection pendant toute la durée du sort. Quand vous lancez le sort et touchez la cible, elle devient invisible et ne peut plus être la cible de sorts de divination. De plus, les organes sensoriels de scrutation issus d'un sort de divination ne la perçoivent plus.</p><br/><p>Si la cible est une créature, elle entre en état d'animation suspendue. Le temps ne s'écoule plus pour elle et elle ne vieillit plus.</p><br/><p>Vous pouvez décider d'une condition qui mettra un terme prématuré au sort. Ce peut être ce que vous voulez, mais ce doit être visible ou se produire dans un rayon de 1,5 kilomètre autour de la cible. Par exemple, « au bout de</p><br/><p>1 000 ans » ou « quand la tarasque se réveillera ». Ce sort se termine également si la cible subit le moindre dégât.</p><br/>"
};

export  const DISSIPATION_DE_LA_MAGIE: Spell = {
  type: IndexElementType.Spell,
  id: "dissipation-de-la-magie",
  name: "Dissipation de la magie",
  level: 3,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S",
  duration: "Instantanée",
  description: "<p>Choisissez une créature, un objet ou un effet magique à portée.</p><br/><p>Tout sort de niveau 3 ou inférieur qui l'affecte se termine.</p><br/><p>Si la cible est affectée par un sort de niveau 4 ou plus, faites un test de caractéristique en utilisant votre caractéristique d'incantation. Le DD est de 10 + niveau du sort. Ce dernier se termine si vous réussissez votre test.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, vous mettez automatiquement un terme à un sort affectant la cible quand le niveau de ce sort est égal ou inférieur au niveau de l'emplacement de sort que vous utilisez.</p><br/>"
};

export  const DISSIPATION_DU_BIEN_ET_DU_MAL: Spell = {
  type: IndexElementType.Spell,
  id: "dissipation-du-mal-et-du-bien",
  name: "Dissipation du mal et du bien",
  level: 5,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S, M (eau bénite ou poudre d'argent et de fer)",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Une énergie scintillante vous entoure et vous protège contre les fées, les morts-vivants et les créatures originaires d'au-delà du plan matériel. Pendant toute la durée du sort, les célestes, les élémentaires, les fées, les fiélons et les morts-vivants sont désavantagés lors de leurs jets d'attaque contre vous.</p><br/><p>Vous pouvez terminer le sort plus tôt en utilisant l'une des fonctions spéciales suivantes.</p><br/><p>Annulation d'enchantement. Vous utilisez votre action pour toucher une créature à votre portée qui se trouve charmée, effrayée ou possédée par un céleste, un élémentaire, une fée, un fiélon ou un mort-vivant. Cette créature n'est alors plus charmée, effrayée ou possédée par ces créatures.</p><br/><p>Renvoi. Vous utilisez votre action pour faire une attaque de sort au corps à corps contre un céleste, un élémentaire, une fée, un fiélon ou un mort-vivant situé à une distance inférieure ou égale à votre allonge. Si vous touchez la créature, vous tentez de la renvoyer sur son plan natal. Elle doit réussir un jet de sauvegarde de Charisme ou retourner sur son plan natal (si elle ne sy trouve pas déja). Si un mort-vivant ne se trouve pas sur son plan natal, il est renvoyé en Gisombre tandis qu'une fée sera expulsée en Féerie.</p><br/>"
};

export  const DIVINATION: Spell = {
  type: IndexElementType.Spell,
  id: "divination",
  name: "Divination",
  level: null,
  school: SpellSchool.Divination,
  castingTime: "1 action / Rituel",
  range: "Personnelle",
  components: "V, S, M (de l'encens et une offrande sacrificielle adaptée à votre religion, l'ensemble valant au moins 25 po, et que le sort consume)",
  duration: "Instantanée",
  description: "<p>Grâce à votre magie et à une offrande, vous entrez en contact avec un dieu ou l'un de ses serviteurs. Vous lui posez une unique question à propos d'un objectif, d'un événement ou d'une activité qui doit se dérouler dans les sept jours à venir. Le MD vous donne une réponse sincère, pouvant être une courte phrase, des vers cryptiques ou un présage.</p><br/><p>Le sort ne tient pas compte d'une éventuelle modification des circonstances susceptible de bouleverser l'issue des événements, comme l'incantation de sorts supplémentaires ou la perte ou l'arrivée d'un compagnon.</p><br/><p>Si vous lancez ce sort à deux reprises ou plus avant un repos long, il y a 25% de chances par incantation en sus de la première que vous obteniez une prémonition aléatoire au lieu d'une prémonition fiable. C'est au MD de faire ce jet en secret.</p><br/>"
};

export  const DOIGT_DE_MORT: Spell = {
  type: IndexElementType.Spell,
  id: "doigt-de-mort",
  name: "Doigt de mort",
  level: 7,
  school: SpellSchool.Necromancy,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S",
  duration: "Instantanée",
  description: "<p>Vous envoyez de l'énergie négative dans le corps d'une créature située à portée dans votre champ de vision, ce qui lui inflige des douleurs déchirantes. La cible doit faire un jet de sauvegarde de Constitution. Si elle échoue, elle subit 7d8+30 dégâts nécrotiques, la moitié seulement si elle réussit.</p><br/><p>Si ce sort achève un humanoïde, ce dernier se relève au début de votre prochain tour sous forme de zombi à jamais sous votre contrôle. Il suit vos ordres verbaux au mieux de ses capacités.</p><br/>"
};

export  const DOMINATION_DANIMAL: Spell = {
  type: IndexElementType.Spell,
  id: "domination-d'animal",
  name: "Domination d'animal",
  level: 4,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V,S",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Vous tentez d'envoûter une bête située à portée dans votre champ de vision. Elle doit réussir un jet de sauvegarde de Sagesse, sans quoi vous la charmez pendant toute la durée du sort. Elle est avantagée lors du jet de sauvegarde si vous ou des créatures amicales envers vous êtes en train de la combattre.</p><br/><p>Tant que la bête est charmée, vous entretenez un lien télépathique avec elle, qui persiste tant que vous vous trouvez sur le même plan d'existence. Vous pouvez utiliser ce lien télépathique pour donner des ordres à cette créature tant que vous êtes conscient (ce qui ne vous demande pas d'action). Elle fait de son mieux pour vous obéir. Vous pouvez lui donner un ordre simple et générique, comme « attaque cette créature », « cours jusque là-bas » ou « va chercher cet objet ». Si elle ne reçoit pas de nouvelles instructions de votre part une fois l'ordre exécuté, elle se contente de se défendre et de se préserver au mieux.</p><br/><p>Vous pouvez utiliser votre action pour prendre le contrôle total de votre cible et la diriger de façon précise. Jusqu'à la fin de votre prochain tour, elle exécute seulement les actions que vous choisissez et ne fait rien que vous ne lui ayez autorisé.</p><br/><p>Pendant cette période, vous pouvez aussi lui faire exécuter une réaction, mais pour cela, vous devez également dépenser votre propre réaction.</p><br/><p>Chaque fois que la cible subit des dégâts, elle a droit à un nouveau jet de sauvegarde de Sagesse contre le sort. Si elle le réussit, le sort prend fin.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 5, la durée devient « concentration, jusqu'à 10 minutes ». Si vous lancez ce sort en utilisant un emplacement de niveau 6, la durée devient « concentration, jusqu'à 1 heure ». Si vous lancez ce sort en utilisant un emplacement de niveau 7, la durée devient « concentration, jusqu'à 8 heures».</p><br/>"
};

export  const DOMINATION_DE_MONSTRE: Spell = {
  type: IndexElementType.Spell,
  id: "domination-de-monstre",
  name: "Domination de monstre",
  level: 8,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 heure",
  description: "<p>Vous tentez d'envoûter une créature située à portée dans votre champ de vision. Elle doit réussir un jet de sauvegarde de Sagesse, sans quoi vous la charmez pendant toute la durée du sort. Elle est avantagée lors du jet de sauvegarde si vous ou des créatures amicales envers vous êtes en train de la combattre.</p><br/><p>Tant que la créature est charmée, vous entretenez un lien télépathique avec elle qui persiste tant que vous vous trouvez sur le même plan d'existence. Vous pouvez utiliser ce lien télépathique pour donner des ordres à cette créature tant que vous êtes conscient (ce qui ne vous demande pas d'action). Elle fait de son mieux pour vous obéir. Vous pouvez lui donner un ordre simple et générique, comme « attaque cette créature », « cours jusque là-bas » ou « va chercher cet objet ». Si elle ne reçoit pas de nouvelles instructions de votre part une fois l'ordre exécuté, elle se contente de se défendre et de se préserver au mieux.</p><br/><p>Vous pouvez utiliser votre action pour prendre le contrôle total de votre cible et la diriger de façon précise. Jusqu'à la fin de votre prochain tour, elle exécute seulement les actions que vous choisissez et ne fait rien que vous ne lui ayez autorisé</p><br/><p>Pendant cette période, vous pouvez aussi lui faire exécuter une réaction, mais pour cela, vous devez également dépenser votre propre réaction.</p><br/><p>Chaque fois que la cible subit des dégâts, elle a droit à un nouveau jet de sauvegarde de Sagesse contre le sort. Si elle le réussit, le sort prend fin.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 9, la durée devient « concentration, jusqu'à 8 heures ».</p><br/>"
};

export  const DOMINATION_DE_PERSONNE: Spell = {
  type: IndexElementType.Spell,
  id: "domination-de-personne",
  name: "Domination de personne",
  level: 5,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Vous tentez d'envoûter un humanoïde situé à portée et dans votre champ de vision. Il doit réussir un jet de sauvegarde de Sagesse, sans quoi vous le charmez pendant toute la durée du sort. Il est avantagé lors du jet de sauvegarde si vous ou des créatures amicales envers vous êtes en train de le combattre.</p><br/><p>Tant que l'humanoïde est charmé, vous entretenez un lien télépathique avec lui qui persiste tant que vous vous trouvez sur le même plan d'existence. Vous pouvez utiliser ce lien télépathique pour donner des ordres à cette créature tant que vous êtes conscient (ce qui ne vous demande pas d'action). Elle fait de son mieux pour vous obéir. Vous pouvez lui donner un ordre simple et générique, comme « attaque cette créature », « cours jusque là-bas » ou « va chercher cet objet ». Si elle ne reçoit pas de nouvelles instructions de votre part une fois l'ordre exécuté, elle se contente de se défendre et de se préserver au mieux.</p><br/><p>Vous pouvez utiliser votre action pour prendre le contrôle total de votre cible et la diriger de façon précise. Jusqu'à la fin de votre prochain tour, elle exécute seulement les actions que vous choisissez et ne fait rien que vous ne lui ayez autorisé.</p><br/><p>Pendant cette période, vous pouvez aussi lui faire exécuter une reaction, mais pour cela, vous devez également dépenser votre propre réaction.</p><br/><p>Chaque fois que la cible subit des dégâts, elle a droit à un nouveau jet de sauvegarde de Sagesse contre le sort. Si elle le réussit, le sort prend fin.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 6, la durée devient « concentration, jusqu'à 10 minutes ». Si vous lancez ce sort en utilisant un emplacement de niveau 7, la durée devient « concentration, jusqu'à 1 heure ». Si vous lancez ce sort en utilisant un emplacement de niveau 8 ou plus, la durée devient « concentration, jusqu'à 8 heures ».</p><br/>"
};

export  const DON_DES_LANGUES: Spell = {
  type: IndexElementType.Spell,
  id: "don-des-langues",
  name: "Don des langues",
  level: 3,
  school: SpellSchool.Divination,
  castingTime: "1 action",
  range: "Contact",
  components: "V, M (un modèle réduit de ziggourat en argile)",
  duration: "1 heure",
  description: "<p>Ce sort permet à la créature que vous touchez de comprendre toutes les langues parlées qu'elle entend. De plus, quand elle parle, toute créature qui maîtrise au moins une langue et l'entend comprend ce qu'elle dit.</p><br/>"
};

export  const DOUBLE_ILLUSOIRE: Spell = {
  type: IndexElementType.Spell,
  id: "double-illusoire",
  name: "Double illusoire",
  level: 5,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "Personnelle",
  components: "S",
  duration: "Concentration, jusqu'à 1 heure",
  description: "<p>Vous devenez invisible à l'instant même où un double illusoire de votre personne apparaît là où vous vous trouvez. Ce double persiste pendant toute la durée du sort, mais votre invisibilité se termine dès que vous lancez un sort ou attaquez.</p><br/><p>Vous pouvez utiliser votre action pour déplacer votre double d'un maximum de deux fois votre vitesse et le faire bouger, parler et se comporter comme bon vous semble.</p><br/><p>Vous pouvez voir par les yeux et entendre par les oreilles de votre double comme si vous vous trouviez à son emplacement. À chacun de vos tours, vous pouvez utiliser une action bonus pour passer d'une perception via ses sens à une perception via les vôtres ou inversement. Tant que vous utilisez les sens de votre double, vous êtes sourd et aveugle à ce qui se passe directement autour de vous.</p><br/>"
};

export  const DOUX_REPOS: Spell = {
  type: IndexElementType.Spell,
  id: "doux-repos",
  name: "Doux repos",
  level: null,
  school: SpellSchool.Necromancy,
  castingTime: "1 action / Rituel",
  range: "Contact",
  components: "V, S, M (une pincée de sel et une pièce de cuivre à poser sur chaque œil du cadavre et qui doivent rester en place pendant toute la durée du sort)",
  duration: "10 jours",
  description: "<p>Vous touchez un cadavre ou assimilé. Pendant toute la durée du sort, la cible est protégée contre la décomposition et ne peut pas se transformer en mort-vivant.</p><br/><p>Le sort rallonge aussi la période pendant laquelle on peut rappeler la cible d'entre les morts, car les jours passés sous l'influence de ce sort ne sont pas décomptés de la période pendant laquelle on peut utiliser des sorts comme rappel à la vie.</p><br/>"
};

export  const DRUIDISME: Spell = {
  type: IndexElementType.Spell,
  id: "druidisme",
  name: "Druidisme",
  level: 0,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S",
  duration: "Instantanée",
  description: "<p>Vous créez l'un des effets suivants à portée après quelques murmures adressés aux esprits de la nature.</p><br/><p>Vous créez un effet sensoriel minuscule et inoffensif qui annonce le temps qu'il fera là où vous vous trouvez pendant les 24 heures à venir. Cet effet peut prendre la forme d'un orbe doré si le temps va rester dégagé, d'un nuage s'il va pleuvoir, de flocons s'il va neiger, etc. L'effet persiste pendant 1 round.</p><br/><p>Vous faites instantanément éclore une fleur ou un bourgeon ou germer une graine.</p><br/><p>Vous créez un effet sensoriel instantané inoffensif, comme des feuilles qui tombent, un coup de vent, le bruit que ferait un petit animal ou une légère odeur de moufette. L'effet doit être contenu dans un cube d'au maximum 1,50 mètre d'arête.</p><br/><p>Vous allumez ou éteignez instantanément une chandelle, une torche ou un petit feu de camp.</p><br/>"
};

export  const DUEL_FORCE: Spell = {
  type: IndexElementType.Spell,
  id: "duel-forcé",
  name: "Duel forcé",
  level: 1,
  school: SpellSchool.Enchantment,
  castingTime: "1 action bonus",
  range: "9 mètres",
  components: "V",
  duration: "Concentration, jusqu'a 1 minute",
  description: "<p>Vous poussez une créature à vous affronter en duel. Une créature située à portée dans votre champ de vision doit faire un jet de sauvegarde de Sagesse. Si elle le rate, vous l'obnubilez et elle ne peut résister à votre injonction divine. Pendant toute la durée du sort, elle est désavantagée lors des jets d'attaque effectués contre toute créature autre que vous et doit faire un jet de sauvegarde de Sagesse chaque fois qu'elle tente de s'éloigner à plus de 9 mètres de vous. Si elle réussit ce jet de sauvegarde, le sort ne gêne pas ses mouvements pour ce tour.</p><br/><p>Le sort se termine si vous attaquez une créature autre que celle visée par ce sort, si vous lancez un sort sur une créature hostile autre qu'elle, si une créature amicale envers vous la blesse ou lui lance un sort néfaste ou si vous terminez votre tour à plus de 9 mètres d'elle.</p><br/>"
};

export  const ECLAIR: Spell = {
  type: IndexElementType.Spell,
  id: "éclair",
  name: "Éclair",
  level: 3,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "Personnelle (ligne de 30 mètres)",
  components: "V, S, M (un peu de fourrure et une baguette en ambre, en cristal ou en verre)",
  duration: "Instantanée",
  description: "<p>Un éclair formant une ligne de 30 mètres de long pour 1,50 mètre de large jaillit de votre personne et file dans la direction de votre choix. Chaque créature située sur la ligne doit faire un jet de sauvegarde de Dextérité. Celles qui échouent subissent 8d6 dégâts de foudre, les autres la moitié seulement.</p><br/><p>La foudre embrase les objets inflammables de la zone qui ne sont ni portés ni transportés par une créature.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, les dégâts augmentent de 1d6 par niveau au-delà du 3.</p><br/>"
};

export  const ECLAT_DU_SOLEIL: Spell = {
  type: IndexElementType.Spell,
  id: "eclat-du-soleil",
  name: "Eclat du soleil",
  level: 8,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "45 mètres",
  components: "V, S, M (du feu et un éclat d'héliotrope)",
  duration: "Instantanée",
  description: "<p>La chaude lumière du soleil illumine une zone de 18 mètres de rayon centrée sur un point de votre choix situé à portée.</p><br/><p>Chaque créature présente dans cette lumière doit faire un jet de sauvegarde de Constitution. Celles qui échouent subissent 12d6 dégâts radiants et sont aveuglées pendant 1 minute. Les autres subissent seulement la moitié des dégâts et ne sont pas aveuglées par le sort. Les vases et les morts-vivants sont désavantagés lors de ce jet de sauvegarde.</p><br/><p>Une créature aveuglée par le sort fait un autre jet de</p><br/><p>Constitution à la fin de chacun de ses tours. Dès qu'elle réussit, sa cécité disparaît.</p><br/><p>Ce sort dissipe toutes les ténèbres présentes dans la zone qui sont issues d'un sort.</p><br/>"
};

export  const EMBRUNS_PRISMATIQUES: Spell = {
  type: IndexElementType.Spell,
  id: "embruns-prismatiques",
  name: "Embruns prismatiques",
  level: 7,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "Personnelle (cône de 18 mètres)",
  components: "V, S",
  duration: "Instantanée",
  description: "<p>Huit rayons de lumière multicolores jaillissent de votre main.</p><br/><p>Chacun a une couleur différente et possède des pouvoirs et objectifs distincts. Chaque créature présente dans un cône de 18 mètres doit faire un jet de sauvegarde de Dextérité. Lancez</p><br/><p>1d8 par cible pour savoir quelle couleur l'affecte.</p><br/><p><b>Rouge :</b> La cible subit 10d6 dégâts de feu si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</p><br/><p><b>Orange :</b> La cible subit 10d6 dégâts d'acide si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</p><br/><p><b>Jaune :</b> La cible subit 10d6 dégâts de foudre si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</p><br/><p><b>Vert :</b> La cible subit 10d6 dégâts de poison si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</p><br/><p><b>Bleu :</b> La cible subit 10d6 dégâts de froid si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</p><br/><p><b>Indigo :</b> Si la cible rate son jet de sauvegarde, elle est entravée et doit alors faire un jet de sauvegarde de Constitution à la fin de chacun de ses tours. Si elle en réussit trois, le sort se termine, si elle en rate trois, elle se change définitivement en pierre et elle est en proie à l'état pétrifié. Les succès et les échecs n'ont pas à être consécutifs: tenez le compte dans chaque catégorie jusqu'à ce que l'une d'elles arrive à trois.</p><br/><p><b>Violet :</b> La cible est aveugle si elle rate son jet de sauvegarde. Elle doit alors faire un jet de sauvegarde de Sagesse au début de votre prochain tour. Si elle le réussit, elle recouvre la vue; si elle le rate, elle est emportée sur un autre plan d'existence choisi par le MD et recouvre aussi la vue. (En général, une créature qui ne se trouve pas sur son propre plan d'existence est bannie là-bas tandis que les autres créatures sont envoyées sur le plan astral ou éthéré).</p><br/><p><b>Spécial :</b> Deux rayons viennent frapper la cible. Relancez deux fois le dé en le relançant chaque fois que vous sortez un 8.</p><br/>"
};

export  const EMPRISONNEMENT: Spell = {
  type: IndexElementType.Spell,
  id: "emprisonnement",
  name: "Emprisonnement",
  level: 9,
  school: SpellSchool.Abjuration,
  castingTime: "1 minute",
  range: "9 mètres",
  components: "V, S, M (un portrait sur un vélin ou une statuette sculptée à l'effigie de la cible et une composante spéciale qui varie en fonction de la version du sort choisie et vaut au moins 500 po par dé de vie de la cible)",
  duration: "Jusqu'à dissipation",
  description: "<p>Vous créez des entraves magiques pour immobiliser une créature située à portée dans votre champ de vision. La cible doit réussir un jet de sauvegarde de Sagesse ou se retrouver emprisonnée par le sort. Si elle réussit, elle est immunisée contre ce sort si vous le lancez de nouveau. Tant que la créature est affectée par le sort, elle n'a pas besoin de respirer, de manger, ni de boire et ne vieillit plus. Les sorts de divination ne parviennent plus à la localiser ni à la percevoir.</p><br/><p>Vous devez opter pour l'une des formes d'emprisonnement suivantes quand vous lancez le sort.</p><br/><p>Enseveli. La cible est ensevelie dans les profondeurs de la terre, dans une sphère de force magique tout juste assez grande pour la contenir. Rien ne peut traverser cette sphère et les créatures ne peuvent pas recourir au voyage planaire pour y entrer ou en sortir.</p><br/><p>La composante spéciale de cette version du sort est un petit orbe en mithral.</p><br/><p>Enchaine. La cible est retenue par de lourdes chaines fermement ancrées au sol. Elle est entravée jusqu'à ce que le sort se termine et, Jusque la, elle ne peut pas se déplacer ni être déplacée, par quelque moyen que ce soit.</p><br/><p>La composante spéciale de cette version du sort est une</p><br/><p>fine chaîne faite de métal précieux.</p><br/><p>Prison isolée. Le sort transporte la cible dans un minuscule demi-plan protégé contre la téléportation et les voyages planaires. Ce demi-plan peut être un labyrinthe, une cage, une tour ou une structure confinée similaire de votre choix.</p><br/><p>La composante spéciale de cette version du sort est une représentation miniature de la prison, faite de jade.</p><br/><p>Confinement minimal. La cible rétrécit jusqu'à ne plus faire que 2,5 centimètres de haut et se retrouve emprisonnée dans une gemme ou un objet similaire. La lumière traverse la gemme normalement (ce qui permet à la cible de voir l'extérieur et aux autres créatures de regarder dedans) mais rien d'autre ne peut traverser sa paroi, pas même les méthodes de téléportation ni les voyages planaires. Il est impossible de tailler la gemme ou de la briser tant que le sort fait effet.</p><br/><p>La composante spéciale de cette version du sort est une grande gemme transparente comme un corindon, un diamant ou un rubis.</p><br/><p>Sommeil. La cible s'endort et il est impossible de la réveiller. La composante spéciale de cette version du sort est un bouquet d'herbes soporifiques très rares.</p><br/><p>Mettre fin au sort. Lors de l'incantation et quelle que soit la version du sort, vous pouvez préciser une condition spéciale qui met fin au sort et libère la cible. Cette condition peut être aussi spécifique ou aussi élaborée que vous le désirez, mais le MD doit confirmer que cette condition est réalisable et a une chance d'être remplie. Elle peut se baser sur le nom de la créature, son identité ou sa divinité, mais sinon elle doit reposer sur des actions ou des qualités observables et non sur des éléments intangibles comme le niveau, la classe ou les points de vie.</p><br/><p>Dissipation de la magie peut mettre fin au sort à condition d'être lancée depuis un emplacement de sort de niveau 9 en visant la prison ou la composante matérielle spéciale utilisée pour lancer le sort.</p><br/><p>Vous pouvez utiliser une composante spéciale pour créer une prison à la fois seulement. Si vous relancez ce sort en utilisant la même composante, la cible de la première incantation est libérée sur-le-champ.</p><br/>"
};

export  const ENCHEVETREMENT: Spell = {
  type: IndexElementType.Spell,
  id: "enchevêtrement",
  name: "Enchevêtrement",
  level: 1,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "27 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Des herbes et des lianes entremêlées jaillissent du sol dans un carré de 6 mètres de côté centré sur un point à portée. Pendant toute la durée du sort, les végétaux transforment la zone en terrain difficile.</p><br/><p>Une créature qui se trouve dans la zone affectée lorsque vous lancez le sort doit réussir un jet de sauvegarde de Force, sans quoi elle reste entravée dans les plantes jusqu'à ce que le sort se termine. Une créature entravée peut utiliser une action pour faire un test de Force contre le DD du sort. Si elle réussit, elle se libère.</p><br/><p>Quand le sort se termine, les plantes invoquées se flétrissent.</p><br/>"
};

export  const ENNEMI_SUBCONSCIENT: Spell = {
  type: IndexElementType.Spell,
  id: "ennemi-subconscient",
  name: "Ennemi subconscient",
  level: 9,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Vous puisez dans les peurs les plus profondes d'un groupe de créatures et créez des êtres illusoires dans leur esprit, qu'elles sont les seules à voir. Chaque créature située dans une sphère de 9 mètres de rayon centrée sur un point de votre choix situé à portée doit faire un jet de sauvegarde de Sagesse. Celles qui ratent leur jet sont effrayées pendant toute la durée. Les illusions se basent sur les peurs enfouies en chaque cible et transforment leurs pires cauchemars en menace implacable. À la fin de chacun de ses tours, une créature effrayée doit faire un jet de sauvegarde de Sagesse.</p><br/><p>Si elle échoue, elle subit 4d10 dégâts psychiques; si elle réussit, le sort se termine pour elle.</p><br/>"
};

export  const ENTRAVE_PLANAIRE: Spell = {
  type: IndexElementType.Spell,
  id: "entrave-planaire",
  name: "Entrave planaire",
  level: 5,
  school: SpellSchool.Abjuration,
  castingTime: "1 heure",
  range: "18 mètres",
  components: "V, S, M (un bijou d'une valeur minimale de 1 000 po, que le sort consume)",
  duration: "24 heures",
  description: "<p>Grâce à ce sort, vous vous attachez de force les services d'un céleste, d'un élémentaire, d'une fée ou d'un fiélon. La créature doit se trouver à portée pendant toute la durée du sort. (En général, elle est d'abord invoquée au centre d'un cercle magique inversé où elle reste piégée le temps de l'incantation.) La cible doit faire un jet de sauvegarde de Charisme à la fin de l'incantation. Si elle échoue, elle est contrainte de vous servir pendant toute la durée du sort. Si elle a été invoquée ou créée via un autre sort, la durée de ce dernier se prolonge jusqu'à égaler celle de l'entrave planaire.</p><br/><p>La créature liée doit suivre vos instructions au mieux de ses capacités. Vous pouvez lui demander de vous accompagner lors d'une aventure, de protéger un lieu ou de transmettre un message. La créature obéit à vos instructions à la lettre, mais si elle est hostile envers vous, elle peut tout à fait interpréter vos paroles de manière à satisfaire ses propres objectifs. Si la créature a exécuté vos instructions avant la fin du sort, elle revient vers vous pour vous en informer si elle se trouve sur le même plan d'existence que vous. Si vous êtes sur un autre plan, elle se rend là où vous l'avez liée et y reste jusqu'à la fin du sort.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau supérieur, la durée augmente:</p><br/><p>10 jours au niveau 6, 30 au niveau 7, 180 au niveau 8 et un an et un jour au niveau 9.</p><br/>"
};

export  const EPEE_DE_MORDENKAINEN: Spell = {
  type: IndexElementType.Spell,
  id: "épée-de-mordenkainen",
  name: "Épée de Mordenkainen",
  level: 7,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S, M (une épée en platine miniature avec le pommeau et la poignée en cuivre et zinc, d'une valeur de 250 po)",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Vous créez un plan de force en forme d'épée qui plane à portée et persiste pendant toute la durée du sort.</p><br/><p>Dès que l'épée apparaît, vous faites une attaque de sort au corps à corps contre une cible de votre choix située dans un rayon de 1,50 mètre autour de l'épée. Si l'épée touche, la cible subit 3d10 dégâts de force. Tant que le sort n'est pas terminé, vous pouvez dépenser une action bonus à chacun de vos tours pour déplacer l'épée d'un maximum de 6 mètres afin de la conduire à un endroit situé dans votre champ de vision, puis répéter l'attaque contre la même cible ou une autre.</p><br/>"
};

export  const ESPRIT_FAIBLE: Spell = {
  type: IndexElementType.Spell,
  id: "esprit-faible",
  name: "Esprit faible",
  level: 8,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "45 mètres",
  components: "V, S, M (une poignée de sphères en argile, en cristal, en verre ou minérales)",
  duration: "Instantanée",
  description: "<p>Vous vous attaquez à l'esprit d'une créature située à portée dans votre champ de vision en essayant de briser son intellect et sa personnalité. La cible subit 4d6 dégâts psychiques et doit faire un jet de sauvegarde d'Intelligence.</p><br/><p>Si la cible rate son jet, son Intelligence et son Charisme tombent à 1. Elle ne peut plus lancer de sorts, activer d'objet magique, comprendre une langue, ni communiquer de manière intelligible. En revanche, elle est toujours capable de reconnaître ses amis, de les suivre et même de les protéger.</p><br/><p>La créature peut refaire un jet de sauvegarde tous les</p><br/><p>30 jours. Le sort se termine dès qu'elle réussit.</p><br/><p>On peut mettre un terme à ce sort avec restauration suprême, guérison ou souhait.</p><br/>"
};

export  const ESPRIT_IMPENETRABLE: Spell = {
  type: IndexElementType.Spell,
  id: "esprit-impénétrable",
  name: "Esprit impénétrable",
  level: 8,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S",
  duration: "24 heures",
  description: "<p>Vous touchez une créature consentante et, jusqu'à la fin du sort, vous l'immunisez contre les dégâts psychiques, les effets percevant les émotions ou révélant les pensées, les sorts de divination et l'état charmé. Ce sort déjoue même les souhaits et les sorts et effets de même puissance qui cherchent à affecter l'esprit de la cible ou à obtenir des informations sur elle.</p><br/>"
};

export  const ESPRITS_GARDIENS: Spell = {
  type: IndexElementType.Spell,
  id: "esprits-gardiens",
  name: "Esprits gardiens",
  level: 3,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "Personnelle (4,50 mètres de rayon)",
  components: "V, S M (un symbole sacré)",
  duration: "Concentration, jusqu'à 10 minutes",
  description: "<p>Vous appelez des esprits qui vous protègent. Ils volètent autour de vous dans un rayon de 4,50 mètres pendant toute la durée du sort. Si vous êtes Bon ou Neutre, ils ont une apparence angélique ou féerique (à vous de choisir). Si vous êtes Mauvais, ils ont une apparence fiélone.</p><br/><p>Quand vous lancez le sort, vous pouvez désigner autant de créatures que vous le voulez afin qu'il ne les affecte pas.</p><br/><p>Une créature affectée voit sa vitesse réduite de moitié dans la zone et, quand elle y entre pour la première fois de son tour ou quand elle y commence son tour, elle doit faire un jet de sauvegarde de Sagesse. Si elle échoue, elle subit 3d8 dégâts radiants (si vous êtes Bon ou Neutre) ou 3d8 dégâts nécrotiques (si vous êtes Mauvais). Si elle réussit son jet de sauvegarde, elle subit seulement la moitié de ces dégâts.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, les dégâts augmentent de 1d8 par niveau au-delà du 3ème.</p><br/>"
};

export  const ETAT_CADAVERIQUE: Spell = {
  type: IndexElementType.Spell,
  id: "état-cadavérique",
  name: "État cadavérique",
  level: null,
  school: SpellSchool.Necromancy,
  castingTime: "1 action / Rituel",
  range: "Contact",
  components: "V, S, M (une pincée de poussière tombale)",
  duration: "1 heure",
  description: "<p>Vous touchez une créature consentante et la plongez dans un état cataleptique si profond qu'elle semble morte.</p><br/><p>Pendant toute la durée du sort ou jusqua ce que vous utilisiez une action pour toucher la cible et révoquer le sort, la cible paraît morte, même suite à un examen externe ou après utilisation d'un sort visant à déterminer son statut. Elle est aveuglée et neutralisée et sa vitesse passe à 0. Elle est résistante à tous les types de dégâts hormis les dégâts psychiques. Si elle est empoisonnée ou malade au moment où vous lancez le sort ou si elle le devient pendant la durée du sort, la maladie ou le poison na aucun effet tant que ce sort n'est pas terminé.</p><br/>"
};

export  const EVEIL: Spell = {
  type: IndexElementType.Spell,
  id: "éveil",
  name: "Éveil",
  level: 5,
  school: SpellSchool.Transmutation,
  castingTime: "8 heures",
  range: "Contact",
  components: "V, S, M (une agate d'une valeur minimale de 1 000 po, que le sort consomme)",
  duration: "Instantanée",
  description: "<p>Une fois que vous avez passé la durée de l'incantation à tracer des sentiers magiques dans une pierre précieuse, vous touchez un animal ou une plante de taille Très Grande ou inférieure qui doivent être dépourvus de toute valeur d'Intelligence ou posséder une Intelligence de 3 ou moins. La cible reçoit alors une Intelligence de 10 et la possibilité de parler un langage de votre connaissance. Si la cible est une plante, elle peut se déplacer à l'aide de ses branches, de ses racines, de ses lianes, de ses vrilles ou autre et gagne des sens similaires à ceux d'un humain. C'est au MD de choisir les statistiques appropriées à la plante éveillée, en lui appliquant par exemple le profil d'un buisson ou d'un arbre éveillé.</p><br/><p>La bête ou la plante éveillée est sous votre charme pendant</p><br/><p>30 jours ou jusqu'à ce que vous ou l'un de vos compagnons la blessiez. Une fois que l'effet de charme se termine, la créature éveillée décide seule si elle reste amicale envers vous, selon la façon dont vous l'avez traitée lorsqu'elle était charmée.</p><br/>"
};

export  const FABRICATION: Spell = {
  type: IndexElementType.Spell,
  id: "fabrication",
  name: "Fabrication",
  level: 4,
  school: SpellSchool.Transmutation,
  castingTime: "10 minutes",
  range: "36 mètres",
  components: "V, S",
  duration: "Instantanée",
  description: "<p>Vous convertissez des matériaux bruts en produits finis faits de la même matière. Par exemple, vous pouvez fabriquer un pont de bois à partir de souches d'arbres, une corde à base d'un tas de chanvre, et des habits à partir de lin ou de laine.</p><br/><p>Choisissez des matériaux bruts situés à portée et dans votre champ de vision. Vous pouvez fabriquer un objet de taille Grande ou inférieure (contenu dans un cube de 3 mètres de côté ou dans huit cubes reliés de 1,50 mètre de côté) à condition d'avoir assez de matière première. Toutefois, si vous travaillez avec du métal, de la pierre ou une autre substance minérale, l'objet fabriqué ne doit pas dépasser la taille Moyenne (donc tenir dans un cube de 1,50 mètre de côte). La qualite de lobjet fabriqué dépend de celle des matières premières.</p><br/><p>Il est impossible de créer ou de transmuter des créatures ou des objets magiques à l'aide de ce sort. Vous ne pouvez pas non plus y recourir pour fabriquer des objets demandant un haut degré d'expertise, comme des bijoux, des armes, du verre ou une armure, à moins que vous ne soyez formé à l'utilisation des outils d'artisanat nécessaires à l'élaboration de tels objets.</p><br/>"
};

export  const FACONNAGE_DE_LA_PIERRE: Spell = {
  type: IndexElementType.Spell,
  id: "façonnage-de-la-pierre",
  name: "Façonnage de la pierre",
  level: 4,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S, M (argile molle, à façonner pour lui donner approximativement la forme de l'objet de pierre désiré",
  duration: "Instantanée",
  description: "<p>Vous touchez un objet de pierre de taille Moyenne ou inférieure ou une section de pierre d'un maximum de 1,50 mètre dans toutes les dimensions et lui donnez la forme que vous désirez.</p><br/><p>Vous pouvez, par exemple, façonner un gros caillou de manière à en faire une arme, une idole ou un coffre, ou bien creuser un étroit passage dans un mur, à condition que ce dernier ne fasse pas plus de 1,50 mètre d'épaisseur. Vous pouvez façonner une porte de pierre ou son chambranle pour la sceller. L'objet créé peut avoir au maximum deux charnières et un loquet, mais il est impossible de créer des mécanismes plus complexes.</p><br/>"
};

export  const FAUX_AMIS: Spell = {
  type: IndexElementType.Spell,
  id: "faux-amis",
  name: "Faux amis",
  level: 0,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, M (un peu de maquillage à s'appliquer sur le visage lors de l'incantation)",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Pendant toute la durée du sort, vous êtes avantagé sur tous les tests de Charisme à l'encontre d'une créature de votre choix qui ne vous est pas hostile. Quand le sort se termine, cette créature se rend compte que vous avez usé de magie pour l'influencer et elle devient hostile. Si elle est encline à la violence, elle peut très bien vous attaquer. Une autre peut chercher à se venger autrement (au choix du MD), selon la manière dont vous avez interagi avec elle.</p><br/>"
};

export  const FAVEUR_DIVINE: Spell = {
  type: IndexElementType.Spell,
  id: "faveur-divine",
  name: "Faveur divine",
  level: 1,
  school: SpellSchool.Evocation,
  castingTime: "1 action bonus",
  range: "Personnelle",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Vos prières vous imprègnent d'une aura radieuse. Jusqu'à la fin du sort, les attaques que vous portez avec une arme infligent 1d4 dégâts radiants supplémentaires en cas de coup au but.</p><br/>"
};

export  const FESTIN_DES_HEROS: Spell = {
  type: IndexElementType.Spell,
  id: "festin-des-héros",
  name: "Festin des héros",
  level: 6,
  school: SpellSchool.Conjuration,
  castingTime: "10 minutes",
  range: "9 mètres",
  components: "V, S, M (un bol incrusté de gemmes d'une valeur minimale de 1 000 po, que le sort consume)",
  duration: "Instantanée",
  description: "<p>Vous matérialisez un grand festin, comprenant des boissons et des mets de grande qualité. Il faut une heure pour terminer le festin qui disparaît au bout de cette durée. Ses effets bénéfiques se manifestent uniquement une fois cette heure écoulée. Douze créatures au</p><br/><p>maximum peuvent beneficier de ce repas.</p><br/><p>Une créature qui participe au festin bénéficie de plusieurs avantages. Elle est guérie de toutes les maladies et de tous les poisons qui l'affectaient, elle est immunisée contre le poison et l'état effrayé, et elle est avantagée lors de tous ses jets de sauvegarde de Sagesse. Son maximum de points de vie augmente de 2d10 et elle gagne le même nombre de points de vie. Ces avantages persistent pendant 24 heures.</p><br/>"
};

export  const FEUILLE_MORTE: Spell = {
  type: IndexElementType.Spell,
  id: "feuille-morte",
  name: "Feuille morte",
  level: 1,
  school: SpellSchool.Transmutation,
  castingTime: "1 réaction, que vous effectuez quand vous-même ou une créature située dans un rayon de 18 mètres tombe soudain",
  range: "18 mètres",
  components: "V, M (une petite plume ou un peu de duvet)",
  duration: "1 minute",
  description: "<p>Choisissez jusqu'à cinq créatures en train de tomber à portée. La vitesse de chute de chacune passe à 18 mètres par round jusqu'à la fin du sort. Si une créature atterrit avant la fin du sort, elle ne subit pas de dégâts de chute et se reçoit sur ses pieds, le sort se terminant alors pour elle.</p><br/>"
};

export  const FLAMME_ETERNELLE: Spell = {
  type: IndexElementType.Spell,
  id: "flamme-éternelle",
  name: "Flamme éternelle",
  level: 2,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S, M (poussière de rubis d'une valeur de 50 po, que le sort consume)",
  duration: "Jusqu'à dissipation",
  description: "<p>Une flamme à la luminosité égale à celle d'une torche embrase soudain l'objet que vous touchez. L'effet du sort ressemble à une flamme ordinaire, mais ne dégage pas de chaleur et ne consomme pas d'oxygène. On peut couvrir ou cacher la flamme éternelle, mais pas l'étouffer ni l'éteindre avec de l'eau.</p><br/>"
};

export  const FLAMME_SACREE: Spell = {
  type: IndexElementType.Spell,
  id: "flamme-sacrée",
  name: "Flamme sacrée",
  level: 0,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S",
  duration: "Instantanée",
  description: "<p>Un flamboiement digne d'une flamme s'abat sur une créature située à portée dans votre champ de vision. La cible doit réussir un jet de Dextérité ou subir 1d8 dégâts radiants. Même si elle se trouve derrière un abri, la cible n'est pas avantagée lors du jet de sauvegarde.</p><br/><p>Les dégâts du sort augmentent de 1d8 quand vous atteignez le niveau 5 (2d8), le niveau 11 (3d8) et le niveau 17 (4d8).</p><br/>"
};

export  const FLAMMES: Spell = {
  type: IndexElementType.Spell,
  id: "flammes",
  name: "Flammes",
  level: 0,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S",
  duration: "10 minutes",
  description: "<p>Une flamme vacillante apparaît dans votre main. Elle y reste pendant toute la durée du sort et ne vous blesse pas, pas plus qu'elle n'endommage votre équipement. La flamme émet une lumière vive dans un rayon de 3 mètres et une lumière faible dans un rayon de 3 mètres de plus. Le sort se termine si vous le révoquez par une action ou si vous le lancez de nouveau.</p><br/><p>Vous pouvez attaquer avec la flamme, mais cela met fin au sort. Pour cela, quand vous lancez le sort, ou par une action lors d'un tour ultérieur, vous lancez la flamme sur une créature située dans un rayon de 9 mètres. Faites une attaque de sort à distance. Si vous touchez, la cible subit 1d8 dégâts de feu.</p><br/><p>Les dégâts de ce sort augmentent de 1d8 quand vous atteignez le niveau 5 (2d8), le niveau 11 (3d8) et le niveau 17 (4d8).</p><br/>"
};

export  const FLEAU_DINSECTES: Spell = {
  type: IndexElementType.Spell,
  id: "fléau-d'insectes",
  name: "Fléau d'insectes",
  level: 5,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "90 mètres",
  components: "V, S, M (un peu de sucre en poudre, quelques graines de céréales et une tache de graisse)",
  duration: "Concentration, jusqu'à 10 minutes",
  description: "<p>Un essaim de sauterelles grouillantes remplit une sphère de 6 mètres de rayon centrée sur un point de votre choix situé à portée. La sphère s'étend en contournant les angles et persiste pendant toute la durée du sort. La visibilité est réduite dans la zone affectée. L'intérieur de la sphère devient un terrain difficile.</p><br/><p>Quand la sphère d'insectes apparaît, chaque créature prise à l'intérieur doit faire un jet de sauvegarde de Constitution.</p><br/><p>Une créature subit 4d10 dégâts perforants si elle rate son jet, la moitié seulement si elle le réussit. Une créature doit faire le même jet quand elle entre dans la sphère pour la première fois de son tour ou quand elle y termine son tour.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou plus, les dégâts augmentent de 1d10 par niveau au-delà du 5ème.</p><br/>"
};

export  const FLECHE_ACIDE_DE_MELF: Spell = {
  type: IndexElementType.Spell,
  id: "flèche-acide-de-melf",
  name: "Flèche acide de Melf",
  level: 2,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "27 mètres",
  components: "V, S, M (poudre de feuille de rhubarbe et estomac de vipère)",
  duration: "Instantanée",
  description: "<p>Une flèche d'un vert chatoyant file vers une cible située à portée et explose en une gerbe d'acide. Faites une attaque de sort à distance contre la cible. Si vous touchez, la cible reçoit 4d4 dégâts d'acide immédiatement et 2d4 dégâts d'acide à la fin de son prochain tour. Si vous ne touchez pas, l'acide éclabousse la cible et lui inflige la moitié des dégâts initiaux, mais aucun à la fin de son prochain tour.</p><br/><p>A plus haut niveau. Quand vous utilisez ce sort via un emplacement de niveau 3 ou plus, les dégâts initiaux et secondaires augmentent de 1d4 par niveau au-delà du 2ème.</p><br/>"
};

export  const FLECHE_DE_FOUDRE: Spell = {
  type: IndexElementType.Spell,
  id: "flèche-de-foudre",
  name: "Flèche de foudre",
  level: 3,
  school: SpellSchool.Transmutation,
  castingTime: "1 action bonus",
  range: "Personnelle",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Lors de la prochaine attaque que vous effectuez avec une arme à distance pendant que ce sort est actif, la munition (ou l'arme s'il s'agit d'une arme de jet) se change en éclair. Faites un jet d'attaque ordinaire. Si vous touchez, la cible subit 4d8 dégâts de foudre au lieu des dégâts normaux, la moitié si vous la ratez.</p><br/><p>Que vous touchiez ou ratiez votre cible, toutes les créatures situées dans un rayon de 3 mètres autour d'elle doivent faire un jet de sauvegarde de Dextérité. Celles qui échouent subissent 2d8 dégâts de foudre, les autres la moitié seulement.</p><br/><p>La munition ou l'arme de jet reprend ensuite sa forme normale.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, les dégâts dus à chacun des deux effets du sort augmentent de 1d8 par emplacement de sort au-delà du 3ème.</p><br/>"
};

export  const FLETRISSEMENT: Spell = {
  type: IndexElementType.Spell,
  id: "flétrissement",
  name: "Flétrissement",
  level: 4,
  school: SpellSchool.Necromancy,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S",
  duration: "Instantanée",
  description: "<p>L'énergie nécromantique inonde une créature de votre choix située à portée dans votre champ de vision, et draine ses fluides corporels et sa vitalité. La cible doit faire un jet de sauvegarde de Constitution. Si elle échoue, elle reçoit 8d8 dégâts nécrotiques, la moitié seulement si elle réussit son jet. Ce sort n'a aucun effet sur les morts-vivants ou les artificiels.</p><br/><p>Si vous visez une créature végétale ou une plante magique, elle est désavantagée lors du jet de sauvegarde et le sort lui inflige le maximum de dégâts possible.</p><br/><p>Si vous visez une plante non magique qui n'est pas une créature, comme un arbre ou un buisson, elle n'a pas droit au moindre jet de sauvegarde, mais se flétrit et meurt.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 5 ou plus, les dégâts augmentent de 1d8 par niveau au-delà du 4ème.</p><br/>"
};

export  const FLOU: Spell = {
  type: IndexElementType.Spell,
  id: "flou",
  name: "Flou",
  level: 2,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Votre corps devient flou, il ondule et vacille comme une flamme aux yeux d'autrui. Pendant toute la durée du sort, les créatures sont désavantagées lorsqu'elles font un jet d'attaque contre vous. Un attaquant est immunisé contre cet effet s'il ne se repose pas sur sa vue, s'il dispose de vision aveugle par exemple, ou s'il peut percer les illusions à jour, avec vision lucide.</p><br/>"
};

export  const FORCE_FANTASMAGORIQUE: Spell = {
  type: IndexElementType.Spell,
  id: "force-fantasmagorique",
  name: "Force fantasmagorique",
  level: 2,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S, M (un peu de laine)",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Vous façonnez une illusion et l'implantez dans l'esprit d'une créature située à portée dans votre champ de vision.</p><br/><p>Elle doit faire un jet de sauvegarde d'Intelligence. Si elle échoue, vous créez un objet, une créature ou un phénomène visible fantasmagorique de votre choix. L'illusion doit tenir dans un cube de 3 mètres d'arête. La cible est seule à la percevoir, et ce pendant toute la durée du sort. Ce dernier ne fonctionne pas contre les morts-vivants ni les artificiels.</p><br/><p>L'illusion comprend des bruits, une température et d'autres stimuli, mais, de même, la cible du sort est la seule à les percevoir.</p><br/><p>La cible peut utiliser une action pour examiner l'illusion avec un test d'Intelligence (Investigation) contre le DD du jet de sauvegarde de votre sort. Si elle réussit son test, elle comprend qu'elle a affaire à une simple illusion et le sort se termine.</p><br/><p>Tant que la cible est sous l'effet du sort, elle traite l'illusion comme un élément réel et invente une explication rationnelle aux résultats illogiques issus de ses interactions avec elle. Par exemple, si elle tente de traverser un pont fantasmagorique enjambant un ravin et tombe dès qu'elle pose le pied sur ce pont, si elle survit à la chute, elle croit toujours que le pont est réel et trouve une explication logique à sa chute : on l'a poussée, elle a glissé, une forte bourrasque l'a fait basculer...</p><br/><p>Une cible affectée croit si fort à la réalité de l'illusion que cette dernière peut même la blesser. Une illusion créée à l'image d'une créature peut attaquer la cible. De même, une illusion représentant du feu, un bassin d'acide ou une nappe de lave peut brûler la cible. À chaque round, à votre tour, votre illusion inflige 1d6 dégâts psychiques à la cible si elle se trouve au sein de l'illusion ou dans un rayon de 1,50 mètre autour d'elle et que cette illusion représente une créature ou un danger qui devrait logiquement la blesser, en l'attaquant par exemple. La cible perçoit les dégâts comme étant d'un type approprié à l'illusion qu'elle voit.</p><br/>"
};

export  const FORME_ETHEREE: Spell = {
  type: IndexElementType.Spell,
  id: "forme-éthérée",
  name: "Forme éthérée",
  level: 7,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S",
  duration: "Jusqu'à 8 heures",
  description: "<p>Vous pénétrez dans la région frontalière du plan éthéré, dans une zone où il chevauche votre plan actuel. Vous restez sur la Frontière éthérée pendant toute la durée du sort ou jusqu'à ce que vous utilisiez une action pour y mettre fin. Pendant cette période, vous pouvez vous déplacer dans n'importe quelle direction. Si vous optez pour un déplacement vers le haut ou le bas, le prix du mouvement est doublé, chaque mètre de déplacement vous coûtant un mètre supplémentaire. Vous voyez et entendez ce qui se passe sur le plan d'où vous venez, mais tout y est gris et vous ne voyez plus rien au-delà de 18 mètres.</p><br/><p>Une fois sur le plan éthéré, vous pouvez affecter uniquement des créatures situées sur ce plan et elles sont les seules à pouvoir vous affecter. Celles qui ne se trouvent pas sur ce plan ne vous perçoivent pas et sont incapables d'interagir avec vous, à moins qu'un pouvoir spécial ou magique ne le leur permette.</p><br/><p>Les objets et effets qui ne se trouvent pas sur le plan ethéré n'ont aucune incidence sur vous, ce qui vous permet de traverser des objets que vous apercevez sur le plan d'où vous venez.</p><br/><p>Quand le sort se termine, vous retournez immédiatement sur le plan d'où vous venez, à l'endroit que vous occupez actuellement. Si vous occupez le même espace qu'un objet solide ou une créature lorsque cela se produit, vous êtes immédiatement projeté dans l'espace inoccupé le plus proche susceptible de vous accueillir et subissez un montant de dégâts de force égal à 6,5 × le nombre de mètres sur lesquels vous avez été projeté.</p><br/><p>Ce sort n'a aucun effet si vous le lancez alors que vous vous trouvez sur le plan éthéré ou sur un plan non limitrophe, comme les plans extérieurs.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 8 ou plus, vous pouvez affecter jusqu'à trois créatures consentantes (vous y compris) par niveau au-delà du 7ème. Toutes ces créatures doivent se trouver dans un rayon de 3 mètres autour de vous quand vous lancez le sort.</p><br/>"
};

export  const FORME_GAZEUSE: Spell = {
  type: IndexElementType.Spell,
  id: "forme-gazeuse",
  name: "Forme gazeuse",
  level: 3,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S, M (un morceau de gaze et une volute de fumée)",
  duration: "Concentration, jusqu'à 1 heure",
  description: "<p>Vous touchez une créature consentante et la transformez, ainsi que tous les objets qu'elle porte et qu'elle transporte, en nuage brumeux pour toute la durée du sort. Ce dernier se termine si la créature tombe à 0 point de vie. Le sort n'affecte pas les créatures intangibles.</p><br/><p>Sous cette forme, la cible n'a plus qu'un seul mode de déplacement : le vol, à une vitesse de 3 mètres. Elle peut entrer dans l'espace d'une autre créature et l'occuper. Elle est résistante aux dégâts non magiques et elle est avantagée lors des jets de sauvegarde de Force, de Dextérité et de Constitution. Elle peut passer à travers de petits trous, de minces ouvertures et même de simples fissures; en revanche, les liquides équivalent pour elle à des surfaces solides. Elle ne peut pas tomber et continue de flotter dans les airs même si elle est étourdie ou neutralisée.</p><br/><p>Sous forme de nuage brumeux, la cible ne peut pas parler ni manipuler d'objet. Il lui est impossible de lâcher les objets qu'elle portait et qu'elle transportait et personne ne peut les utiliser ni interagir avec eux. Elle ne peut pas attaquer ni lancer de sort.</p><br/>"
};

export  const FOU_RIRE_DE_TASHA: Spell = {
  type: IndexElementType.Spell,
  id: "fou-rire-de-tasha",
  name: "Fou rire de Tasha",
  level: 1,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S, M (de minuscules tartes et une plume à agiter dans les airs)",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>Une créature de votre choix située à portée dans votre champ de vision trouve soudain tout ce qui l'entoure d'une drôlerie hilarante et succombe à un fou rire irrépressible dès que ce sort l'affecte. Elle doit réussir un jet de sauvegarde de Sagesse ou se retrouver à terre, neutralisée et incapable de se relever pendant toute la durée du sort.</p><br/><p>Ce sort n'affecte pas les créatures dotées d'une Intelligence de 4 ou moins.</p><br/><p>À la fin de chacun de ses tours et chaque fois qu'elle subit des dégâts, la cible a droit à un nouveau jet de sauvegarde de Sagesse. Elle est avantagée lors de ce jet si ce sont des dégâts qui l'ont provoqué. Si la cible le réussit, le sort se termine.</p><br/>"
};

export  const FOUET_EPINEUX: Spell = {
  type: IndexElementType.Spell,
  id: "fouet-épineux",
  name: "Fouet épineux",
  level: 0,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S, M (une tige de plante épineuse)",
  duration: "Instantanée",
  description: "<p>Vous créez un long fouet semblable à une liane couverte d'épines. Sur votre ordre, il frappe une créature à portée.</p><br/><p>Faites une attaque de sort au corps à corps contre la cible.</p><br/><p>Si vous touchez, la créature subit 1d6 dégâts perforants et, si la créature est de taille Grande ou inférieure, vous l'attirez sur 3 mètres dans votre direction.</p><br/><p>Les dégâts du sort augmentent de 1d6 quand vous atteignez le niveau 5 (2d6), le niveau 11 (3d6) et le niveau 17 (4d6).</p><br/>"
};

export  const FOULEE_BRUMEUSE: Spell = {
  type: IndexElementType.Spell,
  id: "foulée-brumeuse",
  name: "Foulée brumeuse",
  level: 2,
  school: SpellSchool.Conjuration,
  castingTime: "1 action bonus",
  range: "Personnelle",
  components: "V",
  duration: "Instantanée",
  description: "<p>Vous êtes brièvement entouré d'une brume argentée et vous vous téléportez sur un maximum de 9 mètres jusqu'à un espace inoccupé situé dans votre champ de vision.</p><br/>"
};

export  const FRACASSEMENT: Spell = {
  type: IndexElementType.Spell,
  id: "fracassement",
  name: "Fracassement",
  level: 2,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S, M (un éclat de mica)",
  duration: "Instantanée",
  description: "<p>Un bruit retentit soudain avec une intensité douloureuse, à partir d'un point situé à portée. Chaque créature située dans une sphère de 3 mètres de rayon centrée sur ce point doit faire un jet de sauvegarde de Constitution. Les créatures qui le ratent subissent 3d8 dégâts de tonnerre, les autres la moitié seulement. Une créature faite de matière inorganique, comme de la pierre, du cristal ou du métal est désavantagée sur ce jet de sauvegarde.</p><br/><p>Un objet non magique que personne ne porte ni ne transporte subit aussi ces dégâts s'il se trouve dans la zone du sort.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou plus, les dégâts augmentent de 1d8 par niveau au-delà du 2ème.</p><br/>"
};

export  const FRAPPE_PIEGEUSE: Spell = {
  type: IndexElementType.Spell,
  id: "frappe-piégeuse",
  name: "Frappe piégeuse",
  level: 1,
  school: SpellSchool.Conjuration,
  castingTime: "1 action bonus",
  range: "Personnelle",
  components: "V",
  duration: "Concentration, jusqu'à 1 minute",
  description: "<p>La prochaine attaque armée, faite avant la fin de ce sort, qui vous permet de toucher une créature fait jaillir une masse grouillante de lianes épineuses au point d'impact.</p><br/><p>La cible doit réussir un jet de sauvegarde de Force, sans quoi elle est entravée jusqu'à la fin du sort. Une créature de taille Grande ou supérieure est avantagée sur ce jet de sauvegarde. Si la cible réussit son jet de sauvegarde, les lianes se flétrissent.</p><br/><p>Tant que la cible est entravée par le sort, elle subit 1d6 dégâts perforants au début de chacun de ses tours. Une créature entravée par les lianes peut utiliser son action pour faire un jet de sauvegarde de Force contre le DD du jet de sauvegarde de votre sort. Une créature suffisamment proche de la cible pour la toucher peut aussi effectuer ce jet.</p><br/><p>Si le jet est réussi, la cible est libérée.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, les dégâts augmentent de 1d6 par emplacement de sort au-delà du 1er.</p><br/>"
};

export  const FUSION_DANS_LA_PIERRE: Spell = {
  type: IndexElementType.Spell,
  id: "fusion-dans-la-pierre",
  name: "Fusion dans la pierre",
  level: null,
  school: SpellSchool.Transmutation,
  castingTime: "1 action / Rituel",
  range: "Contact",
  components: "V, S",
  duration: "8 heures",
  description: "<p>Vous entrez dans un objet ou une surface de pierre assez grande pour contenir entièrement votre corps, votre personne et votre équipement fusionnant avec la pierre pendant toute la durée du sort. Vous utilisez votre déplacement pour entrer dans la pierre en un point que vous êtes en mesure de toucher. Il ne reste alors rien de visible ni de détectable indiquant votre présence pour des sens non magiques.</p><br/><p>Tant que vous êtes fusionné avec la pierre, vous ne voyez pas ce qui se passe à l'extérieur et vous êtes désavantagé lors des tests de Sagesse (Perception) destinés à entendre les sons qui retentissent à l'extérieur de la pierre. Vous restez conscient du temps qui passe et vous pouvez lancer des sorts sur votre propre personne. Vous pouvez utiliser votre déplacement pour quitter la pierre par l'endroit par ou vous y êtes entré, ce qui met fin au sort. En dehors de cela, vous êtes dans l'incapacité de vous déplacer.</p><br/><p>Vous n'êtes pas blessé si la pierre subit des dégâts mineurs, mais si elle est partiellement détruite ou change de forme (au point que vous ne tenez plus entièrement à l'intérieur), elle vous expulse et vous subissez 6d6 dégâts contondants. Si la pierre est complètement détruite (ou transmutée en une substance différente), elle vous expulse et vous subissez 50 dégâts contondants. Si vous vous faites expulser de la pierre, vous vous retrouvez à terre dans l'espace inoccupé le plus proche de celui par lequel vous etes entré dans la roche.</p><br/>"
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
  CONFUSION,
  CONTACT_AVEC_LES_PLANS,
  CONTACT_GLACIAL,
  CONTAGION,
  CONTAMINATION,
  CONTRESORT,
  CONTROLE_DE_LEAU,
  CONTROLE_DU_CLIMAT,
  CONVOCATIONS_INSTANTANEES_DE_DRAWMIJ,
  CONQUILLE_ANTIVIE,
  CORDE_ENCHANTEE,
  CORDON_DE_FLECHES,
  COULEURS_DANSANTES,
  COUP_AU_BUT,
  COURONNE_DU_DEMENT,
  CREATION_DE_MORT_VIVANT,
  CREATION_DE_NOURRITURE_ET_DEAU,
  CREATION_OU_DESTRUCTION_DEAU,
  CROISSANCE_DEPINES,
  CROISSANGE_VEGETALE,
  CROSSE_DES_DRUIDES,
  DANSES_IRRESISTIBLE_DOTTO,
  DEBLOCAGE,
  DECHARGE_OCCULTE,
  DEDALE,
  DEGUISEMENT,
  DELIVRANCE_DES_MALEDICTIONS,
  DEMI_PLAN,
  DESINTEGRATION,
  DETECTION_DE_LA_MAGIE,
  DETECTION_DE_LINVISIBILITE,
  DETECTION_DES_PENSEES,
  DETECTION_DES_PIEGES,
  DETECTION_DU_MAL_ET_DU_BIEN,
  DETECTION_DU_POISON_ET_DES_MALADIES,
  DISCOURS_CAPTIVANT,
  DISQUE_FLOTTANT_DE_TENSER,
  DISSIMULATION_SUPREME,
  DISSIPATION_DE_LA_MAGIE,
  DISSIPATION_DU_BIEN_ET_DU_MAL,
  DIVINATION,
  DOIGT_DE_MORT,
  DOMINATION_DANIMAL,
  DOMINATION_DE_MONSTRE,
  DOMINATION_DE_PERSONNE,
  DON_DES_LANGUES,
  DOUBLE_ILLUSOIRE,
  DOUX_REPOS,
  DRUIDISME,
  DUEL_FORCE,
  ECLAIR,
  ECLAT_DU_SOLEIL,
  EMBRUNS_PRISMATIQUES,
  EMPRISONNEMENT,
  ENCHEVETREMENT,
  ENNEMI_SUBCONSCIENT,
  ENTRAVE_PLANAIRE,
  EPEE_DE_MORDENKAINEN,
  ESPRIT_FAIBLE,
  ESPRIT_IMPENETRABLE,
  ESPRITS_GARDIENS,
  ETAT_CADAVERIQUE,
  EVEIL,
  FABRICATION,
  FACONNAGE_DE_LA_PIERRE,
  FAUX_AMIS,
  FAVEUR_DIVINE,
  FESTIN_DES_HEROS,
  FEUILLE_MORTE,
  FLAMME_ETERNELLE,
  FLAMME_SACREE,
  FLAMMES,
  FLEAU_DINSECTES,
  FLECHE_ACIDE_DE_MELF,
  FLECHE_DE_FOUDRE,
  FLETRISSEMENT,
  FLOU,
  FORCE_FANTASMAGORIQUE,
  FORME_ETHEREE,
  FORME_GAZEUSE,
  FOU_RIRE_DE_TASHA,
  FOUET_EPINEUX,
  FOULEE_BRUMEUSE,
  FRACASSEMENT,
  FRAPPE_PIEGEUSE,
  FUSION_DANS_LA_PIERRE
];