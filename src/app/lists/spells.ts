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
  <p><b>Endurance de l'ours :</b> La cible est avantagée lors des tests de Constitution. Elle gagne aussi 2d6 points de vie temporaires qui disparaissent quand le sort se termine.</p>
  <b>Force du taureau :</b> La cible est avantagée lors des test de Force et sa capacité de charge est doublée.</p>
  <b>Grâce du chat :</b> La cible est avantagée lors des tests de Dextérité. De plus, elle ne subit pas de dégâts quand elle chute sur 6 mètres ou moins, à condition qu'elle ne soit pas neutralisée.</p>
  <b>Splendeur de l'aigle :</b> La cible est avantagée lors des tests de Charisme.</p>
  <b>Ruse du renard :</b> La cible est avantagée lors des tests d'Intelligence.</p>
  <b>Sagesse du hibou :</b> La cible est avantagée lors des tests de Sagesse.</p>
  <b>À plus haut niveau :</b> Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou plus, vous pouvez prendre une créature de plus pour cible par niveau au-delà du 2ème.</p>`
};

export const SPELLS: Spell[] = [
  ENLARGE_REDUCE,
  HELP,
  ALARM,
  PLANAR_ALLY,
  ENHANCE_ABILITY
];