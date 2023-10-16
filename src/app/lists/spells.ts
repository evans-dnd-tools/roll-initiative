import { SpellSchool } from 'src/models/enums/spell-school';
import { Spell } from '../../models/spell';

export const ENLARGE_REDUCE: Spell = {
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
  <Chaque><b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou plus, vous animez ou réaffirmez votre contrôle sur deux créatures de plus par niveau au-delà du 3ème. Chaque créature doit venir d'un tas d'os ou d'un cadavre différent.</p>`
};

export const ANIMATE_OBJECTS: Spell = {
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
  ANTIPATHY_SYMPATHY
];