import { motion as m } from 'framer-motion'
import { useEffect, useState } from 'react'
export default function Presentation() {
	const [show, setShow] = useState(false)
	const [show1, setShow1] = useState(false)
	const [show2, setShow2] = useState(false)
	const [show3, setShow3] = useState(false)
	const [show4, setShow4] = useState(false)
	const [show5, setShow5] = useState(false)
	const [show6, setShow6] = useState(false)
	const [show7, setShow7] = useState(false)
	const [show8, setShow8] = useState(false)
	useEffect(() => {})
	return (
		<m.main
			initial={{ y: '100%' }}
			animate={{ y: '0%' }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			exit={{ opacity: 1 }}
			className=' absolute top-0 left-0 w-full h-full  lg:px-48 px-16'
		>
			<div className='text-center my-32 lg:my-32 md:my-48 sm:my-72'>
				<h2 className='border-2 rounded-xl p-1 text-3xl  border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200'>
					Презентация
				</h2>
				<p className='border-2 my-3 border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-2xl text-indigo-300 hover:text-indigo- duration-300'>
					<button onClick={() => setShow(!show)}>
						ДК дистанционная заявка
					</button>
					<p className={`text-blue-100 content ${show ? 'show' : ''}`}>
						Сумма 30 тыс - 3 млн Срок: от 1 до 5 лет. Ставка для вас подбирается
						индивидуально. Программа вернётся больше позволит вернуть проценты в
						конце срока кредитования при выполнении нескольких условий. (В crm
						статус СВЕТОФОР){' '}
						<p className='text-blue-200'>
							Отказ от заявки 2 возражения. Далее предложи другой продукт.
						</p>
					</p>
				</p>

				<p className='border-2 my-3 border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-2xl text-indigo-300 hover:text-indigo- duration-300'>
					<button onClick={() => setShow1(!show1)}>
						Дк в офисе от 50 до 400 000р или от 200 000 3 000 000р
						<p className='text-xl text-blue-200'>
							Если клиент имеет совокупный более 30.000 рублей и может его
							подтвердить
						</p>
					</button>
					<p className={`text-blue-100 content ${show1 ? 'show' : ''}`}>
						<p className='text-indigo-300'>от 50 до 400.000р:</p> И.О, в нашем
						банке можно рассмотреть денежный кредит без залога от 50.000 до
						400.000р, срок кредитования от 12 до 36 месяцев. Также программа
						вернётся больше позволит вернуть %% в конце срока кредитования, при
						выполнении нескольких условий. Для оформления понадобиться паспорт и
						второй документ на выбор: снилс, инн, водительское или пенсионное
						удостоверение (для пенсионеров)
						<br />
						<p className='text-indigo-300'>
							От 200.000 до 3.000.000 если клиент имеет доход более 30.000 и
							может его подтвердить.
						</p>
						И.О, в нашем банке можно рассмотреть денежный кредит без залога от
						200.000р до 3 млн, срок кредитования от 18 месяцев до 5 лет. Также
						программа вернётся больше позволит вернуть %% в конце срока
						кредитования, при выполнении нескольких условий. Для оформления
						понадобиться паспорт и второй документ на выбор: снилс, инн,
						водительское или пенсионное удостоверение (для пенсионеров){' '}
						<p className='text-indigo-300'>Свыше 1 млн</p>
						3-ий документ: Справка 2-ндфл / по форме банка для ИП: справка
						3-ндфл, декларация по усн, выписка по расчётному счёту
					</p>
				</p>

				<p className='border-2 my-3 border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-2xl text-indigo-300 hover:text-indigo- duration-300'>
					<button onClick={() => setShow6(!show6)}>
						Кнк пза
						<p className='text-xl'></p>
					</button>
					<p className={`text-blue-100 content ${show6 ? 'show' : ''}`}>
						<p className='text-indigo-'>Дистанционная заявка на кнк пза</p>
						Сумма 100 ты - 5 млн. (Сумма кредита может составлять 200% от
						озвученной стоимости авто. При этом окончательное решение будет
						известна только после всех этапов) Срок: от 12 месяцев до 5 лет
						<p className='text-indigo-300'>Интересуется % ставокй</p>
						Ставка для вас подбирается индивидуально. Программа вернётся больше
						позволит вернуть %% в конце срока кредитования при выполнении
						нескольких условий.{' '}
						<p className='text-indigo-300'>
							Если продолжает настаивать озвучь минимальную ставку: Банк
							предлагает ставку от 17,9%, однако окончательные условия Вам
							скажет уже кредитный специалист.
						</p>{' '}
						(Кнопка продажи в crm СВЕТОФОР)
						<p className='pt-5 text-indigo-'>
							В офисе. В CRM КНК ПЗА сумма от 10 ты до 3 млн срок от 1 до 5 лет
						</p>
						И.О, в нашем банке можно рассмотреть денежный кредит под залог АВТО.
						Можно оформить сумму до 3 млн срок от 1 до 5 лет. Обращаю ваше
						внимание, что сумма кредита будет не выше рыночной стоимости АВТО.
						При этом окончательное решение будет известна только после всех
						этапов. Также программа вернётся больше позволит вернуть %% в конце
						срока кредитования, при выполнении нескольких условий. Какая
						стоимость вашего авто?
					</p>
				</p>
				<p className='border-2 my-3 border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-2xl text-indigo-300 hover:text-indigo- duration-300'>
					<button onClick={() => setShow7(!show7)}>
						ДКПЗН
						<p className='text-xl'></p>
					</button>
					<p className={`text-blue-100 content ${show7 ? 'show' : ''}`}>
						<p className='text-indigo-'>Дистанционная заявка на ДКПЗН</p>
						Сумма 230 тысяч - 30 млн. Зависит от стоимости залога. 1 объект
						залога Квартира не более 70% Жилой дом с земельным участком не более
						60%. Срок: от 3 до 15 лет (от 36 до 180мес)
						<p className='text-indigo-300'>Интересуется % ставкой</p>
						Ставка для вас подбирается индивидуально. Программа вернётся больше
						позволит вернуть %% в конце срока кредитования при выполнении
						нескольких условий.{' '}
						<p className='text-indigo-300'>
							Если продолжает настаивать озвучь минимальную ставку: Ставка от
							19.9% годовых. зависит от предмета залога и суммы кредитования. С
							ГМС % будет пересчитан в конце срока кредитования и снижен на 4%
							от фиксированной ставки.
						</p>{' '}
						(Кнопка продажи в crm СВЕТОФОР)
						<p className='pt-5 text-indigo-'>
							В офисе. В CRM под залог недвижимости срок от 3 до 15 лет сумма
							200 тысяч - 30 млн. Зависит от Стоимости залога. Квартира не более
							70% Жилой дом с земельным участком не более 60%.
						</p>
						И.О, в нашем банке можно рассмотреть денежный кредит под залог
						НЕДВИЖИМОСТИ. Можно оформить сумму до 30 млн сроком до 15 лет.
						Ставка зависит от предмета залога и суммы кредитования.
						Окончательное решение по ставке банк принимает по итогам
						рассмотрения заявки. У вас квартира или дом с земельным участком?
						<p className='text-indigo-300'>
							Интересуется ставкой: Ставка от 19,9%, с ГМС % будет пересчитан в
							конце срока кредитования и снижен на 4% от фиксированной ставки.
						</p>{' '}
					</p>
				</p>

				<p className='border-2 my-3 border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-2xl text-indigo-300 hover:text-indigo- duration-300'>
					<button onClick={() => setShow2(!show2)}>Халва с лимитом</button>
					<p className={`text-blue-100 text-lg content ${show2 ? 'show' : ''}`}>
						И.О, кратко расскажу, у карты халва есть 2 режима: использование
						собственных средств, или покупки в рассрочку - возможно совмещать
						оба Режима. Расскажу основные преимущества карты.
						<br />
						• Покупки с бесплатной рассрочкой <br />
						• Снятие наличных средств <br />
						• Снятие наличных средств <br />
						• % На остаток собственных средств <br />
						• Кэшбэк <br />
						• А также возможность дистанционного оформления денежного кредита с
						возвратом % <br />И всё это без годового обслуживания по карте. И
						для вас, как для нового клиента доступна акция 24 месяца. На покупке
						в магазинах-партнёрах в первый месяц оформления карты, будет
						действовать рассрочка, целых 24 месяца. При выполнении условий.
						<p className='text-indigo-300'>Задай один из вопросов</p>
						• О чём подробнее рассказать? <br />
						• Какое преимущество халвы вас заинтересовало больше всего? <br />•
						Что вас интересует больше рассрочка, кэшбэк или % на остаток?{' '}
						<p className='text-indigo-300'>
							Презентуй подробнее о фишке которую выберет клиент. <br /> Не
							может определиться - расскажи о покупках в рассрочку. При бки
							(Одобрено доступна доставка предложи для халвы предложи дк)
							назначаем доставку (если есть в НП клиента.) Отказ от доставки
							отработай 1 возражение. Нет доставки - назначаем самовывоз
							<br />
							<a
								href='https://minerva.sovcombank.ru/content/space/52/article/30148/page/1?query=%D0%BF%D1%80%D0%B5%D0%B8%D0%BC%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B0%20%D0%BA%D0%B0%D1%80%D1%82%D1%8B%20%D1%85%D0%B0%D0%BB%D0%B2%D0%B0'
								target='_blank'
								rel='noreferrer'
								className='text-xl text-blue-100 hover:text-indigo-400 duration-300'
							>
								Преимущества карты халва
							</a>
						</p>
					</p>
				</p>
				<p className='border-2 my-3 border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-2xl text-indigo-300 hover:text-indigo- duration-300'>
					<button onClick={() => setShow3(!show3)}>Кредитная карта</button>
					<p className={`text-blue-100 text-sm content ${show3 ? 'show' : ''}`}>
						И.О, всё отлично! Также вижу, что для Вас есть предложение даже
						выгоднее, это карта Халва, с которой можно снимать денежные средства
						и переводить в рассрочку на 3 месяца. Хотели бы получить не просто
						кредитную карту, а лучшую карту рассрочки?
						<p className='text-indigo-300'>Если ответ Да выяви потребность</p>
						Верный выбор! И.О, скажите, пожалуйста, карту планировали оформить
						для какой-то конкретной цели или как запасной кошелёк?{' '}
						<a className='text-indigo-300'>
							Далее выше на странице халва с лимитом
						</a>
						<p className='text-indigo-300'>Если ответ нет</p>
						Кредитная карта позволяет совершать покупки кредитными средствами и
						не платить проценты за использование денежных средств до 180 дней.
						Всё просто, расплатились картой и вернуть денежные средства нужно по
						окончании льготного периода.
						<p className='text-indigo-300'>Если карта 180 дней без %</p>
						При снятии денежных средств не будет комиссии, при переводе
						действует небольшая комиссия -5,9%, но не менее 590 руб. И даже,
						если не уложиться в беспроцентный период на покупки, то можно
						платить минимальными платежами, это всего 8% от задолженности, %
						ставка при этом будет 31,9% годовых.
						<p className='text-indigo-300'>Если карта 180 дней без % Плюс</p>
						При снятии и переводах будет небольшая комиссия -5,9%, но не менее
						590 руб. И даже, если не уложиться в беспроцентный период на
						покупки, то можно платить минимальными платежами, это всего 8% от
						задолженности, % ставка при этом будет 31,9% годовых. А все
						фактически оплаченные % можно вернуть. Как это сделать, все просто:
						для возврата фактически уплаченных процентов по кредитной карте
						необходимо в течение 12 отчетных периодов совершать по карте от 5
						покупок на общую сумму от 10 тыс. руб. (соц. статуса - нет).
						Комиссии за снятие наличных не возвращаются
						<p className='text-indigo-300'>Основная часть</p>
						Рассмотрим на примере как рассчитывается льготный период по
						кредитной карте: Отчетный период- период от начала договора до даты
						расчета минимального обязательного платежа, а также между двумя
						ближайшими минимальными обязательными платежами. На операции,
						совершенные в течение отчетного периода предоставляется льготный
						период (грейс-период) до 180 дней на покупки Например: Отчетный
						период 08.05.24 -07.06.24 совершены покупки на сумму 10 000 руб.,
						08.06.23 сформирован минимальный обязательный платеж – платёжный
						период 25 дней, до 04.11.23 действует льготный период на данные
						операции Отчетный период 08.06.24 - 07.07.24 совершены покупки на
						сумму 3000 руб., 08.07.23 сформирован минимальный обязательный
						платеж – платёжный период 25 дней, до 04.12.24 действует льготный
						период на данные операции
						<p className='text-indigo-300'>Завершение</p>
						И.О, У вас остались дополнительные вопросы? Оформляем?
					</p>
				</p>
				<p className='border-2 my-3 border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-2xl text-indigo-300 hover:text-indigo- duration-300'>
					<button onClick={() => setShow4(!show4)}>Халва без лимита</button>
					<p className={`text-blue-100 content ${show4 ? 'show' : ''}`}>
						И.О, вам доступно предложение карты халва без лимита с возможностью
						получения лимита в будущем. Это карта с бесплатным обслуживанием, на
						ней вы сможете размещать и тратить собственные средства, а при
						соблюдении условий будет начисляться кэшбэк и процент на остаток
						собственных средств как по вкладу. Если активно пользоваться картой,
						банк может рассмотреть предоставление кредитного лимита, и тогда вы
						будете пользоваться картой халва, как картой рассрочки. Оформление в
						офисе займет всего 15 - 20 минут. Нужен только паспорт. Вам удобнее
						будет завтра или послезавтра?
					</p>
				</p>
				<p className='border-2 my-3 border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-2xl text-indigo-300 hover:text-indigo- duration-300'>
					<button onClick={() => setShow5(!show5)}>Дебетовая халва</button>
					<p className={`text-blue-100 content ${show5 ? 'show' : ''}`}>
						И.О, по условиям банка сейчас вам предлагаем оформить Дебетовую
						карту халва, это карта с бесплатным обслуживанием, на ней вы сможете
						размещать и тратить собственные средства. для безналичных операций,
						снятия и перевода средств. А при соблюдении условий будет
						начисляться кэшбэк и процент на остаток собственных средств. В какой
						день вам удобнее, завтра или послезавтра? (для резидента нужен
						только паспорт / для нерезидентов паспорт иностранного гражданина +
						миграционная карта / виза){' '}
						<p className='text-indigo-300'>Результат CRM</p>
						Продажа продукта - назначить встречу - Предложенные продукты -
						кредитный - дебетовая халва Резидент / Дебетовая халва нерезидент
						<p className='text-indigo-300'>
							Отказывается - проведи 1 отработку РСВ. Не удалось продать -
							Нецелевой
						</p>
					</p>
				</p>
				<p className='border-2 my-3 border-[1px] p-2 hover:text-indigo-200 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-xl text-indigo-300 hover:text-indigo- duration-300'>
					<button onClick={() => setShow8(!show8)}>Вкд</button>
					<p className={`text-blue-100 content ${show8 ? 'show' : ''}`}>
						И.О., подскажите, пожалуйста, когда ранее Вы пользовались кредитами
						или кредитными картами, все платежи вносили своевременно? (без паузы
						продолжаем) Уточняю потому как Банк детально рассмотрел Вашу заявку
						с учётом кредитной истории, и прямо сейчас готов Вам ее улучшить!
						Скажу сразу – Банк берется не за всех Клиентов, а только за тех –
						чью кредитную историю можно исправить прямо сейчас, пока не поздно.
						Вы оформляете сумму – 14 999 руб./ 9 999 руб. на 3 или 6 месяцев,
						как целевой кредит, и, строго согласно графику платежей, эту сумму
						погашаете. Денежные средства идут в счет оплаты этой программы, на
						руки ничего не получаете. Информация о каждом внесенном вовремя
						платеже поступит в бюро кредитных историй! Именно из Бюро кредитных
						историй все банки получают информацию о надежности Клиентов. Сейчас
						Банки все чаще отказывают клиентам с сомнительной кредитной
						историей, а вы с помощью программы зарекомендуете себя с надежной
						стороны и будете спокойно, в случае необходимости обращаться за
						самыми выгодными условиями. Всё оформляется дистанционно, без
						посещения офиса, очень удобно и не занимает много времени. Сейчас
						заполним анкету, посмотрим для начала решение от Банка. Давайте
						приступим, назовите, пожалуйста, место рождение, как в паспорте
						указано. Согласен на оформление ВКД: Оформи заявку в FIS Озвучь:
						Обратите внимание, если Вы оформляете КРХ в течение 14 дней, то
						сможете вернуть стоимость продукта полностью, улучшив кредитную
						историю с выгодой для Вас! (Если интересуется, то расскажи об акции
						«Кредитный доктор выгодней с Халвой)
					</p>
				</p>
				<p className='border-2 my-3 border-[1px] p-2my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 rounded-xl text-2xl text-indigo-400 hover:text-indigo- duration-300 uppercase'>
					{' '}
					Также не забудь про ОМП и гос услуги
				</p>
				<footer className=' mt-6  border-2 rounded-xl border-[1px] p-2 my-3  hover:border-x-indigo-200 hover:border-y-indigo-400 border-y-gray-500 border-x-gray-200 text-center p-3'>
					<p>
						Разработчик: Иван Дмитриевич. Контакты:
						<a
							className='hover:text-indigo-300 duration-300 px-2'
							href='https://t.me/Freak_3112'
							target='_blank'
							rel='noreferrer'
						>
							Telegram
						</a>
						<a
							className='hover:text-indigo-300 duration-300'
							href='https://vk.com/fckallworldexpectyou'
							target='_blank'
							rel='noreferrer'
						>
							Вконтакте
						</a>
						<a
							className='hover:text-indigo-300 duration-300 px-2'
							target='_blank'
							rel='noreferrer'
							href='https://mail.google.com/mail/u/1/#inbox?compose=CllgCJvnrFxthbvVSqjmbwKlLVMNgjbQCCShwHPKXZTCSLLhsvlmgWrsmCFSzjZPlgLGvThchqB'
						>
							Написать на почту
						</a>
						Также вы можете поддержать разработку сайта: По номеру карты
						Cбербанк: 2202205025089332
						<br />
						Тинькофф: 5536914119311334
					</p>
				</footer>
			</div>
		</m.main>
	)
}

// TODO: Презентация кредита и карты с помощью попапа
