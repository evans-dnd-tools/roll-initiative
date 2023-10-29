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
  description: "<p>Vous tentez d'envoyer une créature située dans votre champ de vision dans un autre plan d'existence. Elle doit réussir un jet de sauvegarde de Charisme ou se faire bannir.</p><br/><p>Si la cible est native du plan d'existence sur lequel vous vous trouvez, vous l'exilez dans un demi-plan inoffensif.</p><br/><p>Elle est neutralisée tant qu'elle se trouve là-bas et y reste jusqu'à la fin du sort. À ce moment, elle réapparaît à l'endroit qu'elle a quitté ou dans l'espace inoccupé le plus proche si son espace de départ est occupé.</p><br/><p>Si la cible est originaire d'un plan d'existence autre que celui sur lequel vous vous trouvez, une légère détonation accompagne son retour de force sur son plan d'origine.</p><br/><p>Si le sort se termine avant qu'une minute ne se soit écoulée. la cible réapparaît à l'endroit qu'elle a quitté ou dans lespace inoccupé le plus proche si son espace de départ est occupé. Sinon, elle ne revient pas.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 5 ou plus, vous pouvez viser une créature de plus par niveau au-delà du 4ème.</p>"
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
  description: "<p>Vous créez un mur vertical constitué de lames tournoyantes faites d'énergie magique et tranchantes comme des rasoirs.</p><br/><p>Le mur apparaît à portée et persiste pour toute la durée du sort. Vous pouvez créer un mur droit d'un maximum de 30 mètres de long, 6 mètres de haut et 1,50 mètre d'épaisseur, ou un mur circulaire d'un maximum de 18 mètres de diamètre, 6 mètres de haut et 1,50 mètre d'épaisseur. Le mur offre un abri supérieur aux créatures qui se trouvent derrière lui, et son espace est traité comme un terrain difficile.</p><br/><p>Quand une créature pénètre dans la zone du mur pour la première fois au cours de son tour ou quand elle commence son tour dans cette zone, elle doit faire un jet de sauvegarde de Dextérité. Si elle le rate, elle subit 6d10 dégâts tranchants; si elle le réussit, elle en reçoit seulement la moitié.</p>"
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
  description: "<p>Vous bénissez jusqu'à trois créatures de votre choix situées à portée. Quand une cible fait un jet d'attaque ou de sauvegarde avant la fin du sort, elle lance 1d4 et ajoute le montant obtenu au jet d'attaque ou de sauvegarde.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, vous pouvez affecter une créature de plus par niveau au-delà du 1.</p>"
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
  description: "<p>Faites une attaque de sort au corps à corps contre une créature située à une distance inférieure ou égale à votre allonge. Si vous la touchez, elle subit 3d10 dégâts nécrotiques.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, les dégâts augmentent de 1d10 par niveau au-delà du 1*.</p>"
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
  description: "<p>Vous implantez un message dans un objet situé à portée.</p><br/><p>On entend le message dès que les conditions le déclenchant sont remplies. Choisissez un objet situé dans votre champ de vision qui n'est ni porté ni transporté par une autre créature. Prononcez ensuite le message, qui doit se composer de 25 mots au maximum, mais peut se répéter pendant un maximum de 10 minutes. Enfin, déterminez les circonstances dans lesquelles le message s'activera.</p><br/><p>Quand les conditions de déclenchement sont remplies, une bouche magique apparaît sur l'objet et récite le message avec la même voix que vous et au volume où vous l'avez prononcé. Si l'objet choisi possède une bouche ou quelque chose qui y ressemble (comme la bouche d'une statue), la bouche magique apparait de manière à donner l'impression que les paroles sortent des lèvres de l'objet. Lors de l'incantation, vous pouvez décider que le sort se termine une fois le message transmis ou qu'il reste actif et répète le message chaque fois que les conditions de déclenchement sont remplies.</p><br/><p>Ces dernières peuvent être aussi génériques ou spécifiques que vous le désirez, mais elles doivent se baser sur des données visuelles ou audibles, perceptibles dans un rayon de 9 mètres autour de l'objet. Par exemple, vous pouvez ordonner à la bouche de parler des qu'une créature approche à 9 mètres ou moins de l'objet ou quand une cloche d'argent retentit dans un rayon de 9 mètres.</p>"
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
  description: "<p>Une barrière invisible faite de force magique apparaît autour de vous et vous protege. Jusqu'au début de votre prochain tour, vous avez un bonus de +5 à la CA, y compris contre l'attaque qui a déclenché l'incantation du sort, et vous ne subissez aucun dégât de la part de projectile magique.</p>"
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
  description: "<p>De fines volutes de flammes enveloppent votre corps pendant toute la durée du sort, émettant une lumière vive dans un rayon de 3 mètres et une lumière faible dans un rayon de 3 metres de plus. Vous pouvez mettre un terme prématuré au sort en utilisant une action.</p><br/><p>Les flammes vous offrent un bouclier chaud ou froid, comme bon vous semble. Le bouclier chaud vous apporte une résistance contre les dégâts de froid, le bouclier froid une résistance contre les dégâts de feu.</p><br/><p>De plus, quand une créature située dans un rayon de 1,50 mètre autour de vous vous touche avec une attaque au corps à corps, le bouclier génère une gerbe de flammes.</p><br/><p>Si le bouclier est chaud, il infige 2d8 dégâts de feu à l'assaillant, s'il est froid, il lui inflige 2d8 dégâts de froid.</p>"
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
  description: "<p>Un champ scintillant apparaît autour d'une créature de votre choix située à portée et lui donne un bonus de +2 à la CA pendant toute la durée du sort.</p>"
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
  description: "<p>Vous tendez la main en direction d'une créature située à portée dans votre champ de vision et projetez une bouffée de gaz toxique sortie de votre paume. La créature doit réussir un jet de sauvegarde de Constitution ou subir 1d12 dégâts de poison.</p><br/><p>Les dégâts du sort augmentent de 1d12 quand vous atteignez le niveau 5 (2d12), le niveau 11 (3d12) et le niveau 17 (4d12).</p>"
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
  description: "<p>Une traînée luisante part de votre doigt tendu et file vers un point de votre choix situé à portée et dans votre champ de vision, où elle explose dans une gerbe de flammes grondantes.</p><br/><p>Chaque créature située dans une sphère de 6 mètres de rayon centrée sur ce point doit faire un jet de sauvegarde de Dextérité.</p><br/><p>Celles qui échouent subissent 8d6 dégâts de feu, les autres la moitié seulement.</p><br/><p>Le feu s'étend en contournant les angles. Il embrase les objets inflammables de la zone, à moins que quelqu'un ne les porte ou ne les transporte.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, les dégâts augmentent de 1d6 par niveau au-delà du 3ème.</p>"
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
  description: "<p>Un rayon de lumière jaune jaillit de votre doigt tendu et se condense pour former une bille luisante en un point de votre choix situé à portée pendant toute la durée du sort. Quand le sort se termine, soit parce que votre concentration se brise, soit parce que vous y mettez volontairement un terme, la bille se dilate dans un grondement sourd et explose en une gerbe de feu qui s'étend en franchissant les angles éventuels.</p><br/><p>Toutes les créatures situées dans une sphère de 6 mètres de rayon centrée sur le point où se trouvait la bille doivent faire un jet de sauvegarde de Dextérité. Celles qui échouent reçoivent un montant de dégâts de feu égal au total de dégars accumulés (voir plus loin), les autres reçoivent la moitié de ce montant seulement.</p><br/><p>De base, le sort inflige 12d6 dégâts de feu. À la fin de votre tour, si la bille n'a pas encore explosé, ces dégâts augmentent de 1d6.</p><br/><p>Si quelqu'un touche la bille avant la fin de l'intervalle, il doit faire un jet de sauvegarde de Dextérité. S'il échoue, le sort se termine immédiatement et la bille explose. S'il réussit, il peut lancer la bille à une distance maximale de 12 mètres. Si elle touche un objet solide ou une créature, le sort se termine et la</p><br/><p>bille explose.</p><br/><p>Les flammes endommagent les objets qui se trouvent dans la zone et embrasent les objets inflammables qui ne sont ni portés ni transportés.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 8 ou plus, les dégâts de base augmentent de 1d6 par niveau au-delà du 7ème.</p>"
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
  description: "<p>Une zone de vent fort de 18 mètres de long sur 3 de large souffle depuis votre position dans la direction que vous avez choisie pendant toute la durée du sort. Chaque créature commençant son tour dans la zone doit réussir un jet de sauvegarde de Force, sans quoi elle est repoussée de 4,50 mètres à l'opposé de vous, dans la direction où souffle le vent.</p><br/><p>Une créature qui se trouve dans la zone doit dépenser</p><br/><p>60 centimètres de mouvement pour se rapprocher de vous de 30 centimètres.</p><br/><p>La bourrasque disperse les gaz et les vapeurs et éteint les bougies, les torches et autres flammes nues similaires dans la zone. Les flammes protégées, par une lanterne par exemple, s'agitent follement et ont 50% de chance de s'éteindre.</p><br/><p>Vous pouvez changer la direction dans laquelle souffle la bourrasque par une action bonus à chacun de vos tours jusqu'à la fin du sort.</p>"
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
  description: "<p>Vous créez une sphère de 6 mètres de rayon faite d'un brouillard vert jaunâtre empoisonné. Il est centré sur un point de votre choix situé à portée. Le brouillard s'étend en contournant les coins au besoin. Il persiste pendant toute la durée du sort ou jusqu'à ce qu'un vent fort le disperse el mette un terme au sort. La visibilité est lourdement obstruée dans sa zone d'effet.</p><br/><p>Quand une créature entre dans la zone du sort pour la première fois de son tour ou qu'elle y démarre son tour, elle doit faire un jet de sauvegarde de Constitution. Elle subit 5d5</p><br/><p>ciele de poisons le rac de de Const ulion. El moit sd ete le réussit. Le brouillard affecte même les créatures qui retiennent leur souffle ou qui n'ont pas besoin de respirer.</p><br/><p>Le brouillard s'éloigne de vous sur une distance de 3 mètres au début de chacun de vos tours, rampant à la surface du sol.</p><br/><p>Comme ses vapeurs sont plus lourdes que l'air, il s'enfonce dans les replis du terrain et s'infiltre même dans les ouvertures.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou plus, les dégâts augmentent de 1d8 par niveau au-delà du 5ème.</p>"
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
  description: "<p>Une prison immobile et invisible, en forme de cube et faite de force magique, se forme soudain autour d'une zone de votre choix située à portée. Ce peut être une cage ou une boite hermétique, à votre guise.</p><br/><p>Une prison en forme de cage peut faire un maximum de 6 mètres d'arête et dispose de barreaux d'un centimètre d'épaisseur placés à un centimètre d'intervalle.</p><br/><p>Une prison en forme de boîte peut faire un maximum de 3 mètres d'arête et forme une barrière pleine qui empêche la matière de passer. Elle bloque aussi le passage des sorts lancés vers l'intérieur ou l'extérieur.</p><br/><p>Quand vous lancez ce sort, chaque créature qui se trouve entièrement au sein de la zone affectée se retrouve prise au piège. Une créature qui s'y trouve seulement en partie ou qui s'avère trop grande pour y tenir est repoussée vers l'extérieur de la zone jusqu'à ce qu'elle la quitte complètement.</p><br/><p>Une créature enfermée dans la cage ne peut pas la quitter par des moyens non magiques. Si elle tente d'utiliser la téléportation ou les déplacements interplanaires pour séchapper, elle doit d'abord faire un jet de sauvegarde de Charisme. Si elle le réussit, elle peut utiliser cette magie pour fuir, sinon elle ne parvient pas à quitter la cage et l'utilisation du sort ou de l'effet est gaspillée. La cage s'étend aussi sur le plan éthéré, ce qui bloque les déplacements éthérés.</p><br/><p>La dissipation de la magie est sans effet sur ce sort.</p>"
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
  description: "<p>Le simple contact de votre main enveloppée d'ombres peut siphonner la force vitale d'autrui pour soigner vos propres plaies. Faites une attaque de sort au corps à corps contre une créature située à une distance inférieure ou égale à votre allonge. Si vous touchez, elle subit 3d6 dégâts nécrotiques et vous récupérez un montant de points de vie égal à la moitié des dégâts infligés. Vous pouvez dépenser voire action à chacun de vos tours pour répéter cette attaque jusqu'à la fin du sort.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, les dégâts augmentent de 1d6 par niveau au-delà du 3ème.</p>"
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
  description: "<p>Vous pouvez rendre un ennemi sourd ou aveugle.</p><br/><p>Choisissez une créature autre que vous qui se situe à portée et dans votre champ de vision. Elle doit faire un jet de sauvegarde de Constitution. Si elle échoue, elle est soit aveugle, soit sourde (à vous de choisir) pendant toute la durée du sort. Elle a droit à un nouveau jet de sauvegarde de Constitution à la fin de chacun de ses tours, le sort se terminant si elle le réussit.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou plus, vous pouvez viser une créature de plus par niveau au-delà du 2ème.</p>"
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
  description: "<p>Une sphère d'énergie négative s'étend dans un rayon de 18 mètres à partir d'un point situé à portée. Chaque créature située dans la sphère doit faire un jet de sauvegarde de Constitution. Celles qui échouent subissent 8d6 dégâts nécrotiques, les autres la moitié seulement.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou plus, les dégâts augmentent de 2d6 par niveau au-delà du 6ème.</p>"
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
  description: "<p>Une énergie divine émane de vous, qui déforme les énergies magiques pour les diffuser dans un rayon de 9 mètres autour de votre personne. La sphère est centrée sur vous et se déplace avec vous jusqu'à la fin du sort. Pendant toute la durée du sort, toutes les créatures amicales de la zone (vous y compris) ont l'avantage lors de leurs jets de sauvegarde contre les sorts et autres effets magiques. De plus, quand une créature affectée réussit son jet de sauvegarde contre un sort ou un effet magique qui inflige des dégâts réduits de moitié en cas de jet de sauvegarde réussi, elle ne subit absolument aucun dégât.</p>"
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
  description: "<p>Lorsque vous lancez ce sort, vous tracez un cercle de 3 mètres de diamètre au sol et y inscrivez des symboles qui relient l'endroit où vous vous trouvez actuellement à un cercle de téléportation permanent de votre choix dont vous connaissez la séquence de symboles et qui se trouve sur le même plan d'existence que vous. Un portail scintillant souvre dans le cercle que vous avez tracé et reste ouvert jusqu'à la fin de votre prochain tour. Toute créature qui franchit ce portail apparait instantanément dans un rayon de 1,50 mètre autour du cercle de destination ou dans l'espace inoccupé le plus proche si le reste est occupe.</p><br/><p>Nombre de temples majeurs, de guildes et d'autres lieux d'importance possèdent des cercles de téléportation permanents tracés quelque part dans leur enceinte. Chacun de ces cercles utilise une séquence de symboles uniques: une série de runes magiques disposées selon un motif particulier.</p><br/><p>Lorsque vous apprenez à lancer ce sort, vous apprenez la séquence associée à deux destinations situées sur le plan matériel et déterminées par le MD. Vous pouvez apprendre d'autres séquences de symboles au cours de vos aventures.</p><br/><p>Pour en mémoriser une, vous devez l'étudier pendant 1 minute.</p><br/><p>Vous pouvez créer un cercle de téléportation permanent en lançant ce sort au même endroit tous les jours pendant un an.</p><br/><p>Vous n'avez pas besoin d'utiliser le cercle pour vous téléporter quand vous lancez ce sort pour cela.</p>"
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
  description: "<p>Vous créez un cylindre d'énergie magique de 3 mètres de rayon pour 6 mètres de haut, centré sur un point au sol situé à portée et dans votre champ de vision. Des runes luisantes apparaissent là où le cylindre touche le sol ou une autre surface.</p><br/><p>Choisissez l'un des types de créatures suivants: célestes, élémentaires, fées, fiélons ou morts-vivants. Le cercle affecte une créature du type choisi de la manière suivante.</p><br/><p>La créature ne peut pas entrer de son plein gré dans le cylindre par des moyens non magiques. Si elle tente d'utiliser la téléportation ou le voyage extraplanaire pour y pénétrer, elle doit auparavant réussir un jet de sauvegarde de Charisme.</p><br/><p>La créature est désavantagée lors des jets d'attaque contre les créatures se trouvant dans le cylindre.</p><br/><p>La créature ne peut ni charmer, ni effrayer, ni posséder les créatures situées dans le cylindre.</p><br/><p>Quand vous lancez ce sort, vous pouvez décider que sa magie agira à l'envers, empêchant les créatures du type choisi de quitter le cercle et protégeant contre elles les individus situés à l'extérieur du cercle.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, la durée du sort augmente d'une heure par niveau au-delà du 3ème.</p>"
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
  description: "<p>Vous créez un are électrique qui file vers une cible de votre choix, située à portée dans votre champ de vision. Trois éclairs bondissent ensuite de cette cible sur un maximum de trois autres cibles qui doivent toutes se trouver dans un rayon de 9 mètres autour de la première. Une cible peut être une créature ou un objet et ne peut recevoir qu'un seul éclair.</p><br/><p>Chaque cible doit faire un jet de sauvegarde de Dextérité et subit 10d8 dégâts de foudre en cas d'échec, la moitié en cas de réussite.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou plus, un éclair de plus bondit de la première cible vers une autre pour chaque niveau au-delà du 6ème.</p>"
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
  description: "<p>Une sphère d'antimagie invisible de 3 mètres de rayon vous entoure. La zone qu'elle englobe est coupée de l'énergie magique qui imprègne le multivers. En son sein, il est impossible de lancer un sort, les créatures invoquées disparaissent et même les objets magiques deviennent ordinaires. La sphère reste centrée sur vous et se déplace avec vous jusqu'à la fin du sort.</p><br/><p>Les sorts et autres effets magiques, en dehors de ceux émanant d'un artefact ou d'une divinité, sont supprimés au sein de la sphère et ne peuvent pénétrer dans son espace.</p><br/><p>Un emplacement dépensé pour lancer un sort ainsi supprimé est tout de même consommé. L'effet ne fonctionne pas tant qu'il est supprimé, mais le temps passé sous suppression est tout de même décompté de sa durée d'efficacité.</p><br/><p>Effets visant une cible. Les sorts et autres effets magiques visant une créature ou un objet situé dans la sphère, comme projectile magique ou charme-personne, n'ont aucun effet sur cette cible.</p><br/><p>Zones de magie. L'aire d'un sort ou d'un effet magique, comme celle d'une boule de feu, ne peut pas s'étendre au sein de la sphère. Si la sphère recouvre une zone de magie existante, l'effet de cette dernière est supprimé dans la partie recouverte par la sphère. Par exemple, les flammes d'un mur de feu sont supprimées au sein de la sphère, créant un trou dans le mur si la partie recouverte est assez grande.</p><br/><p>Sorts. Tout sort ou effet magique actif sur une créature ou un objet est supprimé dès qu'elle ou il se trouve à l'intérieur et pendant tout le temps qu'elle ou il y reste.</p><br/><p>Objets magiques. Les propriétés et les pouvoirs d'un objet magique sont supprimés une fois au sein de la sphère.</p><br/><p>Par exemple, une épée longue +1 située dans la sphère fonctionne comme une épée longue ordinaire.</p><br/><p>Les propriétés et les pouvoirs d'une arme magique sont supprimés si son utilisateur la manie contre une cible située dans la sphère ou s'il se trouve dans la sphère. Si une arme ou une munition magique quitte entièrement la sphère (par exemple si vous tirez une flèche magique ou projetez une lance magique en dehors de la sphère), la suppression de magie cesse d'affecter l'objet dès qu'il quitte la sphère.</p><br/><p>Déplacement magique. La téléportation et les voyages planaires échouent systématiquement au sein de la sphère, que cette dernière serve de destination ou de point de départ à ce type de déplacement. Un portail menant en un autre lieu, sur un autre monde ou sur un autre plan d'existence se ferme temporairement tant qu'il est englobé dans la sphère, de même que l'ouverture sur un espace extradimensionnel telle celle créée par le sort corde enchantée.</p><br/><p>Créatures et objets. Une créature ou un objet invoqués ou créés par magie disparaissent temporairement si la sphère les recouvre. Ils réapparaissent instantanément des que l'espace qu'ils occupent ne se trouve plus au sein de la sphère.</p><br/><p>Dissipation de la magie. Les sorts et les effets magiques comme dissipation de la magie n'ont aucun effet sur la sphère. De même, les sphères issues de divers sorts de champ antimagie ne s'annulent pas les unes les autres.</p>"
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
  description: "<p>Vous prenez la forme d'une créature différente pendant toute la durée du sort. Vous pouvez revêtir l'apparence de n'importe quelle créature dotée d'un facteur de puissance égal ou inférieur au vôtre. En revanche, vous ne pouvez pas vous changer en artificiel ni en mort-vivant, et vous devez avoir vu au moins une fois la créature que vous imitez. Vous vous changez en un spécimen ordinaire de cette créature, sans niveau de classe et sans le trait incantation.</p><br/><p>Vos statistiques de jeu sont remplacées par celles de la créature choisie, mais vous conservez votre alignement et vos valeurs d'Intelligence, de Sagesse et de Charisme. Vous gardez également vos compétences et vos maîtrises de jet de sauvegarde, en plus de gagner celles de la créature. Si elle possède les mêmes maîtrises que vous, mais que son bonus est plus élevé, utilisez-le à la place du vôtre. Vous ne pouvez pas utiliser les actions d'antre ni les actions légendaires de la créature.</p><br/><p>Vous adoptez les dés de vie et les points de vie de votre nouvelle forme. Quand vous reprenez votre forme normale, vous revenez au nombre de points de vie qui était le vôtre avant de vous transformer. Si vous reprenez votre forme normale parce que vous êtes tombé à 0 point de vie, les dégâts en surplus sont déduits des points de vie de votre forme normale. Tant que ces dégâts ne font pas tomber les points de vie de votre forme normale à 0, vous n'êtes pas inconscient.</p><br/><p>Vous conservez les avantages de vos pouvoirs de race, de classe et autre et vous êtes toujours en mesure de les utiliser, à condition que votre nouvelle forme soit physiquement capable de le faire. Vous ne pouvez pas utiliser vos sens spéciaux (comme la vision dans le noir), à moins que votre nouvelle forme n'en soit aussi dotée. Vous pouvez parler uniquement si votre nouvelle forme en est normalement capable.</p><br/><p>Quand vous vous transformez, vous choisissez si votre équipement tombe au sol, s'il fusionne avec votre nouvelle forme ou si cette nouvelle forme le porte sur elle, auquel cas il fonctionne normalement. C'est au MD de déterminer si la nouvelle forme peut porter une pièce d'équipement. en fonction de sa taille et de sa morphologie. Votre équipement ne change pas de forme ni de taille pour s'accorder à votre nouvelle forme ; si cette dernière ne peut s'en accommoder, l'équipement ou certaines pièces d'équipement tombent à terre ou fusionnent avec votre nouvelle silhouette. L'équipement fusionné ne génère aucun effet.</p><br/><p>Pendant la durée du sort, vous pouvez utiliser votre action pour prendre une nouvelle forme répondant aux mêmes critères et aux mêmes règles que précédemment, à une exception : si votre nouvelle forme possède plus de points de vie que la précédente, votre nombre de points de vie reste tel qu'il était.</p>"
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
  description: "<p>Vous et un maximum de huit autres créatures consentantes vous donnez la main pour former un cercle et êtes transportés sur un autre plan d'existence. Vous pouvez spécifier une destination en termes génériques, comme la Cité d'airain sur le plan élémentaire du Feu ou le palais de Dispater dans la deuxième strate des Neuf Enfers. Vous apparaîtrez alors à cet endroit ou à proximité. Par exemple, si vous tentez d'atteindre la Cité d'airain, vous pouvez arriver dans sa rue de l'Acier, devant la Porte des cendres ou de l'autre côté de la mer de Feu d'où vous la contemplez. C'est au MD de décider.</p><br/><p>Sinon, si vous connaissez la séquence de glyphes magiques d'un cercle de téléportation présent sur un autre plan d'existence, ce sort peut vous conduire dans ce cercle. S'il est trop étroit pour accueillir toutes les créatures qui voyagent avec vous, les créatures en trop apparaissent dans les espaces inoccupés les plus proches du cercle.</p><br/><p>Vous pouvez aussi utiliser ce sort pour bannir une créature non consentante sur un autre plan. Choisissez une créature à votre portée et faites une attaque de sort au corps à corps contre elle. Si vous touchez, elle doit faire un jet de sauvegarde de Charisme. Si elle le rate, elle est emportée en un endroit aléatoire du plan d'existence que vous nommez. Une fois là, c'est à elle de trouver un moyen de rentrer sur son plan natal.</p>"
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
  description: "<p>Vous tentez de charmer un humanoïde se trouvant à portée et dans votre champ de vision. Il doit faire un jet de sauvegarde de Sagesse, pour lequel il est avantagé si vous ou vos compagnons êtes actuellement en train de le combattre.</p><br/><p>S'il rate son test, vous le charmez jusqu'à la fin du sort ou jusqu'à ce que vous ou vos compagnons lui fassiez du mal.</p><br/><p>La créature charmée vous considère comme un ami. Quand le sort se termine, elle sait que vous l'avez charmée.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, vous pouvez charmer une créature de plus par niveau au-delà du 1\". Toutes les cibles doivent se trouver à 9 mètres ou moins les unes des autres lorsque vous lancez le sort.</p>"
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
  description: "<p>Lors de la prochaine attaque arméc au corps à corps qui vous permet de toucher une créature avant la fin de ce sort voit votre arme briller d'une vive lumière et inflige 3d8 dégâts radiants de plus à votre cible. De plus, la cible doit réussir un jet de sauvegarde de Constitution, sans quoi elle est aveuglée jusqu'à la fin du sort.</p><br/><p>Une créature aveuglée par ce sort a droit à un nouveau jet de sauvegarde de Constitution à la fin de chacun de ses tours. Dès qu'elle en réussit un, elle n'est plus aveuglée.</p>"
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
  description: "<p>Lors de la prochaine attaque armée au corps à corps qui vous permet de toucher une créature pendant la durée du sort, votre arme flamboie, comme chauffée à blanc, et l'attaque inflige 1d6 dégâts de feu supplémentaires. Elle embrase également la cible qui doit faire un jet de sauvegarde de Constitution au début de chacun de ses tours jusqu'à la fin du sort. Si elle échoue, elle subit 1d6 dégâts de feu, si elle réussit le sort se termine. Si la cible ou une créature située dans un rayon de 1,50 mètre autour d'elle utilise une action pour éteindre les flammes ou si un effet les étouffe (si la cible est plongée dans l'eau par exemple), le sort se termine.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, les dégâts initiaux augmentent de 1d6 par emplacement de sort au-delà du 1er.</p>"
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
  description: "<p>Lorsque vous touchez une cible avec une attaque armée au corps à corps pour la première fois pendant la durée de ce sort, votre attaque inflige 1d6 dégâts psychiques supplémentaires. De plus, si la cible est une créature, elle doit reussir un jet de sauvegarde de Sagesse, sans quoi elle est effrayée à votre vue jusqu'à ce que le sort se termine. Par une action, elle peut faire un jet de sauvegarde de Sagesse contre le DD du jet de sauvegarde de votre sort pour rassembler son courage et mettre fin au sort.</p>"
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
  description: "<p>Lors de la prochaine attaque armée au corps à corps qui vous permet de toucher une créature pendant la durée du intivotre arme transperce le corps et lesprit de la cible et lui taire 4d6 dégâts psychiques supplementaires. La cible doit faire un jet de sauvegarde des applementaires houe, elle est</p><br/><p>désavantagée lors des jets dittaguse, de eleateristique et ne peut pas utiliser de réaction avant la fin de son prochain tour.</p>"
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
  description: "<p>La prochaine attaque armée qui vous permet de toucher une créature avant la fin de ce sort voit votre arme crépiter d'énergie et inflige 5d10 dégâts de force à votre cible. De plus, si cette attaque réduit la cible à 50 pv ou moins, elle la bannit.</p><br/><p>Si la cible est originaire d'un plan d'existence différent de celui sur lequel vous vous trouvez, elle disparaît, renvoyée dans son plan d'origine. Si elle est originaire du plan sur lequel vous vous trouvez, elle disparaît dans un demi-plan inoffensif. Elle est neutralisée tant qu'elle s'y trouve, c'est-à-dire jusqu'à la fin du sort. À ce moment, elle réapparaît à l'espace qu'elle a quitté ou dans l'espace le plus proche si le précédent est occupé.</p>"
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
  description: "<p>La prochaine attaque armée qui vous permet de toucher une créature avant la fin de ce sort voit votre arme briller d'une lumière astrale et inflige 2d6 dégâts radiants de plus à votre cible, qui devient visible si elle était invisible et émet une lumière faible dans un rayon de 1,50 mètre jusqu'à la fin du sort. Elle ne peut plus devenir invisible pendant toute cette durée.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou plus, les dégâts supplémentaires augmentent de 1d6 par emplacement de sort au-delà du 2ème.</p>"
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
  description: "<p>Lorsque vous touchez une cible avec une attaque armée au corps à corps pour la première fois pendant la durée de ce sort, votre arme fait retentir un fracas tonitruant audible dans un rayon de 90 mètres autour de vous, et l'attaque inflige 2d6 dégâts de tonnerre supplémentaires. De plus, si la cible est une créature, elle doit réussir un jet de sauvegarde de Force ou se trouver repoussée sur 3 mètres a l'opposé de votre position et tomber à terre.</p>"
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
  description: "<p>Vous invoquez un chien de garde fantomatique dans un espace inoccupé situé à portée et dans votre champ de vision.</p><br/><p>Il reste là pendant toute la durée du sort ou jusqu'à ce que vous le renvoyiez par une action ou que vous vous éloigniez à plus de 30 mètres de lui.</p><br/><p>Le chien est invisible pour tout le monde sauf pour vous et il est impossible de le blesser. Il se met à aboyer dès qu'une créature de taille Petite ou supérieure arrive à 9 mètres de lui sans prononcer d'abord le mot de passe que vous avez choisi lors de l'incantation. Le chien perçoit les créatures invisibles et voit ce qui se passe sur le plan éthéré. Il ignore les illusions.</p><br/><p>Au début de votre tour, le chien tente de mordre une créature qui vous est hostile et située dans un rayon de 1,50 mètre autour de lui. Son bonus d'attaque est égal à votre modificateur de caractéristique d'incantation + votre bonus de maîtrise. S'il touche, il inflige 4d8 dégâts perforants.</p>"
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
  description: "<p>Vous créez un organe sensoriel invisible à portée dans un endroit qui vous est familier (un endroit où vous vous êtes déjà rendu ou que vous avez déjà vu) ou dans un endroit évident qui ne vous est pas familier (comme de l'autre côté d'une porte, derrière un coin, dans un bosquet..). L'organe reste là pendant toute la durée du sort. Il est impossible de l'attaquer ou d'interagir avec.</p><br/><p>Vous choisissez la vue ou l'ouie au moment où vous lancez le sort. Vous pouvez alors utiliser le sens choisi à travers l'organe comme si vous occupiez son espace. Vous pouvez dépenser une action pour passer de la vue à l'ouie ou inversement.</p><br/><p>Une créature capable de voir l'organe sensoriel (en bénéficiant par exemple de détection de l'invisibilité ou de vision lucide) le perçoit comme un orbe lumineux intangible de la taille de votre poing.</p>"
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
  description: "<p>Pendant toute la durée du sort, vous lancez 1d20 à la fin de chacun de vos tours. Sur un 11 ou plus, vous disparaissez de votre plan d'existence actuel et apparaissez sur le plan éthéré (si vous vous trouviez déjà là, le sort échoue et l'incantation est gaspillée). Au début de votre tour suivant et quand le sort se termine alors que vous vous trouvez sur le plan éthéré, vous retournez sur un espace inoccupé de votre choix que vous pouvez voir dans un rayon de 3 mètres autour de l'espace dont vous avez disparu. S'il n'y a pas d'espace disponible dans ce rayon, vous apparaissez dans l'espace inoccupé le plus proche (choisi au hasard s'il y en a plusieurs à égale distance). Vous pouvez révoquer ce sort par une action.</p><br/><p>Tant que vous êtes sur le plan éthéré, vous voyez et entendez ce qui se passe sur le plan d'où vous venez, qui apparaît sous forme d'ombres grises, mais votre vision ne porte pas au-delà de 18 mètres. Vous pouvez seulement affecter des créatures se trouvant sur le plan éthéré et elles sont les seules à pouvoir vous affecter. Les créatures qui ne se trouvent pas sur ce plan ne peuvent ni vous percevoir, ni interagir avec vous, à moins qu'elles ne disposent d'un pouvoir le leur permettant.</p>"
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
  description: "<p>Ce sort génère la réplique inerte d'une créature vivante, pour la protéger de la mort. Le clone se forme au sein du réceptacle employé à l'incantation et grandit jusqu'à atteindre sa taille adulte et sa maturité en 120 jours; cependant, vous pouvez décider que le clone sera une version plus jeune de la créature qu'il reproduit. Il reste inerte et indéfiniment dans le même état tant que le réceptacle reste scellé.</p><br/><p>Une fois que le clone est arrivé à maturité, si la créature originale meurt, son âme se transfère dans le clone, à condition que cette âme soit libre et désireuse de revenir à la vie. D'un point de vue physique, le clone est identique à l'original. De plus, il possède la même personnalité, les mêmes souvenirs et les mêmes capacités, mais il n'hérite pas de son équipement. Les restes physiques de la créature originale ne disparaissent pas.</p><br/><p>S'ils ne sont pas détruits, ils deviennent inertes et ne peuvent pas servir à ramener la créature à la vie puisque son âme se trouve ailleurs.</p>"
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
  description: "<p>Vous dissimulez un coffre et son contenu sur le plan éthéré.</p><br/><p>Pour cela, vous devez toucher le coffre et la réplique qui sert de composante matérielle au sort. Le coffre peut contenir un maximum de 324 décimètres cubes (90 x 60 x 60 centimètres) de matière non vivante.</p><br/><p>Tant que le coffre reste sur le plan éthéré, vous pouvez utiliser une action pour toucher la réplique et le rappeler à vous. Il apparaît en un espace inoccupé au sol, situé dans un rayon de 1,50 mètre autour de vous. Vous pouvez renvoyer le coffre dans le plan éthéré en utilisant une action et en touchant le coffre et sa réplique.</p><br/><p>Au bout de 60 jours, il y a 5% de chances cumulatifs par jour que les effets du sort se terminent. Ils s'achèvent aussi si vous lancez de nouveau le sort, si la petite réplique du coffre est détruite ou si vous décidez de mettre un terme au sort par une action. Si le sort se termine alors que le grand coffre est encore sur le plan éthéré, ce coffre est irrémédiablement perdu.</p>"
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
  description: "<p>Une colonne verticale de feu divin rugissant surgit des cieux et s'abat à l'endroit de votre choix. Toute créature située dans un cylindre de 3 mètres de rayon et 12 mètres de haut centré sur le point à portée de votre choix doit faire un jet de sauvegarde de Dextérité. Celles qui échouent subissent 4d6 dégâts de feu et 4d6 dégâts radiants, les autres la moitié seulement.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou plus, les dégâts de feu ou les dégâts radiants (à vous de choisir) augmentent de 1d6 par niveau au-delà du 5ème.</p>"
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
  description: "<p>Vous envoyez un court message d'au maximum 25 mots à une créature qui vous est familière. Elle entend le message dans son esprit, sait que cest vous qui le lui avez envoyé si elle vous connaît, et peut vous répondre immédiatement de la même manière. Le sort permet aux créatures dotées d'une Intelligence minimale de 1 de comprendre le sens de votre message.</p><br/><p>Vous pouvez envoyer votre message à n'importe quelle distance et même sur un autre plan d'existence, mais si la cible est sur un autre plan, il y a 5% de chances que le message n'arrive pas à destination.</p>"
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
  description: "<p>Vous devenez capable de comprendre les bêtes et de communiquer verbalement avec elles pendant toute la durée du sort. Les connaissances et le degré de conscience de nombreuses bêtes sont limités par leur intelligence réduite, mais elles peuvent au moins vous renseigner sur les environs et les monstres avoisinants, ainsi que sur ce qu'elles perçoivent aujourd'hui ou ont perçu la veille. Si le MD accepte, vous pouvez convaincre une bête de vous accorder une petite faveur.</p>"
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
  description: "<p>Vous donnez un semblant de vie et d'intelligence à un cadavre de votre choix situé à portée. Il est alors en mesure de répondre à vos questions. Le cadavre doit encore disposer d'une bouche et ne doit pas être devenu mort-vivant. Le sort échoue si le cadavre choisi a déjà été la cible de ce sort au cours des dix jours précédents.</p><br/><p>Vous pouvez poser jusqu'à cinq questions avant la fin de la durée du sort. Les connaissances du cadavre se limitent à ce qu'il savait de son vivant, y compris au niveau des langues qu'il parle. Les réponses sont souvent brèves, cryptiques ou répétitives et le cadavre n'est absolument pas obligé de vous</p><br/><p>donner une reponse sincere si vous lui etes hostile ou s'il vous reconnaît comme étant un ennemi. Ce sort ne ramène pas l'âme de la cible dans son corps, juste l'esprit qui l'animait ; le cadavre ne peut donc pas apprendre de nouvelles informations, ne comprend rien de ce qui s'est passé après sa mort et est incapable de faire des spéculations sur l'avenir.</p>"
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
  description: "<p>Vous imprégnez la végétation située dans un rayon de 9 mètres autour de vous d'une conscience et d'une mobilité limitées, ce qui permet aux plantes de communiquer avec vous et de suivre des ordres simples. Vous pouvez interroger les végétaux sur les événements qui se sont déroulés la veille dans la zone du sort et ainsi obtenir des informations sur les créatures qui sont passées, sur les conditions météorologiques et autres.</p><br/><p>Vous pouvez également transformer un terrain rendu difficile à cause de la végétation (comme des buissons ou d'épais taillis) en terrain ordinaire pendant toute la durée du sort. Ou vous pouvez transformer un terrain ordinaire où poussent des plantes en terrain difficile pendant toute la durée du sort, par exemple de manière à ce que des plantes grimpantes et des branches gênent vos poursuivants.</p><br/><p>Les plantes peuvent exécuter d'autres tâches pour vous, si le MD donne son accord. Le sort ne leur permet pas de se déraciner et de se déplacer, mais elles peuvent agiter leurs branches, leurs vrilles et leurs tiges.</p><br/><p>Si une créature végétale se trouve dans la zone, vous pouvez communiquer avec elle comme si vous partagiez un même langage, mais vous ne gagnez pas de capacité magique permettant de l'influencer.</p><br/><p>Ce sort permet de libérer une créature entravée par les plantes nées d'un sort d'enchevêtrement.</p>"
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
  description: "<p>Vous entrez en contact avec votre divinité ou l'un de ses représentants et lui posez jusqu'à trois questions auxquelles on peut répondre par oui ou par non. Vous devez les poser avant la fin du sort et vous recevez une réponse correcte à chacune d'entre elles.</p><br/><p>Les êtres divins ne sont pas forcément omniscients, il se peut donc que vous obteniez « obscur » comme réponse, si votre question porte sur des informations sortant du champ des connaissances de votre divinité. Si une réponse d'un seul mot risque de se révéler trompeuse ou contraire aux intérêts de la divinité, le MD peut lui substituer une courte phrase.</p><br/><p>Si vous lancez ce sort à deux reprises ou plus avant un repos long, il y a 25% de chances (cumulables) que chaque incantation en sus de la première ne reçoive pas de réponse. Le MD effectue ce jet en secret.</p>"
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
  description: "<p>Pendant un court instant, vous ne faites plus qu'un avec la nature et obtenez des informations sur le territoire environnant. En extérieur, ce sort vous transmet des informations sur le terrain qui vous entoure dans un rayon de 4,5 kilomètres. Dans une grotte ou un autre environnement naturel souterrain, le rayon d'action est de 90 mètres. Ce sort ne fonctionne pas là où les constructions ont remplacé la nature, comme en ville ou dans un donjon.</p><br/><p>Vous obtenez instantanément des informations sur un maximum de trois éléments de votre choix portant sur l'un des sujets suivants dans votre zone.</p><br/><p>﻿﻿Le terrain et les étendues d'eau.</p><br/><p>﻿﻿Les plantes, les minéraux, les animaux et les peuples majoritaires.</p><br/><p>﻿﻿Les célestes, les fées, les fiélons, les élémentaires ou les morts-vivants dotés d'une certaine puissance.</p><br/><p>﻿﻿L'influence émanant des autres plans d'existence.</p><br/><p>﻿﻿Les constructions.</p><br/><p>Par exemple, vous pouvez apprendre où se trouve un puissant mort-vivant résidant dans la zone, où sont situés les points d'eau potable majeurs et où se trouvent les villages les plus proches.</p>"
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
  description: "<p>Pendant toute la durée du sort, vous comprenez le sens littéral de tout langage parlé que vous entendez. Vous comprenez aussi les langues écrites que vous voyez, à condition de toucher la surface sur laquelle on a tracé les mots. Il vous faut 1 minute pour lire une page de texte.</p><br/><p>Ce sort ne décode pas les messages secrets compris dans un texte ni les glyphes qui n'appartiennent pas à un langage écrit, comme un symbole magique.</p>"
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
  description: "<p>Les créatures de votre choix situées à portée dans votre champ de vision et en mesure de vous entendre doivent faire un jet de sauvegarde de Sagesse. Une cible impossible à charmer réussit automatiquement son jet. Si la cible rate son jet, elle est affectée par le sort. Jusqu'à la fin de celui-ci, vous pouvez, à chaque tour, utiliser une action bonus pour désigner une direction horizontale par rapport à vous. Chaque cible affectée doit alors utiliser son déplacement au mieux pour aller dans cette direction à son prochain tour. Elle peut effectuer son action avant de se déplacer. Une fois qu'elle s'est ainsi déplacée, elle peut faire un nouveau jet de sauvegarde de Sagesse pour tenter de mettre un terme à l'effet du sort.</p><br/><p>Une cible n'est pas obligée de se rendre au sein d'une zone à l'évidence dangereuse, comme un brasier ou une fosse béante, mais elle est prête à provoquer des attaques d'opportunité pour se déplacer dans la direction indiquée.</p>"
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
  description: "<p>Une bouffée d'air froid jaillit de vos mains. Toutes les créatures présentes dans un cône de 18 mètres doivent faire un jet de sauvegarde de Constitution. Celles qui le ratent subissent 8d8 dégâts de froid, les autres la moitié seulement.</p><br/><p>Une créature qui succombe suite à ce sort se transforme en statue de glace jusqu'à ce qu'elle fonde.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou plus, les dégâts augmentent de 1d8 par niveau au-delà du 5ème.</p>"
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
  description: "<p>Vous contactez mentalement un demi-dieu, l'esprit d'un sage décédé il y a longtemps, ou une autre entité mystérieuse issue d'un autre plan. Le contact avec cette intelligence extraplanaire met votre esprit à rude épreuve et risque même de le briser.</p><br/><p>Quand vous lancez ce sort, vous devez faire un jet de sauvegarde d'Intelligence DD 15. En cas d'échec, vous recevez 6d6 dégâts psychiques et vous devenez fou jusqu'à ce que vous ayez bénéficié d'un repos long. Tant que vous êtes fou, vous ne pouvez pas entreprendre la moindre action, vous ne comprenez pas ce que disent les autres créatures, vous êtes incapable de lire et vous ne bredouillez que des paroles insensées.</p><br/><p>Une tierce personne peut mettre un terme à cet effet en vous lançant le sort de restauration suprême.</p><br/><p>Si vous réussissez votre jet de sauvegarde, vous pouvez poser jusqu'à cinq questions à l'entité. Vous devez les poser avant la fin du sort. C'est le MD qui répond à chacune d'entre elles avec un mot, comme « oui », « non », « peut-être », « jamais », « hors sujet » ou « obscur » (si l'entité ignore la réponse à votre question). Si une réponse limitée à un seul mot risque de se révéler trompeuse, le MD peut la remplacer par une courte phrase.</p>"
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
  description: "<p>Vous faites apparaître une main fantomatique et squelettique dans l'espace d'une créature située à portée.</p><br/><p>Faites un jet d'attaque de sort à distance contre la créature pour la transir de froid. Si l'attaque touche, la victime reçoit 1d8 dégâts nécrotiques et ne peut pas récupérer de point de vie avant le début de votre prochain tour. Jusque-là, la main s'accroche à elle.</p><br/><p>Si votre cible est un mort-vivant, il est en plus désavantagé lors des jets d'attaque effectués contre vous jusqu'à la fin de votre prochain tour.</p><br/><p>Les dégâts du sort augmentent de 1d8 quand vous atteignez le niveau 5 (2d8), le niveau 11 (3d8) et le niveau 17 (4d8).</p>"
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
  description: "<p>Votre simple contact transmet des maladies. Faites une attaque de sort au corps à corps contre une créature à portée.</p><br/><p>Si vous touchez, la cible est empoisonnée.</p><br/><p>À la fin de chaque tour de la cible empoisonnée, elle doit effectuer un jet de sauvegarde de Constitution. Si elle réussit trois de ces JS, la cible n'est plus empoisonnée et le sott prend fin. Si elle rate trois de ces JS, la cible n'est plus empoisonnée, mais vous choisissez l'une des maladies ci-après. La cible en souffre alors pour toute la durée du sort.</p><br/><p>Comme le sort déclenche une maladie naturelle chez. la cible, tout effet qui guérit une maladie ou améliore ses symptômes s y applique.</p><br/><p>Mal aveuglant. La créature est en proie à de violentes douleurs cérébrales et ses yeux deviennent d'un blanc laiteux.</p><br/><p>Elle est désavantagée lors des tests de Sagesse et des jets de sauvegarde de Sagesse et elle est aveugle.</p><br/><p>Fièvre répugnante. Une forte fièvre s'empare de la créature qui est désavantagée lors des tests de Force, des jets de sauvegarde de Force et des jets d'attaque basés sur la Force.</p><br/><p>Pourriture. La chair de la créature se met à pourrir.</p><br/><p>Elle est désavantagée lors des tests de Charisme et devient vulnérable à tous les dégâts.</p><br/><p>Bouille-crâne. La créature a soudain l'esprit enfiévré. Elle est désavantagée lors des tests d'Intelligence et des jets de sauvegarde d'Intelligence. De plus, au combat, elle se comporte comme si elle était sous l'effet d'un sort de confusion.</p><br/><p>Convulsions. La créature est agitée de tremblements. Elle est désavantagée lors des tests de Dextérité, des jets de sauvegarde de Dextérité et des jets d'attaque basés sur la Dextérité.</p><br/><p>Mort poisseuse. La créature est affligée de saignements incontrôlables. Elle est désavantagée lors des tests de Constitution et des jets de sauvegarde de Constitution. De plus, elle est étourdie jusqu'à la fin de son prochain tour à chaque fois qu'elle subit des dégâts.</p>"
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
  description: "<p>Vous transmettez une maladie virulente à une créature située à portée dans votre champ de vision. La cible doit faire un jet de sauvegarde de Constitution. Si elle échoue, elle subit 14d6 dégâts nécrotiques, la moitié seulement si elle réussit.</p><br/><p>Ces ne peuvent pas faire passer les points de vie de la cible au-dessous de 1. Si la cible rate son jet de sauvegarde, son total de points de vie maximum est réduit, pendant 1 heure, d'un montant égal aux dégâts nécrotiques reçus. Tout effet qui guérit les maladies ramène le maximum de points de vie de la cible à la normale sans avoir besoin d'attendre une heure.</p>"
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
  description: "<p>Vous tentez d'interrompre une créature en pleine incantation. Si elle essayait de lancer un sort de niveau 3 ou moins, il échoue et reste sans effet. Si le sort est de niveau 4 ou plus, faites un test de caractéristique en utilisant votre caractéristique d'incantation. Le DD est de 10 + niveau du sort. Si vous réussissez, le sort de la créature échoue et reste sans effet.</p><br/><p>Au moment de l'incantation, vous pouvez désigner plusieurs créatures de votre choix que le sort ignorera.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, le sort à interrompre est automatiquement sans effet s'il est d'un niveau égal ou inférieur à celui de l'emplacement de sort utilisé.</p>"
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
  description: "<p>Jusqu'à la fin du sort, vous contrôlez toute étendue d'eau indépendante située dans la zone de votre choix, cette dernière devant tenir dans un cube d'au maximum 30 mètres d'arête.</p><br/><p>Quand vous lancez ce sort, vous pouvez choisir l'un des effets suivants. À votre tour, vous pouvez utiliser une action pour répéter l'effet ou en appliquer un nouveau.</p><br/><p>Inondation. Vous faites monter le niveau d'une étendue d'eau isolée d'un maximum de 6 mètres. Si la zone comprend une rive, l'eau déborde et se répand sur la terre ferme.</p><br/><p>Si vous avez lancé le sort sur une grande étendue d'eau, vous créez une vague de 6 mètres de haut qui traverse la zone affectée d'un bout à l'autre pour se briser une fois arrivée à la fin de la zone. Tous les véhicules de taille Très Grande ou inférieure qui se trouvent sur le chemin de la vague sont emportés jusqu'au bout de la zone. Tous ces véhicules ont 25% de chances de chavirer.</p><br/><p>Le niveau de l'eau reste plus élevé jusqu'à la fin du sort ou jusqu'à ce que vous choisissiez un autre effet. Si l'effet d'inondation produit une vague, elle se reforme au début de votre prochain tour tant que vous gardez cet effet actif.</p><br/><p>Écarter les eaux. Vous écartez les eaux de la zone pour y créer un passage. Il traverse toute la zone, les eaux formant une muraille de chaque côté. Le passage demeure jusqu'à la fin du sort ou jusqu'à ce que vous optiez pour un effet différent. Dans ces deux cas, l'eau remplit alors progressivement le passage, au fil du round suivant, jusqu'à ce que le niveau de l'eau revienne à la normale.</p><br/><p>Modifier le cours de l'eau. Vous changez l'itinéraire de l'eau courante qui traverse la zone et l'envoyez dans la direction de votre choix, même si elle doit pour cela franchir des obstacles comme passer par-dessus un mur ou couler dans une direction improbable.</p><br/><p>L'eau suit vos instructions dans la zone affectée, mais dès qu'elle en sort, elle reprend un cours normal défini par le terrain qu'elle parcourt. L'eau continue de couler là où vous l'avez choisi jusqu'à la fin du sort ou jusqu'à ce que vous décidiez d'un autre effet.</p><br/><p>Tourbillon. Cet effet nécessite une étendue d'eau d'au moins 15 mètres carrés pour 7,50 mètres de fond et se traduit par la formation d'un tourbillon au centre de la zone. Il se présente sous forme d'un vortex de 1,50 mètre de large à sa base pour un maximum de 15 mètres de large au sommet et une hauteur de 7,50 mètres. Toutes les créatures et tous les objets qui se trouvent dans l'eau et dans un rayon de 7,50 mètres autour du tourbillon sont entraînés vers lui sur 3 mètres. Une créature peut s'éloigner à la nage si elle réussit un test de Force (Athlétisme) contre le DD du jet de sauvegarde de votre sort.</p><br/><p>Quand une créature entre dans le vortex pour la première fois de son tour ou qu'elle y commence son tour, elle doit faire un jet de sauvegarde de Force. Si elle échoue, elle reçoit 2d8 dégâts contondants et se fait emporter par le vortex jusqu'à la fin du sort. Si elle réussit son jet, elle subit seulement la moitié des dégâts et n'est pas prise dans le vortex. Une créature emportée par le vortex peut utiliser une action pour tenter de s'en éloigner comme décrit plus haut, mais elle est désavantagée lors de son test de Force (Athlétisme). À chaque tour, la première fois qu'un objet entre dans le vortex, il subit 2d8 dégâts contondants. Ces dégâts se répètent à chaque round passé dans le vortex.</p>"
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
  description: "<p>Vous touchez un objet pesant 5 kilos ou moins et dont la dimension la plus longue est de 1,80 mètre ou moins. Le sort laisse une marque invisible sur la surface de l'objet et inscrit le nom de l'objet sur le saphir que vous utilisez comme composante matérielle. Chaque fois que vous lancez ce sort, vous devez utiliser un saphir différent.</p><br/><p>Ensuite, vous pouvez utiliser une action quand vous le désirez pour prononcer le nom de l'objet et broyer le saphir.</p><br/><p>L'objet apparaît immédiatement dans votre main, en dépit des distances physiques et planaires, et le sort se termine.</p><br/><p>Si l'objet est actuellement porté ou transporté par quelqu'un d'autre, il n'arrive pas jusqu'à vous quand vous broyez le saphir, mais vous apprenez qui est la creature qui détient lobjet et vous savez à peu près où elle se trouve à ce moment-là.</p><br/><p>Dissipation de la magie ou un effet similaire appliqué sur le saphir met un terme à l'effet du sort.</p>"
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
  description: "<p>Une barrière scintillante se déploie depuis votre personne jusqu'à englober une zone d'un rayon de 3 mètres. Elle se déplace avec vous, reste centrée sur vous et repousse les créatures autres que les morts-vivants et les artificiels. Cette barrière persiste pendant toute la durée du sort.</p><br/><p>La barrière empêche les créatures affectées de la franchir ou de passer un membre au travers. Une créature affectée peut lancer des sorts ou porter des attaques à distance ou via une arme à allonge, tout cela franchissant la barrière.</p><br/><p>Si vous vous déplacez de telle manière qu'une créature affectée est contrainte de traverser la barrière, le sort se termine.</p>"
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
  description: "<p>Vous touchez une longueur de corde d'au maximum</p><br/><p>18 mètres. L'une de ses extrémités s'élève alors dans les airs, jusqu'à ce que toute la corde se dresse perpendiculairement au sol. Une entrée invisible s'ouvre à l'extrémité supérieure de la corde et débouche sur un espace extradimensionnel qui persiste jusqu'à la fin du sort.</p><br/><p>On peut atteindre cet espace extradimensionnel en grimpan:</p><br/><p>jusqu'au sommet de la corde. Il peut accueillir un maximum de huit créatures de taille Moyenne ou inférieure. On peut ensuite tirer la corde dans l'espace extradimensionnel, afin que personne ne la voie en dehors de l'abri.</p><br/><p>Les attaques et les sorts ne peuvent pas traverser l'entrée de l'espace extradimensionnel, ni depuis l'intérieur ni depuis l'extérieur. En revanche, les créatures qui se trouvent à l'intérieur peuvent regarder dehors grâce à une fenêtre de 90 centimètres sur 1,50 mètre centrée sur la corde.</p><br/><p>Tout ce qui se trouve dans l'espace extradimensionnel tombe à l'extérieur quand le sort se termine.</p>"
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
  description: "<p>Vous fichez quatre projectiles (flèches ou carreaux) non magiques en terre, à portée, et les imprégnez de magie afin de protéger une zone. Jusqu'à la fin du sort, dès qu'une créature autre que vous approche dans un rayon de 9 mètres autour des projectiles pour la première fois de son tour ou finit son tour à un tel endroit, une munition s'envole pour la frapper.</p><br/><p>La créature doit réussir un jet de sauvegarde de Dextérité, sans quoi elle subit 1d6 dégâts perforants. Le projectile est ensuite détruit. Le sort se termine s'il ne reste plus de projectiles.</p><br/><p>Au moment de l'incantation, vous pouvez désigner plusieurs créatures de votre choix que le sort ignorera.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou plus, vous pouvez enchanter deux projectiles de plus par niveau au-delà du 2ème.</p>"
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
  description: "<p>Un éventail de lumières colorées éblouissantes jaillit de votre main. Lancez 6d10. Le total représente le nombre de points de vie de créatures que le sort affecte. Les créatures situées dans un cône de 4,50 mètres, prenant votre personne comme point d'origine, sont affectées dans l'ordre croissant de leurs points de vie actuels (en ignorant les créatures inconscientes et les créatures aveugles).</p><br/><p>Chaque créature affectée, en commençant par celle qui possède actuellement le moins de points de vie, est aveuglée jusqu'à la fin de votre prochain tour. Soustrayez du total obtenu le nombre de points de vie actuel de chaque créature affectée avant de passer à la suivante, en choisissant chaque fois celle qui possède le moins de points de vie. Pour qu'une créature soit affectée, elle doit posséder un nombre de points de vie actuel inférieur ou égal au total restant.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, lancez 2d10 supplémentaires par niveau au-delà du 1er.</p>"
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
  description: "<p>Vous tendez la main et pointez du doigt une cible à portée.</p><br/><p>Votre magie vous donne un bref aperçu de ses défenses.</p><br/><p>À votre prochain tour, vous êtes avantagé lors de votre premier jet d'attaque contre elle, à condition que le sort ne se soit pas terminé avant.</p>"
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
  description: "<p>Choisissez un humanoïde situé à portée dans votre champ de vision. Il doit réussir un jet de sauvegarde de Sagesse, sans quoi vous le charmez pendant toute la durée du sort. Tant que la cible est sous votre charme, une couronne tordue en acier dentelé apparaît sur sa tête et une lueur démente brille dans son regard.</p><br/><p>À chacun de ses tours, avant de se déplacer, la cible doit utiliser son action pour porter une attaque armée contre une créature (autre qu'elle-même) que vous choisissez mentalement. Si vous ne choisissez pas de créature ou qu'il n'y en a pas à portée, la cible agit normalement.</p><br/><p>Lors de vos tours suivants, vous devez utiliser votre action pour garder le contrôle de la cible, sinon le sort se termine.</p><br/><p>La cible peut faire un jet de sauvegarde de Sagesse à la fin de chacun de ses tours. Si elle réussit, le sort se termine.</p>"
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
  description: "<p>Ce sort se lance uniquement de nuit. Choisissez jusqu'à trois cadavres de créatures humanoïdes de taille Moyenne ou Petite situés à portée. Chacun se change en goule placée sous votre contrôle. (Le MD dispose des statistiques de ces créatures).</p><br/><p>À chacun de vos tours, vous pouvez utiliser une action bonus pour contrôler mentalement les créatures que vous avez animées avec ce sort si elles se trouvent dans un rayon de 36 mètres (Si vous en contrôlez plusieurs, vous pouvez en commander une ou plusieurs à la fois, à condition de donner le même ordre à toutes). Vous pouvez décider de l'action que la créature va entreprendre et de l'endroit où elle va se rendre lors de son prochain tour, ou donner des consignes plus génériques, comme de garder une salle ou un couloir.</p><br/><p>En l'absence d'ordre de votre part, la créature se contente de se défendre contre les créatures hostiles. Dès qu'une créature a reçu un ordre, elle s'y conforme jusqu'à avoir accompli sa tâche.</p><br/><p>La créature reste sous votre contrôle pendant 24 heures, après quoi elle cesse d'obéir aux ordres que vous lui avez donnés. Pour la maintenir sous votre contrôle pendant 24 heures de plus, vous devez lui relancer ce sort avant que les 24 heures de contrôle en cours ne se soient écoulées.</p><br/><p>Cette nouvelle utilisation du sort vous permet de réaffirmer votre contrôle sur un maximum de trois créatures que vous avez déjà animées via ce sort au lieu d'en animer de nouvelles.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou plus, vous pouvez animer ou maintenir votre contrôle sur quatre goules. Quand vous le lancez à partir d'un emplacement de niveau 8, vous pouvez animer ou maintenir votre contrôle sur cinq goules ou deux blêmes ou deux nécrophages. Quand vous le lancez à partir d'un emplacement de niveau 9, vous pouvez animer ou maintenir votre contrôle sur six goules ou trois blêmes ou trois nécrophages ou deux momies.</p>"
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
  description: "<p>Vous créez 22,5 kilos de nourriture et 120 litres d'eau, soit par terre, soit dans des récipients installés à portée.</p><br/><p>Cela suffit à nourrir et abreuver un maximum de quinze humanoïdes ou de cinq montures pendant 24 heures. Les vivres sont fades mais nourrissants. Ils se gâtent si personne ne les a mangés dans les 24 heures suivant leur création. L'eau est claire et ne croupit pas.</p>"
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
  description: "<p>Vous créez ou détruisez de l'eau.</p><br/><p>Création d'eau. Vous créez jusqu'à 40 litres d'eau potable qui apparaissent à portée, dans un récipient ouvert.</p><br/><p>Sinon, l'eau peut tomber en pluie dans un cube de 9 mètres d'arête à portée, éteignant toutes les flammes à nu dans la zone.</p><br/><p>Destruction d'eau. Vous détruisez jusqu'à 40 litres d'eau situés à portée dans un récipient ouvert.</p><br/><p>Sinon, vous pouvez détruire le brouillard dans un cube de 9 mètres d'arête situé à portée.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, vous créez ou détruisez 40 litres d'eau de plus par niveau au-delà du 1* ou bien l'arête du cube affecté augmente de 1,50 mètre par niveau au-delà du 1er.</p>"
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
  description: "<p>Dans une zone de 6 mètres de rayon centrée sur un point à portée, le sol se met à se déformer et donne naissance à un tapis de pointes et d'épines. La zone se mue en terrain difficile pendant toute la durée du sort. Quand une créature entre dans la zone ou s'y déplace, elle reçoit 2d4 dégâts perforants par tranche de 1,50 mètre parcouru.</p><br/><p>La transformation du sol est camouflée, de manière à ce que le terrain ait l'air naturel. Une créature dans l'incapacité de voir la zone au moment de l'incantation doit faire un test de Sagesse (Perception) contre le DD du jet de sauvegarde de votre sort.</p><br/><p>Si elle le réussit, elle remarque que le terrain est dangereux avant d'y entrer.</p>"
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
  description: "<p>Ce sort décuple la vitalité des plantes d'une zone donnée.</p><br/><p>Le sort a deux modes d'utilisation, l'un apportant des avantages immédiats, l'autre sur le long terme.</p><br/><p>Si vous lancez ce sort en une action, choisissez un point à portée. Toutes les plantes ordinaires situées dans un rayon de 30 mètres autour de ce point deviennent particulièrement touffues et la végétation s'épaissit. Une créature qui se déplace dans cette zone doit dépenser 1,20 mètre de déplacement pour parcourir 30 centimètres.</p><br/><p>Vous pouvez exclure une ou plusieurs portions, de n'importe quelle taille, de la zone affectée par le sort.</p><br/><p>Si vous lancez le sort sur une période de huit heures, vous enrichissez la terre. Toute la végétation dans un rayon de 800 mètres autour d'un point de votre choix situé à portée devient luxuriante pendant un an. Elle donne deux fois plus de nourriture que la normale lors de la récolte.</p>"
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
  description: "<p>La puissance du monde naturel imprègne le bois du bâton ou du gourdin que vous tenez. Pendant toute la durée du sort, vous pouvez utiliser votre caractéristique d'incantation au lieu de votre Force pour effectuer les jets d'attaque et de dégâts au corps à corps avec cette arme. Le dé de dégâts de l'arme devient un d8. L'arme devient magique si elle ne l'était pas déjà. Le sort se termine si vous le lancez de nouveau ou si vous lâchez votre arme.</p>"
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
  description: "<p>Choisissez une créature située à portée dans votre champ de vision. La cible entame une danse comique, se mettant à taper du pied et à caracoler sur place.</p><br/><p>Les créatures insensibles au charme sont immunisées contre ce sort.</p><br/><p>Une fois que la créature s'est mise à danser, elle doit dépenser la totalité de son déplacement pour danser sans quitter son espace. De plus, elle est désavantagée lors des jets de sauvegarde de Dextérité et des jets d'attaque. Tant que la cible est affectée par ce sort, les autres créatures sont avantagees par rapport à elle lors des jets d'attaque. Une créature en train de danser peut utiliser son action pour faire un jet de sauvegarde de Sagesse et reprendre le contrôle de son corps. Si elle réussit, le sort se termine.</p>"
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
  description: "<p>Choisissez un objet situé à portée et dans votre champ de vision. Ce peut être une porte, une boîte, un coffre, des menottes, un cadenas ou un autre objet disposant d'un système de fermeture ordinaire ou magique.</p><br/><p>Une cible fermée par une serrure ordinaire, coincée ou bloquée par une barre se déverrouille ou se débloque. Si l'objet a plusieurs serrures, le sort en ouvre une seule.</p><br/><p>Si vous visez une cible fermée par un verrou magique, ce dernier est supprimé pendant 10 minutes, au cours desquelles on peut ouvrir et fermer la cible normalement.</p><br/><p>Quand vous lancez le sort, un cliquetis émane de l'objet et retentit si fort qu'on l'entend dans un rayon de 90 mètres.</p>"
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
  description: "<p>Un éclair d'énergie crépitante file vers une créature à portée.</p><br/><p>Faites un jet d'attaque de sort à distance contre la cible. Si vous réussissez, elle subit 1d10 dégâts de force.</p><br/><p>Le sort crée des rayons supplémentaires quand vous atteignez certains niveaux: il lance deux rayons au niveau 5, trois au niveau 11 et quatre au niveau 17. Vous pouvez diriger tous les rayons sur une même cible ou les répartir entre plusieurs. Faites un jet d'attaque distinct pour chaque rayon.</p>"
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
  description: "<p>Vous bannissez une créature située à portée dans votre champ de vision dans un demi-plan labyrinthique. La cible y reste pendant toute la durée du sort ou jusqu'à ce qu'elle s'échappe du dédale.</p><br/><p>Elle peut utiliser une action pour tenter de s'évader.</p><br/><p>Pour cela, elle effectue un test d'Intelligence DD 20.</p><br/><p>Si elle le réussit, elle s'échappe et le sort se termine (les minotaures et les démons goristros réussissent automatiquement).</p><br/><p>Quand le sort se termine, la cible réapparaît à l'emplacement qu'elle a quitté ou, s'il est occupé, dans l'emplacement libre le plus proche.</p>"
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
  description: "<p>Vous faites en sorte que votre personne (y compris vos vêtements, votre armure, vos armes et les autres objets en votre possession) prenne une apparence différente jusqu'à la fin du sort ou jusqu'à ce que vous utilisiez une action pour y mettre un terme. Vous pouvez passer pour une personne de trente centimètres de plus ou de moins, sembler gros, maigre ou entre les deux. Vous ne pouvez pas changer le type de votre corps, vous devez choisir une forme possédant la même conformation que vous au niveau des membres. En dehors de cela, les détails de l'illusion sont laissés à votre imagination.</p><br/><p>Les changements qu'apporte le sort ne résistent pas à un examen physique. Par exemple, si vous l'utilisez pour ajouter un chapeau à votre tenue, les objets passent au travers et toute personne qui essaie de le toucher ne sentira que de l'air, ou des cheveux et un crâne. Si vous utilisez le sort pour paraître plus mince qu'en réalité, la main de quelqu'un qui tente de vous toucher se heurtera à vous alors que, visuellement, elle semble encore dans le vide.</p><br/><p>Pour percer votre déguisement à jour, une créature peut dépenser une action pour vous examiner. Elle doit alors réussir un test d'Intelligence (Investigation) contre le DD du jet de sauvegarde du sort.</p>"
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
  description: "<p>À votre contact, toutes les malédictions qui affectent une créature ou un objet disparaissent. Si l'objet est un objet magique maudit, la malédiction persiste, mais le sort rompt l'harmonisation entre l'objet et son détenteur, ce qui permet à ce dernier de l'ôter ou de s'en débarrasser.</p>"
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
  description: "<p>Vous créez une porte floue sur une surface plate et solide située à portée dans votre champ de vision. Elle est assez large pour laisser passer sans mal des créatures de taille Moyenne.</p><br/><p>Quand quelqu'un ouvre la porte, elle donne sur un demi-plan ressemblant à une pièce vide de 9 mètres de côté (dans toutes les dimensions) faite de bois ou de pierre. La porte disparaît quand le sort se termine et les créatures et les objets encore dans le demi-plan y restent piégés, car elle sefface aussi de leur côté.</p><br/><p>Vous pouvez créer un nouveau demi-plan pour chaque incantation du sort ou relier la porte à un demi-plan que vous avez précédemment créé via ce sort. De plus, si vous connaissez la nature et le contenu d'un demi-plan qu'une autre créature a créé grâce à ce sort, vous pouvez lui relier votre propre porte.</p>"
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
  description: "<p>Un mince rayon de lumière verte jaillit de votre doigt pointé vers une cible située à portée dans votre champ de vision.</p><br/><p>La cible peut être une créature, un objet ou une création de force magique, comme un mur issu d'un mur de force.</p><br/><p>Une créature visée par ce sort doit faire un jet de sauvegarde de Dextérité. Si elle le rate, elle subit 10d6+40 dégâts de force.</p><br/><p>La cible est désintégrée si ces dégâts la laissent à 0 point de vie.</p><br/><p>Une créature désintégrée est réduite à l'état de fine poussière grise, tout comme tous les objets qu'elle porte et transporte, à l'exception des objets magiques. Pour ressusciter une créature ainsi désintégrée, il faut impérativement recourir à une résurrection suprême ou un souhait.</p><br/><p>Ce sort désintègre automatiquement les objets non magiques de taille Grande ou inférieure et les créations de force magique.</p><br/><p>Si la cible est un objet de Très Grande taille ou plus, le sort désintègre un cube de 3 mètres d'arête au sein de l'objet.</p><br/><p>Ce sort reste sans effet sur les objets magiques.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou plus, les dégâts augmentent de 3d6 par niveau au-delà du 6.</p>"
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
  description: "<p>Pendant toute la durée du sort, vous percevez la présence de magie dans un rayon de 9 mètres. Si vous percevez ainsi une magie, vous pouvez dépenser votre action pour discerner une faible aura autour d'une créature ou d'un objet visible dans la zone et imprégné de magie. Vous découvrez aussi à quelle école appartient cette magie, le cas échéant.</p><br/><p>Le sort ignore la plupart des obstacles, mais il ne peut pas franchir 30 centimètres de pierre, 2,5 centimètres de metal ordinaire, une mince feuille de plomb, ni 1 mètre de bois ou de terre.</p>"
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
  description: "<p>Pendant toute la durée du sort, vous voyez les créatures et les objets invisibles comme s'ils étaient bien visibles et vous pouvez aussi observer le plan éthéré. Les créatures et les objets éthérés vous apparaissent comme des silhouettes translucides et fantomatiques.</p>"
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
  description: "<p>Pendant toute la durée du sort, vous parvenez à lire les pensées de certaines créatures. Quand vous lancez ce sort, puis en tant qu'action à votre tour jusquà la fin du sort, vous pouvez focaliser vos pensées sur une créature située dans votre champ de vision et dans un rayon de 9 mètres. Si elle dispose d'une Intelligence de 3 ou moins ou ne parle aucune langue, elle n'est pas affectée.</p><br/><p>Au départ, vous découvrez les pensées de surface de la créature, c'est-à-dire ce qu'elle a à l'esprit à ce moment-là.</p><br/><p>Par une action, vous pouvez tourner votre attention vers les pensées d'une autre créature ou tenter de vous enfoncer plus profondément dans l'esprit de celle que vous sondez actuellement. Dans ce cas, cette créature doit faire un jet de sauvegarde de Sagesse. Si elle échoue, vous avez un aperçu de son mode de raisonnement (le cas échéant), de son état émotionnel ou de ce qui occupe une place importante dans son esprit (par exemple quelque chose qui l'inquiète fortement, qu'elle aime, qu'elle détest..). Si elle réussit, le sort se termine.</p><br/><p>Dans les deux cas, la cible sait que vous sondez son esprit et, à moins que vous ne tourniez votre attention vers une autre créature, votre cible peut utiliser son action à son tour pour faire un test d'Intelligence opposé au vôtre. Si elle réussit, le sort se termine.</p><br/><p>Les questions directement posées à l'oral à une cible orientent naturellement le cours de ses pensées, ce sort est donc particulièrement utile lors d'un interrogatoire.</p><br/><p>Vous pouvez aussi utiliser ce sort pour détecter la présence de créatures intelligentes que vous ne voyez pas. Vous pouvez chercher les pensées qui se trouvent dans un rayon de 9 mètres autour de vous au moment où vous lancez ce sort ou bien par une action tandis que le sort est actif. Le sort peut franchir des obstacles, mais il est arrêté par soixante centimètres de roche, 2,5 centimètres de métal autre que le plomb ou une mince feuille de plomb. Vous ne pouvez pas repérer les créatures dotées d'une Intelligence de 3 ou moins, ni celles qui ne parlent aucune langue.</p><br/><p>Une fois que vous avez ainsi détecté la présence d'une créature, vous pouvez lire ses pensées pendant le reste de la durée du sort, comme expliqué plus haut, même si vous ne la voyez pas, mais elle doit tout de même se trouver à portée.</p>"
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
  description: "<p>Vous percevez la présence de tout piège se trouvant à portée et dans votre champ de vision. Concernant ce sort, le terme de piège désigne toute chose qui inflige soudainement ou de façon inattendue un effet considéré comme néfaste ou indésirable et que son créateur a conçue dans ce but. Ainsi, le sort prévient si une zone est affectée par une alarme, un glyphe de garde ou une fosse piégée mécanique, mais il ne révèle pas une faiblesse naturelle dans un plancher, un plafond instable ou une doline cachée.</p><br/><p>Le sort indique simplement qu'il y a un piège; il ne précise pas où, mais vous donne une idée générale de la nature du danger qu'il représente.</p>"
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
  description: "<p>Pendant toute la durée du sort, vous savez s'il y a une aberration, un céleste, un élémentaire, une fée, un fiélon ou un mort-vivant dans un rayon de 9 mètres autour de vous et vous savez précisément où il se trouve. De même, vous savez. si un lieu ou un objet situé dans un rayon de 9 mètres a été consacré ou profané.</p><br/><p>Le sort ignore la plupart des obstacles, mais il ne peut pas franchir 30 centimètres de pierre, 2,5 centimètres de métal ordinaire, une mince feuille de plomb, ni 1 mètre de bois ou de terre.</p>"
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
  description: "<p>Pendant toute la durée du sort, vous percevez la présence de poisons, de créatures venimeuses et de maladies dans un rayon de 9 mètres autour de vous. Vous déterminez également leur position et identifiez à chaque fois le type de poison, de creature ou de maladie concerné.</p><br/><p>Le sort ignore la plupart des obstacles, mais il ne peut pas franchir 30 centimètres de pierre, 2,5 centimètres de métal ordinaire, une mince feuille de plomb, ni 1 mètre de bois ou de terre.</p>"
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
  description: "<p>Vous entonnez une suite de paroles envoûtantes qui obligent les créatures de votre choix qui vous entendent et sont situées à portée et dans votre champ de vision à faire un jet de sauvegarde de Sagesse. Une créature qui ne peut pas être charmée réussit automatiquement ce jet de sauvegarde.</p><br/><p>Si vous ou vos compagnons vous battez contre une de ces créatures, elle est avantagée lors du jet de sauvegarde. Si la créature rate son jet, elle est désavantagée lors des tests de Sagesse (Perception) destinés à percevoir une créature autre que vous jusqu'à ce que le sort se termine ou jusqu'à ce qu'elle ne puisse plus vous entendre. Le sort se termine si vous êtes neutralisé ou dans l'incapacité de parler.</p>"
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
  description: "<p>Ce sort crée un plan de force circulaire horizontal d'un mètre de diamètre pour 2,5 centimètres d'épaisseur. 11 fotte à un mètre du sol dans un espace inoccupé de votre choix situé à portée et dans votre champ de vision. Le disque persiste pendant toute la durée du sort et peut accueillir jusqu'à 250 kilos. Si on pose plus de poids dessus, le sort se termine et tout ce qui se trouvait sur le disque tombe à terre.</p><br/><p>Le disque reste immobile tant que vous vous tenez dans un rayon de 6 mètres. Si vous vous en éloignez plus que cela, il vous suit de manière à rester dans les 6 mètres autour de vous. Il peut se déplacer sur un terrain irrégulier, monter ou descendre des escaliers, des pentes, etc. Mais il ne peut pas franchir une différence de niveau de trois mètres ou plus.</p><br/><p>Par exemple, il ne peut pas passer au-dessus d'une fosse de 3 mètres de profondeur ni la quitter s'il a été formé au fond.</p><br/><p>Si vous vous éloignez à plus de 30 mètres du disque (typiquement parce qu'il ne peut pas contourner un obstacle pour vous suivre), le sort se termine.</p>"
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
  description: "<p>Grâce à ce sort, vous pouvez dissimuler une créature consentante ou un objet qui sera invisible à tout moyen de détection pendant toute la durée du sort. Quand vous lancez le sort et touchez la cible, elle devient invisible et ne peut plus être la cible de sorts de divination. De plus, les organes sensoriels de scrutation issus d'un sort de divination ne la perçoivent plus.</p><br/><p>Si la cible est une créature, elle entre en état d'animation suspendue. Le temps ne s'écoule plus pour elle et elle ne vieillit plus.</p><br/><p>Vous pouvez décider d'une condition qui mettra un terme prématuré au sort. Ce peut être ce que vous voulez, mais ce doit être visible ou se produire dans un rayon de 1,5 kilomètre autour de la cible. Par exemple, « au bout de</p><br/><p>1 000 ans » ou « quand la tarasque se réveillera ». Ce sort se termine également si la cible subit le moindre dégât.</p>"
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
  description: "<p>Choisissez une créature, un objet ou un effet magique à portée.</p><br/><p>Tout sort de niveau 3 ou inférieur qui l'affecte se termine.</p><br/><p>Si la cible est affectée par un sort de niveau 4 ou plus, faites un test de caractéristique en utilisant votre caractéristique d'incantation. Le DD est de 10 + niveau du sort. Ce dernier se termine si vous réussissez votre test.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, vous mettez automatiquement un terme à un sort affectant la cible quand le niveau de ce sort est égal ou inférieur au niveau de l'emplacement de sort que vous utilisez.</p>"
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
  description: "<p>Une énergie scintillante vous entoure et vous protège contre les fées, les morts-vivants et les créatures originaires d'au-delà du plan matériel. Pendant toute la durée du sort, les célestes, les élémentaires, les fées, les fiélons et les morts-vivants sont désavantagés lors de leurs jets d'attaque contre vous.</p><br/><p>Vous pouvez terminer le sort plus tôt en utilisant l'une des fonctions spéciales suivantes.</p><br/><p>Annulation d'enchantement. Vous utilisez votre action pour toucher une créature à votre portée qui se trouve charmée, effrayée ou possédée par un céleste, un élémentaire, une fée, un fiélon ou un mort-vivant. Cette créature n'est alors plus charmée, effrayée ou possédée par ces créatures.</p><br/><p>Renvoi. Vous utilisez votre action pour faire une attaque de sort au corps à corps contre un céleste, un élémentaire, une fée, un fiélon ou un mort-vivant situé à une distance inférieure ou égale à votre allonge. Si vous touchez la créature, vous tentez de la renvoyer sur son plan natal. Elle doit réussir un jet de sauvegarde de Charisme ou retourner sur son plan natal (si elle ne sy trouve pas déja). Si un mort-vivant ne se trouve pas sur son plan natal, il est renvoyé en Gisombre tandis qu'une fée sera expulsée en Féerie.</p>"
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
  description: "<p>Grâce à votre magie et à une offrande, vous entrez en contact avec un dieu ou l'un de ses serviteurs. Vous lui posez une unique question à propos d'un objectif, d'un événement ou d'une activité qui doit se dérouler dans les sept jours à venir. Le MD vous donne une réponse sincère, pouvant être une courte phrase, des vers cryptiques ou un présage.</p><br/><p>Le sort ne tient pas compte d'une éventuelle modification des circonstances susceptible de bouleverser l'issue des événements, comme l'incantation de sorts supplémentaires ou la perte ou l'arrivée d'un compagnon.</p><br/><p>Si vous lancez ce sort à deux reprises ou plus avant un repos long, il y a 25% de chances par incantation en sus de la première que vous obteniez une prémonition aléatoire au lieu d'une prémonition fiable. C'est au MD de faire ce jet en secret.</p>"
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
  description: "<p>Vous envoyez de l'énergie négative dans le corps d'une créature située à portée dans votre champ de vision, ce qui lui inflige des douleurs déchirantes. La cible doit faire un jet de sauvegarde de Constitution. Si elle échoue, elle subit 7d8+30 dégâts nécrotiques, la moitié seulement si elle réussit.</p><br/><p>Si ce sort achève un humanoïde, ce dernier se relève au début de votre prochain tour sous forme de zombi à jamais sous votre contrôle. Il suit vos ordres verbaux au mieux de ses capacités.</p>"
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
  description: "<p>Vous tentez d'envoûter une bête située à portée dans votre champ de vision. Elle doit réussir un jet de sauvegarde de Sagesse, sans quoi vous la charmez pendant toute la durée du sort. Elle est avantagée lors du jet de sauvegarde si vous ou des créatures amicales envers vous êtes en train de la combattre.</p><br/><p>Tant que la bête est charmée, vous entretenez un lien télépathique avec elle, qui persiste tant que vous vous trouvez sur le même plan d'existence. Vous pouvez utiliser ce lien télépathique pour donner des ordres à cette créature tant que vous êtes conscient (ce qui ne vous demande pas d'action). Elle fait de son mieux pour vous obéir. Vous pouvez lui donner un ordre simple et générique, comme « attaque cette créature », « cours jusque là-bas » ou « va chercher cet objet ». Si elle ne reçoit pas de nouvelles instructions de votre part une fois l'ordre exécuté, elle se contente de se défendre et de se préserver au mieux.</p><br/><p>Vous pouvez utiliser votre action pour prendre le contrôle total de votre cible et la diriger de façon précise. Jusqu'à la fin de votre prochain tour, elle exécute seulement les actions que vous choisissez et ne fait rien que vous ne lui ayez autorisé.</p><br/><p>Pendant cette période, vous pouvez aussi lui faire exécuter une réaction, mais pour cela, vous devez également dépenser votre propre réaction.</p><br/><p>Chaque fois que la cible subit des dégâts, elle a droit à un nouveau jet de sauvegarde de Sagesse contre le sort. Si elle le réussit, le sort prend fin.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 5, la durée devient « concentration, jusqu'à 10 minutes ». Si vous lancez ce sort en utilisant un emplacement de niveau 6, la durée devient « concentration, jusqu'à 1 heure ». Si vous lancez ce sort en utilisant un emplacement de niveau 7, la durée devient « concentration, jusqu'à 8 heures».</p>"
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
  description: "<p>Vous tentez d'envoûter une créature située à portée dans votre champ de vision. Elle doit réussir un jet de sauvegarde de Sagesse, sans quoi vous la charmez pendant toute la durée du sort. Elle est avantagée lors du jet de sauvegarde si vous ou des créatures amicales envers vous êtes en train de la combattre.</p><br/><p>Tant que la créature est charmée, vous entretenez un lien télépathique avec elle qui persiste tant que vous vous trouvez sur le même plan d'existence. Vous pouvez utiliser ce lien télépathique pour donner des ordres à cette créature tant que vous êtes conscient (ce qui ne vous demande pas d'action). Elle fait de son mieux pour vous obéir. Vous pouvez lui donner un ordre simple et générique, comme « attaque cette créature », « cours jusque là-bas » ou « va chercher cet objet ». Si elle ne reçoit pas de nouvelles instructions de votre part une fois l'ordre exécuté, elle se contente de se défendre et de se préserver au mieux.</p><br/><p>Vous pouvez utiliser votre action pour prendre le contrôle total de votre cible et la diriger de façon précise. Jusqu'à la fin de votre prochain tour, elle exécute seulement les actions que vous choisissez et ne fait rien que vous ne lui ayez autorisé</p><br/><p>Pendant cette période, vous pouvez aussi lui faire exécuter une réaction, mais pour cela, vous devez également dépenser votre propre réaction.</p><br/><p>Chaque fois que la cible subit des dégâts, elle a droit à un nouveau jet de sauvegarde de Sagesse contre le sort. Si elle le réussit, le sort prend fin.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 9, la durée devient « concentration, jusqu'à 8 heures ».</p>"
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
  description: "<p>Vous tentez d'envoûter un humanoïde situé à portée et dans votre champ de vision. Il doit réussir un jet de sauvegarde de Sagesse, sans quoi vous le charmez pendant toute la durée du sort. Il est avantagé lors du jet de sauvegarde si vous ou des créatures amicales envers vous êtes en train de le combattre.</p><br/><p>Tant que l'humanoïde est charmé, vous entretenez un lien télépathique avec lui qui persiste tant que vous vous trouvez sur le même plan d'existence. Vous pouvez utiliser ce lien télépathique pour donner des ordres à cette créature tant que vous êtes conscient (ce qui ne vous demande pas d'action). Elle fait de son mieux pour vous obéir. Vous pouvez lui donner un ordre simple et générique, comme « attaque cette créature », « cours jusque là-bas » ou « va chercher cet objet ». Si elle ne reçoit pas de nouvelles instructions de votre part une fois l'ordre exécuté, elle se contente de se défendre et de se préserver au mieux.</p><br/><p>Vous pouvez utiliser votre action pour prendre le contrôle total de votre cible et la diriger de façon précise. Jusqu'à la fin de votre prochain tour, elle exécute seulement les actions que vous choisissez et ne fait rien que vous ne lui ayez autorisé.</p><br/><p>Pendant cette période, vous pouvez aussi lui faire exécuter une reaction, mais pour cela, vous devez également dépenser votre propre réaction.</p><br/><p>Chaque fois que la cible subit des dégâts, elle a droit à un nouveau jet de sauvegarde de Sagesse contre le sort. Si elle le réussit, le sort prend fin.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 6, la durée devient « concentration, jusqu'à 10 minutes ». Si vous lancez ce sort en utilisant un emplacement de niveau 7, la durée devient « concentration, jusqu'à 1 heure ». Si vous lancez ce sort en utilisant un emplacement de niveau 8 ou plus, la durée devient « concentration, jusqu'à 8 heures ».</p>"
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
  description: "<p>Ce sort permet à la créature que vous touchez de comprendre toutes les langues parlées qu'elle entend. De plus, quand elle parle, toute créature qui maîtrise au moins une langue et l'entend comprend ce qu'elle dit.</p>"
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
  description: "<p>Vous devenez invisible à l'instant même où un double illusoire de votre personne apparaît là où vous vous trouvez. Ce double persiste pendant toute la durée du sort, mais votre invisibilité se termine dès que vous lancez un sort ou attaquez.</p><br/><p>Vous pouvez utiliser votre action pour déplacer votre double d'un maximum de deux fois votre vitesse et le faire bouger, parler et se comporter comme bon vous semble.</p><br/><p>Vous pouvez voir par les yeux et entendre par les oreilles de votre double comme si vous vous trouviez à son emplacement. À chacun de vos tours, vous pouvez utiliser une action bonus pour passer d'une perception via ses sens à une perception via les vôtres ou inversement. Tant que vous utilisez les sens de votre double, vous êtes sourd et aveugle à ce qui se passe directement autour de vous.</p>"
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
  description: "<p>Vous touchez un cadavre ou assimilé. Pendant toute la durée du sort, la cible est protégée contre la décomposition et ne peut pas se transformer en mort-vivant.</p><br/><p>Le sort rallonge aussi la période pendant laquelle on peut rappeler la cible d'entre les morts, car les jours passés sous l'influence de ce sort ne sont pas décomptés de la période pendant laquelle on peut utiliser des sorts comme rappel à la vie.</p>"
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
  description: "<p>Vous créez l'un des effets suivants à portée après quelques murmures adressés aux esprits de la nature.</p><br/><p>Vous créez un effet sensoriel minuscule et inoffensif qui annonce le temps qu'il fera là où vous vous trouvez pendant les 24 heures à venir. Cet effet peut prendre la forme d'un orbe doré si le temps va rester dégagé, d'un nuage s'il va pleuvoir, de flocons s'il va neiger, etc. L'effet persiste pendant 1 round.</p><br/><p>Vous faites instantanément éclore une fleur ou un bourgeon ou germer une graine.</p><br/><p>Vous créez un effet sensoriel instantané inoffensif, comme des feuilles qui tombent, un coup de vent, le bruit que ferait un petit animal ou une légère odeur de moufette. L'effet doit être contenu dans un cube d'au maximum 1,50 mètre d'arête.</p><br/><p>Vous allumez ou éteignez instantanément une chandelle, une torche ou un petit feu de camp.</p>"
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
  description: "<p>Vous poussez une créature à vous affronter en duel. Une créature située à portée dans votre champ de vision doit faire un jet de sauvegarde de Sagesse. Si elle le rate, vous l'obnubilez et elle ne peut résister à votre injonction divine. Pendant toute la durée du sort, elle est désavantagée lors des jets d'attaque effectués contre toute créature autre que vous et doit faire un jet de sauvegarde de Sagesse chaque fois qu'elle tente de s'éloigner à plus de 9 mètres de vous. Si elle réussit ce jet de sauvegarde, le sort ne gêne pas ses mouvements pour ce tour.</p><br/><p>Le sort se termine si vous attaquez une créature autre que celle visée par ce sort, si vous lancez un sort sur une créature hostile autre qu'elle, si une créature amicale envers vous la blesse ou lui lance un sort néfaste ou si vous terminez votre tour à plus de 9 mètres d'elle.</p>"
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
  description: "<p>Un éclair formant une ligne de 30 mètres de long pour 1,50 mètre de large jaillit de votre personne et file dans la direction de votre choix. Chaque créature située sur la ligne doit faire un jet de sauvegarde de Dextérité. Celles qui échouent subissent 8d6 dégâts de foudre, les autres la moitié seulement.</p><br/><p>La foudre embrase les objets inflammables de la zone qui ne sont ni portés ni transportés par une créature.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, les dégâts augmentent de 1d6 par niveau au-delà du 3.</p>"
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
  description: "<p>La chaude lumière du soleil illumine une zone de 18 mètres de rayon centrée sur un point de votre choix situé à portée.</p><br/><p>Chaque créature présente dans cette lumière doit faire un jet de sauvegarde de Constitution. Celles qui échouent subissent 12d6 dégâts radiants et sont aveuglées pendant 1 minute. Les autres subissent seulement la moitié des dégâts et ne sont pas aveuglées par le sort. Les vases et les morts-vivants sont désavantagés lors de ce jet de sauvegarde.</p><br/><p>Une créature aveuglée par le sort fait un autre jet de</p><br/><p>Constitution à la fin de chacun de ses tours. Dès qu'elle réussit, sa cécité disparaît.</p><br/><p>Ce sort dissipe toutes les ténèbres présentes dans la zone qui sont issues d'un sort.</p>"
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
  description: "<p>Huit rayons de lumière multicolores jaillissent de votre main.</p><br/><p>Chacun a une couleur différente et possède des pouvoirs et objectifs distincts. Chaque créature présente dans un cône de 18 mètres doit faire un jet de sauvegarde de Dextérité. Lancez</p><br/><p>1d8 par cible pour savoir quelle couleur l'affecte.</p><br/><p><b>Rouge :</b> La cible subit 10d6 dégâts de feu si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</p><br/><p><b>Orange :</b> La cible subit 10d6 dégâts d'acide si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</p><br/><p><b>Jaune :</b> La cible subit 10d6 dégâts de foudre si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</p><br/><p><b>Vert :</b> La cible subit 10d6 dégâts de poison si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</p><br/><p><b>Bleu :</b> La cible subit 10d6 dégâts de froid si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</p><br/><p><b>Indigo :</b> Si la cible rate son jet de sauvegarde, elle est entravée et doit alors faire un jet de sauvegarde de Constitution à la fin de chacun de ses tours. Si elle en réussit trois, le sort se termine, si elle en rate trois, elle se change définitivement en pierre et elle est en proie à l'état pétrifié. Les succès et les échecs n'ont pas à être consécutifs: tenez le compte dans chaque catégorie jusqu'à ce que l'une d'elles arrive à trois.</p><br/><p><b>Violet :</b> La cible est aveugle si elle rate son jet de sauvegarde. Elle doit alors faire un jet de sauvegarde de Sagesse au début de votre prochain tour. Si elle le réussit, elle recouvre la vue; si elle le rate, elle est emportée sur un autre plan d'existence choisi par le MD et recouvre aussi la vue. (En général, une créature qui ne se trouve pas sur son propre plan d'existence est bannie là-bas tandis que les autres créatures sont envoyées sur le plan astral ou éthéré).</p><br/><p><b>Spécial :</b> Deux rayons viennent frapper la cible. Relancez deux fois le dé en le relançant chaque fois que vous sortez un 8.</p>"
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
  description: "<p>Vous créez des entraves magiques pour immobiliser une créature située à portée dans votre champ de vision. La cible doit réussir un jet de sauvegarde de Sagesse ou se retrouver emprisonnée par le sort. Si elle réussit, elle est immunisée contre ce sort si vous le lancez de nouveau. Tant que la créature est affectée par le sort, elle n'a pas besoin de respirer, de manger, ni de boire et ne vieillit plus. Les sorts de divination ne parviennent plus à la localiser ni à la percevoir.</p><br/><p>Vous devez opter pour l'une des formes d'emprisonnement suivantes quand vous lancez le sort.</p><br/><p>Enseveli. La cible est ensevelie dans les profondeurs de la terre, dans une sphère de force magique tout juste assez grande pour la contenir. Rien ne peut traverser cette sphère et les créatures ne peuvent pas recourir au voyage planaire pour y entrer ou en sortir.</p><br/><p>La composante spéciale de cette version du sort est un petit orbe en mithral.</p><br/><p>Enchaine. La cible est retenue par de lourdes chaines fermement ancrées au sol. Elle est entravée jusqu'à ce que le sort se termine et, Jusque la, elle ne peut pas se déplacer ni être déplacée, par quelque moyen que ce soit.</p><br/><p>La composante spéciale de cette version du sort est une</p><br/><p>fine chaîne faite de métal précieux.</p><br/><p>Prison isolée. Le sort transporte la cible dans un minuscule demi-plan protégé contre la téléportation et les voyages planaires. Ce demi-plan peut être un labyrinthe, une cage, une tour ou une structure confinée similaire de votre choix.</p><br/><p>La composante spéciale de cette version du sort est une représentation miniature de la prison, faite de jade.</p><br/><p>Confinement minimal. La cible rétrécit jusqu'à ne plus faire que 2,5 centimètres de haut et se retrouve emprisonnée dans une gemme ou un objet similaire. La lumière traverse la gemme normalement (ce qui permet à la cible de voir l'extérieur et aux autres créatures de regarder dedans) mais rien d'autre ne peut traverser sa paroi, pas même les méthodes de téléportation ni les voyages planaires. Il est impossible de tailler la gemme ou de la briser tant que le sort fait effet.</p><br/><p>La composante spéciale de cette version du sort est une grande gemme transparente comme un corindon, un diamant ou un rubis.</p><br/><p>Sommeil. La cible s'endort et il est impossible de la réveiller. La composante spéciale de cette version du sort est un bouquet d'herbes soporifiques très rares.</p><br/><p>Mettre fin au sort. Lors de l'incantation et quelle que soit la version du sort, vous pouvez préciser une condition spéciale qui met fin au sort et libère la cible. Cette condition peut être aussi spécifique ou aussi élaborée que vous le désirez, mais le MD doit confirmer que cette condition est réalisable et a une chance d'être remplie. Elle peut se baser sur le nom de la créature, son identité ou sa divinité, mais sinon elle doit reposer sur des actions ou des qualités observables et non sur des éléments intangibles comme le niveau, la classe ou les points de vie.</p><br/><p>Dissipation de la magie peut mettre fin au sort à condition d'être lancée depuis un emplacement de sort de niveau 9 en visant la prison ou la composante matérielle spéciale utilisée pour lancer le sort.</p><br/><p>Vous pouvez utiliser une composante spéciale pour créer une prison à la fois seulement. Si vous relancez ce sort en utilisant la même composante, la cible de la première incantation est libérée sur-le-champ.</p>"
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
  description: "<p>Des herbes et des lianes entremêlées jaillissent du sol dans un carré de 6 mètres de côté centré sur un point à portée. Pendant toute la durée du sort, les végétaux transforment la zone en terrain difficile.</p><br/><p>Une créature qui se trouve dans la zone affectée lorsque vous lancez le sort doit réussir un jet de sauvegarde de Force, sans quoi elle reste entravée dans les plantes jusqu'à ce que le sort se termine. Une créature entravée peut utiliser une action pour faire un test de Force contre le DD du sort. Si elle réussit, elle se libère.</p><br/><p>Quand le sort se termine, les plantes invoquées se flétrissent.</p>"
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
  description: "<p>Vous puisez dans les peurs les plus profondes d'un groupe de créatures et créez des êtres illusoires dans leur esprit, qu'elles sont les seules à voir. Chaque créature située dans une sphère de 9 mètres de rayon centrée sur un point de votre choix situé à portée doit faire un jet de sauvegarde de Sagesse. Celles qui ratent leur jet sont effrayées pendant toute la durée. Les illusions se basent sur les peurs enfouies en chaque cible et transforment leurs pires cauchemars en menace implacable. À la fin de chacun de ses tours, une créature effrayée doit faire un jet de sauvegarde de Sagesse.</p><br/><p>Si elle échoue, elle subit 4d10 dégâts psychiques; si elle réussit, le sort se termine pour elle.</p>"
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
  description: "<p>Grâce à ce sort, vous vous attachez de force les services d'un céleste, d'un élémentaire, d'une fée ou d'un fiélon. La créature doit se trouver à portée pendant toute la durée du sort. (En général, elle est d'abord invoquée au centre d'un cercle magique inversé où elle reste piégée le temps de l'incantation.) La cible doit faire un jet de sauvegarde de Charisme à la fin de l'incantation. Si elle échoue, elle est contrainte de vous servir pendant toute la durée du sort. Si elle a été invoquée ou créée via un autre sort, la durée de ce dernier se prolonge jusqu'à égaler celle de l'entrave planaire.</p><br/><p>La créature liée doit suivre vos instructions au mieux de ses capacités. Vous pouvez lui demander de vous accompagner lors d'une aventure, de protéger un lieu ou de transmettre un message. La créature obéit à vos instructions à la lettre, mais si elle est hostile envers vous, elle peut tout à fait interpréter vos paroles de manière à satisfaire ses propres objectifs. Si la créature a exécuté vos instructions avant la fin du sort, elle revient vers vous pour vous en informer si elle se trouve sur le même plan d'existence que vous. Si vous êtes sur un autre plan, elle se rend là où vous l'avez liée et y reste jusqu'à la fin du sort.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau supérieur, la durée augmente:</p><br/><p>10 jours au niveau 6, 30 au niveau 7, 180 au niveau 8 et un an et un jour au niveau 9.</p>"
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
  description: "<p>Vous créez un plan de force en forme d'épée qui plane à portée et persiste pendant toute la durée du sort.</p><br/><p>Dès que l'épée apparaît, vous faites une attaque de sort au corps à corps contre une cible de votre choix située dans un rayon de 1,50 mètre autour de l'épée. Si l'épée touche, la cible subit 3d10 dégâts de force. Tant que le sort n'est pas terminé, vous pouvez dépenser une action bonus à chacun de vos tours pour déplacer l'épée d'un maximum de 6 mètres afin de la conduire à un endroit situé dans votre champ de vision, puis répéter l'attaque contre la même cible ou une autre.</p>"
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
  description: "<p>Vous vous attaquez à l'esprit d'une créature située à portée dans votre champ de vision en essayant de briser son intellect et sa personnalité. La cible subit 4d6 dégâts psychiques et doit faire un jet de sauvegarde d'Intelligence.</p><br/><p>Si la cible rate son jet, son Intelligence et son Charisme tombent à 1. Elle ne peut plus lancer de sorts, activer d'objet magique, comprendre une langue, ni communiquer de manière intelligible. En revanche, elle est toujours capable de reconnaître ses amis, de les suivre et même de les protéger.</p><br/><p>La créature peut refaire un jet de sauvegarde tous les</p><br/><p>30 jours. Le sort se termine dès qu'elle réussit.</p><br/><p>On peut mettre un terme à ce sort avec restauration suprême, guérison ou souhait.</p>"
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
  description: "<p>Vous touchez une créature consentante et, jusqu'à la fin du sort, vous l'immunisez contre les dégâts psychiques, les effets percevant les émotions ou révélant les pensées, les sorts de divination et l'état charmé. Ce sort déjoue même les souhaits et les sorts et effets de même puissance qui cherchent à affecter l'esprit de la cible ou à obtenir des informations sur elle.</p>"
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
  description: "<p>Vous appelez des esprits qui vous protègent. Ils volètent autour de vous dans un rayon de 4,50 mètres pendant toute la durée du sort. Si vous êtes Bon ou Neutre, ils ont une apparence angélique ou féerique (à vous de choisir). Si vous êtes Mauvais, ils ont une apparence fiélone.</p><br/><p>Quand vous lancez le sort, vous pouvez désigner autant de créatures que vous le voulez afin qu'il ne les affecte pas.</p><br/><p>Une créature affectée voit sa vitesse réduite de moitié dans la zone et, quand elle y entre pour la première fois de son tour ou quand elle y commence son tour, elle doit faire un jet de sauvegarde de Sagesse. Si elle échoue, elle subit 3d8 dégâts radiants (si vous êtes Bon ou Neutre) ou 3d8 dégâts nécrotiques (si vous êtes Mauvais). Si elle réussit son jet de sauvegarde, elle subit seulement la moitié de ces dégâts.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, les dégâts augmentent de 1d8 par niveau au-delà du 3ème.</p>"
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
  description: "<p>Vous touchez une créature consentante et la plongez dans un état cataleptique si profond qu'elle semble morte.</p><br/><p>Pendant toute la durée du sort ou jusqua ce que vous utilisiez une action pour toucher la cible et révoquer le sort, la cible paraît morte, même suite à un examen externe ou après utilisation d'un sort visant à déterminer son statut. Elle est aveuglée et neutralisée et sa vitesse passe à 0. Elle est résistante à tous les types de dégâts hormis les dégâts psychiques. Si elle est empoisonnée ou malade au moment où vous lancez le sort ou si elle le devient pendant la durée du sort, la maladie ou le poison na aucun effet tant que ce sort n'est pas terminé.</p>"
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
  description: "<p>Une fois que vous avez passé la durée de l'incantation à tracer des sentiers magiques dans une pierre précieuse, vous touchez un animal ou une plante de taille Très Grande ou inférieure qui doivent être dépourvus de toute valeur d'Intelligence ou posséder une Intelligence de 3 ou moins. La cible reçoit alors une Intelligence de 10 et la possibilité de parler un langage de votre connaissance. Si la cible est une plante, elle peut se déplacer à l'aide de ses branches, de ses racines, de ses lianes, de ses vrilles ou autre et gagne des sens similaires à ceux d'un humain. C'est au MD de choisir les statistiques appropriées à la plante éveillée, en lui appliquant par exemple le profil d'un buisson ou d'un arbre éveillé.</p><br/><p>La bête ou la plante éveillée est sous votre charme pendant</p><br/><p>30 jours ou jusqu'à ce que vous ou l'un de vos compagnons la blessiez. Une fois que l'effet de charme se termine, la créature éveillée décide seule si elle reste amicale envers vous, selon la façon dont vous l'avez traitée lorsqu'elle était charmée.</p>"
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
  description: "<p>Vous convertissez des matériaux bruts en produits finis faits de la même matière. Par exemple, vous pouvez fabriquer un pont de bois à partir de souches d'arbres, une corde à base d'un tas de chanvre, et des habits à partir de lin ou de laine.</p><br/><p>Choisissez des matériaux bruts situés à portée et dans votre champ de vision. Vous pouvez fabriquer un objet de taille Grande ou inférieure (contenu dans un cube de 3 mètres de côté ou dans huit cubes reliés de 1,50 mètre de côté) à condition d'avoir assez de matière première. Toutefois, si vous travaillez avec du métal, de la pierre ou une autre substance minérale, l'objet fabriqué ne doit pas dépasser la taille Moyenne (donc tenir dans un cube de 1,50 mètre de côte). La qualite de lobjet fabriqué dépend de celle des matières premières.</p><br/><p>Il est impossible de créer ou de transmuter des créatures ou des objets magiques à l'aide de ce sort. Vous ne pouvez pas non plus y recourir pour fabriquer des objets demandant un haut degré d'expertise, comme des bijoux, des armes, du verre ou une armure, à moins que vous ne soyez formé à l'utilisation des outils d'artisanat nécessaires à l'élaboration de tels objets.</p>"
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
  description: "<p>Vous touchez un objet de pierre de taille Moyenne ou inférieure ou une section de pierre d'un maximum de 1,50 mètre dans toutes les dimensions et lui donnez la forme que vous désirez.</p><br/><p>Vous pouvez, par exemple, façonner un gros caillou de manière à en faire une arme, une idole ou un coffre, ou bien creuser un étroit passage dans un mur, à condition que ce dernier ne fasse pas plus de 1,50 mètre d'épaisseur. Vous pouvez façonner une porte de pierre ou son chambranle pour la sceller. L'objet créé peut avoir au maximum deux charnières et un loquet, mais il est impossible de créer des mécanismes plus complexes.</p>"
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
  description: "<p>Pendant toute la durée du sort, vous êtes avantagé sur tous les tests de Charisme à l'encontre d'une créature de votre choix qui ne vous est pas hostile. Quand le sort se termine, cette créature se rend compte que vous avez usé de magie pour l'influencer et elle devient hostile. Si elle est encline à la violence, elle peut très bien vous attaquer. Une autre peut chercher à se venger autrement (au choix du MD), selon la manière dont vous avez interagi avec elle.</p>"
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
  description: "<p>Vos prières vous imprègnent d'une aura radieuse. Jusqu'à la fin du sort, les attaques que vous portez avec une arme infligent 1d4 dégâts radiants supplémentaires en cas de coup au but.</p>"
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
  description: "<p>Vous matérialisez un grand festin, comprenant des boissons et des mets de grande qualité. Il faut une heure pour terminer le festin qui disparaît au bout de cette durée. Ses effets bénéfiques se manifestent uniquement une fois cette heure écoulée. Douze créatures au</p><br/><p>maximum peuvent beneficier de ce repas.</p><br/><p>Une créature qui participe au festin bénéficie de plusieurs avantages. Elle est guérie de toutes les maladies et de tous les poisons qui l'affectaient, elle est immunisée contre le poison et l'état effrayé, et elle est avantagée lors de tous ses jets de sauvegarde de Sagesse. Son maximum de points de vie augmente de 2d10 et elle gagne le même nombre de points de vie. Ces avantages persistent pendant 24 heures.</p>"
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
  description: "<p>Choisissez jusqu'à cinq créatures en train de tomber à portée. La vitesse de chute de chacune passe à 18 mètres par round jusqu'à la fin du sort. Si une créature atterrit avant la fin du sort, elle ne subit pas de dégâts de chute et se reçoit sur ses pieds, le sort se terminant alors pour elle.</p>"
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
  description: "<p>Une flamme à la luminosité égale à celle d'une torche embrase soudain l'objet que vous touchez. L'effet du sort ressemble à une flamme ordinaire, mais ne dégage pas de chaleur et ne consomme pas d'oxygène. On peut couvrir ou cacher la flamme éternelle, mais pas l'étouffer ni l'éteindre avec de l'eau.</p>"
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
  description: "<p>Un flamboiement digne d'une flamme s'abat sur une créature située à portée dans votre champ de vision. La cible doit réussir un jet de Dextérité ou subir 1d8 dégâts radiants. Même si elle se trouve derrière un abri, la cible n'est pas avantagée lors du jet de sauvegarde.</p><br/><p>Les dégâts du sort augmentent de 1d8 quand vous atteignez le niveau 5 (2d8), le niveau 11 (3d8) et le niveau 17 (4d8).</p>"
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
  description: "<p>Une flamme vacillante apparaît dans votre main. Elle y reste pendant toute la durée du sort et ne vous blesse pas, pas plus qu'elle n'endommage votre équipement. La flamme émet une lumière vive dans un rayon de 3 mètres et une lumière faible dans un rayon de 3 mètres de plus. Le sort se termine si vous le révoquez par une action ou si vous le lancez de nouveau.</p><br/><p>Vous pouvez attaquer avec la flamme, mais cela met fin au sort. Pour cela, quand vous lancez le sort, ou par une action lors d'un tour ultérieur, vous lancez la flamme sur une créature située dans un rayon de 9 mètres. Faites une attaque de sort à distance. Si vous touchez, la cible subit 1d8 dégâts de feu.</p><br/><p>Les dégâts de ce sort augmentent de 1d8 quand vous atteignez le niveau 5 (2d8), le niveau 11 (3d8) et le niveau 17 (4d8).</p>"
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
  description: "<p>Un essaim de sauterelles grouillantes remplit une sphère de 6 mètres de rayon centrée sur un point de votre choix situé à portée. La sphère s'étend en contournant les angles et persiste pendant toute la durée du sort. La visibilité est réduite dans la zone affectée. L'intérieur de la sphère devient un terrain difficile.</p><br/><p>Quand la sphère d'insectes apparaît, chaque créature prise à l'intérieur doit faire un jet de sauvegarde de Constitution.</p><br/><p>Une créature subit 4d10 dégâts perforants si elle rate son jet, la moitié seulement si elle le réussit. Une créature doit faire le même jet quand elle entre dans la sphère pour la première fois de son tour ou quand elle y termine son tour.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou plus, les dégâts augmentent de 1d10 par niveau au-delà du 5ème.</p>"
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
  description: "<p>Une flèche d'un vert chatoyant file vers une cible située à portée et explose en une gerbe d'acide. Faites une attaque de sort à distance contre la cible. Si vous touchez, la cible reçoit 4d4 dégâts d'acide immédiatement et 2d4 dégâts d'acide à la fin de son prochain tour. Si vous ne touchez pas, l'acide éclabousse la cible et lui inflige la moitié des dégâts initiaux, mais aucun à la fin de son prochain tour.</p><br/><p>A plus haut niveau. Quand vous utilisez ce sort via un emplacement de niveau 3 ou plus, les dégâts initiaux et secondaires augmentent de 1d4 par niveau au-delà du 2ème.</p>"
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
  description: "<p>Lors de la prochaine attaque que vous effectuez avec une arme à distance pendant que ce sort est actif, la munition (ou l'arme s'il s'agit d'une arme de jet) se change en éclair. Faites un jet d'attaque ordinaire. Si vous touchez, la cible subit 4d8 dégâts de foudre au lieu des dégâts normaux, la moitié si vous la ratez.</p><br/><p>Que vous touchiez ou ratiez votre cible, toutes les créatures situées dans un rayon de 3 mètres autour d'elle doivent faire un jet de sauvegarde de Dextérité. Celles qui échouent subissent 2d8 dégâts de foudre, les autres la moitié seulement.</p><br/><p>La munition ou l'arme de jet reprend ensuite sa forme normale.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, les dégâts dus à chacun des deux effets du sort augmentent de 1d8 par emplacement de sort au-delà du 3ème.</p>"
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
  description: "<p>L'énergie nécromantique inonde une créature de votre choix située à portée dans votre champ de vision, et draine ses fluides corporels et sa vitalité. La cible doit faire un jet de sauvegarde de Constitution. Si elle échoue, elle reçoit 8d8 dégâts nécrotiques, la moitié seulement si elle réussit son jet. Ce sort n'a aucun effet sur les morts-vivants ou les artificiels.</p><br/><p>Si vous visez une créature végétale ou une plante magique, elle est désavantagée lors du jet de sauvegarde et le sort lui inflige le maximum de dégâts possible.</p><br/><p>Si vous visez une plante non magique qui n'est pas une créature, comme un arbre ou un buisson, elle n'a pas droit au moindre jet de sauvegarde, mais se flétrit et meurt.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 5 ou plus, les dégâts augmentent de 1d8 par niveau au-delà du 4ème.</p>"
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
  description: "<p>Votre corps devient flou, il ondule et vacille comme une flamme aux yeux d'autrui. Pendant toute la durée du sort, les créatures sont désavantagées lorsqu'elles font un jet d'attaque contre vous. Un attaquant est immunisé contre cet effet s'il ne se repose pas sur sa vue, s'il dispose de vision aveugle par exemple, ou s'il peut percer les illusions à jour, avec vision lucide.</p>"
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
  description: "<p>Vous façonnez une illusion et l'implantez dans l'esprit d'une créature située à portée dans votre champ de vision.</p><br/><p>Elle doit faire un jet de sauvegarde d'Intelligence. Si elle échoue, vous créez un objet, une créature ou un phénomène visible fantasmagorique de votre choix. L'illusion doit tenir dans un cube de 3 mètres d'arête. La cible est seule à la percevoir, et ce pendant toute la durée du sort. Ce dernier ne fonctionne pas contre les morts-vivants ni les artificiels.</p><br/><p>L'illusion comprend des bruits, une température et d'autres stimuli, mais, de même, la cible du sort est la seule à les percevoir.</p><br/><p>La cible peut utiliser une action pour examiner l'illusion avec un test d'Intelligence (Investigation) contre le DD du jet de sauvegarde de votre sort. Si elle réussit son test, elle comprend qu'elle a affaire à une simple illusion et le sort se termine.</p><br/><p>Tant que la cible est sous l'effet du sort, elle traite l'illusion comme un élément réel et invente une explication rationnelle aux résultats illogiques issus de ses interactions avec elle. Par exemple, si elle tente de traverser un pont fantasmagorique enjambant un ravin et tombe dès qu'elle pose le pied sur ce pont, si elle survit à la chute, elle croit toujours que le pont est réel et trouve une explication logique à sa chute : on l'a poussée, elle a glissé, une forte bourrasque l'a fait basculer...</p><br/><p>Une cible affectée croit si fort à la réalité de l'illusion que cette dernière peut même la blesser. Une illusion créée à l'image d'une créature peut attaquer la cible. De même, une illusion représentant du feu, un bassin d'acide ou une nappe de lave peut brûler la cible. À chaque round, à votre tour, votre illusion inflige 1d6 dégâts psychiques à la cible si elle se trouve au sein de l'illusion ou dans un rayon de 1,50 mètre autour d'elle et que cette illusion représente une créature ou un danger qui devrait logiquement la blesser, en l'attaquant par exemple. La cible perçoit les dégâts comme étant d'un type approprié à l'illusion qu'elle voit.</p>"
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
  description: "<p>Vous pénétrez dans la région frontalière du plan éthéré, dans une zone où il chevauche votre plan actuel. Vous restez sur la Frontière éthérée pendant toute la durée du sort ou jusqu'à ce que vous utilisiez une action pour y mettre fin. Pendant cette période, vous pouvez vous déplacer dans n'importe quelle direction. Si vous optez pour un déplacement vers le haut ou le bas, le prix du mouvement est doublé, chaque mètre de déplacement vous coûtant un mètre supplémentaire. Vous voyez et entendez ce qui se passe sur le plan d'où vous venez, mais tout y est gris et vous ne voyez plus rien au-delà de 18 mètres.</p><br/><p>Une fois sur le plan éthéré, vous pouvez affecter uniquement des créatures situées sur ce plan et elles sont les seules à pouvoir vous affecter. Celles qui ne se trouvent pas sur ce plan ne vous perçoivent pas et sont incapables d'interagir avec vous, à moins qu'un pouvoir spécial ou magique ne le leur permette.</p><br/><p>Les objets et effets qui ne se trouvent pas sur le plan ethéré n'ont aucune incidence sur vous, ce qui vous permet de traverser des objets que vous apercevez sur le plan d'où vous venez.</p><br/><p>Quand le sort se termine, vous retournez immédiatement sur le plan d'où vous venez, à l'endroit que vous occupez actuellement. Si vous occupez le même espace qu'un objet solide ou une créature lorsque cela se produit, vous êtes immédiatement projeté dans l'espace inoccupé le plus proche susceptible de vous accueillir et subissez un montant de dégâts de force égal à 6,5 × le nombre de mètres sur lesquels vous avez été projeté.</p><br/><p>Ce sort n'a aucun effet si vous le lancez alors que vous vous trouvez sur le plan éthéré ou sur un plan non limitrophe, comme les plans extérieurs.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 8 ou plus, vous pouvez affecter jusqu'à trois créatures consentantes (vous y compris) par niveau au-delà du 7ème. Toutes ces créatures doivent se trouver dans un rayon de 3 mètres autour de vous quand vous lancez le sort.</p>"
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
  description: "<p>Vous touchez une créature consentante et la transformez, ainsi que tous les objets qu'elle porte et qu'elle transporte, en nuage brumeux pour toute la durée du sort. Ce dernier se termine si la créature tombe à 0 point de vie. Le sort n'affecte pas les créatures intangibles.</p><br/><p>Sous cette forme, la cible n'a plus qu'un seul mode de déplacement : le vol, à une vitesse de 3 mètres. Elle peut entrer dans l'espace d'une autre créature et l'occuper. Elle est résistante aux dégâts non magiques et elle est avantagée lors des jets de sauvegarde de Force, de Dextérité et de Constitution. Elle peut passer à travers de petits trous, de minces ouvertures et même de simples fissures; en revanche, les liquides équivalent pour elle à des surfaces solides. Elle ne peut pas tomber et continue de flotter dans les airs même si elle est étourdie ou neutralisée.</p><br/><p>Sous forme de nuage brumeux, la cible ne peut pas parler ni manipuler d'objet. Il lui est impossible de lâcher les objets qu'elle portait et qu'elle transportait et personne ne peut les utiliser ni interagir avec eux. Elle ne peut pas attaquer ni lancer de sort.</p>"
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
  description: "<p>Une créature de votre choix située à portée dans votre champ de vision trouve soudain tout ce qui l'entoure d'une drôlerie hilarante et succombe à un fou rire irrépressible dès que ce sort l'affecte. Elle doit réussir un jet de sauvegarde de Sagesse ou se retrouver à terre, neutralisée et incapable de se relever pendant toute la durée du sort.</p><br/><p>Ce sort n'affecte pas les créatures dotées d'une Intelligence de 4 ou moins.</p><br/><p>À la fin de chacun de ses tours et chaque fois qu'elle subit des dégâts, la cible a droit à un nouveau jet de sauvegarde de Sagesse. Elle est avantagée lors de ce jet si ce sont des dégâts qui l'ont provoqué. Si la cible le réussit, le sort se termine.</p>"
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
  description: "<p>Vous créez un long fouet semblable à une liane couverte d'épines. Sur votre ordre, il frappe une créature à portée.</p><br/><p>Faites une attaque de sort au corps à corps contre la cible.</p><br/><p>Si vous touchez, la créature subit 1d6 dégâts perforants et, si la créature est de taille Grande ou inférieure, vous l'attirez sur 3 mètres dans votre direction.</p><br/><p>Les dégâts du sort augmentent de 1d6 quand vous atteignez le niveau 5 (2d6), le niveau 11 (3d6) et le niveau 17 (4d6).</p>"
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
  description: "<p>Vous êtes brièvement entouré d'une brume argentée et vous vous téléportez sur un maximum de 9 mètres jusqu'à un espace inoccupé situé dans votre champ de vision.</p>"
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
  description: "<p>Un bruit retentit soudain avec une intensité douloureuse, à partir d'un point situé à portée. Chaque créature située dans une sphère de 3 mètres de rayon centrée sur ce point doit faire un jet de sauvegarde de Constitution. Les créatures qui le ratent subissent 3d8 dégâts de tonnerre, les autres la moitié seulement. Une créature faite de matière inorganique, comme de la pierre, du cristal ou du métal est désavantagée sur ce jet de sauvegarde.</p><br/><p>Un objet non magique que personne ne porte ni ne transporte subit aussi ces dégâts s'il se trouve dans la zone du sort.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou plus, les dégâts augmentent de 1d8 par niveau au-delà du 2ème.</p>"
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
  description: "<p>La prochaine attaque armée, faite avant la fin de ce sort, qui vous permet de toucher une créature fait jaillir une masse grouillante de lianes épineuses au point d'impact.</p><br/><p>La cible doit réussir un jet de sauvegarde de Force, sans quoi elle est entravée jusqu'à la fin du sort. Une créature de taille Grande ou supérieure est avantagée sur ce jet de sauvegarde. Si la cible réussit son jet de sauvegarde, les lianes se flétrissent.</p><br/><p>Tant que la cible est entravée par le sort, elle subit 1d6 dégâts perforants au début de chacun de ses tours. Une créature entravée par les lianes peut utiliser son action pour faire un jet de sauvegarde de Force contre le DD du jet de sauvegarde de votre sort. Une créature suffisamment proche de la cible pour la toucher peut aussi effectuer ce jet.</p><br/><p>Si le jet est réussi, la cible est libérée.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, les dégâts augmentent de 1d6 par emplacement de sort au-delà du 1er.</p>"
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
  description: "<p>Vous entrez dans un objet ou une surface de pierre assez grande pour contenir entièrement votre corps, votre personne et votre équipement fusionnant avec la pierre pendant toute la durée du sort. Vous utilisez votre déplacement pour entrer dans la pierre en un point que vous êtes en mesure de toucher. Il ne reste alors rien de visible ni de détectable indiquant votre présence pour des sens non magiques.</p><br/><p>Tant que vous êtes fusionné avec la pierre, vous ne voyez pas ce qui se passe à l'extérieur et vous êtes désavantagé lors des tests de Sagesse (Perception) destinés à entendre les sons qui retentissent à l'extérieur de la pierre. Vous restez conscient du temps qui passe et vous pouvez lancer des sorts sur votre propre personne. Vous pouvez utiliser votre déplacement pour quitter la pierre par l'endroit par ou vous y êtes entré, ce qui met fin au sort. En dehors de cela, vous êtes dans l'incapacité de vous déplacer.</p><br/><p>Vous n'êtes pas blessé si la pierre subit des dégâts mineurs, mais si elle est partiellement détruite ou change de forme (au point que vous ne tenez plus entièrement à l'intérieur), elle vous expulse et vous subissez 6d6 dégâts contondants. Si la pierre est complètement détruite (ou transmutée en une substance différente), elle vous expulse et vous subissez 50 dégâts contondants. Si vous vous faites expulser de la pierre, vous vous retrouvez à terre dans l'espace inoccupé le plus proche de celui par lequel vous etes entré dans la roche.</p>"
};

export const GARDIEN_DE_LA_FOI: Spell = {
  type: IndexElementType.Spell,
  id: "gardien-de-la-foi",
  name: "Gardien de la foi",
  level: 4,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V",
  duration: "8 heures",
  description:
    "<p>Un gardien spectral de taille Grande apparaît et flotte dans un espace inoccupé de votre choix situé à portée dans votre champ de vision. Il occupe alors cet espace mais sa silhouette reste indistincte, à l'exception de son épée luisante et de son bouclier frappé du symbole de votre divinité.</p><br/><p>Toute créature hostile envers vous qui entre dans un espace situé dans un rayon de 3 mètres autour du gardien pour la première fois de son tour doit réussir un jet de sauvegarde de Dextérité. Si elle échoue, elle subit 20 dégâts radiants, la moitié seulement si elle réussit. Le gardien disparaît dès qu'il a infligé un total de 60 dégâts.</p>",
};

export const GLISSEMENT_DE_TERRAIN: Spell = {
  type: IndexElementType.Spell,
  id: "glissement-de-terrain",
  name: "Glissement de terrain",
  level: 6,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "36 mètres",
  components:
    "V, S, M (une lame de fer et un petit sac contenant un mélange de terres",
  duration: "Concentration, jusqu'à 2 heures",
  description:
    "<p>Choisissez une zone de terrain à portée d'un maximum de 12 mètres de côté. Vous pouvez remodeler la terre, le sable ou l'argile qu'elle comporte comme bon vous semble pendant toute la durée du sort. Vous pouvez augmenter ou diminuer l'altitude de la zone, creuser ou combler une tranchée, ériger ou abattre un mur, ou former un pilier. L'amplitude de ces modifications ne peut pas excéder la moitié de la dimension la plus importante de la zone affectée. Donc, si vous modifiez une zone de 12 mètres de côté, vous pouvez créer un pilier de 6 mètres de haut au maximum, modifier l'altitude de la zone de 6 mètres au plus, creuser une tranchée d'un maximum de 6 mètres de profondeur, etc. Il faut 10 minutes pour finaliser ces modifications.</p><br/><p>Au bout de chaque période de 10 minutes passées à vous concentrer sur le sort, vous pouvez choisir une nouvelle zone de terrain à modifier.</p><br/><p>Comme les transformations se produisent lentement, il est bien rare qu'une créature se retrouve piégée ou blessée à cause des mouvements du terrain.</p><br/><p>Ce sort est incapable de manipuler la pierre naturelle et les constructions de pierre. La roche et les structures s'adaptent au nouvel agencement du terrain. Si vos modifications déstabilisent une structure, elle peut très bien s'effondrer.</p><br/><p>De même, le sort n'affecte pas directement la croissance des plantes. La terre déplacée emporte les végétaux avec elle.</p>",
};

export const GLOBE_DINVULNERABILITE: Spell = {
  type: IndexElementType.Spell,
  id: "globe-d'invulnérabilité",
  name: "Globe d'invulnérabilité",
  level: 6,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "Personnelle (3 mètres de rayon)",
  components:
    "V, S, M (une perle de verre ou de cristal qui explose à la fin du sort)",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Une barrière immobile scintille légèrement dans un rayon de 3 mètres autour de vous et persiste pendant toute la durée du sort.</p><br/><p>Tout sort de niveau 5 ou inférieur lancé depuis l'extérieur de la barrière se trouve dans l'incapacité d'affecter les créatures et les objets se trouvant à l'intérieur, même si l'incantateur lance son sort en utilisant un emplacement de niveau supérieur. Le sort peut très bien viser les créatures et les objets situés au sein de la barrière, mais il n'a aucun effet sur eux. De même, la zone protégée par la barrière est exclue de la zone affectée par les sorts de ces niveaux.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou plus, la barrière bloque les sorts d'un niveau de plus par niveau au-delà du 6ème.</p>",
};

export const GLYPHE_DE_GARDE: Spell = {
  type: IndexElementType.Spell,
  id: "glyphe-de-garde",
  name: "Glyphe de garde",
  level: 3,
  school: SpellSchool.Abjuration,
  castingTime: "1 heure",
  range: "Contact",
  components:
    "V, S, M (encens et poudre de diamant d'une valeur minimale de 200 po, que le sort consume)",
  duration: "Jusqu'à dissipation ou déclenchement",
  description:
    "<p>Lorsque vous lancez ce sort, vous tracez un glyphe qui libèrera plus tard un effet magique, soit sur une surface quelconque, comme une table, le sol ou un mur, soit dans un objet que l'on peut refermer pour dissimuler l'inscription, comme un livre, un parchemin ou un coffre au trésor. Le glyphe peut couvrir une zone dont le diamètre n'excède pas 3 m. Si la surface ou l'objet est déplacé de plus de 3 m de l'endroit où vous avez lancé ce sort, le glyphe est brisé et le sort prend fin sans être déclenché.</p><br/><p>Le glyphe est presque invisible. Pour le discerner, il faut réussir un test d'Intelligence (Investigation) contre le DD du jet de sauvegarde de votre sort.</p><br/><p>Lors de l'incantation, c'est à vous de décider de ce qui déclenchera le sort. Pour les glyphes tracés sur une surface quelconque, les déclencheurs les plus courants consistent à toucher le glyphe ou se tenir dessus, à déplacer un objet recouvrant le glyphe, à s'approcher à une certaine distance du glyphe ou encore à manipuler l'objet sur lequel le glyphe est tracé. Pour les glyphes inscrits dans un objet, on trouve parmi les déclencheurs les plus répandus le fait d'ouvrir l'objet, de s'en approcher à une certaine distance ou de voir ou de lire le glyphe. Le sort se termine dès que le glyphe se déclenche.</p><br/><p>Vous pouvez affiner le déclencheur, de façon à ce que le sort s'active sous certaines conditions ou en fonction de certaines caractéristiques physiques (comme le poids ou la taille), selon un type de créature (pour un glyphe destiné aux aberrations ou aux drows par exemple) ou selon l'alignement.</p><br/><p>Vous pouvez aussi définir des conditions pour que certaines créatures ne déclenchent pas le glyphe, en prononçant un mot de passe par exemple.</p><br/><p>Lorsque vous dessinez le glyphe, vous devez choisir entre des runes explosives ou un glyphe à sort.</p><br/><p>Runes explosives. Quand le glyphe se déclenche, il explose dans une sphère de 6 mètres de rayon centrée sur lui. La sphère s'étend en contournant les angles si besoin.</p><br/><p>Chaque créature de la zone doit faire un jet de sauvegarde de Dextérité. Une créature reçoit 5d8 points de dégâts d'acide, de froid, de feu, de foudre ou de tonnerre si elle rate son jet (à vous de choisir le type de dégâts lors de l'incantation), la moitié seulement si elle le réussit.</p><br/><p>Glyphe à sort. Vous pouvez stocker un sort de niveau 3 ou inférieur dans le glyphe en le lançant lors de l'incantation du glyphe. Ce sort doit viser une créature unique ou une zone.</p><br/><p>Le sort stocké n'a aucun effet immédiat quand il est lancé ainsi. Il se lance quand quelqu'un déclenche le glyphe. Si le sort affecte une cible, il vise celle qui a déclenché le glyphe.</p><br/><p>S'il affecte une zone, cette dernière est centrée sur la créature qui a déclenché le glyphe. Si le sort invoque des créatures hostiles ou crée des objets néfastes ou des pièges, ils apparaissent aussi près de l'intrus que possible et s'en prennent à lui. Si le sort nécessite de la concentration, il persiste jusqu'à la fin de sa durée maximale.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, les dégâts des runes explosives augmentent de 1d8 par niveau au-delà du 3ème. Si vous créez un glyphe à sort, vous pouvez stocker un sort d'un niveau egal ou inférieur à celui employé pour lancer le glyphe.</p>",
};

export const GRAISSE: Spell = {
  type: IndexElementType.Spell,
  id: "graisse",
  name: "Graisse",
  level: 1,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S, M (de la couenne de porc ou du beurre)",
  duration: "1 minute",
  description:
    "<p>Une couche de graisse particulièrement glissante recouvre le sol dans une zone de 3 mètres de côté centrée sur un point Situé à portée et le change en terrain difficile pour toute la durée du sort.</p><br/><p>Lorsque la graisse apparaît, chaque créature se trouvant dans la zone affectée doit réussir un jet de sauvegarde de Dextérité ou tomber à terre. Une créature qui entre dans la zone ou y termine son tour doit aussi réussir ce jet sous peine de se retrouver à terre.</p>",
};

export const GRANDE_FOULEE: Spell = {
  type: IndexElementType.Spell,
  id: "grande-foulée",
  name: "Grande foulée",
  level: 1,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "Contact",
  components: "V,S, M (une pincée de poussière)",
  duration: "1 heure",
  description:
    "<p>Vous touchez une créature dont la vitesse augmente de 3 mètres jusqu'à la fin du sort.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, vous pouvez affecter une créature de plus par niveau au-delà du 1er.</p>",
};

export const GRELE_DEPINES: Spell = {
  type: IndexElementType.Spell,
  id: "grêle-d'épines",
  name: "Grêle d'épines",
  level: 1,
  school: SpellSchool.Conjuration,
  castingTime: "1 action bonus",
  range: "Personnelle",
  components: "V",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>La prochaine fois que vous touchez une créature avec une attaque armée à distance avant la fin du sort, ce dernier crée une pluie d'épines qui jaillit de votre arme ou de votre munition. En plus de l'effet normal de l'attaque, la cible et toutes les créatures situées dans un rayon de 1,50 mètre autour d'elle doivent faire un jet de sauvegarde de Dextérité.</p><br/><p>Une créature subit 1d10 dégâts perforants en cas d'échec, la moitié en cas de réussite.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, les dégâts augmentent de 1d10 par emplacement de sort au-delà du 1\" (pour un maximum de 6d10).</p>",
};

export const GUERISON: Spell = {
  type: IndexElementType.Spell,
  id: "guérison",
  name: "Guérison",
  level: 6,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S",
  duration: "Instantanée",
  description:
    "<p>Choisissez une créature située à portée dans votre champ de vision. Une bouffée d'énergie positive la traverse et lui rend 70 points de vie. Ce sort met aussi un terme à la cécité, la surdité et toutes les maladies qui l'affectent. Ce sort n'a aucun effet sur les artificiels et les morts-vivants.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou plus, la quantité de soins prodigués augmente de 10 points par niveau au-delà du 6ème.</p>",
};

export const GUERISON_DE_GROUPE: Spell = {
  type: IndexElementType.Spell,
  id: "guérison-de-groupe",
  name: "Guérison de groupe",
  level: 9,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S",
  duration: "Instantanée",
  description:
    "<p>Un flot d'énergie curative émane de vous et enveloppe les créatures blessées qui vous entourent. Vous rendez jusqu'à 700 points de vie, divisés comme bon vous semble entre autant de créatures situées à portée et dans votre champ de vision que vous le voulez. Le sort débarrasse aussi les créatures qu'il guérit de leurs maladies et des effets qui les rendent sourdes ou aveugles. Ce sort n'a aucun effet sur les morts-vivants ni sur les artificiels.</p>",
};

export const HATE: Spell = {
  type: IndexElementType.Spell,
  id: "hâte",
  name: "Hâte",
  level: 3,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S, M (un copeau de racine de réglisse)",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Choisissez une créature consentante située à portée dans votre champ de vision. Jusqu'à la fin du sort, la cible voit sa vitesse doubler, gagne un bonus de +2 à la CA, est avantagée lors des jets de sauvegarde de Dextérité et dispose d'une action de plus par tour. Cette action est uniquement réservée aux actions suivantes: attaquer (une attaque à l'arme seulement), foncer, se désengager, se cacher ou utiliser un objet.</p><br/><p>Quand le sort se termine, la cible ne peut pas se déplacer ni effectuer une action avant que son prochain tour ne se soit écoulé, car une vague de léthargie déferle sur elle.</p>",
};

export const HERISSEMENT_DE_PROJECTILES: Spell = {
  type: IndexElementType.Spell,
  id: "hérissement-de-projectiles",
  name: "Hérissement de projectiles",
  level: 3,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "Personnelle (cône de 18 mètres)",
  components: "V, S, M (une munition ou une arme de jet)",
  duration: "Instantanée",
  description:
    "<p>Vous lancez une arme de jet non magique ou un projectile non magique, afin de créer un cône d'armes identiques qui filent dans les airs avant de disparaître. Chaque créature située dans un cône de 18 mètres doit réussir un jet de sauvegarde de Dextérité. Celles qui échouent subissent 3d8 dégâts, les autres la moitié seulement. Le type de dégâts est identique à celui du projectile utilisé comme composante.</p>",
};

export const HEROISME: Spell = {
  type: IndexElementType.Spell,
  id: "héroïsme",
  name: "Héroïsme",
  level: 1,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Vous imprégnez une créature consentante que vous touchez de courage. Jusqu'à la fin du sort, elle est immunisée contre l'état effrayé et, au début de chacun de ses tours, elle gagne un montant de points de vie temporaires égal à votre modificateur de caractéristique d'incantation. Quand le sort se termine, la cible perd les éventuels points de vie temporaires restants issus de ce sort.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, vous pouvez affecter une créature de plus par niveau au-delà du 1er.</p>",
};

export const IDENTIFICATION: Spell = {
  type: IndexElementType.Spell,
  id: "identification",
  name: "Identification",
  level: null,
  school: SpellSchool.Divination,
  castingTime: "1 minute / Rituel",
  range: "Contact",
  components:
    "V, S, M (une perle d'une valeur minimale de 100 po et une plume de hibou)",
  duration: "Instantanée",
  description:
    "<p>Vous choisissez un objet avec lequel vous devez rester en contact pendant toute l'incantation du sort. Si c'est un objet magique ou un objet imprégné de magie, vous apprenez immédiatement quelles sont ses propriétés et comment vous en servir. Vous savez aussi s'il faut s'harmoniser avec lui pour l'utiliser et combien de charges il possède, le cas échéant. Vous savez si des sorts affectent l'objet et quel est leur nom. Si l'objet a été créé grâce à un sort, vous apprenez quel sort lui a donné naissance.</p><br/><p>Si, à la place, vous touchez une créature pendant toute l'incantation, vous découvrez quels sorts l'affectent présentement, le cas échéant.</p>",
};

export const ILLUSION_MINEURE: Spell = {
  type: IndexElementType.Spell,
  id: "illusion-mineure",
  name: "Illusion mineure",
  level: 0,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "9 mètres",
  components: "S, M (un morceau de toison)",
  duration: "1 minute",
  description:
    "<p>Vous créez à portée un son ou une image représentant un objet.</p><br/><p>L'illusion persiste pendant toute la durée du sort et se dissipe si vous révoquez le sort par une action ou si vous lancez de nouveau ce sort.</p><br/><p>Si vous créez un son, son volume peut aller du simple murmure au hurlement. Ce peut être votre voix, celle de quelqu'un d'autre, le rugissement d'un lion, un battement de tambours ou tout autre son de votre choix. Ce bruit persiste sans faiblir pendant toute la durée du sort, à moins que vous ne préfériez émettre des sons distincts à différents moments pendant la durée du sort.</p><br/><p>Si vous créez une image (comme une chaise, des empreintes boueuses ou un petit coffre), elle doit tenir dans un cube de 1,50 mètre d'arête. L'image ne s'accompagne pas de son, de lumière, d'odeur, ni d'autres effets sensoriels. Une interaction physique avec l'image révèle de suite qu'elle n'est qu'une illusion, car les objets la traversent.</p><br/><p>Si une créature utilise son action pour examiner le son ou l'image, elle comprend qu'il s'agit d'une illusion si elle réussit un test d'Intelligence (Investigation) opposé au DD du jet de sauvegarde de votre sort. Si une créature perce l'illusion à jour, elle perd toute substance pour elle.</p>",
};

export const ILLUSION_PROGRAMMEE: Spell = {
  type: IndexElementType.Spell,
  id: "illusion-programmée",
  name: "Illusion programmée",
  level: 6,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "36 mètres",
  components:
    "V, S, M (un morceau de toison et de la poussière de jade d'une valeur de 25 po)",
  duration: "Jusqu'à dissipation",
  description:
    "<p>Vous créez une illusion représentant un objet, une créature ou un autre phénomène visible à portée. Elle s'active une fois les conditions spécifiques remplies; en attendant, elle est imperceptible. L'illusion doit tenir dans un cube de 9 mètres d'arête. Vous décidez de son comportement et des sons qu'elle émet au moment où vous lancez le sort. Ce comportement programmé peut durer un maximum de 5 minutes.</p><br/><p>Quand les conditions spécifiées se présentent, l'illusion apparaît et se comporte comme vous l'avez décidé. Sa représentation finie, elle disparaît et reste en hibernation pendant 10 minutes. Ensuite, elle peut se réactiver de nouveau.</p><br/><p>Les conditions de déclenchement peuvent être aussi génériques ou détaillées que vous le souhaitez, mais elles doivent toujours se baser sur des éléments visuels ou audibles se produisant dans un rayon de 9 mètres autour de la zone du sort. Par exemple, vous pouvez créer une illusion de vous-même qui apparaît pour avertir d'autres gens quand ils tentent d'ouvrir une porte piégée, ou vous pouvez programmer votre illusion pour qu'elle se déclenche seulement quand une créature prononce le mot de passe correct.</p><br/><p>Les interactions physiques révèlent que l'image n'est qu'une illusion, car les objets la traversent. Si une créature utilise son action pour examiner l'image, elle comprend que c'est une illusion, à condition de réussir un test d'Intelligence (Investigation) contre le DD du jet de sauvegarde de votre sort.</p><br/><p>Si une créature perce l'illusion à jour, elle voit à travers l'image et les sons produits par l'illusion sonnent creux à ses oreilles.</p>",
};

export const IMAGE_MAJEURE: Spell = {
  type: IndexElementType.Spell,
  id: "image-majeure",
  name: "Image majeure",
  level: 3,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S, M (un morceau de toison)",
  duration: "Concentration, jusqu'à 10 minutes",
  description:
    "<p>Vous créez l'image d'un objet, d'une créature ou d'un phénomène visible pas plus grand qu'un cube de 6 mètres d'arête. L'image apparaît en un point situé à portée et dans votre champ de vision et persiste pendant toute la durée du sort.</p><br/><p>Elle a l'air absolument réelle et s'accompagne des sons, des odeurs et de la température appropriés pour la chose qu'elle représente. En revanche, elle ne dégage pas assez de chaleur ou de froid pour blesser quelqu'un, ne génère pas de sons assez puissants pour provoquer des dégâts de tonnerre ou assourdir une créature, et n'émet pas une odeur assez puissante pour écœurer une créature (comme le fait la puanteur du troglodyte).</p><br/><p>Tant que vous êtes à portée de l'illusion, vous pouvez utiliser votre action pour déplacer l'image vers un autre point situé à portée. Quand l'image bouge, vous pouvez modifier son apparence de manière à ce que ses mouvements paraissent naturels. Par exemple, si vous créez l'image d'une créature et la déplacez, vous pouvez modifier l'image pour donner l'impression que la créature marche. De même, vous pouvez modifier les sons que l'image émet, à tel point que vous pouvez lui faire tenir une conversation, par exemple.</p><br/><p>Les interactions physiques avec l'image révèlent qu'elle n'est qu'une illusion, car les objets la traversent. Si une créature utilise son action pour examiner l'image, elle comprend que c'est une illusion à condition de réussir un test d'Intelligence (Investigation) contre le DD du jet de sauvegarde de votre sort. Si une créature perce l'illusion à jour, elle voit à travers l'image et ne perçoit plus que faiblement ses autres propriétés sensorielles.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou plus, le sort persiste jusqu'à dissipation, sans que vous ayez besoin de vous concentrer.</p>",
};

export const IMAGE_MIROIR: Spell = {
  type: IndexElementType.Spell,
  id: "image-miroir",
  name: "Image miroir",
  level: 2,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S",
  duration: "1 minute",
  description:
    "<p>Trois répliques illusoires de votre personne apparaissent dans votre espace. Jusqu'à la fin du sort, ces répliques se déplacent en même temps que vous et imitent toutes vos actions, changeant de position de manière à ce qu'il soit impossible de savoir quelles versions de vous sont des images et quelle Version est réelle. Vous pouvez utiliser une action pour revoquer les répliques illusoires.</p><br/><p>Pendant toute la durée du sort, chaque fois qu'une créature vous prend pour cible d'une attaque, vous devez lancer 1d20 pour savoir si l'attaque touche votre personne ou l'un de vos doubles.</p><br/><p>Si vous avez trois répliques, vous devez obtenir 6 ou plus pour que l'attaque touche une réplique. Si vous n'en avez plus que deux, vous devez faire 8 ou plus et si vous n'en avez plus qu'une, vous devez faire 11 ou plus.</p><br/><p>Chaque réplique possède une CA de 10 + votre modificateur de Dextérité. Si l'attaque touche une réplique, elle la détruit.</p><br/><p>Le seul moyen de détruire une réplique est de la toucher avec une attaque, car elle ignore tous les autres effets et dégâts. Le sort se termine quand les trois répliques sont détruites.</p><br/><p>Une créature n'est pas affectée par ce sort si elle ne voit pas, si elle se sert d'un mode de perception autre que la vue (comme la vision aveugle) ou encore si elle perçoit les illusions comme telles avec vision lucide, par exemple.</p>",
};

export const IMAGE_PROJETEE: Spell = {
  type: IndexElementType.Spell,
  id: "image-projetée",
  name: "Image projetée",
  level: 7,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "750 kilomètres",
  components:
    "V, S, M (une petite réplique de votre personne construite avec des matériaux valant au moins 5 po)",
  duration: "Concentration, jusqu'à 1 jour",
  description:
    "<p>Vous créez un double illusoire de votre personne qui persiste pendant toute la durée du sort. Ce double peut apparaître à n'importe quel endroit à portée, peu importent les obstacles interposés, à condition que vous l'ayez déjà vu auparavant.</p><br/><p>D'un point de vue visuel et auditif, l'illusion vous est tout à fait semblable; en revanche, elle est intangible. Si elle subit le moindre dégât, elle disparaît et le sort se termine.</p><br/><p>Vous pouvez utiliser votre action pour déplacer votre illusion jusqu'au double de votre vitesse, lui faire exécuter des gestes, la faire parler et se comporter comme bon vous semble. Elle imite vos manières à la perfection.</p><br/><p>Vous pouvez entendre et voir par l'intermédiaire des oreilles et des yeux de votre double, comme si vous occupiez son espace. A votre tour, vous pouvez dépenser une action bonus pour passer de l'utilisation de ses sens à celle des vôtres et inversement. Tant que vous utilisez ses sens, vous êtes aveugle et sourd à votre propre environnement.</p><br/><p>Les interactions physiques révèlent que l'image n'est qu'une illusion, car les objets la traversent. Si une créature utilise son action pour examiner l'image, elle comprend que c'est une illusion, à condition de réussir un test d'Intelligence (Investigation) contre le DD du jet de sauvegarde de votre sort.</p><br/><p>Si une créature perce l'illusion à jour, elle voit à travers l'image et les sons produits par l'illusion sonnent creux à ses oreilles.</p>",
};

export const IMAGE_SILENCIEUSE: Spell = {
  type: IndexElementType.Spell,
  id: "image-silencieuse",
  name: "Image silencieuse",
  level: 1,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S, M (un morceau de toison)",
  duration: "Concentration, jusqu'à 10 minutes",
  description:
    "<p>Vous créez l'image d'un objet, d'une créature ou d'un phénomène visible tenant dans un cube de 4,50 mètres de côté. L'image apparaît en un point situé à portée et persiste pendant toute la durée du sort. L'image comporte seulement des composantes visuelles, elle ne s'accompagne pas d'odeurs, de sons, ni d'autres effets sensoriels.</p><br/><p>Vous pouvez utiliser votre action pour déplacer l'image vers un autre point à portée. Pendant qu'elle se déplace, vous pouvez modifier son apparence pour donner l'impression d'un mouvement naturel. Par exemple, si vous créez l'image d'une créature et que vous la déplacez, vous pouvez modifier l'image pour donner l'impression que la créature est en train de marcher.</p><br/><p>Les interactions physiques révèlent que l'image n'est qu'une illusion, car les objets la traversent. Si une créature utilise son action pour examiner l'image, elle comprend que c'est une illusion à condition de réussir un test d'Intelligence (Investigation) contre le DD du jet de sauvegarde de votre sort.</p><br/><p>Si une créature perce l'illusion à jour, elle voit à travers l'image.</p>",
};

export const IMMOBILISATION_DE_MONSTRE: Spell = {
  type: IndexElementType.Spell,
  id: "immobilisation-de-monstre",
  name: "Immobilisation de monstre",
  level: 5,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "27 mètres",
  components: "V, S, M (un petit morceau de fer bien droit)",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Choisissez une créature située à portée dans votre champ de vision. Elle doit réussir un jet de sauvegarde de Sagesse, sans quoi elle est paralysée pour toute la durée du sort. Ce sort est sans effet sur les morts-vivants. À la fin de chacun de ses tours, la cible a droit à un nouveau jet de sauvegarde de Sagesse. Si elle le réussit, le sort se termine.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou plus, vous pouvez viser une créature de plus par niveau au-delà du 5%. Les créatures visées doivent se trouver à 9 mètres ou moins les unes des autres au moment où vous lancez le sort.</p>",
};

export const IMMOBILISATION_DE_PERSONNE: Spell = {
  type: IndexElementType.Spell,
  id: "immobilisation-de-personne",
  name: "Immobilisation de personne",
  level: 2,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S, M (un petit morceau de fer bien droit)",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Choisissez un humanoïde situé à portée et dans votre champ de vision. Il doit réussir un jet de sauvegarde de Sagesse, sans quoi il est paralysé pour toute la durée du sort. À la fin de chacun de ses tours, la cible a droit à un nouveau jet de sauvegarde de Sagesse. Si elle le réussit, le sort se termine.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou plus, vous pouvez viser un humanoïde de plus par niveau au-delà du 2ème. Les humanoïdes visés doivent se trouver à 9 mètres ou moins les uns des autres au moment où vous lancez le sort.</p>",
};

export const IMPRECATION: Spell = {
  type: IndexElementType.Spell,
  id: "imprécation",
  name: "Imprécation",
  level: 1,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S, M (une goutte de sang)",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Trois créatures de votre choix au maximum, toutes situées à portée et dans votre champ de vision, sont contraintes de faire un jet de sauvegarde de Charisme. Dès qu'une cible qui a raté ce jet effectue un jet d'attaque ou de sauvegarde alors que le sort n'est pas terminé, elle doit lancer 1d4 et soustraire le nombre obtenu de son jet d'attaque ou de sauvegarde.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, vous pouvez viser une créature de plus par niveau au-delà du 1er.</p>",
};

export const INJONCTION: Spell = {
  type: IndexElementType.Spell,
  id: "injonction",
  name: "Injonction",
  level: 1,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V",
  duration: "1 round",
  description:
    "<p>Vous lancez un ordre d'un mot à une créature située à portée dans votre champ de vision. Elle doit réussir un jet de sauvegarde de Sagesse, sans quoi elle exécute votre ordre à son prochain tour. Le sort reste sans effet si la cible est un mort-vivant, si elle ne comprend pas votre langue ou si votre ordre la met directement en danger.</p><br/><p>Voici quelques ordres typiques et leurs effets. Vous pouvez. donner un ordre différent de ceux présentés là, mais dans ce cas, c'est au MD de décider comment la victime se comporte.</p><br/><p>Le sort se termine si elle se trouve dans l'incapacité d'obéir à l'ordre reçu.</p><br/><p>Approche. La cible s'approche de vous en empruntant l'itinéraire le plus court et le plus direct. Elle termine son tour dès qu'elle arrive dans un rayon de 1,50 mètre autour de vous.</p><br/><p>Lâche. La cible lâche ce qu'elle tient et son tour se termine.</p><br/><p>Fuis. La cible passe son tour à s'éloigner de vous par la méthode la plus rapide à sa disposition.</p><br/><p>Rampe. La cible se laisse tomber à terre et termine son tour.</p><br/><p>Stop. La cible ne bouge pas et n'entreprend aucune action.</p><br/><p>Une créature en vol reste dans les airs, à condition qu'elle soit en mesure de le faire. Si elle est obligée de se déplacer pour rester en vol, elle parcourt la distance minimum requise pour ce faire.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, vous pouvez affecter une créature de plus par niveau au-delà du 1er. Ces créatures doivent toutes se trouver à 9 mètres ou moins les unes des autres lorsque vous lancez le sort.</p>",
};

export const INSECTE_GEANT: Spell = {
  type: IndexElementType.Spell,
  id: "insecte-géant",
  name: "Insecte géant",
  level: 4,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V.S",
  duration: "Concentration, jusqu'à 10 minutes",
  description:
    "<p>Vous transformez un maximum de dix mille-pattes, trois araignées, cinq guêpes ou un scorpion situés à portée, en version geante de leur forme naturelle pendant toute la durée du sort. Un mille-patte devient donc un mille-patte géant, une araignée une araignée géante, une guêpe une guêpe géante et un scorpion un scorpion géant.</p><br/><p>Chaque créature obéit à vos ordres verbaux et, lors d'un combat, agit à chaque round à votre tour. C'est le MD qui dispose des statistiques de ces créatures et gère leurs actions et leurs déplacements.</p><br/><p>Une créature reste sous sa forme géante pendant toute la durée du sort, jusqu'à ce qu'elle tombe à 0 point de vie ou jusqu'à ce que vous utilisiez une action pour révoquer l'effet du sort sur elle.</p><br/><p>Le MD peut vous autoriser à choisir une cible différente. Par exemple, si vous transformez une abeille, sa version géante peut disposer des mêmes statistiques qu'une guêpe géante.</p>",
};

export const INTERDICTION: Spell = {
  type: IndexElementType.Spell,
  id: "interdiction",
  name: "Interdiction",
  level: null,
  school: SpellSchool.Abjuration,
  castingTime: "10 minutes / Rituel",
  range: "Contact",
  components:
    "V, S, M (un peu d'eau bénite, un encens rare et un rubis en poudre d'une valeur minimale de 1 000 po)",
  duration: "1 jour",
  description:
    "<p>Vous créez un sceau empêchant les déplacements magiques dans une zone de 3 700 m\" au sol et d'une hauteur de 9 mètres. Pendant toute la durée du sort, les créatures ne peuvent pas se téléporter dans la zone ni y entrer via un portail comme celui issu du sort du même nom. Le sort protège la zone contre tous les modes de déplacement planaire et empêche donc les créatures d'y entrer en passant par le plan astral, le plan éthéré, la Féerie, la Gisombre ou en utilisant un sort de changement de plan.</p><br/><p>De plus, le sort blesse les créatures des types choisis lors de son incantation. Choisissez un ou plusieurs de ces types : célestes, elementaires, fées, fiélons, morts-vivants. Quand une créature d'un type choisi pénètre dans la zone pour la première fois de son tour ou y commence son tour, elle subit 5d10 dégâts radiants ou nécrotiques (à vous de choisir quand vous lancez le sort).</p><br/><p>Vous pouvez décider d'un mot de passe lors de l'incantation du sort. Si une créature le prononce en entrant dans la zone, elle ne subit pas de dégâts.</p><br/><p>La zone d'effet de ce sort ne peut pas se superposer à celle d'un autre sort d'interdiction. Si vous lancez interdiction tous les jours pendant 30 jours au même endroit, le sort persiste jusqu'à dissipation et les composantes matérielles sont consommées lors de la dernière incantation.</p>",
};

export const INVERSION_DE_LA_GRAVITE: Spell = {
  type: IndexElementType.Spell,
  id: "inversion-de-la-gravité",
  name: "Inversion de la gravité",
  level: 7,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "30 mètres",
  components: "V, S, M (de la magnétite et de la limaille de fer)",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Ce sort inverse la gravité dans un cylindre de 15 mètres de rayon et 30 mètres de haut centré sur un point à portée. Toutes les créatures et tous les objets qui ne sont pas ancrés au sol, d'une manière ou d'une autre, tombent vers le haut jusqu'à atteindre le sommet de la zone affectée par le sort. Une créature peut faire un jet de sauvegarde de Dextérité pour s'accrocher à un objet fixe situé à sa portée, afin d'éviter la chute.</p><br/><p>Si un objet solide (comme un plafond) se trouve sur la trajectoire de la chute, les créatures et les objets le percutent comme lors d'une chute ordinaire vers le bas. Si un objet ou une créature atteint le sommet de la zone affectée sans heurter quoi que ce soit, il reste là, à osciller légèrement, pendant toute la durée du sort.</p><br/><p>Une fois la durée du sort écoulée, les objets et les créatures affectés retombent à terre.</p>",
};

export const INVISIBILITE: Spell = {
  type: IndexElementType.Spell,
  id: "invisibilité",
  name: "Invisibilité",
  level: 2,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S, M (un cil enrobé de gomme arabique)",
  duration: "Concentration, jusqu'à 1 heure",
  description:
    "<p>La créature que vous touchez devient invisible jusqu'à la fin du sort. Tout ce qu'elle porte et transporte reste invisible tant qu'elle le garde sur elle. Le sort se termine pour la cible qui attaque ou lance un sort.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou plus, vous pouvez viser une créature de plus par niveau au-delà du 2ème.</p>",
};

export const INVISIBILITE_SUPREME: Spell = {
  type: IndexElementType.Spell,
  id: "invisibilité-suprême",
  name: "Invisibilité suprême",
  level: 4,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "Contact",
  components: "V. S",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Vous devenez invisible jusqu'à ce que le sort se termine, ou vous pouvez accorder cet effet à une créature consentante que vous touchez. Tout ce que porte la cible devient invisible tant que les objets restent sur sa personne.</p>",
};

export const INVOCATION_DANIMAUX: Spell = {
  type: IndexElementType.Spell,
  id: "invocation-d'animaux",
  name: "Invocation d'animaux",
  level: 3,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V. S",
  duration: "Concentration, jusqu'à 1 heure",
  description:
    "<p>Vous invoquez des esprits féeriques qui prennent la forme danimaux et apparaissent dans des cases inoccupées situées à portée et dans votre champ de vision. Choisissez l'une des options suivantes pour déterminer quelles créatures apparaissent.</p><br/><p>﻿﻿Une bête d'une dangerosité de 2 ou moins.</p><br/><p>﻿﻿Deux bêtes d'une dangerosité de 1 ou moins.</p><br/><p>﻿﻿Quatre bêtes d'une dangerosité de 1/2 ou moins.</p><br/><p>﻿﻿Huit bêtes d'une dangerosité de 1/4 ou moins.</p><br/><p>Chacune de ces bêtes est aussi considérée comme une fée et disparaît dès qu'elle tombe à 0 point de vie ou quand le sort se termine.</p><br/><p>Les créatures invoquées se montrent amicales envers vous et vos compagnons. Lancez l'initiative pour les créatures invoquées en tant que groupe qui dispose de ses propres tours de jeu. Les animaux obéissent aux ordres verbaux que vous leur donnez (sans que cela vous demande d'utiliser une action). En l'absence d'ordre, ils se défendent contre les créatures hostiles, mais n'entreprennent pas d'autre action.</p><br/><p>C'est le MD qui dispose des statistiques des créatures.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant certains emplacements de niveau supérieur, vous choisissez l'une des options d'invocation décrites précédemment et faites apparaître plus de créatures: deux fois plus pour un emplacement de niveau 5, trois fois plus pour un emplacement de niveau 7 et quatre fois plus pour un emplacement de niveau 9.</p>",
};

export const INVOCATION_DE_CELESTE: Spell = {
  type: IndexElementType.Spell,
  id: "invocation-de-céleste",
  name: "Invocation de céleste",
  level: 7,
  school: SpellSchool.Conjuration,
  castingTime: "1 minute",
  range: "27 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 heure",
  description:
    "<p>Vous invoquez un céleste doté d'un facteur de puissance de 4 ou moins. Il apparaît dans une case inoccupée située à portée dans votre champ de vision. Le céleste disparaît dès qu'il tombe à 0 point de vie ou quand le sort se termine.</p><br/><p>Le céleste se montre amical envers vous et vos compagnons. Lancez l'initiative pour lui, sachant qu'il dispose de ses propres tours de jeu. Il obéit aux ordres verbaux que vous lui donnez (sans que cela vous demande d'utiliser une action), tant qu'ils ne vont pas à l'encontre de son alignement. En l'absence d'ordre, il se défend contre les créatures hostiles, mais n'entreprend pas d'autre action.</p><br/><p>C'est le MD qui dispose des statistiques du céleste.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 9 ou plus, vous invoquez un céleste doté d'un facteur de puissance de 5 ou moins.</p>",
};

export const INVOCATION_DELEMENTAIRE: Spell = {
  type: IndexElementType.Spell,
  id: "invocation-d'élémentaire",
  name: "Invocation d'élémentaire",
  level: 5,
  school: SpellSchool.Conjuration,
  castingTime: "1 minute",
  range: "27 mètres",
  components:
    "V, S, M (encens à brûler pour l'air, argile molle pour la terre, soufre et phosphore pour le feu, ou sable et eau pour l'eau)",
  duration: "Concentration, jusqu'à 1 heure",
  description:
    "<p>Vous invoquez un serviteur élémentaire. Choisissez une zone d'air, de terre, de feu ou d'eau occupant un cube de 3 mètres d'arête situé à portée. Un élémentaire doté d'un facteur de puissance de 5 ou moins et adapté à la zone que vous avez choisie apparaît dans un espace inoccupé situé dans un rayon de 3 mètres autour d'elle. Par exemple, un élémentaire du feu jaillit d'un brasier tandis qu'un élémentaire de la terre sort du sol. L'élémentaire disparaît dès qu'il tombe à 0 point de vie ou quand le sort se termine.</p><br/><p>L'élémentaire se montre amical envers vous et vos compagnons. Lancez l'initiative pour lui, sachant qu'il dispose de ses propres tours de jeu. Il obéit aux ordres verbaux que vous lui donnez (sans que cela vous demande d'utiliser une action). En l'absence d'ordre, il se défend contre les créatures hostiles, mais n'entreprend pas d'autre action.</p><br/><p>Si votre concentration se brise, l'élémentaire ne disparaît pas, mais il échappe à votre contrôle et devient hostile envers vous et vos compagnons. Il peut aller jusqu'à vous attaquer.</p><br/><p>Vous ne pouvez pas renvoyer un élémentaire qui est hors de contrôle, il disparaît simplement 1 heure après que vous l'avez invoqué.</p><br/><p>C'est le MD qui dispose des statistiques de l'élémentaire.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou plus, le facteur de puissance de l'élémentaire augmente de 1 par niveau au-delà du 5ème.</p>",
};

export const INVOCATION_DELEMENTAIRES_MINEURS: Spell = {
  type: IndexElementType.Spell,
  id: "invocation-d'élémentaires-mineurs",
  name: "Invocation d'élémentaires mineurs",
  level: 4,
  school: SpellSchool.Conjuration,
  castingTime: "1 minute",
  range: "27 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 heure",
  description:
    "<p>Vous invoquez des élémentaires qui apparaissent dans des cases inoccupées situées à portée et dans votre champ de vision. Choisissez l'une des options suivantes pour déterminer quelles créatures apparaissent.</p><br/><p>﻿﻿Un élémentaire d'une dangerosité de 2 ou moins.</p><br/><p>﻿﻿Deux élémentaires d'une dangerosité de 1 ou moins.</p><br/><p>﻿﻿Quatre élémentaires d'une dangerosité de 1/2 ou moins.</p><br/><p>﻿﻿Huit élémentaires d'une dangerosité de 1/4 ou moins.</p><br/><p>Un élémentaire ainsi invoqué disparaît dès qu'il tombe à</p><br/><p>0 point de vie ou quand le sort se termine.</p><br/><p>Les créatures invoquées se montrent amicales envers vous et vos compagnons. Lancez l'initiative pour les créatures invoquées en tant que groupe qui dispose de ses propres tours de jeu. Les élémentaires obéissent aux ordres verbaux que vous leur donnez (sans que cela vous demande d'utiliser une action). En l'absence d'ordre, ils se défendent contre les créatures hostiles, mais n'entreprennent pas d'autre action.</p><br/><p>C'est le MD qui dispose des statistiques des créatures.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant certains emplacements de niveau supérieur, vous choisissez. l'une des options d'invocation décrites précédemment et faites apparaître plus de créatures: deux fois plus pour un emplacement de niveau 6 et trois fois plus pour un emplacement de niveau 8.</p>",
};

export const INVOCATION_DETRES_SYLVESTRES: Spell = {
  type: IndexElementType.Spell,
  id: "invocation-d'êtres-sylvestres",
  name: "Invocation d'êtres sylvestres",
  level: 4,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S, M (une baie de houx par créature invoquée)",
  duration: "Concentration, jusqu'à 1 heure",
  description:
    "<p>Vous invoquez des créatures féeriques qui apparaissent dans des cases inoccupées situées à portée et dans votre champ de vision. Choisissez l'une des options suivantes pour déterminer quelles créatures apparaissent.</p><br/><p>﻿﻿Une créature féerique d'une dangerosité de 2 ou moins.</p><br/><p>﻿﻿Deux créatures féeriques d'une dangerosité de 1 ou moins.</p><br/><p>﻿﻿Quatre créatures féeriques d'une dangerosité de 1/2 ou moins.</p><br/><p>﻿﻿Huit créatures féeriques d'une dangerosité de 1/4 ou moins.</p><br/><p>Une créature invoquée disparaît dès qu'elle tombe à 0 point de vie ou quand le sort se termine.</p><br/><p>Les créatures invoquées se montrent amicales envers vous et vos compagnons. Lancez l'initiative pour les créatures invoquées en tant que groupe qui dispose de ses propres tours de jeu. Les créatures féeriques obéissent aux ordres verbaux que vous leur donnez (sans que cela vous demande d'utiliser une action). En l'absence d'ordre, elles se défendent contre les créatures hostiles, mais n'entreprennent pas d'autre action.</p><br/><p>C'est le MD qui dispose des statistiques des créatures.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant certains emplacements de niveau supérieur, vous choisissez l'une des options d'invocation décrites précédemment et faites apparaître plus de créatures: deux fois plus pour un emplacement de niveau 6, et trois fois plus pour un emplacement de niveau 8.</p>",
};

export const INVOCATION_DE_FEE: Spell = {
  type: IndexElementType.Spell,
  id: "invocation-de-fée",
  name: "Invocation de fée",
  level: 6,
  school: SpellSchool.Conjuration,
  castingTime: "1 minute",
  range: "27 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 heure",
  description:
    "<p>Vous invoquez une créature féerique dotée d'un facteur de puissance de 6 ou moins, ou un esprit féerique qui revêt l'apparence d'une bête dotée d'un facteur de puissance de 6 ou moins. La créature apparaît dans une case inoccupée située à portée dans votre champ de vision. Elle disparaît dès qu'elle tombe à 0 point de vie ou quand le sort se termine.</p><br/><p>La créature féerique se montre amicale envers vous et vos compagnons. Lancez l'initiative pour elle, sachant qu'elle dispose de ses propres tours de jeu. Elle obéit aux ordres verbaux que vous lui donnez (sans que cela vous demande d'utiliser une action), tant qu'ils ne vont pas à l'encontre de son alignement. En l'absence d'ordre, elle se défend contre les créatures hostiles, mais n'entreprend pas d'autre action.</p><br/><p>Si votre concentration se brise, la créature féerique ne disparaît pas, mais elle échappe à votre contrôle et devient hostile envers vous et vos compagnons. Elle peut aller jusqu'à vous attaquer. Vous ne pouvez pas renvoyer une créature féerique qui est hors de contrôle, elle disparaît simplement 1 heure après que vous l'avez invoquée.</p><br/><p>C'est le MD qui dispose des statistiques de la créature féerique.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou plus, le facteur de puissance de l'élémentaire augmente de 1 par niveau au-delà du 6ème.</p>",
};

export const INVOCATION_DE_VOLEE: Spell = {
  type: IndexElementType.Spell,
  id: "invocation-de-volée",
  name: "Invocation de volée",
  level: 5,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "15 mètres",
  components: "V, S, M (une munition ou une arme de jet)",
  duration: "Instantanée",
  description:
    "<p>Vous lancez une arme de jet non magique ou un projectile non magique, et choisissez un point à portée. Des centaines de copies du projectile s'abattent sur la zone avant de disparaître.</p><br/><p>Chaque créature située dans un cylindre de 12 mètres de rayon, 6 mètres de hauteur et centré sur le point choisi doit réussir un jet de sauvegarde de Dextérité. Celles qui échouent subissent 8d8 dégâts, les autres la moitié seulement. Le type de dégâts est identique à celui du projectile utilisé comme composante.</p>",
};

export const LAME_DE_FEU: Spell = {
  type: IndexElementType.Spell,
  id: "lame-de-feu",
  name: "Lame de feu",
  level: 2,
  school: SpellSchool.Evocation,
  castingTime: "1 action bonus",
  range: "Personnelle",
  components: "V, S, M (feuille de sumac)",
  duration: "Concentration, jusqu'à 10 minutes",
  description:
    "<p>Vous invoquez une lame enflammée dans votre main libre.</p><br/><p>Au niveau de la taille et de la forme, elle ressemble à un cimeterre et persiste pendant toute la durée du sort. Si vous la lâchez, elle disparaît, mais vous pouvez l'invoquer de nouveau par une action bonus.</p><br/><p>Vous pouvez utiliser votre action pour faire une attaque de sort au corps à corps avec la lame enflammée. Si vous touchez la cible, cette dernière subit 3d6 dégâts de feu.</p><br/><p>La lame enflammée émet une lumière vive dans un rayon de 3 mètres et une lumière faible dans un rayon de 3 mètres de plus.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, les dégâts augmentent de 1d6 tous les deux niveaux au-delà du 2ème.</p>",
};

export const LENTEUR: Spell = {
  type: IndexElementType.Spell,
  id: "lenteur",
  name: "Lenteur",
  level: 3,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S, M (une goutte de mélasse)",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Vous modifiez le cours du temps autour d'un maximum de six créatures de votre choix situées dans un cube de 12 mètres d'arête situé à portée. Chaque cible doit réussir un jet de sauvegarde de Sagesse, sans quoi le sort l'affecte pendant toute sa durée.</p><br/><p>Une cible affectée voit sa vitesse réduite de moitié. De plus, elle subit un malus de -2 à la CA et aux jets de sauvegarde de Dextérité et ne peut plus utiliser de réaction. À son tour, elle peut utiliser une action ou une action bonus, mais pas les deux. Elle ne peut pas faire plus d'une attaque au corps à corps ou à distance à son tour, quels que soient ses pouvoirs et ses objets magiques.</p><br/><p>Si la créature affectée tente de lancer un sort doté d'un temps d'incantation de 1 action, lancez un d20. Sur un 11 ou plus, le sort agit seulement au prochain tour de la créature qui doit utiliser son action de ce tour pour terminer l'incantation.</p><br/><p>Si elle est en incapable, le sort est gâché.</p><br/><p>Une créature affectée par ce sort fait un nouveau jet de sauvegarde de Sagesse à la fin de chacun de ses tours. Si elle le réussit, le sort se termine pour elle.</p>",
};

export const LEVITATION: Spell = {
  type: IndexElementType.Spell,
  id: "lévitation",
  name: "Lévitation",
  level: 2,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "18 mètres",
  components:
    "V, S, M (soit une petite boucle de cuir, soit un bout de fil de métal doré formant la silhouette d'une cuillère au long manche)",
  duration: "Concentration, jusqu'à 10 minutes",
  description:
    "<p>Une créature ou un objet sans attache situé à portée et dans votre champ de vision s'élève à la verticale à une hauteur de 6 mètres et reste suspendu là pendant toute la durée du sort. Ce dernier peut soulever une cible d'au maximum 250 kilos. Si la créature visée n'est pas consentante, elle doit réussir un jet de sauvegarde de Constitution pour que le sort ne l'affecte pas.</p><br/><p>La cible peut se déplacer uniquement en se propulsant ou se tractant en prenant appui sur un objet fixe ou une surface à proximité (comme un mur ou un plafond). Elle se meut alors comme si elle était en pleine escalade.</p><br/><p>Quand vient votre tour, vous pouvez modifier l'altitude de la cible d'un maximum de 6 mètres dans la direction de votre choix. Si vous êtes la cible, vous pouvez monter ou descendre lors de votre déplacement. En dehors de cela, vous devez dépenser une action pour déplacer la cible qui doit rester dans le rayon de portée du sort.</p><br/><p>Si la cible est encore en l'air quand le sort se termine, elle flotte délicatement jusqu'au sol.</p>",
};

export const LIANE_AVIDE: Spell = {
  type: IndexElementType.Spell,
  id: "liane-avide",
  name: "Liane avide",
  level: 4,
  school: SpellSchool.Conjuration,
  castingTime: "1 action bonus",
  range: "9 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Vous invoquez une liane qui sort de terre dans un espace inoccupé de votre choix situé à portée dans votre champ de vision. Lorsque vous lancez ce sort, vous pouvez indiquer à la liane de s'enrouler autour d'une créature située dans un rayon de 9 mètres autour d'elle et dans votre champ de vision. La créature doit réussir un jet de sauvegarde de Dextérité, sans quoi elle est traînée sur 6 mètres en direction du pied de la liane.</p><br/><p>Tant que la durée du sort ne s'est pas écoulée, vous pouvez ordonner à la liane de continuer de s'en prendre à la même créature ou de changer de cible, et cela par une action bonus à chacun de vos tours.</p>",
};

export const LIBERTE_DE_MOUVEMENT: Spell = {
  type: IndexElementType.Spell,
  id: "liberté-de-mouvement",
  name: "Liberté de mouvement",
  level: 4,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "Contact",
  components:
    "V, S, M (un lien de cuir enroulé autour d'un bras ou d'un appendice similaire)",
  duration: "1 heure",
  description:
    "<p>Vous touchez une créature consentante. Pendant toute la durée du sort, ses déplacements ne sont pas affectés par les terrains difficiles, tandis que les sorts et autres effets magiques ne peuvent ni la paralyser, ni l'entraver, ni réduire sa vitesse.</p><br/><p>La cible peut également dépenser 1,50 mètre de déplacement pour échapper automatiquement à des liens non magiques, comme des menottes ou la prise d'une créature qui l'agrippe. Enfin, sous l'eau, elle ne subit pas de malus aux déplacements ni aux attaques.</p>",
};

export const LIEN_DE_PROTECTION: Spell = {
  type: IndexElementType.Spell,
  id: "lien-de-protection",
  name: "Lien de protection",
  level: 2,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "Contact",
  components:
    "V, S, M (une paire d'anneaux de platine valant chacun au moins 50 po, que la cible et vous devez porter pendant toute la durée)",
  duration: "1 heure",
  description:
    "<p>Ce sort protège une créature consentante et crée un lien mystique entre vous et votre cible jusqu'à la fin du sort.</p><br/><p>Tant que la cible se trouve dans un rayon de 18 mètres autour de vous, elle gagne un bonus de +1 à la CA et aux jets de sauvegarde et devient résistante à tous les types de dégâts. En revanche, chaque fois qu'elle subit des dégâts, vous subissez exactement les mêmes.</p><br/><p>Le sort se termine si vous tombez à 0 point de vie ou si votre cible et vous êtes séparés de plus de 18 mètres. Il se termine aussi si vous le lancez de nouveau sur l'une des deux créatures liées. Vous pouvez également révoquer le sort par une action.</p>",
};

export const LIEN_TELEPATHIQUE_DE_RARY: Spell = {
  type: IndexElementType.Spell,
  id: "lien-télépathique-de-rary",
  name: "Lien télépathique de Rary",
  level: null,
  school: SpellSchool.Divination,
  castingTime: "1 action / Rituel",
  range: "9 mètres",
  components:
    "V, S, M (bouts de coquille d'œuf issus de deux espèces de créatures différentes)",
  duration: "1 heure",
  description:
    "<p>Vous forgez un lien télépathique entre maximum huit créatures consentantes situées à portée. Elles sont alors psychiquement liées les unes aux autres pendant la durée du sort. Ce sort n'affecte pas les créatures dotées d'une Intelligence de 2 ou moins.</p><br/><p>Jusqu'à la fin du sort, les cibles peuvent communiquer entre elles par télépathie via le lien créé, qu'elles partagent un même langage ou non. Cette communication fonctionne quelle que soit la distance séparant les créatures, mais ne s'étend pas aux autres plans d'existence.</p>",
};

export const LOCALISATION_DANIMAUX_OU_DE_PLANTES: Spell = {
  type: IndexElementType.Spell,
  id: "localisation-d'animaux-ou-de-plantes",
  name: "Localisation d'animaux ou de plantes",
  level: null,
  school: SpellSchool.Divination,
  castingTime: "1 action / Rituel",
  range: "Contact",
  components: "V, S, M (des poils de chien de chasse)",
  duration: "Instantanée",
  description:
    "<p>Décrivez ou nommez un type spécifique de bête ou de plante. Vous vous concentrez sur la voix de la nature qui vous entoure et découvrez dans quelle direction et à quelle distance se trouve le spécimen le plus proche dans un rayon de 7,5 kilomètres, s'il y en a.</p>",
};

export const LOCALISATION_DE_CREATURE: Spell = {
  type: IndexElementType.Spell,
  id: "localisation-de-créature",
  name: "Localisation de créature",
  level: 4,
  school: SpellSchool.Divination,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S, M (des poils de chien de chasse)",
  duration: "Concentration, jusqu'à 1 heure",
  description:
    "<p>Décrivez ou nommez une créature qui vous est familière.</p><br/><p>Vous sentez dans quelle direction elle se trouve, à condition qu'elle soit dans un rayon de 300 mètres. Si elle se déplace, vous savez dans quelle direction.</p><br/><p>Le sort permet de localiser une créature spécifique de votre connaissance ou la créature la plus proche du même type (comme un humain ou une licorne), mais pour cela, vous devez avoir déjà vu une telle créature de près, c'est-à-dire vous être trouvé à 9 mètres d'elle ou moins au moins une fois dans votre vie. Si la créature que vous décrivez ou nommez se trouve actuellement sous une forme différente. sous l'effet d'un sort de métamorphose par exemple, ce sort est incapable de la localiser.</p><br/><p>Le sort ne parvient pas à localiser la créature si le chemin qui vous relie directement est coupé par une étendue d'eau courante d'au moins 3 mètres de large.</p>",
};

export const LOCALISATION_DOBJET: Spell = {
  type: IndexElementType.Spell,
  id: "localisation-d'objet",
  name: "Localisation d'objet",
  level: 2,
  school: SpellSchool.Divination,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S, M (une branche fourchue)",
  duration: "Concentration, jusqua 10 minutes",
  description:
    "<p>Décrivez ou nommez un objet qui vous est familier. Vous sentez dans quelle direction il se trouve, à condition qu'il soit dans un rayon de 300 mètres. S'il se déplace, vous savez dans quelle direction.</p><br/><p>Le sort permet de localiser un objet spécifique de votre connaissance à condition que vous l'ayez vu de près, c'est-à-dire vous être trouvé à 9 mètres ou moins au moins de lui une fois dans votre vie. Sinon, le sort peut localiser l'objet d'un type donné le plus proche, comme un type d'appareil. de bijou, de meuble, d'outil ou d'arme.</p><br/><p>Le sort ne parvient pas à localiser l'objet si une couche de plomb, aussi mince soit-elle, bloque une trajectoire directe entre vous et l'objet.</p>",
};

export const LUEUR_DESPOIR: Spell = {
  type: IndexElementType.Spell,
  id: "lueur-d'espoir",
  name: "Lueur d'espoir",
  level: 3,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Ce sort offre espoir et robustesse. Choisissez autant de créatures consentantes à portée que vous le désirez.</p><br/><p>Pendant toute la durée du sort, elles sont avantagées lors des jets de sauvegarde de Sagesse et des jets de sauvegarde contre la mort. De plus, elles récupèrent le maximum de points de vie possible dès qu'elles reçoivent des soins.</p>",
};

export const LUEURS_FEERIQUES: Spell = {
  type: IndexElementType.Spell,
  id: "lueurs-féeriques",
  name: "Lueurs féeriques",
  level: 1,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Tous les objets contenus dans un cube de 6 mètres d'arête situé à portée sont auréolés d'une lumière bleue, verte ou violette (à vous de choisir). Les créatures qui se trouvent dans la zone au moment de l'incantation sont aussi entourées de lumière, à moins de réussir un jet de sauvegarde de Dextérité. Pendant toute la durée du sort, les créatures et les objets affectés émettent une faible luminosité dans un rayon de 3 mètres.</p><br/><p>Un assaillant a l'avantage lors du jet d'attaque contre une cible affectée s'il peut la voir. Les créatures et les objets affectés ne peuvent pas bénéficier des effets de l'invisibilité.</p>",
};

export const LUMIERE: Spell = {
  type: IndexElementType.Spell,
  id: "lumière",
  name: "Lumière",
  level: 0,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "Contact",
  components: "V, M (une luciole ou de la mousse phosphorescente)",
  duration: "1 heure",
  description:
    "<p>Vous touchez un objet qui ne fait pas plus de 3 mètres dans chaque dimension. Jusqu'à la fin du sort, il émet une lumière vive dans un rayon de 6 mètres et une lumière faible dans un rayon de 6 mètres de plus. Vous pouvez colorer cette lumière comme il vous plaît. Il suffit de recouvrir complètement l'objet avec quelque chose d'opaque pour bloquer la lumière. Le sort se termine si vous le lancez de nouveau ou si vous le révoquez en dépensant une action.</p><br/><p>Si vous visez un objet porté ou transporté par une créature hostile, cette dernière doit réussir un jet de sauvegarde de Dextérité pour éviter les effets du sort.</p>",
};

export const LUMIERE_DU_JOUR: Spell = {
  type: IndexElementType.Spell,
  id: "lumière-du-jour",
  name: "Lumière du jour",
  level: 3,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S",
  duration: "1 heure",
  description:
    "<p>Une sphère de lumière de 18 mètres de rayon s'étend depuis un point de votre choix situé à portée. Elle émet une lumière vive dans ce rayon et une lumière faible dans un rayon de 18 mètres de plus.</p><br/><p>Si le point que vous avez choisi est un objet en votre possession ou un objet qui n'est ni porté ni transporté par autrui, la lumière irradie de l'objet et se déplace avec lui. Il suffit de recouvrir complètement l'objet affecté avec un objet opaque, comme un bol ou un heaume, pour bloquer la lumière.</p><br/><p>Si une partie de la zone affectée par ce sort chevauche une zone de ténèbres issue d'un sort de niveau 3 ou moins, elle dissipe le sort de ténèbres.</p>",
};

export const LUMIERES_DANSANTES: Spell = {
  type: IndexElementType.Spell,
  id: "lumières-dansantes",
  name: "Lumières dansantes",
  level: 0,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S, M (un bout de phosphore ou d'orme, ou un ver luisant)",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Vous créez jusqu'à quatre lumières de la taille d'une torche qui apparaissent à portée. Elles ressemblent à des lanternes, des torches ou des orbes luisants qui flottent dans les airs pendant toute la durée du sort. Vous pouvez aussi les combiner pour obtenir une forme brillante vaguement humanoïde de taille Moyenne. Quelle que soit l'option choisie, chaque source lumineuse offre une lumière faible dans un rayon de 3 mètres.</p><br/><p>À votre tour et par une action bonus, vous pouvez déplacer les lumières sur un maximum de 18 mètres pour les installer ailleurs mais toujours à portée. Une lumière créée via ce sort doit toujours se trouver à 6 mètres ou moins d'une autre émanant du même sort. Elle s'éteint si elle passe hors de portée.</p>",
};

export const MAIN_DE_BIGBY: Spell = {
  type: IndexElementType.Spell,
  id: "main-de-bigby",
  name: "Main de Bigby",
  level: 5,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S, M (une coquille d'œuf et un gant en peau de serpent)",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Vous créez une main de force luisante et translucide, de taille Grande, dans un espace inoccupé situé à portée et dans votre champ de vision. La main existe pendant toute la durée du sort, se déplace sur votre ordre et imite les mouvements de votre propre main.</p><br/><p>La main est un objet doté d'une CA 20 et d'un nombre de points de vie égal à votre maximum de points de vie. Si elle tombe à 0 point de vie, le sort se dissipe. La main possède une Force de 26 (+8) et une Dextérité de 10 (+0). Elle n'occupe pas la case où elle se trouve.</p><br/><p>Lorsque vous lancez le sort, puis via une action bonus lors de vos tours ultérieurs, vous pouvez déplacer la main sur une distance maximale de 18 mètres et lui faire appliquer l'un des effets suivants.</p><br/><p>Poing serré. La main frappe une créature ou un objet situés dans un rayon de 1,50 mètre d'elle. Faites une attaque de sort de contact pour la main en utilisant vos propres statistiques. Si elle touche, la cible subit 4d8 dégâts de force.</p><br/><p>Main impérieuse. La main tente de repousser une créature située dans un rayon de 1,50 mètre dans la direction de votre choix. Faites un test avec la Force de la main opposé au test de Force (Athlétisme) de la cible.</p><br/><p>Si cette dernière est de taille Moyenne ou inférieure, vous êtes avantagé lors du test. Si vous l'emportez, la main repousse la cible sur 1,50 mètre plus un nombre de mètres égal à une fois et demie votre modificateur de caractéristique d'incantation. La main se déplace avec la cible de manière à rester dans un rayon de 1,50 mètre autour d'elle.</p><br/><p>Main agrippeuse. La main tente d'agripper une créature de taille Très Grande ou inférieure qui se trouve dans un rayon de 1,50 mètre. Utilisez la valeur de Force de la main pour résoudre le test de lutte. Si la cible est de taille Moyenne ou inférieure, vous êtes avantagé lors du test.</p><br/><p>Tant que la main agrippe la cible, vous pouvez utiliser une action bonus pour que la main la broie. Dans ce cas, la cible subit un montant de dégâts contondants égal à 2d6 + votre modificateur de caractéristique d'incantation.</p><br/><p>Main interposée. La main s'interpose entre vous et une créature de votre choix jusqu'à ce que vous lui donniez un autre ordre. Elle se déplace de manière à toujours rester entre vous et la cible désignée et vous offre un abri partiel contre elle. La cible ne peut pas franchir la zone occupée par la main si sa valeur de Force est inférieure ou égale à celle de la main. Si elle est supérieure, elle peut se déplacer dans votre direction en traversant la zone de la main, qui est considérée comme un terrain difficile pour la cible.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou plus, les dégâts de l'option poing serré augmentent de 28 et ceux de la main agrippeuse de 2d6 par niveau au-delà du 5ème.</p>",
};

export const MAIN_DU_MAGE: Spell = {
  type: IndexElementType.Spell,
  id: "main-du-mage",
  name: "Main du mage",
  level: 0,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S",
  duration: "1 minute",
  description:
    "<p>Une main spectrale flottante apparaît à portée, en un point de votre choix. Elle persiste pendant toute la durée du sort ou jusqu'à ce que vous révoquiez le sort par une action.</p><br/><p>La main disparaît si elle s'éloigne à plus de 9 mètres de vous ou si vous relancez le sort.</p><br/><p>Vous pouvez utiliser votre action pour contrôler la main et vous en servir pour manipuler un objet, ouvrir une porte ou un récipient qui ne sont pas verrouillés, placer un objet dans un récipient ouvert ou l'en sortir ou bien verser le contenu d'une flasque. Vous pouvez déplacer la main d'un maximum de 9 mètres chaque fois que vous l'utilisez.</p><br/><p>La main ne peut pas attaquer, activer un objet magique, ni transporter plus de 5 kilos.</p>",
};

export const MAINS_BRULANTES: Spell = {
  type: IndexElementType.Spell,
  id: "mains-brûlantes",
  name: "Mains brûlantes",
  level: 1,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "Personnelle (cône de 4,50 mètres)",
  components: "V, S",
  duration: "Instantanée",
  description:
    "<p>Alors que vous vous tenez les doigts écartés en éventail et les pouces l'un contre l'autre, une mince nappe de feu s'étend depuis vos mains tendues. Chaque créature située dans un cône de 4,50 mètres doit faire un jet de sauvegarde de Dextérité. Celles qui échouent reçoivent 3d6 dégâts de feu, les autres la moitié seulement.</p><br/><p>Le feu embrase tous les objets inflammables de la zone, à moins que quelqu'un ne les porte ou ne les transporte.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, les dégâts augmentent de 1d6 par niveau au-delà du 1ème.</p>",
};

export const MALEDICTION: Spell = {
  type: IndexElementType.Spell,
  id: "malédiction",
  name: "Malédiction",
  level: 3,
  school: SpellSchool.Necromancy,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Vous touchez une créature qui doit réussir un jet de sauvegarde de Sagesse, sans quoi elle est maudite pour toute la durée du sort. A vous de choisir la nature de cette malédiction parmi les options suivantes au moment de l'incantation.</p><br/><p>﻿﻿Choisissez une caractéristique. Tant que la cible est mau-dite, elle est désavantagée lors des tests de caractéristique et des jets de sauvegarde basés sur cette caractéristique.</p><br/><p>﻿﻿Tant que la cible est maudite, elle est désavantagée lors de ses jets d'attaque contre vous.</p><br/><p>﻿﻿Tant que la cible est maudite, elle doit faire un jet de sauvegarde de Sagesse au début de chacun de ses tours. Si elle le rate, elle gaspille son action du tour et ne fait rien.</p><br/><p>Tant que la cible est maudite, les sorts et les attaques émanant de vous lui infligent 1d8 dégâts nécrotiques supplémentaires.</p><br/><p>Le sort délivrance des malédictions met un terme à cet effet.</p><br/><p>Si le MD est d'accord, vous pouvez choisir un autre effet de malédiction, mais il ne doit pas être plus puissant que ceux proposés ici. C'est au MD de décider s'il accepte ou non le nouvel effet de malédiction.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, le sort fait effet tant que vous vous concentrez, sans dépasser un maximum de 10 minutes. Si vous utilisez un emplacement de niveau 5 ou plus, la durée est de 8 heures, tandis qu'elle passe à 24 heures si vous utilisez un emplacement de sort de niveau 7 ou plus. Si vous utilisez un emplacement de niveau 9, le sort persiste jusqu'à ce qu'il soit dissipé. L'utilisation d'un emplacement de niveau 5 ou plus vous dispense de vous concentrer.</p>",
};

export const MALEFICE: Spell = {
  type: IndexElementType.Spell,
  id: "maléfice",
  name: "Maléfice",
  level: 1,
  school: SpellSchool.Enchantment,
  castingTime: "1 action bonus",
  range: "27 mètres",
  components: "V, S, M (œil de triton pétrifié)",
  duration: "Concentration, jusqu'à 1 heure",
  description:
    "<p>Vous lancez une malédiction sur une créature située à portée dans votre champ de vision. Tant que la durée du sort n'a pas expiré, vous infligez 1d6 dégâts nécrotiques supplémentaires à la cible chaque fois que vous la touchez avec une attaque. Lorsque vous lancez le sort, choisissez une caractéristique. La cible est désavantagée lors des tests concernant cette caractéristique.</p><br/><p>Si la cible tombe à 0 point de vie avant que le sort n'expire, vous pouvez utiliser votre action bonus lors d'un tour ultérieur pour affecter une nouvelle créature.</p><br/><p>Si la cible bénéficie du sort délivrance des malédictions maléfice se termine immédiatement.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou 4, vous pouvez vous concentrer sur le sort pendant 8 heures. Si vous utilisez un emplacement de niveau 5 ou plus, vous pouvez maintenir votre concentration sur le sort jusqu'à 24 heures.</p>",
};

export const MANOIR_SOMPTUEUX_DE_MORDENKAINEN: Spell = {
  type: IndexElementType.Spell,
  id: "manoir-somptueux-de-mordenkainen",
  name: "Manoir somptueux de Mordenkainen",
  level: 7,
  school: SpellSchool.Conjuration,
  castingTime: "1 minute",
  range: "90 mètres",
  components:
    "V, S, M (un portrait miniature gravé dans de l'ivoire, un bout de marbre poli et une minuscule cuillère en argent, chaque objet devant valoir au minimum 5 po)",
  duration: "24 heures",
  description:
    "<p>Vous invoquez une demeure extraplanaire à portée qui persiste pendant toute la durée du sort. À vous de choisir où Se situe sa seule entrée. Cette dernière scintille légèrement et mesure 1,50 mètre de large pour 3 mètres de haut.</p><br/><p>Vous et toutes les créatures que vous désignez lors de l'incantation êtes libres d'entrer et de sortir de cette demeure extraplanaire, tant que son portail reste ouvert. Vous pouvez l'ouvrir ou le fermer si vous vous tenez à 9 mètres ou moins de lui. Quand le portail est fermé, il est invisible.</p><br/><p>Un splendide vestibule s'ouvre derrière le portail et dessert de nombreuses pièces. Les lieux sont propres et l'atmosphère tiède et agréable.</p><br/><p>Vous pouvez disposer le plan des lieux comme bon vous semble, mais la surface totale ne peut pas excéder 50 cubes, chaque cube mesurant 3 mètres d'arête. L'endroit est meublé et décoré selon vos souhaits et contient assez de nourriture pour un banquet de neuf plats destiné à une centaine de convives au maximum. Une équipe de cent serviteurs presque translucides s'occupent de tous ceux qui pénètrent dans la demeure. À vous de décider de l'apparence visuelle de ces domestiques et de leur tenue. lis obéissent aveuglément à tous vos ordres. Chacun est en mesure d'accomplir n'importe quelle tâche à la portée d'un serviteur humain ordinaire, mais les domestiques ne peuvent ni attaquer ni effectuer une action visant à nuire directement à une autre créature. lls peuvent donc aller chercher des affaires, faire le ménage, raccommoder et plier les habits, allumer la cheminée, servir les plats et la boisson, etc. Ils peuvent se rendre partout dans la demeure, mais sont incapables de la quitter. Les meubles et autres objets créés à l'aide de ce sort se dissipent en volutes de fumée si quelqu'un les sort de la demeure. Quand le sort se termine, tous les objets et créatures laissés dans l'espace extradimensionnel sont expulsés dans les espaces inoccupés les plus proches de l'entrée.</p>",
};

export const MARCHE_SUR_LONDE: Spell = {
  type: IndexElementType.Spell,
  id: "marche-sur-l'onde",
  name: "Marche sur l'onde",
  level: null,
  school: SpellSchool.Transmutation,
  castingTime: "1 action / Rituel",
  range: "9 mètres",
  components: "V, S, M (un bout de liège)",
  duration: "1 heure",
  description:
    "<p>Ce sort permet de se déplacer sur n'importe quelle surface liquide (comme de l'eau, de l'acide, de la boue, de la neige, des sables mouvants ou de la lave comme s'il s'agissait d'un sol ferme et inoffensif (ceci dit, les créatures qui marchent sur la lave subissent tout de même les dégâts liés à la chaleur dégagée). Vous pouvez accorder cette capacité pendant toute la durée du sort à un maximum de dix créatures consentantes situées à portée et dans votre champ de vision.</p><br/><p>Si vous prenez pour cible une créature immergée dans un liquide, le sort la ramène à la surface du liquide à une vitesse de 18 mètres par round.</p>",
};

export const MARQUE_DU_CHASSEUR: Spell = {
  type: IndexElementType.Spell,
  id: "marque-du-chasseur",
  name: "Marque du chasseur",
  level: 1,
  school: SpellSchool.Divination,
  castingTime: "1 action bonus",
  range: "27 mètres",
  components: "V",
  duration: "Concentration, jusqu'à 1 heure",
  description:
    "<p>Vous choisissez une créature située à portée dans votre champ de vision et lui apposez une marque mystique la désignant comme votre proie. Jusqu'à la fin du sort, vous lui infligez 1d6 dégâts supplémentaires chaque fois que vous la touchez avec une attaque armée et vous êtes avantagé sur les éventuels tests de Sagesse (Perception) ou Sagesse (Survie) que vous faites pour la retrouver. Si la cible tombe à 0 point de vie avant que ce sort n'arrive à expiration, vous pouvez utiliser une action bonus lors d'un tour ultérieur pour marquer une nouvelle créature.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou 4, vous pouvez vous concentrer sur le sort pendant 8 heures. Si vous utilisez un emplacement de niveau 5 ou plus, vous pouvez maintenir votre concentration sur le sort jusqu'à 24 heures.</p>",
};

export const MAUVAIS_OEIL: Spell = {
  type: IndexElementType.Spell,
  id: "mauvais-oeil",
  name: "Mauvais œil",
  level: 6,
  school: SpellSchool.Necromancy,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Pendant la durée du sort, vos yeux deviennent deux trous noirs regorgeant d'un pouvoir terrifiant. Une créature de votre choix, située dans votre champ de vision et dans un rayon de 18 mètres doit réussir un jet de sauvegarde de Sagesse ou se voir affectée par l'un des effets suivants, choisi par vos soins, pendant toute la durée du sort. À chacun de vos tours jusqu'à ce que le sort se termine, vous pouvez utiliser votre action pour viser une autre créature, mais vous ne pouvez pas reprendre pour cible une créature ayant déjà réussi un jet de sauvegarde contre l'incantation de mauvais œil en cours.</p><br/><p><b>Endormi :</b> La cible tombe inconsciente. Elle se réveille si elle subit le moindre dégât ou si une tierce personne utilise une action pour la réveiller en la secouant.</p><br/><p><b>Paniqué :</b> Vous terrorisez la cible. À chacun de ses tours, la cible effrayée doit utiliser l'action foncer et s'éloigner de vous via l'itinéraire le plus rapide et le plus sûr, à moins qu'elle n'ait nulle part ou aller. Cet effet se termine si la cible gagne un espace situé à au moins 18 mètres de vous et d'où elle ne vous voit plus.</p><br/><p><b>Écœuré :</b> La cible est désavantagée lors des jets d'attaque et des tests de caractéristique. Elle a droit à un nouveau jet de sauvegarde de Sagesse à la fin de chacun de ses tours. L'effet se termine si elle le réussit.</p>",
};

export const MESSAGE: Spell = {
  type: IndexElementType.Spell,
  id: "message",
  name: "Message",
  level: 0,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S, M (un petit bout de fil de cuivre)",
  duration: "1 round",
  description:
    "<p>Vous pointez du doigt une créature à portée et murmurez un message. La cible (et elle seule) l'entend et peut répondre dans un murmure que vous êtes le seul à entendre.</p><br/><p>Vous pouvez lancer ce sort au travers d'un objet solide si vous connaissez bien la cible et savez qu'elle se trouve de l'autre côté de cet obstacle. Le sort est bloqué par un silence magique, 30 centimètres de pierre, 2,5 centimètres de métal ordinaire, une mince couche de plomb ou 90 centimètres de bois. Le sort n'a pas besoin de voyager en ligne directe, il peut contourner les angles et franchir les ouvertures.</p>",
};

export const MESSAGER_ANIMAL: Spell = {
  type: IndexElementType.Spell,
  id: "messager-animal",
  name: "Messager animal",
  level: null,
  school: SpellSchool.Enchantment,
  castingTime: "1 action / Rituel",
  range: "9 mètres",
  components: "V, S, M (un peu de nourriture)",
  duration: "24 heures",
  description:
    "<p>Grâce à ce sort, vous chargez un animal de livrer un message pour vous. Choisissez une bête de taille Très Petite située à portée dans votre champ de vision, comme un écureuil, un geai ou une chauve-souris. Vous lui précisez l'endroit où se rendre (où vous devez vous être déjà vous-même rendu auparavant) et donnez une description générale du destinataire, comme « un homme ou une femme vêtus de l'uniforme de la garde de la ville » ou « un nain roux avec un chapeau pointu ». Vous prononcez ensuite votre message, de vingt-cinq mots au maximum. La bête chargée du message fait alors route vers la destination indiquée pendant toute la durée du sort. Elle parcourt dans les 75 kilomètres par 24 heures si elle vole ou dans les 35 kilomètres si elle en est incapable.</p><br/><p>Quand elle arrive sur place, elle transmet votre message à la créature que vous avez décrite, imitant le son de votre voix.</p><br/><p>Le messager parle uniquement à une créature correspondant à la description que vous lui avez donnée. S'il n'atteint pas sa destination avant la fin du sort, le message est perdu et l'animal retourne là où vous avez lancé le sort.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou plus, la durée du sort augmente de 48 heures par niveau au-delà du 2ème.</p>",
};

export const METAL_BRULANT: Spell = {
  type: IndexElementType.Spell,
  id: "métal-brûlant",
  name: "Métal brûlant",
  level: 2,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S, M (un bout de fer et une flamme)",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Choisissez un objet manufacturé en métal, comme une arme métallique ou une armure métallique lourde ou intermédiaire.</p><br/><p>Il doit être situé à portée et dans votre champ de vision et se met alors à luire d'un rouge incandescent. Une créature en contact physique avec l'objet reçoit 2d8 dégâts de feu lorsque vous lancez le sort. Vous pouvez dépenser une action bonus à chacun de vos tours suivants jusqu'à la fin du sort pour infliger de nouveau ce montant de dégâts.</p><br/><p>Si une créature tient l'objet qui lui inflige des dégâts ou le porte sur elle, elle doit réussir un jet de sauvegarde de Constitution, sans quoi elle le lâche, si elle peut. Si elle le conserve, elle est désavantagée lors des jets d'attaque et des tests de caractéristique jusqu'au début de votre prochain tour.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou plus, les dégâts augmentent de 1d8 par niveau au-delà du 2ème.</p>",
};

export const METAMORPHOSE: Spell = {
  type: IndexElementType.Spell,
  id: "métamorphose",
  name: "Métamorphose",
  level: 4,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V, S, M (un cocon de chenille)",
  duration: "Concentration, jusqu'à 1 heure",
  description:
    "<p>Ce sort change la forme d'une créature située à portée dans votre champ de vision. Une créature non consentante doit faire un jet de sauvegarde de Sagesse pour éviter cet effet.</p><br/><p>Le sort n'a aucun effet sur un métamorphe ou une créature à O point de vie.</p><br/><p>La transformation persiste pendant toute la durée du sort ou jusqu'à ce que la cible tombe à 0 point de vie ou meure.</p><br/><p>Vous pouvez donner comme nouvelle forme celle de n'importe quelle bête dont le facteur de puissance est égal ou inférieur à celui de la cible (ou à son niveau, si elle n'a pas de facteur de puissance). Les statistiques de jeu de la cible, y compris ses valeurs de caractéristique mentales, sont remplacées par celles de la bête choisie. Elle conserve en revanche son alignement et sa personnalité.</p><br/><p>La cible possède les points de vie correspondant à sa nouvelle forme. Quand elle reprend sa forme normale, elle se retrouve avec le nombre de points de vie qui était le sien avant la transformation. Si elle reprend sa forme normale parce qu'elle est tombée à 0 point de vie, les éventuels dégats en excès sont déduits des points de vie de sa forme normale.</p><br/><p>Tant que les dégâts en excès ne réduisent pas les points de vie normaux de la créature à 0, elle n'est pas inconsciente.</p><br/><p>La nouvelle forme de la créature limite les actions qu'elle peut entreprendre et elle ne peut ni parler, ni lancer de sorts, ni effectuer une action qui nécessite de parler ou de se servir de ses mains.</p><br/><p>L'équipement de la cible fusionne avec sa nouvelle forme, mais elle ne peut pas activer, utiliser, ni manier la moindre pièce d'équipement et ne peut pas non plus bénéficier de ses effets.</p>",
};

export const METAMORPHOSE_ANIMALE: Spell = {
  type: IndexElementType.Spell,
  id: "métamorphose-animale",
  name: "Métamorphose animale",
  level: 8,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 24 heures",
  description:
    "<p>Votre magie change autrui en animal. Choisissez autant de créatures consentantes, à portée et dans votre champ de vision que vous désirez. Vous transformez chacune d'entre elles en bête de taille Grande ou inférieure dotée d'un facteur de puissance de 4 ou moins. Lors de vos tours suivants, vous pouvez dépenser votre action pour transformer les créatures affectées en d'autres animaux.</p><br/><p>La transformation persiste pour chaque cible pendant toute la durée du sort ou jusqu'à ce que la cible tombe à 0 point de vie ou meure. Vous pouvez attribuer une forme différente à chaque cible. Les statistiques de jeu de la cible sont remplacées par celles de l'animal choisi, bien qu'elle conserve son alignement, son Intelligence, sa Sagesse et son Charisme. La cible adopte les points de vie de sa nouvelle forme et, quand elle reprend son apparence normale, elle se retrouve avec le même nombre de points de vie que celui qu'elle avait avant sa transformation. Si elle recouvre sa forme normale suite à un passage à 0 point de vie, les dégâts en excès sont reportés sur les points de vie de sa forme normale. Tant que ces dégâts en excès ne réduisent pas les points de vie de la forme normale de la cible à 0, elle ne tombe pas inconsciente. Les actions de la créature transformée sont limitées par la nature de sa nouvelle apparence et elle ne peut ni parler ni lancer de sorts.</p><br/><p>L'équipement de la cible fusionne avec sa nouvelle forme, mais elle ne peut pas activer ni manier la moindre pièce d'équipement et ne bénéficie pas des avantages qui en découlent habituellement.</p>",
};

export const METAMORPHOSE_SUPREME: Spell = {
  type: IndexElementType.Spell,
  id: "métamorphose-suprême",
  name: "Métamorphose suprême",
  level: 9,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "9 mètres",
  components:
    "V, S, M (une goutte de mercure, une cuillérée de gomme arabique et une volute de fumée)",
  duration: "Concentration, jusqu'à 1 heure",
  description:
    "<p>Choisissez une créature ou un objet non magique situés à portée et dans votre champ de vision. Vous transformez la créature en une autre créature, la créature en un objet non magique ou l'objet en une créature (cet objet ne doit pas être porté ni transporté par autrui). La transformation persiste pendant toute la durée du sort ou jusqu'à ce que la cible tombe à O point de vie ou meure. Si vous vous concentrez sur ce sort Pendant toute sa durée, la transformation persiste jusqu'à dissipation. Ce sort n'a aucun effet sur un métamorphe ou une créature tombée à 0 point de vie. Si la cible n'est pas consentante, elle peut faire un jet de sauvegarde de Volonté.</p><br/><p>Si elle le réussit, le sort ne l'affecte pas.</p><br/><p>Créature en créature. Si vous changez une créature en créature d'un autre type, vous pouvez lui attribuer la forme de votre choix, à condition qu'elle corresponde à une créature dotée d'un facteur de puissance égal ou inférieur au sien (ou à son niveau si la cible n'a pas de facteur de puissance). Les statistiques de jeu de la cible (y compris ses caractéristiques mentales) sont remplacées par celles de sa nouvelle forme, mais elle conserve son alignement et sa personnalité.</p><br/><p>La cible adopte les points de vie de sa nouvelle forme.</p><br/><p>Quand elle reprend son apparence normale, elle se retrouve avec le même nombre de points de vie que celui qui était le sien avant sa transformation. Si elle reprend sa véritable forme parce qu'elle est tombée à 0 point de vie, les dégâts en excès sont transférés sur sa forme normale. Tant que ces dégâts en excès ne font pas tomber sa forme normale à 0 point de vie, la cible n'est pas inconsciente.</p><br/><p>La nouvelle forme de la créature limite ses actions. Elle ne peut pas parler, lancer de sorts, ni effectuer une action nécessitant des mains ou la parole, à moins que sa nouvelle forme ne soit à même d'accomplir ces actes.</p><br/><p>L'équipement de la cible fusionne avec sa nouvelle forme.</p><br/><p>La créature est donc dans l'incapacité d'activer, utiliser, ou manier son équipement ou de bénéficier de ses effets.</p><br/><p>Objet en créature. Vous pouvez changer un objet en créature, à condition que la taille de la créature ne dépasse pas celle de l'objet et que son facteur de puissance soit de 9 ou moins. La créature est amicale envers vous et vos compagnons. Elle agit à chacun de vos tours. C'est à vous de décider des actions qu'elle entreprend et de ses déplacements, mais c'est le MD qui dispose de ses statistiques et résout ses actions et ses déplacements.</p><br/><p>Si le sort devient permanent, vous ne contrôlez plus la créature, mais elle peut rester amicale envers vous selon la manière dont vous l'avez traitée.</p><br/><p>Créature en objet. Si vous transformez une créature en objet, tous les objets qu'elle porte et transporte se métamorphosent avec tant qu'ils ne sont pas d'une catégorie de taille supérieure à la sienne. Les statistiques de l'objet remplacent celles de la créature qui, une fois revenue à sa forme normale à la fin du sort, n'aura aucun souvenir de la période pendant laquelle elle a été métamorphosée.</p>",
};

export const MIRAGE: Spell = {
  type: IndexElementType.Spell,
  id: "mirage",
  name: "Mirage",
  level: 7,
  school: SpellSchool.Illusion,
  castingTime: "10 minutes",
  range: "Vision",
  components: "V, S",
  duration: "10 jours",
  description:
    "<p>Vous donnez à un terrain d'au maximum 2,5 kilomètres carrés la même apparence visuelle, sonore, olfactive et générale qu'un autre type de terrain. En revanche, sa forme globale ne change pas. Vous pouvez maquiller un champ ou une route pour lui donner l'air d'un marais, d'une colline, d'une crevasse ou d'un autre terrain difficile ou impraticable. Vous pouvez faire passer une mare pour une prairie herbeuse, un précipice pour une pente douce ou un goulet rocailleux pour une route aussi large que lisse.</p><br/><p>Vous pouvez aussi modifier l'apparence des structures ou en ajouter là où n'y en a pas. En revanche, le sort est incapable de déguiser, dissimuler ou ajouter des créatures.</p><br/><p>L'illusion comprend des composantes auditives, visuelles, tactiles et olfactives, elle peut donc changer un sol dégagé en terrain difficile (ou inversement) ou gêner les déplacements dans la zone. Tout élément de terrain illusoire (comme une pierre ou une brindille) disparaît dès qu'il quitte la zone d'effet du sort.</p><br/><p>Les créatures dotées de vision lucide distinguent le véritable terrain derrière l'illusion, mais les autres composantes restent en place; elles savent donc qu'elles ont affaire à une illusion, mais peuvent toujours interagir physiquement avec celle-ci.</p>",
};

export const MODIFICATION_DAPPARENCE: Spell = {
  type: IndexElementType.Spell,
  id: "modification-d'apparence",
  name: "Modification d'apparence",
  level: 2,
  school: SpellSchool.Transmutation,
  castingTime: "1 action",
  range: "Personnelle",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 heure",
  description:
    "<p>Vous revêtez une forme différente. Quand vous lancez ce sort, choisissez l'une des options suivantes, dont les effets dureront aussi longtemps que le sort. Tant qu'il est actif, vous pouvez utiliser une action pour mettre un terme à une option afin de bénéficier d'une autre.</p><br/><p>Adaptation aquatique. Vous adaptez votre corps à un environnement aquatique, générant des branchies et des palmures entre vos doigts. Vous pouvez respirer sous l'eau et gagnez une vitesse de nage égale à votre vitesse de marche.</p><br/><p>Changer d'apparence. Vous modifiez votre apparence et choisissez votre taille, votre poids, vos traits, le son de votre voix, la longueur de vos cheveux, votre pigmentation, et toute caractéristique distinctive désirée. Vous pouvez vous faire passer pour un membre d'une autre race, mais vos caractéristiques ne changent pas. Vous ne pouvez pas vous faire passer pour une créature d'une catégorie de taille différente de la vôtre, et votre silhouette générale doit rester la même (par exemple, si vous êtes un bipède, vous ne pouvez pas utiliser ce sort pour prendre l'apparence d'un quadrupède). À tout moment lors de la durée du sort, vous pouvez dépenser une action pour modifier de nouveau votre apparence de cette manière.</p><br/><p>Armes naturelles. Vous gagnez des griffes, des crocs, des épines, des cornes ou une autre arme naturelle de votre choix.</p><br/><p>Vos attaques à mains nues infligent 1d6 dégâts contondants, perforants ou tranchants, comme il sied à l'arme naturelle que vous avez choisie et vous maîtrisez automatiquement les attaques à mains nues. Enfin, votre arme naturelle est de nature magique et vous disposez d'un bonus de +1 aux jets d'attaque et de dégâts quand vous l'utilisez.</p>",
};

export const MODIFICATION_DE_MEMOIRE: Spell = {
  type: IndexElementType.Spell,
  id: "modification-de-mémoire",
  name: "Modification de mémoire",
  level: 5,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Vous tentez de remodeler les souvenirs d'autrui. Une créature située dans votre champ de vision doit faire un jet de sauvegarde de Sagesse. Si vous combattez cette créature, elle a l'avantage lors du jet. Si elle échoue, vous la charmez pendant toute la durée du sort. Elle est alors neutralisée et n'a plus conscience de ce qui l'entoure, mais elle vous entend toujours. Le sort se termine si elle subit le moindre dégât ou si elle est la cible d'un autre sort, auquel cas ses souvenirs restent tous intacts.</p><br/><p>Tant que le sort persiste, vous pouvez influer sur les souvenirs de la cible liés à un événement qui s'est déroulé dans les 24 heures précédentes et qui n'a pas duré plus de 10 minutes. Vous pouvez éliminer définitivement tout souvenir de cet événement, permettre à la cible de s'en souvenir parfaitement dans les moindres détails, modifier les détails dont elle se souvient ou créer un souvenir décrivant un tout autre événement.</p><br/><p>Vous devez parler à votre cible pour décrire comment ses souvenirs sont affectés et, pour que les nouveaux souvenirs s'implantent dans sa mémoire, elle doit être à même de comprendre votre langue. Son esprit se charge de combler les manques dans votre description. Si le sort se termine avant que vous ayez fini de décrire les souvenirs modifiés, la mémoire de la cible ne subit aucune modification. Sinon, elle tient compte des modifications qui lui ont été apportées dès que le</p><br/><p>sort se termine.</p><br/><p>Les souvenirs modifiés ne changent pas forcément l'attitude de la créature, surtout s'ils entrent en contradiction avec ses penchants naturels, son alignement ou ses croyances. Un souvenir modifié illogique sera ignoré: par exemple, si la cible se souvient combien elle a aimé se baigner dans de l'acide, elle prendra cela pour un mauvais rêve. Le MD peut estimer qu'un souvenir est modifié de manière tellement insensée qu'il n'affecte pas la cible de manière significative.</p><br/><p>Si la cible bénéficie de delivrance des malédictions ou de restauration suprême, elle retrouve ses véritables souvenirs.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou plus, vous pouvez modifier les souvenirs d'un événement remontant à 7 jours (niveau 6), 30 jours (niveau 7), 1 an (niveau 8) ou issus de n'importe quelle période du passé de la cible (niveau 9).</p>",
};

export const MONTURE_FANTOME: Spell = {
  type: IndexElementType.Spell,
  id: "monture-fantôme",
  name: "Monture fantôme",
  level: null,
  school: SpellSchool.Illusion,
  castingTime: "1 minute / Rituel",
  range: "9 mètres",
  components: "V, S",
  duration: "1 heure",
  description:
    "<p>Une créature équine de taille Grande quasi réelle apparaît dans un espace au sol de votre choix situé à portée. À vous de décider de l'apparence de la créature, mais elle est systématiquement équipée d'une selle, d'un mors et d'un file' Toutes les pièces d'équipement nées de ce sort disparaissent dans une volute de fumée si quelqu'un les emporte à plus de 3 mètres de la monture.</p><br/><p>Pendant toute la durée du sort, vous et une créature de votre choix pouvez chevaucher la monture. Cette dernière possède les mêmes statistiques qu'un cheval de selle, sauf qu'elle a une vitesse de 30 mètres et peut parcourir 15 kilomètres en une heure ou 20 kilomètres si elle galope. Quand le sort se termine, la monture s'estompe progressivement, ce qui laisse une minute au cavalier pour mettre pied à terre. Le sort se termine si vous utilisez une action pour le révoquer ou si la monture subit le moindre dégât.</p>",
};

export const MOQUERIE_CRUELLE: Spell = {
  type: IndexElementType.Spell,
  id: "moquerie-cruelle",
  name: "Moquerie cruelle",
  level: 0,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V",
  duration: "Instantanée",
  description:
    "<p>Vous lancez une bordée d'insultes empreintes d'un subtil enchantement à une créature située à portée dans votre champ de vision. Si elle vous entend (elle n'a pas besoin de vous comprendre), elle doit réussir un jet de sauvegarde de Sagesse, sans quoi elle subit 1d4 dégâts psychiques et se trouve désavantagée sur le prochain jet d'attaque qu'elle effectue avant la fin de son prochain tour.</p><br/><p>Les dégâts du sort augmentent de 1d4 quand vous atteignez le niveau 5 (2d4), le niveau 11 (3d4) et le niveau 17 (4d4).</p>",
};

export const MOT_DE_GUERISON: Spell = {
  type: IndexElementType.Spell,
  id: "mot-de-guérison",
  name: "Mot de guérison",
  level: 1,
  school: SpellSchool.Evocation,
  castingTime: "1 action bonus",
  range: "18 mètres",
  components: "V",
  duration: "Instantanée",
  description:
    "<p>Une créature de votre choix située à portée dans votre champ de vision récupère un montant de points de vie égal à 1d4 + votre modificateur de caractéristique d'incantation. Ce sort n'a aucun effet sur les artificiels et les morts-vivants.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, les soins augmentent de 1d4 par niveau au-delà du 1er.</p>",
};

export const MOT_DE_GUERISON_DE_GROUPE: Spell = {
  type: IndexElementType.Spell,
  id: "mot-de-guérison-de-groupe",
  name: "Mot de guérison de groupe",
  level: 3,
  school: SpellSchool.Evocation,
  castingTime: "1 action bonus",
  range: "18 mètres",
  components: "V",
  duration: "Instantanée",
  description:
    "<p>Vous prononcez des paroles curatives qui rendent un montant de points de vie égal à 1d4 + votre modificateur de caractéristique d'incantation à un maximum de six créatures de votre choix situées à portée et dans votre champ de vision.</p><br/><p>Ce sort reste sans effet sur les morts-vivants et les artificiels.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, les soins augmentent de 1d4 par niveau au-delà du 3ème.</p>",
};

export const MOT_DE_POUVOIR_ETOURDISSANT: Spell = {
  type: IndexElementType.Spell,
  id: "mot-de-pouvoir-étourdissant",
  name: "Mot de pouvoir étourdissant",
  level: 8,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V",
  duration: "Instantanée",
  description:
    "<p>Vous prononcez un mot de pouvoir capable de submerger l'esprit d'une créature située à portée dans votre champ de vision. Elle en est abasourdie. Si elle possède 150 points de vie ou moins, elle est étourdie, sinon le sort est sans effet.</p><br/><p>Une cible étourdie a droit à un jet de sauvegarde de Constitution à la fin de chacun de ses tours. L'effet d'étourdissement se termine dès qu'elle en réussit un.</p>",
};

export const MOT_DE_POUVOIR_GUERISSEUR: Spell = {
  type: IndexElementType.Spell,
  id: "mot-de-pouvoir-guérisseur",
  name: "Mot de pouvoir guérisseur",
  level: 9,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "Contact",
  components: "V, S",
  duration: "Instantanée",
  description:
    "<p>Une vague d'énergie curative parcourt la créature que vous touchez et lui rend tous ses points de vie. Si elle est charmée, effrayée, paralysée ou étourdie, cet état se dissipe.</p><br/><p>Si la créature est à terre, elle peut utiliser sa réaction pour se relever. Ce sort n'a aucun effet sur les morts-vivants et les artificiels.</p>",
};

export const MOT_DE_POUVOIR_MORTEL: Spell = {
  type: IndexElementType.Spell,
  id: "mot-de-pouvoir-mortel",
  name: "Mot de pouvoir mortel",
  level: 9,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V",
  duration: "Instantanée",
  description:
    "<p>Vous prononcez un mot de pouvoir capable d'obliger une créature située à portée dans votre champ de vision à mourir instantanément. Si la créature choisie a 100 points de vie ou moins, elle meurt, sinon le sort n'a aucun effet.</p>",
};

export const MOT_DE_RETOUR: Spell = {
  type: IndexElementType.Spell,
  id: "mot-de-retour",
  name: "Mot de retour",
  level: 6,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "1,50 mètre",
  components: "V",
  duration: "Instantanée",
  description:
    "<p>Vous et un maximum de cinq créatures consentantes situées dans un rayon de 1,50 mètre autour de vous vous téléportez immédiatement dans un sanctuaire précédemment choisi.</p><br/><p>Vous et les créatures qui se téléportent éventuellement avec vous apparaissez dans l'espace inoccupé le plus proche de l'endroit que vous avez désigné lorsque vous avez préparé votre sanctuaire (voir plus bas). Si vous lancez ce sort sans avoir préparé un sanctuaire au préalable, il n'a aucun effet.</p><br/><p>Pour désigner un sanctuaire, vous devez lancer ce sort en un lieu dédié à votre divinité, comme un temple, ou entretenant des liens étroits avec elle. Si vous tentez de lancer ainsi le sort dans une zone qui n'est pas dédiée à votre divinité, il n'a aucun effet.</p>",
};

export const MOTIF_HYPNOTIQUE: Spell = {
  type: IndexElementType.Spell,
  id: "motif-hypnotique",
  name: "Motif hypnotique",
  level: 3,
  school: SpellSchool.Illusion,
  castingTime: "1 action",
  range: "36 mètres",
  components:
    "S, M (un bâtonnet d'encens incandescent ou une fiole de cristal remplie d'une matière phosphorescente)",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Vous tissez dans les airs un motif aux couleurs mouvantes dans un cube de 9 mètres d'arête situé à portée. Le motif apparaît pendant un bref instant avant de s'évanouir. Chaque créature qui se trouve dans la zone et voit le motif doit faire un jet de sauvegarde de Sagesse. Celles qui échouent sont charmées pendant la durée du sort. Tant qu'une créature est charmée par ce sort, elle est neutralisée et a une vitesse de 0.</p><br/><p>Le sort se termine pour une créature donnée si elle subit le moindre dégât ou si quelqu'un d'autre utilise son action pour la secouer et la sortir de sa torpeur.</p>",
};

export const MUR_DEPINES: Spell = {
  type: IndexElementType.Spell,
  id: "mur-d'épines",
  name: "Mur d'épines",
  level: 6,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S, M (une poignée d'épines)",
  duration: "Concentration, jusqu'à 10 minutes",
  description:
    "<p>Vous créez un mur fait de buissons souples et robustes, enchevêtrés et hérissés d'épines acérées. Il apparaît à portée sur une surface solide et persiste pendant toute la durée du sort. Vous pouvez faire un mur de 18 mètres de long, 3 mètres de haut et 1,50 mètre d'épaisseur, ou le disposer en un cercle de 6 mètres de diamètre pour une hauteur maximum de 6 mètres et une épaisseur de 1,50 mètre. Le mur bloque le champ de vision.</p><br/><p>Quand le mur apparaît, chaque créature située dans sa zone doit faire un jet de sauvegarde de Dextérité. Celles qui échouent subissent 7d8 dégâts perforants, les autres la moitié seulement.</p><br/><p>Une créature peut traverser le mur, mais lentement et dans la douleur. Elle doit dépenser 1,20 mètre de déplacement pour avancer de 30 centimètres au sein du mur. De plus, quand elle entre dans le mur pour la première fois de son tour ou quand elle y termine son tour, elle doit faire un jet de sauvegarde de Dextérité. Elle subit 7d8 dégâts perforants si elle rate son jet, la moitié si elle le réussit.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou plus, les deux types de dégâts augmentent chacun de 1d8 par niveau au-delà du 6ème.</p>",
};

export const MUR_DE_FEU: Spell = {
  type: IndexElementType.Spell,
  id: "mur-de-feu",
  name: "Mur de feu",
  level: 4,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S, M (un éclat de phosphore)",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Vous créez un mur de feu sur une surface solide située à portée.</p><br/><p>Il peut faire un maximum de 18 mètres de long, 6 mètres de haut et 30 centimètres d'épaisseur, ou prendre une forme circulaire de 6 mètres de diamètre pour 6 mètres de haut et 30 centimètres d'épaisseur. Le mur est opaque et persiste toute la durée du sort.</p><br/><p>Quand le mur apparaît, chaque créature présente dans sa zone d'effet doit faire un jet de sauvegarde de Dextérité.</p><br/><p>Celles qui échouent reçoivent 5d8 dégâts de feu, les autres la moitié seulement.</p><br/><p>Une face du mur (celle de votre choix) inflige 5d8 dégâts de feu à chaque créature qui termine son tour à 3 mètres d'elle ou moins ou au sein du mur. Une créature qui pénètre dans le mur pour la première fois de son tour ou y termine son tour subit les mêmes dégâts. L'autre face du mur n'inflige pas de dégâts.</p><br/><p>A plus haut niveau. Si vous lancez ce sort en utilisant un emplacement de niveau 5 ou plus, les dégâts augmentent de 1d8 par niveau au-delà du 4ème.</p>",
};

export const MUR_DE_FORCE: Spell = {
  type: IndexElementType.Spell,
  id: "mur-de-force",
  name: "Mur de force",
  level: 5,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S, M (une pincée de poudre de gemme translucide)",
  duration: "Concentration, jusqu'à 10 minutes",
  description:
    "<p>Un mur de force invisible se matérialise soudain en un point de votre choix situé à portée. Il s'oriente comme bon vous semble, comme une barrière horizontale, verticale ou inclinée.</p><br/><p>Il peut flotter librement ou reposer sur une surface solide.</p><br/><p>Vous pouvez lui donner une forme de dôme hémisphérique ou de sphère d'un rayon maximal de 3 mètres ou en faire une surface plane composée de dix panneaux de 3 mètres sur 3.</p><br/><p>Chaque panneau doit être contigu à un autre. Quelle que soit sa forme, le mur fait 0,5 centimètre d'épaisseur et persiste pendant toute la durée du sort. Si le mur passe par l'espace d'une créature lorsqu'il apparaît, il la repousse d'un côté ou de l'autre (à vous de choisir).</p><br/><p>Aucun élément ne peut franchir physiquement le mur, qui est immunisé contre tous les dégâts et résiste à toute dissipation de la magie. En revanche, on peut le détruire instantanément avec une désintégration. Le mur s'étend également sur le plan éthéré, ce qui empêche de le franchir sous forme éthérée.</p>",
};

export const MUR_DE_GLACE: Spell = {
  type: IndexElementType.Spell,
  id: "mur-de-glace",
  name: "Mur de glace",
  level: 6,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S, M (un éclat de quartz)",
  duration: "Concentration, jusqu'à 10 minutes",
  description:
    "<p>Vous créez un mur de glace sur une surface solide à portée. Vous pouvez lui donner une forme de dôme hémisphérique ou de sphère d'un rayon maximal de 3 mètres ou en faire une surface plane composée de dix panneaux de 3 mètres carrés. Chaque panneau doit être contigu à un autre. Quelle que soit sa forme, le mur fait 30 centimètres d'épaisseur et persiste pendant toute la durée du sort. Si le mur passe par l'espace d'une créature lorsqu'il apparaît, il la repousse d'un côté ou de l'autre et elle doit faire un jet de sauvegarde de Dextérité. Si elle échoue, elle subit 10d6 dégâts de froid, la moitié seulement si elle réussit.</p><br/><p>Le mur est un objet que l'on peut endommager et on peut donc y ouvrir des brèches. Il a une CA de 12 et 30 points de vie par section de 3 mètres de côté et il est vulnérable aux dégâts de feu. Si une section de 3 mètres de côté tombe à 0 point de vie, elle est détruite et laisse juste une zone d'air glacé à l'espace où se trouvait le pan de mur. Quand une créature se déplace dans cette zone frigorifique pour la première fois de son tour, elle doit faire un jet de sauvegarde de Constitution. Si elle échoue, elle subit 5d6 dégâts de froid, la moitié seulement si elle réussit.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou plus, les dégâts que le mur inflige en apparaissant augmentent de 2d6 et les dégâts provoqués par un passage dans la zone d'air glacé augmentent de 1d6 par niveau au-delà du 6ème.</p>",
};

export const MUR_DE_PIERRE: Spell = {
  type: IndexElementType.Spell,
  id: "mur-de-pierre",
  name: "Mur de pierre",
  level: 5,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S, M (un petit bloc de granite)",
  duration: "Concentration, jusqu'a 10 minutes",
  description:
    "<p>Vous créez un mur de pierre non magique qui se matérialise en un point de votre choix à portée. Il fait 15 centimètres d'épaisseur et se compose de dix panneaux de 3 mètres sur 3. Chaque panneau doit être contigu à un autre. Sinon, vous pouvez opter pour des panneaux de 3 mètres sur 6 de seulement 7,50 centimètres d'épaisseur.</p><br/><p>Si le mur passe par l'espace d'une créature lorsqu'il apparaît, il la repousse d'un côté ou de l'autre (à vous de choisir). Si une créature est placée de telle manière qu'elle devrait se retrouver entourée de toutes parts par le mur (ou par le mur et une autre surface solide), elle doit faire un jet de sauvegarde de Dextérité. Si elle le réussit, elle peut utiliser sa réaction pour se déplacer à sa vitesse au maximum afin de ne plus être encerclée par le mur.</p><br/><p>Le mur peut prendre la forme que vous désirez, mais il ne peut pas occuper le même espace qu'une créature ou un objet. Il n'est pas forcément vertical et n'a pas besoin de reposer sur des fondations solides. En revanche, il doit impérativement fusionner avec de la pierre existante lui servant de soutien solide. Vous pouvez donc utiliser ce sort pour jeter un pont au-dessus d'un fossé ou créer une rampe.</p><br/><p>Si vous créez une longueur de plus de 6 mètres, vous devez réduire de moitié la taille de chaque panneau pour créer des supports. Vous pouvez façonner la silhouette générale du mur pour le doter de créneaux, de remparts et autres.</p><br/><p>Le mur est un objet de pierre que l'on peut endommager et on peut done y ouvrir des brèches. Chaque panneau a une CA de 15 et 30 points de vie par section de 2,5 centimètres d'épaisseur. Si un panneau tombe à 0 point de vie, il est détruit, ce qui peut entraîner l'effondrement des panneaux adjacents, au choix du MD.</p><br/><p>Si vous restez concentré sur le sort pendant toute sa durée, le mur devient une structure permanente et ne peut plus être dissipé, sinon il disparaît à la fin du sort.</p>",
};

export const MUR_DE_VENT: Spell = {
  type: IndexElementType.Spell,
  id: "mur-de-vent",
  name: "Mur de vent",
  level: 3,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S, M (un petit éventail et une plume exotique)",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Un mur de vent fort se lève soudain depuis le sol en un point de votre choix à portée. Vous pouvez lui faire couvrir jusqu'à 15 mètres de long. 4,50 mètres de haut et 30 centimètres d'épaisseur. Vous pouvez lui donner la forme que vous voulez tant qu'il dessine un chemin continu au sol. Ce mur persiste pendant toute la durée du sort.</p><br/><p>Quand le mur apparaît, chaque créature située dans sa zone doit faire un jet de sauvegarde de Force. Les créatures qui échouent subissent 3d8 dégâts contondants, les autres la moitié seulement.</p><br/><p>Le vent fort maintient la brume, la fumée et les autres gaz à l'écart. Les créatures et objets volants de taille Petite ou inférieure ne peuvent pas traverser le mur.</p><br/><p>Les matériaux libres et légers s'envolent si on les apporte dans le mur. Les flèches, les carreaux et autres projectiles ordinaires visant une cible située derrière le mur sont systématiquement détournés vers le haut et ratent automatiquement leur cible. (Ce phénomène n'affecte pas les rochers que lancent les géants ou les engins de siège, ni les projectiles similaires.) Les créatures sous forme gazeuse ne peuvent pas franchir le mur.</p>",
};

export const MUR_PRISMATIQUE: Spell = {
  type: IndexElementType.Spell,
  id: "mur-prismatique",
  name: "Mur prismatique",
  level: 9,
  school: SpellSchool.Abjuration,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V,S",
  duration: "10 minutes",
  description:
    "<p>Un plan de lumière scintillante multicolore forme un mur opaque vertical centré sur un point situé à portée et dans votre champ de vision. Ce mur fait au maximum 27 mètres de long, 9 mètres de haut et 2,5 centimètres d'épaisseur.</p><br/><p>Sinon, vous pouvez façonner le mur de manière à ce qu'il forme une sphère d'au maximum 9 mètres de diamètre centrée sur un point de votre choix situé à portée. Le mur reste en place pendant toute la durée du sort. Si vous positionnez le mur de manière à ce qu'il passe par un espace occupé par une créature, le sort échoue: votre action et l'emplacement du sort sont gaspillés.</p><br/><p>Le mur émet une lumière vive dans un rayon de 30 mètres et une lumière faible dans un rayon de 30 mètres de plus.</p><br/><p>Vous et les créatures que vous désignez au moment de l'incantation pouvez traverser le mur et rester à côté sans conséquence. Si une créature qui voit le mur s'en approche à 6 mètres ou moins, ou qu'elle démarre son tour dans ce périmètre, elle doit réussir un jet de sauvegarde de Constitution ou devenir aveugle pendant 1 minute.</p><br/><p>Le mur se compose de sept couches, chacune d'une couleur différente. Quand une créature tente de franchir le mur ou d'y enfoncer la main, elle avance d'une couche à la fois, jusqu'à les franchir toutes. Chaque fois qu'elle traverse ou touche une couche, elle doit réussir un jet de sauvegarde de Dextérité, sans quoi elle est affectée par les propriétés de la couche indiquées plus bas.</p><br/><p>On peut détruire le mur, également couche par couche. du rouge au violet, en appliquant une méthode spécifique à chaque couche. Une fois une couche détruite, elle ne se repare pas jusqu'à la fin du sort. Champ antimagie n'a aucun effet sur le mur et dissipation de la magie fonctionne uniquement sur la couche violette.</p><br/><p>1. Rouge. La cible subit 10d6 dégâts de feu si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</p><br/><p>Tant que cette couche est en place, les attaques à distance non magiques ne peuvent pas traverser le mur. On peut la détruire en lui infligeant 25 dégâts de froid.</p><br/><p>2. Orange. La cible subit 10d6 dégâts d'acide si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</p><br/><p>Tant que cette couche est en place, les attaques à distance magiques ne peuvent pas traverser le mur. On peut détruire cette couche avec un vent fort.</p><br/><p>3. Jaune. La cible subit 10d6 dégâts de foudre si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</p><br/><p>On peut détruire cette couche en lui infligeant au moins</p><br/><p>60 dégâts de force.</p><br/><p>4. Vert. La cible subit 10d6 dégâts de poison si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</p><br/><p>On peut détruire cette couche grâce à un sort de passe-muraille ou un autre sort d'un niveau égal ou supérieur, capable d'ouvrir un portail dans une surface solide.</p><br/><p>﻿﻿﻿Bleu. La cible subit 10d6 dégâts de froid si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit. On peut détruire cette couche en lui infligeant 25 dégâts de feu.</p><br/><p>﻿﻿﻿Indigo. Si la cible rate son jet de sauvegarde, elle est entravée et doit alors faire un jet de sauvegarde de Constitution à la fin de chacun de ses tours. Si elle en réussit trois, le sort se termine; si elle en rate trois, elle se change définitivement en pierre et elle est en proie à l'état pétrifié.</p><br/><p>Les succès et les échecs n'ont pas à être consécutifs: tenez le compte dans chaque catégorie jusqu'à ce que l'une d'elles arrive à trois.</p><br/><p>Tant que cette couche est en place, il est impossible de lancer un sort à travers le mur. On peut détruire la couche grâce à la lumière vive d'un sort de lumière du jour ou d'un sort similaire de niveau égal ou supérieur.</p><br/><p>7. Violet. La cible est aveugle si elle rate son jet de sauvegarde. Elle doit alors faire un jet de sauvegarde de Sagesse au début de votre prochain tour. Si elle le réussit, elle recouvre la vue, si elle le rate, elle est emportée sur un autre plan d'existence choisi par le MD et recouvre aussi la vue. (En général, une créature qui ne se trouve pas sur son propre plan d'existence est bannie là-bas tandis que les autres créatures sont envoyées sur le plan astral ou éthéré).</p><br/><p>On peut détruire cette couche avec une dissipation de la magie ou un sort similaire de niveau identique ou supérieur, capable de mettre un terme à un sort ou à un effet magique.</p>",
};

export const MURMURES_DISSONANTS: Spell = {
  type: IndexElementType.Spell,
  id: "murmures-dissonants",
  name: "Murmures dissonants",
  level: 1,
  school: SpellSchool.Enchantment,
  castingTime: "1 action",
  range: "18 mètres",
  components: "V",
  duration: "Instantanée",
  description:
    "<p>Vous fredonnez une mélodie discordante qu'entend une seule créature de votre choix, située à portée.</p><br/><p>La malheureuse est alors victime de terribles douleurs et doit faire un jet de sauvegarde de Sagesse. Si elle échoue, elle subit 3d6 dégâts psychiques et doit immédiatement dépenser sa réaction (si elle le peut) pour s'éloigner de vous autant que sa vitesse de déplacement le lui permet. Elle ne s'avance pas dans des zones à l'évidence dangereuses, comme un brasier ou une fosse. Si la cible réussit son jet de sauvegarde, elle subit seulement la moitié des dégâts et n'a pas à s'éloigner. Une créature assourdie réussit automatiquement son jet de sauvegarde.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, les dégâts augmentent de 1d6 par emplacement de sort au-delà du 1er.</p>",
};

export const MYTHES_ET_LEGENDES: Spell = {
  type: IndexElementType.Spell,
  id: "mythes-et-légendes",
  name: "Mythes et légendes",
  level: 5,
  school: SpellSchool.Divination,
  castingTime: "10 minutes",
  range: "Personnelle",
  components:
    "V, S, M (de l'encens d'une valeur minimale de 250 po que le sort consume et quatre bandelettes d'ivoire valant au moins 50 po chaque)",
  duration: "Instantanée",
  description:
    "<p>Nommez ou décrivez une personne, un lieu ou un objet.</p><br/><p>Le sort porte à votre connaissance un bref résumé des connaissances essentielles se rapportant à la chose nommée.</p><br/><p>Ces connaissances peuvent se présenter sous la forme d'histoires actuelles, de contes oubliés ou même d'un savoir secret qui n'a jamais été révélé au grand public. Si la chose que vous nommez n'est pas digne de figurer dans une légende, vous n'obtenez aucune information. Plus vous possédez d'informations sur cette chose, plus celles que vous recevez via le sort sont précises et détaillées.</p><br/><p>Les informations obtenues sont exactes, mais susceptibles de se présenter dans un langage figuré. Par exemple, si vous avez une mystérieuse hache en main, le sort peut vous donner les renseignements suivants: « Malheur au malfaisant qui pose la main sur cette hache, car même son manche peut entailler la main des mécréants. Seul un véritable enfant de la pierre, un être qui aime Moradin et en est aimé en retour, pourra éveiller la véritable puissance de cette hache à condition de prononcer le mot sacré Rudnogg. »</p>",
};

export const NAPPE_DE_BROUILLARD: Spell = {
  type: IndexElementType.Spell,
  id: "nappe-de-brouillard",
  name: "Nappe de brouillard",
  level: 1,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "36 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 heure",
  description:
    "<p>Vous créez une sphère de brouillard de 6 mètres de rayon centrée sur un point à portée. La sphère s'étend en contournant les angles et, dans la zone qu'elle occupe, la visibilité est fortement obstruée. Le brouillard persiste pendant toute la durée du sort ou jusqu'à ce qu'un vent modéré ou plus violent (soufflant au moins à 15 kilomètres/heure) le disperse.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, le rayon de la sphère augmente de 6 mètres par niveau au-delà du 1er.</p>",
};

export const NUAGE_INCENDIAIRE: Spell = {
  type: IndexElementType.Spell,
  id: "nuage-incendiaire",
  name: "Nuage incendiaire",
  level: 8,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "45 mètres",
  components: "V, S",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Un nuage de fumée ondoyant constellé de braises rougeoyantes apparait sous la forme d'une sphère de 6 mètres de rayon centrée sur un point à portée. Le nuage se répand en contournant les angles si nécessaire et, à l'intérieur, la visibilité est fortement obstruée. Le nuage persiste pendant toute la durée du sort ou jusqu'à ce qu'un vent fort ou modéré (au moins 15 km/h) le disperse.</p><br/><p>Quand le nuage apparaît, chaque créature se trouvant a l'intérieur doit faire un jet de sauvegarde de Dextérité.</p><br/><p>Celles qui échouent reçoivent 10d8 dégâts de feu, les autres la moitié seulement. Une créature doit aussi faire ce jet quand elle entre dans la zone affectée pour la première fois du tour ou qu'elle y finit son tour.</p><br/><p>Le nuage s'éloigne de vous sur 3 mètres dans la direction de votre choix au début de chacun de vos tours.</p>",
};

export const NUAGE_NAUSEABOND: Spell = {
  type: IndexElementType.Spell,
  id: "nuage-nauséabond",
  name: "Nuage nauséabond",
  level: 3,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "27 mètres",
  components: "V, S, M (un œuf pourri ou des feuilles de chou pourri)",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Vous créez une sphère d'un gaz jaunâtre et nauséabond de 6 mètres de rayon centrée sur un point à portée. Le nuage se répand en contournant les angles et la visibilité est nulle dans toute sa zone. Le nuage persiste dans la zone affectée pendant toute la durée du sort.</p><br/><p>Chaque créature entièrement englobée dans le nuage au début de son tour doit faire un jet de sauvegarde de Constitutio contre le poison. Celles qui échouent passent toute leur action du tour à vomir. Les créatures qui ne respirent pas et celles qui sont immunisées contre le poison réussissent automatiquement ce jet.</p><br/><p>Un vent modéré (au moins 15 km/h) disperse le nuage après 4 rounds. Un vent fort (au moins 30 km/h) le disperse au bout de seulement 1 round.</p>",
};

export const NUEE_DE_DAGUES: Spell = {
  type: IndexElementType.Spell,
  id: "nuée-de-dagues",
  name: "Nuée de dagues",
  level: 2,
  school: SpellSchool.Conjuration,
  castingTime: "1 action",
  range: "18 m",
  components: "V, S, M (un éclat de verre)",
  duration: "Concentration, jusqu'à 1 minute",
  description:
    "<p>Vous emplissez de dagues tournoyantes un cube de 1,50 mètre darête. Ce cube est centré sur un point de votre choix situé à portée. Une créature subit 4d4 dégâts tranchants quand elle entre dans la zone du sort pour la première fois d'un tour ou quand elle y débute son tour.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou plus, les dégâts augmentent de 2d4 par emplacement de sort au-delà du 2ème.</p>",
};

export const NUEE_DE_METEORES: Spell = {
  type: IndexElementType.Spell,
  id: "nuée-de-météores",
  name: "Nuée de météores",
  level: 9,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "1,5 kilomètre",
  components: "V, S",
  duration: "Instantanée",
  description:
    "<p>Des orbes de feu flamboyants s'abattent au sol en quatre points de votre choix situés à portée et dans votre champ de vision. Chaque créature située dans la sphère de 12 mètres de rayon centrée sur chacun de ces points doit faire un jet de sauvegarde de Dextérité. Les sphères s'étendent en contournant les angles. Une créature qui rate son jet de sauvegarde subit 20d6 dégâts de feu et 20d6 dégâts contondants, les autres la moitié seulement. Une créature qui se trouve prise dans deux sphères à la fois ne subit qu'une seule fois les dégâts des météores.</p><br/><p>Le sort abîme et embrase les objets inflammables de la zone s'ils ne sont pas portés ou transportés.</p>",
};

export const ŒIL_DU_MAGE: Spell = {
  type: IndexElementType.Spell,
  id: "œil-du-mage",
  name: "Œil du mage",
  level: 4,
  school: SpellSchool.Divination,
  castingTime: "1 action",
  range: "9 mètres",
  components: "V, S, M (des poils de chauve-souris)",
  duration: "Concentration, jusqu'à 1 heure",
  description:
    "<p>Vous créez un œil magique invisible à portée qui flotte dans les airs pendant toute la durée du sort.</p><br/><p>Il vous envoie mentalement des informations visuelles grâce à sa vision normale et dans le noir dans un rayon de 9 mètres. Il peut regarder dans toutes les directions.</p><br/><p>Par une action, vous pouvez déplacer l'œil d'un maximum de 9 mètres dans la direction de votre choix. Il peut s'éloigner de vous sur une distance illimitée, mais il ne peut pas entrer dans un autre plan d'existence. Une barrière solide l'empêche de passer, mais il peut se glisser à travers une ouverture d'au minimum 2,5 centimètres de diamètre.</p>",
};

export const ORBE_CHROMATIQUE: Spell = {
  type: IndexElementType.Spell,
  id: "orbe-chromatique",
  name: "Orbe chromatique",
  level: 1,
  school: SpellSchool.Evocation,
  castingTime: "1 action",
  range: "27 m",
  components: "V, S, M (un diamant d'une valeur minimale de 50 po)",
  duration: "Instantanée",
  description:
    "<p>Vous lancez une sphère d'énergie de 10 centimètres de diamètre sur une créature située à portée dans votre champ de vision. Cet orbe est fait d'acide, de feu, de froid, de foudre, de poison ou de tonnerre (à vous de choisir). Vous effectuez ensuite un jet d'attaque à distance contre votre cible. Si vous la touchez, elle subit 3d8 dégâts du type de l'orbe.</p><br/><p><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou plus, les dégâts augmentent de 1d8 par emplacement de sort au-delà du 1er.</p>",
};

export const ORIENTATION: Spell = {
  type: IndexElementType.Spell,
  id: "orientation",
  name: "Orientation",
  level: 6,
  school: SpellSchool.Divination,
  castingTime: "1 minute",
  range: "Personnelle",
  components:
    "V, S, M (un ensemble d'instruments de divination [comme des os, des bâtonnets en ivoire, des cartes, des dents ou des runes gravées] d'une valeur de 100 po et un objet venant de l'endroit que vous cherchez)",
  duration: "Concentration, jusqu'à 1 jour",
  description:
    "<p>Ce sort vous permet de trouver le chemin physique le plus direct et le plus court vers un endroit fixe spécifique avec lequel vous êtes familier et qui se trouve sur le même plan d'existence que vous. Le sort échoue si vous choisissez une destination située sur un autre plan d'existence, une destination mouvante (comme une forteresse mobile) ou une destination n'ayant rien de spécifique (comme l'antre d'un dragon vert).</p><br/><p>Tant que le sort persiste et que vous êtes sur le même plan d'existence que votre destination, vous savez dans quelle direction et à quelle distance elle se trouve. Tant que vous faites route vers votre destination, chaque fois que vous avez le choix entre plusieurs itinéraires, vous déterminez automatiquement celui qui sera le plus court et le plus direct (mais pas forcément le plus sûr).</p>",
};


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
  CREATION,
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
  FUSION_DANS_LA_PIERRE,
  GARDIEN_DE_LA_FOI,
  GLISSEMENT_DE_TERRAIN,
  GLOBE_DINVULNERABILITE,
  GLYPHE_DE_GARDE,
  GRAISSE,
  GRANDE_FOULEE,
  GRELE_DEPINES,
  GUERISON,
  GUERISON_DE_GROUPE,
  HATE,
  HERISSEMENT_DE_PROJECTILES,
  HEROISME,
  IDENTIFICATION,
  ILLUSION_MINEURE,
  ILLUSION_PROGRAMMEE,
  IMAGE_MAJEURE,
  IMAGE_MIROIR,
  IMAGE_PROJETEE,
  IMAGE_SILENCIEUSE,
  IMMOBILISATION_DE_MONSTRE,
  IMMOBILISATION_DE_PERSONNE,
  IMPRECATION,
  INJONCTION,
  INSECTE_GEANT,
  INTERDICTION,
  INVERSION_DE_LA_GRAVITE,
  INVISIBILITE,
  INVISIBILITE_SUPREME,
  INVOCATION_DANIMAUX,
  INVOCATION_DE_CELESTE,
  INVOCATION_DELEMENTAIRE,
  INVOCATION_DELEMENTAIRES_MINEURS,
  INVOCATION_DETRES_SYLVESTRES,
  INVOCATION_DE_FEE,
  INVOCATION_DE_VOLEE,
  LAME_DE_FEU,
  LENTEUR,
  LEVITATION,
  LIANE_AVIDE,
  LIBERTE_DE_MOUVEMENT,
  LIEN_DE_PROTECTION,
  LIEN_TELEPATHIQUE_DE_RARY,
  LOCALISATION_DANIMAUX_OU_DE_PLANTES,
  LOCALISATION_DE_CREATURE,
  LOCALISATION_DOBJET,
  LUEUR_DESPOIR,
  LUEURS_FEERIQUES,
  LUMIERE,
  LUMIERE_DU_JOUR,
  LUMIERES_DANSANTES,
  MAIN_DE_BIGBY,
  MAIN_DU_MAGE,
  MAINS_BRULANTES,
  MALEDICTION,
  MALEFICE,
  MANOIR_SOMPTUEUX_DE_MORDENKAINEN,
  MARCHE_SUR_LONDE,
  MARQUE_DU_CHASSEUR,
  MAUVAIS_OEIL,
  MESSAGE,
  MESSAGER_ANIMAL,
  METAL_BRULANT,
  METAMORPHOSE,
  METAMORPHOSE_ANIMALE,
  METAMORPHOSE_SUPREME,
  MIRAGE,
  MODIFICATION_DAPPARENCE,
  MODIFICATION_DE_MEMOIRE,
  MONTURE_FANTOME,
  MOQUERIE_CRUELLE,
  MOT_DE_GUERISON,
  MOT_DE_GUERISON_DE_GROUPE,
  MOT_DE_POUVOIR_ETOURDISSANT,
  MOT_DE_POUVOIR_GUERISSEUR,
  MOT_DE_POUVOIR_MORTEL,
  MOT_DE_RETOUR,
  MOTIF_HYPNOTIQUE,
  MUR_DEPINES,
  MUR_DE_FEU,
  MUR_DE_FORCE,
  MUR_DE_GLACE,
  MUR_DE_PIERRE,
  MUR_DE_VENT,
  MUR_PRISMATIQUE,
  MURMURES_DISSONANTS,
  MYTHES_ET_LEGENDES,
  NAPPE_DE_BROUILLARD,
  NUAGE_INCENDIAIRE,
  NUAGE_NAUSEABOND,
  NUEE_DE_DAGUES,
  NUEE_DE_METEORES,
  ŒIL_DU_MAGE,
  ORBE_CHROMATIQUE,
  ORIENTATION
];