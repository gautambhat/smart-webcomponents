import React from "react";
import ReactDOM from "react-dom";
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <ListBox  rightToLeft>
				<ListItem value="אפגניסטן">אפגניסטן</ListItem>
					<ListItem selected value="אלבניה">אלבניה</ListItem>
					<ListItem value="אלג'יריה">אלג'יריה</ListItem>
					<ListItem value="סמואה האמריקנית">סמואה האמריקנית</ListItem>
					<ListItem value="אנדורה">אנדורה</ListItem>
					<ListItem value="אנגולה">אנגולה</ListItem>
					<ListItem value="אנגווילה">אנגווילה</ListItem>
					<ListItem value="אנטארקטיקה">אנטארקטיקה</ListItem>
					<ListItem value="אנטיגואה וברבודה">אנטיגואה וברבודה</ListItem>
					<ListItem value="ארגנטינה">ארגנטינה</ListItem>
					<ListItem value="ארמניה">ארמניה</ListItem>
					<ListItem value="ארובה">ארובה</ListItem>
					<ListItem value="אוסטרליה">אוסטרליה</ListItem>
					<ListItem value="אוסטריה">אוסטריה</ListItem>
					<ListItem value="אזרבייג'ן">אזרבייג'ן</ListItem>
					<ListItem value="איי בהאמה">איי בהאמה</ListItem>
					<ListItem value="בחריין">בחריין</ListItem>
					<ListItem value="בנגלדש">בנגלדש</ListItem>
					<ListItem value="ברבדוס">ברבדוס</ListItem>
					<ListItem value="בלארוס">בלארוס</ListItem>
					<ListItem value="בלגיה">בלגיה</ListItem>
					<ListItem value="בליז">בליז</ListItem>
					<ListItem value="בנין">בנין</ListItem>
					<ListItem value="ברמודה">ברמודה</ListItem>
					<ListItem value="בהוטן">בהוטן</ListItem>
					<ListItem value="בוליביה">בוליביה</ListItem>
					<ListItem value="בוסניה והרצגובינה">בוסניה והרצגובינה</ListItem>
					<ListItem value="בוצואנה">בוצואנה</ListItem>
					<ListItem value="האי בובוט">האי בובוט</ListItem>
					<ListItem value="ברזיל">ברזיל</ListItem>
					<ListItem value="הטריטוריה הבריטית באוקיינוס ההודי">הטריטוריה הבריטית באוקיינוס ההודי</ListItem>
					<ListItem value="ברוניי דארוסלאם">ברוניי דארוסלאם</ListItem>
					<ListItem value="בולגריה">בולגריה</ListItem>
					<ListItem value="בורקינה פאסו">בורקינה פאסו</ListItem>
					<ListItem value="בורונדי">בורונדי</ListItem>
					<ListItem value="קמבודיה">קמבודיה</ListItem>
					<ListItem value="קמרון">קמרון</ListItem>
					<ListItem value="קנדה">קנדה</ListItem>
					<ListItem value="קייפ ורדה">קייפ ורדה</ListItem>
					<ListItem value="איי קיימן">איי קיימן</ListItem>
					<ListItem value="הרפובליקה המרכז - אפריקאית">הרפובליקה המרכז - אפריקאית</ListItem>
					<ListItem value="צ'אד">צ'אד</ListItem>
					<ListItem value="צ'ילי">צ'ילי</ListItem>
					<ListItem value="סין">סין</ListItem>
					<ListItem value="אי חג המולד">אי חג המולד</ListItem>
					<ListItem value="איי קוקוס (קילינג)">איי קוקוס</ListItem>
					<ListItem value="קולומביה">קולומביה</ListItem>
					<ListItem value="קומורו">קומורו</ListItem>
					<ListItem value="קונגו">קונגו</ListItem>
					<ListItem value="קונגו, הרפובליקה הדמוקרטית של">קונגו</ListItem>
					<ListItem value="איי קוק">איי קוק</ListItem>
					<ListItem value="קוסטה ריקה">קוסטה ריקה</ListItem>
					<ListItem value="חוף השנהב">חוף השנהב</ListItem>
					<ListItem value="קרואטיה">קרואטיה</ListItem>
					<ListItem value="קובה">קובה</ListItem>
					<ListItem value="קפריסין">קפריסין</ListItem>
					<ListItem value="הרפובליקה הצ'כית">הרפובליקה הצ'כית</ListItem>
					<ListItem value="דנמרק">דנמרק</ListItem>
					<ListItem value="ג'יבוטי">ג'יבוטי</ListItem>
					<ListItem value="דומיניקה">דומיניקה</ListItem>
					<ListItem value="הרפובליקה הדומיניקנית">הרפובליקה הדומיניקנית</ListItem>
					<ListItem value="אקוודור">אקוודור</ListItem>
					<ListItem value="מצרים">מצרים</ListItem>
					<ListItem value="אל סלבדור">אל סלבדור</ListItem>
					<ListItem value="גיניאה המשוונית">גיניאה המשוונית</ListItem>
					<ListItem value="אריתריאה">אריתריאה</ListItem>
					<ListItem value="אסטוניה">אסטוניה</ListItem>
					<ListItem value="אתיופיה">אתיופיה</ListItem>
					<ListItem value="איי פוקלנד (Malvinas)">איי פוקלנד</ListItem>
					<ListItem value="איי פרו">איי פרו</ListItem>
					<ListItem value="פיג'י">פיג'י</ListItem>
					<ListItem value="פינלנד">פינלנד</ListItem>
					<ListItem value="צרפת">צרפת</ListItem>
					<ListItem value="גיאנה הצרפתית">גיאנה הצרפתית</ListItem>
					<ListItem value="פולינזיה הצרפתית">פולינזיה הצרפתית</ListItem>
					<ListItem value="שטחי דרום צרפת">שטחי דרום צרפת</ListItem>
					<ListItem value="גבון">גבון</ListItem>
					<ListItem value="גמביה">גמביה</ListItem>
					<ListItem value="ג'ורג'יה">ג'ורג'יה</ListItem>
					<ListItem value="גרמניה">גרמניה</ListItem>
					<ListItem value="גאנה">גאנה</ListItem>
					<ListItem value="גיברלטר">גיברלטר</ListItem>
					<ListItem value="יוון">יוון</ListItem>
					<ListItem value="גרינלנד">גרינלנד</ListItem>
					<ListItem value="גרנדה">גרנדה</ListItem>
					<ListItem value="גוואדלופ">גוואדלופ</ListItem>
					<ListItem value="גואם">גואם</ListItem>
					<ListItem value="גואטמלה">גואטמלה</ListItem>
					<ListItem value="גינאה">גינאה</ListItem>
					<ListItem value="גינאה ביסאו">גינאה ביסאו</ListItem>
					<ListItem value="גיאנה">גיאנה</ListItem>
					<ListItem value="האיטי">האיטי</ListItem>
					<ListItem value="איי הרד ואיי מקדונלד">איי הרד ואיי מקדונלד</ListItem>
					<ListItem value="הכס הקדוש (מדינת הוותיקן)">הכס הקדוש</ListItem>
					<ListItem value="הונדורס">הונדורס</ListItem>
					<ListItem value="הונג קונג">הונג קונג</ListItem>
					<ListItem value="הונגריה">הונגריה</ListItem>
					<ListItem value="איסלנד">איסלנד</ListItem>
					<ListItem value="הודו">הודו</ListItem>
					<ListItem value="אינדונזיה">אינדונזיה</ListItem>
					<ListItem value="איראן, הרפובליקה האסלאמית של">איראן</ListItem>
					<ListItem value="עירק">עירק</ListItem>
					<ListItem value="אירלנד">אירלנד</ListItem>
					<ListItem value="ישראל">ישראל</ListItem>
					<ListItem value="איטליה">איטליה</ListItem>
					<ListItem value="ג'מייקה">ג'מייקה</ListItem>
					<ListItem value="יפן">יפן</ListItem>
					<ListItem value="ירדן">ירדן</ListItem>
					<ListItem value="קזחסטן">קזחסטן</ListItem>
					<ListItem value="קניה">קניה</ListItem>
					<ListItem value="קיריבטי">קיריבטי</ListItem>
					<ListItem value="קוריאה, הרפובליקה העממית הדמוקרטית של">קוריאה</ListItem>
					<ListItem value="קוריאה, הרפובליקה של">קוריאה, הרפובליקה של</ListItem>
					<ListItem value="כווית">כווית</ListItem>
					<ListItem value="קירגיזסטן">קירגיזסטן</ListItem>
					<ListItem value="הרפובליקה הדמוקרטית העממית של לאו">הרפובליקה הדמוקרטית העממית של לאו</ListItem>
					<ListItem value="לטביה">לטביה</ListItem>
					<ListItem value="לבנון">לבנון</ListItem>
					<ListItem value="לסוטו">לסוטו</ListItem>
					<ListItem value="ליבריה">ליבריה</ListItem>
					<ListItem value="ג'בהיריה הערבית הלובית">ג'בהיריה הערבית הלובית</ListItem>
					<ListItem value="Liechtenstein">Liechtenstein</ListItem>
					<ListItem value="ליכטנשטיין">ליכטנשטיין</ListItem>
					<ListItem value="לוקסמבורג">לוקסמבורג</ListItem>
					<ListItem value="מקאו">מקאו</ListItem>
					<ListItem value="מקדוניה, הרפובליקה היוגוסלבית לשעבר של">מקדוניה</ListItem>
					<ListItem value="מדגסקר">מדגסקר</ListItem>
					<ListItem value="מלאווי">מלאווי</ListItem>
					<ListItem value="מלזיה">מלזיה</ListItem>
					<ListItem value="האיים המלדיביים">האיים המלדיביים</ListItem>
					<ListItem value="מאלי">מאלי</ListItem>
					<ListItem value="מלטה">מלטה</ListItem>
					<ListItem value="איי מרשל">איי מרשל</ListItem>
					<ListItem value="מרטיניק">מרטיניק</ListItem>
					<ListItem value="מאוריטניה">מאוריטניה</ListItem>
					<ListItem value="מאוריציוס">מאוריציוס</ListItem>
					<ListItem value="אבודים">אבודים</ListItem>
					<ListItem value="מקסיקו">מקסיקו</ListItem>
					<ListItem value="מיקרונזיה, מדינות הפדרציה של">מיקרונזיה</ListItem>
					<ListItem value="מולדובה, הרפובליקה של">מולדובה, הרפובליקה של</ListItem>
					<ListItem value="מונקו">מונקו</ListItem>
					<ListItem value="מונגוליה">מונגוליה</ListItem>
					<ListItem value="מונטסראט">מונטסראט</ListItem>
					<ListItem value="מרוקו">מרוקו</ListItem>
					<ListItem value="מוזמביק">מוזמביק</ListItem>
					<ListItem value="מיאנמר">מיאנמר</ListItem>
					<ListItem value="נמיביה">נמיביה</ListItem>
					<ListItem value="נאורו">נאורו</ListItem>
					<ListItem value="נפאל">נפאל</ListItem>
					<ListItem value="הולנד">הולנד</ListItem>
					<ListItem value="האנטילים ההולנדיים">האנטילים ההולנדיים</ListItem>
					<ListItem value="קלדוניה החדשה">קלדוניה החדשה</ListItem>
					<ListItem value="ניו זילנד">ניו זילנד</ListItem>
					<ListItem value="ניקרגואה">ניקרגואה</ListItem>
					<ListItem value="ניז'ר">ניז'ר</ListItem>
					<ListItem value="ניגריה">ניגריה</ListItem>
					<ListItem value="ניואה">ניואה</ListItem>
					<ListItem value="האי נורפולק">האי נורפולק</ListItem>
					<ListItem value="איי מריאנה הצפוניים">איי מריאנה הצפוניים</ListItem>
					<ListItem value="נורווגיה">נורווגיה</ListItem>
					<ListItem value="עומאן">עומאן</ListItem>
					<ListItem value="פקיסטן">פקיסטן</ListItem>
					<ListItem value="Palau">Palau</ListItem>
					<ListItem value="שטח פלסטיני, כבוש">שטח פלסטיני, כבוש</ListItem>
					<ListItem value="פנמה">פנמה</ListItem>
					<ListItem value="פפואה גינאה החדשה">פפואה גינאה החדשה</ListItem>
					<ListItem value="פרגוואי">פרגוואי</ListItem>
					<ListItem value="פרו">פרו</ListItem>
					<ListItem value="הפיליפינים">הפיליפינים</ListItem>
					<ListItem value="פיטקרן">פיטקרן</ListItem>
					<ListItem value="פולין">פולין</ListItem>
					<ListItem value="פורטוגל">פורטוגל</ListItem>
					<ListItem value="פורטו ריקו">פורטו ריקו</ListItem>
					<ListItem value="קטאר">קטאר</ListItem>
					<ListItem value="איחוד">איחוד</ListItem>
					<ListItem value="רומני">רומני</ListItem>
					<ListItem value="הפדרציה הרוסית">הפדרציה הרוסית</ListItem>
					<ListItem value="רואנדה">רואנדה</ListItem>
					<ListItem value="סנט הלנה">סנט הלנה</ListItem>
					<ListItem value="סנט קיטס ונביס">סנט קיטס ונביס</ListItem>
					<ListItem value="סנט לוסיה">סנט לוסיה</ListItem>
					<ListItem value="סנט פייר ומיקלון">סנט פייר ומיקלון</ListItem>
					<ListItem value="וינסנט הקדוש ו ה - גרנידיים">וינסנט הקדוש ו ה - גרנידיים</ListItem>
					<ListItem value="סמואה">סמואה</ListItem>
					<ListItem value="סן מרינו">סן מרינו</ListItem>
					<ListItem value="סאו טומה ופרינסיפה">סאו טומה ופרינסיפה</ListItem>
					<ListItem value="סעודיה">סעודיה</ListItem>
					<ListItem value="סנגל">סנגל</ListItem>
					<ListItem value="סרביה ומונטנגרו">סרביה ומונטנגרו</ListItem>
					<ListItem value="סיישל">סיישל</ListItem>
					<ListItem value="סיירה לאון">סיירה לאון</ListItem>
					<ListItem value="סינגפור">סינגפור</ListItem>
					<ListItem value="סלובקיה">סלובקיה</ListItem>
					<ListItem value="סלובניה">סלובניה</ListItem>
					<ListItem value="איי שלמה">איי שלמה</ListItem>
					<ListItem value="סומליה">סומליה</ListItem>
					<ListItem value="דרום אפריקה">דרום אפריקה</ListItem>
					<ListItem value="דרום ג'ורג'יה ואיי סנדוויץ 'דרום">דרום ג'ורג'יה</ListItem>
					<ListItem value="ספרד">ספרד</ListItem>
					<ListItem value="סרי לנקה">סרי לנקה</ListItem>
					<ListItem value="סודן">סודן</ListItem>
					<ListItem value="סורינאם">סורינאם</ListItem>
					<ListItem value="סבאלברד וג'אן מאיין">סבאלברד וג'אן מאיין</ListItem>
					<ListItem value="סווזילנד">סווזילנד</ListItem>
					<ListItem value="שבדיה">שבדיה</ListItem>
					<ListItem value="שוויץ">שוויץ</ListItem>
					<ListItem value="הרפובליקה הערבית של סוריה">הרפובליקה הערבית של סוריה</ListItem>
					<ListItem value="טייוואן, מחוז סין">טייוואן, מחוז סין</ListItem>
					<ListItem value="טג'יקיסטן">טג'יקיסטן</ListItem>
					<ListItem value="טנזניה, הרפובליקה המאוחדת של">טנזניה, הרפובליקה המאוחדת של</ListItem>
					<ListItem value="תאילנד">תאילנד</ListItem>
					<ListItem value="מזרח טימור">מזרח טימור</ListItem>
					<ListItem value="ללכת">ללכת</ListItem>
					<ListItem value="טוקלאו">טוקלאו</ListItem>
					<ListItem value="טונגה">טונגה</ListItem>
					<ListItem value="טרינידד וטובגו">טרינידד וטובגו</ListItem>
					<ListItem value="תוניסיה">תוניסיה</ListItem>
					<ListItem value="טורקיה">טורקיה</ListItem>
					<ListItem value="טורקמניסטן">טורקמניסטן</ListItem>
					<ListItem value="איי טורקס וקאיקוס">איי טורקס וקאיקוס</ListItem>
					<ListItem value="טובאלו">טובאלו</ListItem>
					<ListItem value="אוגנדה">אוגנדה</ListItem>
					<ListItem value="אוקראינה">אוקראינה</ListItem>
					<ListItem value="איחוד האמירויות הערביות">איחוד האמירויות הערביות</ListItem>
					<ListItem value="הממלכה המאוחדת">הממלכה המאוחדת</ListItem>
					<ListItem value="ארצות הברית">ארצות הברית</ListItem>
					<ListItem value="האיים הקטנים של ארצות הברית">האיים הקטנים של ארצות הברית</ListItem>
					<ListItem value="אורוגוואי">אורוגוואי</ListItem>
					<ListItem value="אוזבקיסטן">אוזבקיסטן</ListItem>
					<ListItem value="ונואטו">ונואטו</ListItem>
					<ListItem value="ונצואלה">ונצואלה</ListItem>
					<ListItem value="וייטנאם">וייטנאם</ListItem>
					<ListItem value="איי הבתולה, בריטניה">איי הבתולה, בריטניה</ListItem>
					<ListItem value="'איי הבתולה, ארהב'">איי הבתולה, ארה"ב</ListItem>
					<ListItem value="וואליס ופוטונה">וואליס ופוטונה</ListItem>
					<ListItem value="סהרה המערבית">סהרה המערבית</ListItem>
					<ListItem value="תימן">תימן</ListItem>
					<ListItem value="זמביה">זמביה</ListItem>
					<ListItem value="זימבבואה">זימבבואה</ListItem>
			    </ListBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;