function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const typeLabels = {
  trace: '<span class="q-type q-type-trace">📊 Calculation & Trace</span>',
  compare: '<span class="q-type q-type-compare">⚖️ Comparative Analysis</span>',
  scenario: '<span class="q-type q-type-scenario">🎯 Scenario & Application</span>',
  concept: '<span class="q-type q-type-concept">💭 Concept & Fundamentals</span>',
  explain: '<span class="q-type q-type-explain">🔍 Engineering Synthesis</span>'
};

const lessonLabels = {
  L10b: 'L10b Lift Installation'
};

// =======================================================
// 12 TOPICS WITH HIGH-PRECISION SCADA ANIMATED SCHEMATICS
// =======================================================
const notesData = [
  {
    id: 't1', icon: '1', title: 'Major Lift Components & Traction Hoistway Layout',
    titleZh: '曳引式客梯十大核心部件與井道空間配置',
    diagram: `<svg viewBox="0 0 740 310" xmlns="http://www.w3.org/2000/svg" width="100%">
      <rect x="20" y="20" width="700" height="270" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
      <text x="370" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Electric Traction Passenger Lift Anatomy (曳引客梯十大核心構件全景)</text>
      <!-- Machine room -->
      <g transform="translate(180, 35)">
        <rect x="0" y="0" width="380" height="45" fill="#1a252f" stroke="#3498db" rx="4"/>
        <text x="50" y="20" font-size="9.5" fill="#3498db" font-weight="bold">Machine Room</text>
        <circle cx="130" cy="22" r="15" fill="#f39c12"/>
        <text x="130" y="26" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Motor</text>
        <circle cx="180" cy="22" r="18" fill="#e74c3c"/>
        <text x="180" y="26" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Sheave</text>
        <circle cx="240" cy="22" r="9" fill="#f1c40f"/>
        <text x="240" y="25" text-anchor="middle" font-size="7" fill="#111">Gov</text>
        <rect x="290" y="8" width="75" height="28" fill="#2c3e50" stroke="#1abc9c"/>
        <text x="327" y="25" text-anchor="middle" font-size="8" fill="#fff">Controller</text>
      </g>
      <!-- Hoistway Shaft -->
      <g transform="translate(260, 80)">
        <rect x="0" y="0" width="220" height="200" fill="#111" stroke="#7f8c8d" stroke-width="1.5"/>
        <line x1="55" y1="0" x2="55" y2="200" stroke="#7f8c8d" stroke-width="1" stroke-dasharray="4 2"/>
        <line x1="165" y1="0" x2="165" y2="200" stroke="#7f8c8d" stroke-width="1" stroke-dasharray="4 2"/>
        <!-- Suspension Ropes -->
        <path d="M 55 0 L 55 45 M 165 0 L 165 115" stroke="#f1c40f" stroke-width="3" class="flow-suspension"/>
        <!-- Animated Car -->
        <g class="anim-car-smooth" transform="translate(20, 25)">
          <rect x="0" y="0" width="70" height="60" fill="#1b4f72" stroke="#3498db" stroke-width="2" rx="3"/>
          <text x="35" y="34" text-anchor="middle" font-size="9.5" fill="#fff" font-weight="bold">Car</text>
          <rect x="-4" y="48" width="78" height="6" fill="#e74c3c"/>
          <text x="35" y="65" text-anchor="middle" font-size="7" fill="#f5b7b1">Safety Gear</text>
        </g>
        <!-- Animated Counterweight -->
        <g class="anim-cwt-smooth" transform="translate(145, 95)">
          <rect x="0" y="0" width="40" height="55" fill="#78281f" stroke="#e74c3c" stroke-width="1.5" rx="2"/>
          <text x="20" y="32" text-anchor="middle" font-size="8" fill="#fff">CWT</text>
        </g>
        <!-- Buffers in Pit -->
        <rect x="45" y="185" width="20" height="15" fill="#f39c12"/>
        <rect x="155" y="185" width="20" height="15" fill="#f39c12"/>
      </g>
      <!-- Annotations Left -->
      <g transform="translate(35, 80)">
        <rect x="0" y="0" width="210" height="195" fill="#1a252f" stroke="#3498db" rx="4"/>
        <text x="105" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#5dade2">Major Components (Slide 2):</text>
        <text x="10" y="44" font-size="9" fill="#fff">1. Prime mover (Motor/Pump)</text>
        <text x="10" y="64" font-size="9" fill="#fff">2. Car &amp; sling frame</text>
        <text x="10" y="84" font-size="9" fill="#fff">3. Counterweight (CWT)</text>
        <text x="10" y="104" font-size="9" fill="#fff">4. T-section guide rails</text>
        <text x="10" y="124" font-size="9" fill="#fff">5. Landing &amp; car doors</text>
        <text x="10" y="144" font-size="9" fill="#fff">6. Overspeed governor</text>
        <text x="10" y="164" font-size="9" fill="#fff">7. Safety gear on plank</text>
        <text x="10" y="184" font-size="9" fill="#abebc6">8. Pit buffers (Spring/Oil)</text>
      </g>
      <!-- Annotations Right -->
      <g transform="translate(495, 80)">
        <rect x="0" y="0" width="210" height="195" fill="#1a252f" stroke="#2ecc71" rx="4"/>
        <text x="105" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#2ecc71">Mechanical Auxiliary Links:</text>
        <text x="10" y="44" font-size="9" fill="#fff">9. Roping &amp; compensation</text>
        <text x="10" y="64" font-size="9" fill="#fff">10. Travelling cables</text>
        <text x="10" y="84" font-size="9" fill="#fff">11. Landing fixtures &amp; COP</text>
        <text x="10" y="104" font-size="9" fill="#fff">12. Limit switches &amp; apron</text>
        <text x="10" y="130" font-size="8.5" fill="#f1c40f">Counterweight balance ratio:</text>
        <text x="10" y="146" font-size="8.5" fill="#f1c40f">Car Mass + (0.4 to 0.5) × Payload</text>
        <text x="10" y="172" font-size="8" fill="#bdc3c7">Provides tractive traction across drive sheave grooves.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 1: Complete elevation of electric traction lift showing machine room, car frame, counterweight, safety gear, travelling cables, and pit buffers',
    sections: [
      {
        title: 'Major Lift Components / 升降機十大核心組件',
        zh: '<p>根據 CIBSE Guide D 與 Lecture 10b 規範，標準客梯系統包含十大核心物理部件[cite: 12]：</p><ol><li><strong>原動機 (Prime mover)</strong>：曳引電動機或液壓泵單元[cite: 12]；</li><li><strong>升降機轎廂 (Lift car)</strong>：由結構鋼轎廂架 (Car frame/Sling) 與轎廂本體組成[cite: 12]；</li><li><strong>對重 (Counterweight, CWT)</strong>：平衡轎廂自重及約 40%–50% 的額定載重，減輕電機負荷[cite: 11, 12]；</li><li><strong>導軌 (Guide rails)</strong>：T 型冷拔鋼軌，精確導引轎廂與對重的垂直軌跡[cite: 12]；</li><li><strong>層門與轎門 (Entrances / Doors)</strong>：機械與電氣互鎖之防火防護門[cite: 12]；</li><li><strong>安全鉗與限速器 (Safety gear &amp; overspeed governor)</strong>：終極機械防墜落安全保護鏈[cite: 12]；</li><li><strong>緩衝器 (Buffers)</strong>：底坑吸能裝置（蓄能型彈簧或耗能型油壓）[cite: 12]；</li><li><strong>懸掛曳引繩系統 (Roping systems)</strong>：鋼絲繩、曳引輪及補償鏈[cite: 12]；</li><li><strong>轎廂與層站信號操縱配件 (Fixtures)</strong>：召喚按鈕、樓層指示器及極限開關[cite: 12]；</li><li><strong>隨行電纜 (Travelling cables)</strong>：在運動轎廂與控制櫃間傳輸電力與控制信號[cite: 12]。</li></ol>',
        en: '<p>A standard elevator installation encompasses ten primary subsystems[cite: 12]:</p><ol><li><strong>Prime mover</strong>: Electric traction machine or hydraulic pump unit[cite: 12];</li><li><strong>Lift car</strong>: Structural car frame (sling) supporting the passenger cab[cite: 12];</li><li><strong>Counterweight (CWT)</strong>: Balances car deadweight plus 40%–50% rated payload[cite: 11, 12];</li><li><strong>Guide rails</strong>: Rigid T-section steel rails guiding car and CWT[cite: 12];</li><li><strong>Entrances / Doors</strong>: Power-operated car and landing barrier doors[cite: 12];</li><li><strong>Safety gear &amp; overspeed governor</strong>: Progressive/instantaneous mechanical arrestor[cite: 12];</li><li><strong>Buffers</strong>: Energy accumulation (spring) or dissipation (oil) pit stops[cite: 12];</li><li><strong>Roping systems</strong>: Traction sheaves, suspension ropes, compensating chains[cite: 12];</li><li><strong>Car &amp; landing fixtures</strong>: Pushbuttons, indicators, and limit switches[cite: 12];</li><li><strong>Travelling cables</strong>: Flexible umbilical cord powering moving car[cite: 12].</li></ol>'
      }
    ]
  },
  {
    id: 't2', icon: '2', title: 'Traction Drive Machines: Geared vs Gearless',
    titleZh: '曳引機構造：有齒輪蝸輪蝸桿 vs 無齒輪直驅主機',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <!-- Geared Machine -->
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#3498db" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">Typical Geared Machine (有齒輪曳引機)</text>
        <g transform="translate(25, 45)">
          <rect x="0" y="30" width="70" height="45" fill="#1b4f72" stroke="#3498db"/>
          <text x="35" y="55" text-anchor="middle" font-size="9" fill="#fff">Motor</text>
          <!-- Gearbox -->
          <rect x="70" y="20" width="80" height="65" fill="#2c3e50" stroke="#f39c12"/>
          <text x="110" y="45" text-anchor="middle" font-size="8.5" fill="#f1c40f">Worm Gear</text>
          <text x="110" y="62" text-anchor="middle" font-size="8" fill="#fff">減速箱</text>
          <!-- Brake & Sheave -->
          <circle cx="180" cy="52" r="26" fill="#e74c3c"/>
          <text x="180" y="56" text-anchor="middle" font-size="8" fill="#fff">Sheave</text>
          <!-- Deflector Sheave below -->
          <circle cx="180" cy="110" r="16" fill="#7f8c8d"/>
          <text x="180" y="114" text-anchor="middle" font-size="7" fill="#fff">Deflector</text>
          <path d="M 180 26 L 180 135 M 206 52 L 206 135" stroke="#f1c40f" stroke-width="2.5" class="flow-suspension"/>
        </g>
        <rect x="20" y="180" width="300" height="70" fill="#111" stroke="#3498db" rx="4"/>
        <text x="170" y="200" text-anchor="middle" font-size="9.5" fill="#5dade2" font-weight="bold">Geared Characteristics (Slide 6, 17):</text>
        <text x="170" y="218" text-anchor="middle" font-size="8.5" fill="#ecf0f1">• High-speed motor geared down via worm/gear</text>
        <text x="170" y="235" text-anchor="middle" font-size="8.5" fill="#bdc3c7">• Fitted with deflector sheave &amp; sound isolation pads</text>
      </g>
      <!-- Gearless Machine -->
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#2ecc71" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#2ecc71">Typical Gearless Machine (無齒輪直驅曳引機)</text>
        <g transform="translate(35, 45)">
          <rect x="20" y="15" width="120" height="85" fill="#145a32" stroke="#2ecc71" stroke-width="2" rx="6"/>
          <text x="80" y="45" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="bold">Direct-Drive Motor</text>
          <text x="80" y="65" text-anchor="middle" font-size="8.5" fill="#abebc6">Low RPM, High Torque</text>
          <circle cx="180" cy="57" r="32" fill="#e74c3c"/>
          <text x="180" y="61" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="bold">Drive Sheave</text>
          <!-- Double Wrap Secondary Sheave -->
          <circle cx="180" cy="115" r="22" fill="#78281f"/>
          <text x="180" y="119" text-anchor="middle" font-size="7" fill="#fff">Double Wrap</text>
          <path d="M 148 57 L 158 115 L 202 115 L 212 57" fill="none" stroke="#f1c40f" stroke-width="2.5" class="flow-suspension"/>
        </g>
        <rect x="20" y="180" width="300" height="70" fill="#111" stroke="#2ecc71" rx="4"/>
        <text x="170" y="200" text-anchor="middle" font-size="9.5" fill="#2ecc71" font-weight="bold">Gearless Characteristics (Slide 5, 16):</text>
        <text x="170" y="218" text-anchor="middle" font-size="8.5" fill="#ecf0f1">• Sheave directly coupled to slow motor shaft (No gears)</text>
        <text x="170" y="235" text-anchor="middle" font-size="8.5" fill="#abebc6">• High speed (&gt;2.5 m/s) &amp; high rise; uses double-wrap for grip</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 2: Geared traction machine (worm gearbox, deflector sheave) vs Gearless machine (slow-speed high-torque motor with double-wrap sheave for high-rise travel)',
    sections: [
      {
        title: 'Geared Traction Machines / 有齒輪曳引機構造',
        zh: '<p><strong>有齒輪曳引機 (Geared machine)</strong>：由高速交流或直流電機驅動蝸輪蝸桿減速箱 (Worm gear box)，將轉速降低並將扭矩放大後帶動曳引輪運轉[cite: 12]：</p><ul><li><strong>導向輪 (Deflector sheave)</strong>：安裝於主機下方，用於調整鋼絲繩間距，使其垂直對正轎廂中心與對重中心[cite: 12]；</li><li><strong>減振底座 (Sound isolation pads)</strong>：機座鋼樑下設有橡膠減振墊，隔離齒輪嚙合機械噪聲向建築結構傳播[cite: 12]；</li><li><strong>應用場合</strong>：適用於中低速（速度一般 $\le 2.0\text{–}2.5\text{ m/s}$）、中低層建築[cite: 12]。</li></ul>',
        en: '<p>A <strong>geared traction machine</strong> employs a high-speed motor coupled to a worm-and-gear reducer to drive the traction sheave[cite: 12]:</p><ul><li><strong>Deflector sheave</strong>: Diverts suspension ropes to match exact center-to-center distances between car and CWT[cite: 12];</li><li><strong>Sound isolation pads</strong>: Rubber elastomer pads decouple mechanical vibrations from the concrete slab[cite: 12];</li><li><strong>Applications</strong>: Ideal for low-to-medium speeds ($\le 2.0\text{–}2.5\text{ m/s}$) and mid-rise buildings[cite: 12].</li></ul>'
      },
      {
        title: 'Gearless Traction Machines / 無齒輪直驅曳引機構造',
        zh: '<p><strong>無齒輪曳引機 (Gearless machine)</strong>：曳引輪直接固定在低速、大扭矩永磁同步電機或直流電機軸上，無任何齒輪減速箱[cite: 12]：</p><div class="key-point"><strong>雙繞輪 (Double Wrap Sheave) 增摩機制：</strong> 高速高層電梯鋼絲繩張力極大，為防止打滑，鋼絲繩繞過主曳引輪後，進入下方的雙繞次級副輪 (Double wrap sheave)，再繞回主曳引輪二次纏繞[cite: 12]。包角擴展至接近 360°，產生巨大的歐拉摩擦牽引力[cite: 12]。極度高效、安靜、壽命極長，為高速高層電梯（$>2.5\text{ m/s}$）的標準配置[cite: 12]。</div>',
        en: '<p>A <strong>gearless traction machine</strong> has the drive sheave integrally mounted directly onto the slow-speed, high-torque motor shaft without gear reduction[cite: 12].</p><div class="key-point"><strong>Double Wrap Traction Sheave:</strong> High-speed and heavy-duty lifts employ a secondary double-wrap sheave where ropes wrap twice around the drive sheave to double the contact arc to ~360°[cite: 12]. Delivers enormous tractive grip; the benchmark for high-rise express elevators (>2.5 m/s)[cite: 12].</div>'
      }
    ]
  },
  {
    id: 't3', icon: '3', title: 'Suspension Roping Systems & Traction Sheaves',
    titleZh: '鋼絲繩懸掛系統：1:1、2:1、單雙繞與補償鏈',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Traction Suspension Roping Systems (CIBSE Guide D 鋼絲繩懸掛比與繞法)</text>
        <!-- 1:1 Single Wrap -->
        <g transform="translate(40, 45)">
          <rect x="0" y="0" width="130" height="135" fill="#1a252f" stroke="#3498db" rx="4"/>
          <circle cx="65" cy="25" r="14" fill="#e74c3c"/>
          <path d="M 51 25 L 30 110 M 79 25 L 100 110" stroke="#f1c40f" stroke-width="2.5" class="flow-suspension"/>
          <rect x="15" y="105" width="30" height="20" fill="#1b4f72"/>
          <text x="30" y="118" text-anchor="middle" font-size="7" fill="#fff">Car</text>
          <rect x="85" y="105" width="25" height="20" fill="#78281f"/>
          <text x="97" y="118" text-anchor="middle" font-size="7" fill="#fff">CWT</text>
          <text x="65" y="80" text-anchor="middle" font-size="9" fill="#5dade2" font-weight="bold">1:1 Single Wrap</text>
          <text x="65" y="95" text-anchor="middle" font-size="8" fill="#bdc3c7">Car Speed = Rope Speed</text>
        </g>
        <!-- 2:1 Roping -->
        <g transform="translate(190, 45)">
          <rect x="0" y="0" width="145" height="135" fill="#1a252f" stroke="#2ecc71" rx="4"/>
          <circle cx="72" cy="25" r="14" fill="#e74c3c"/>
          <!-- Pulley on car & CWT -->
          <circle cx="35" cy="85" r="10" fill="#f39c12"/>
          <circle cx="110" cy="85" r="10" fill="#f39c12"/>
          <path d="M 72 11 L 10 11 L 10 85 M 58 25 L 35 85 L 35 11 M 86 25 L 110 85 L 110 11" fill="none" stroke="#f1c40f" stroke-width="2" class="flow-suspension"/>
          <rect x="20" y="95" width="30" height="20" fill="#1b4f72"/>
          <text x="35" y="108" text-anchor="middle" font-size="7" fill="#fff">Car</text>
          <rect x="98" y="95" width="25" height="20" fill="#78281f"/>
          <text x="110" y="108" text-anchor="middle" font-size="7" fill="#fff">CWT</text>
          <text x="72" y="65" text-anchor="middle" font-size="9" fill="#2ecc71" font-weight="bold">2:1 Roping</text>
          <text x="72" y="128" text-anchor="middle" font-size="8" fill="#abebc6">Car Speed = 0.5 × Rope</text>
        </g>
        <!-- Double Wrap 1:1 -->
        <g transform="translate(355, 45)">
          <rect x="0" y="0" width="150" height="135" fill="#1a252f" stroke="#f1c40f" rx="4"/>
          <circle cx="75" cy="25" r="14" fill="#e74c3c"/>
          <circle cx="75" cy="55" r="11" fill="#7f8c8d"/>
          <text x="75" y="78" text-anchor="middle" font-size="8.5" fill="#f1c40f" font-weight="bold">Double Wrap 1:1</text>
          <text x="75" y="92" text-anchor="middle" font-size="7.5" fill="#ecf0f1">High speed &amp; heavy duty</text>
          <text x="75" y="105" text-anchor="middle" font-size="7.5" fill="#bdc3c7">Ropes loop twice</text>
          <text x="75" y="120" text-anchor="middle" font-size="8" fill="#5dade2">Massive friction grip</text>
        </g>
        <!-- Compensating Ropes Card -->
        <g transform="translate(525, 45)">
          <rect x="0" y="0" width="145" height="135" fill="#111" stroke="#e74c3c" rx="4"/>
          <text x="72" y="20" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#f5b7b1">Compensating Ropes</text>
          <path d="M 35 35 L 35 100 Q 72 125 110 100 L 110 35" fill="none" stroke="#e74c3c" stroke-width="2.5" stroke-dasharray="4 2"/>
          <text x="72" y="55" text-anchor="middle" font-size="8" fill="#fff">Suspended from</text>
          <text x="72" y="68" text-anchor="middle" font-size="8" fill="#fff">car bottom to CWT</text>
          <text x="72" y="85" text-anchor="middle" font-size="7.5" fill="#f1c40f">Tensioned in pit</text>
        </g>
        <rect x="30" y="195" width="640" height="50" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="215" text-anchor="middle" font-size="10" fill="#fff"><strong>Mechanical Advantage:</strong> 2:1 roping halves the required motor torque (doubles lifting payload) while halving car velocity.</text>
        <text x="350" y="233" text-anchor="middle" font-size="9" fill="#f1c40f">Compensating ropes neutralize severe shifting weight of heavy suspension wire ropes in high-rise hoistways (>30m travel).</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 3: Suspension roping configurations: 1:1 direct, 2:1 pulley block roping, Double-wrap traction sheave, and pit-tensioned compensating ropes',
    sections: [
      {
        title: 'Roping Ratios & Mechanical Advantage / 懸掛比與機械效益',
        zh: '<p>電梯懸掛系統通過動滑輪組合確定<strong>懸掛比 (Roping ratio)</strong>[cite: 12]：</p><ul><li><strong>1:1 懸掛</strong>：鋼絲繩端部直接固定在轎廂架與對重上[cite: 12]。<strong>轎廂運行速度等於鋼絲繩線速度</strong>，傳動效率高，廣泛用於中高速客梯[cite: 12]；</li><li><strong>2:1 懸掛</strong>：鋼絲繩在轎廂架頂部與對重頂部繞過動滑輪，繩端固定在機房承重樑上[cite: 12]。滑輪組提供 2 倍機械效益，<strong>電機所需曳引力減半，但轎廂運行速度為鋼絲繩速度的 1/2</strong>，常用於低速大載重貨梯或無機房電梯[cite: 12]；</li><li><strong>3:1 懸掛</strong>：提供 3 倍提升力，速度為 1/3，多用於超重型重工業載貨電梯[cite: 12]。</li></ul>',
        en: '<p>Traction roping configurations balance speed versus motor torque payload[cite: 12]:</p><ul><li><strong>1:1 Roping</strong>: Ropes terminate directly at car and counterweight[cite: 12]. <strong>Car speed equals rope speed</strong>; standard for mid/high-speed passenger lifts[cite: 12];</li><li><strong>2:1 Roping</strong>: Ropes pass around pulleys on car crosshead and CWT, terminating at overhead hitch plates[cite: 12]. Halves required motor torque while <strong>car speed equals half of rope velocity</strong>[cite: 12];</li><li><strong>3:1 Roping</strong>: Triples payload capacity at one-third speed, applied in heavy-duty freight hoists[cite: 12].</li></ul>'
      },
      {
        title: 'Compensating Ropes / 補償鏈與深井道重力平衡',
        zh: '<p>在高層建築（提升高度超過 30–40 米）中，隨轎廂升降，成捆粗重鋼絲繩的自重會在曳引輪兩側劇烈轉移，破壞靜載平衡引發打滑[cite: 12]。因此從<strong>轎廂底部與對重底部懸掛補償鏈/補償鋼絲繩 (Compensating ropes)</strong>，並在底坑設張緊輪，完全抵消懸掛鋼絲繩轉移的重力偏差[cite: 12]。</p>',
        en: '<p>In tall buildings (>30 m travel), the shifting deadweight of heavy suspension ropes between car and counterweight induces traction slippage[cite: 12]. <strong>Compensating ropes</strong> hung between car underside and CWT base through a pit tension sheave neutralize this imbalance continuously[cite: 12].</p>'
      }
    ]
  },
  {
    id: 't4', icon: '4', title: 'Electric Motor Drives: AC, DC & VVVF Control',
    titleZh: '電梯驅動技術：單/雙速交流、變頻變壓 (VVVF) 與直流',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Electric Traction Motor Drive Technologies (電梯電機調速技術架構)</text>
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="310" height="115" fill="#1a252f" stroke="#3498db" rx="4"/>
          <text x="155" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#5dade2">Geared Drive Motors (Slide 19):</text>
          <text x="15" y="44" font-size="9" fill="#fff">• Single-speed AC induction motor (Old baseline)</text>
          <text x="15" y="62" font-size="9" fill="#fff">• Two-speed AC motor (High speed run / Low speed level)</text>
          <text x="15" y="80" font-size="9" fill="#ecf0f1">• Variable Voltage AC motor (VVAC thyristor)</text>
          <text x="15" y="98" font-size="9.5" fill="#2ecc71" font-weight="bold">• VVVF AC motor (Variable Voltage Variable Frequency)</text>
        </g>
        <g transform="translate(360, 45)">
          <rect x="0" y="0" width="310" height="115" fill="#1a252f" stroke="#2ecc71" rx="4"/>
          <text x="155" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#abebc6">Gearless Drive Motors (Slide 19):</text>
          <text x="15" y="44" font-size="9" fill="#fff">• Variable Voltage DC motor (Ward-Leonard MG sets)</text>
          <text x="15" y="64" font-size="9.5" fill="#2ecc71" font-weight="bold">• VVVF AC Permanent Magnet Synchronous (PMSM)</text>
          <text x="25" y="80" font-size="8.5" fill="#bdc3c7">  High power factor, zero gear maintenance</text>
          <text x="15" y="98" font-size="9" fill="#f1c40f">• Linear Induction Motor drive (LIM)</text>
        </g>
        <rect x="30" y="170" width="640" height="75" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="192" text-anchor="middle" font-size="10.5" fill="#fff"><strong>VVVF Advantage:</strong> Inverter dynamically alters voltage AND frequency simultaneously (PWM sine wave synthesization).</text>
        <text x="350" y="210" text-anchor="middle" font-size="9.5" fill="#f1c40f">Delivers stepless, jerk-free acceleration/deceleration, flawless mm-level leveling accuracy, and 40% energy reduction.</text>
        <text x="350" y="228" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Direct-current Ward-Leonard sets are obsolete due to high standby idle losses of rotating motor-generators.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 4: Elevator prime mover classification: Geared AC drives vs Gearless PMSM drives, highlighting the global dominance of VVVF inverter control',
    sections: [
      {
        title: 'Geared vs Gearless Motor Drives / 電梯驅動電機類別',
        zh: '<p>根據齒輪箱配置，電機調速技術演進體系包含[cite: 12]：</p><ul><li><strong>有齒輪主機驅動 (Geared Drives)</strong>：<br>1. 單速/雙速交流感應電機 (Single/Two-speed AC)[cite: 12]；<br>2. 晶閘管交流調壓電機 (Variable voltage AC, VVAC)[cite: 12]；<br>3. <strong>變壓變頻交流電機 (VVVF AC motor)</strong>[cite: 12]；<br>4. 變電壓直流電機 (Variable voltage DC)[cite: 12]；</li><li><strong>無齒輪主機驅動 (Gearless Drives)</strong>：<br>1. 變電壓直流電機 (Ward-Leonard 系統)[cite: 12]；<br>2. <strong>永磁同步變頻電機 (VVVF AC PMSM)</strong>[cite: 12]；<br>3. 直線感應電機驅動 (Linear induction drive, LIM)[cite: 12]。</li></ul>',
        en: '<p>Motor drive technologies categorized by transmission[cite: 12]:</p><ul><li><strong>Geared Drives</strong>: Single/two-speed AC, Variable Voltage AC (VVAC), VVVF AC, and Variable Voltage DC[cite: 12];</li><li><strong>Gearless Drives</strong>: Variable Voltage DC, <strong>VVVF AC (Permanent Magnet Synchronous Motors)</strong>, and Linear Induction Drives (LIM)[cite: 12].</li></ul>'
      },
      {
        title: 'The Supremacy of VVVF Inverter Control / VVVF 變頻控制核心優勢',
        zh: '<p>現代電梯全面採用 <strong>VVVF (Variable Voltage, Variable Frequency)</strong> 技術[cite: 12]。通過 IGBT 逆變器即時改變輸入電機的<strong>電壓幅值與頻率</strong>，實現從零速平滑加速至額定速度，停站時具有毫米級<strong>極致精準平層精度 (floor leveling accuracy)</strong>，徹底消除起制動頓挫感，節省運行電耗達 40% 以上[cite: 12]。</p>',
        en: '<p><strong>VVVF (Variable Voltage, Variable Frequency)</strong> drives synthesize optimal sinusoidal currents[cite: 12]. Delivering continuous stepless acceleration profiles, zero jerk, millimeter-level floor leveling precision, and up to 40% power reduction[cite: 12].</p>'
      }
    ]
  },
  {
    id: 't5', icon: '5', title: 'Machine-Room-Less (MRL) Elevator Systems',
    titleZh: '無機房電梯架構：頂層淨空 (OH) 與底坑深度 (PD)',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Machine-Room-Less (MRL) Elevator Geometry &amp; Limits (無機房電梯井道幾何與性能邊界)</text>
        <!-- Hoistway Drawing -->
        <g transform="translate(50, 45)">
          <rect x="0" y="0" width="160" height="180" fill="#111" stroke="#3498db" stroke-width="2"/>
          <!-- Compact PMSM Machine mounted inside shaft top -->
          <rect x="15" y="10" width="45" height="30" fill="#16a085" stroke="#2ecc71"/>
          <text x="37" y="28" text-anchor="middle" font-size="7" fill="#fff" font-weight="bold">MRL Motor</text>
          <!-- Overhead OH -->
          <line x1="170" y1="0" x2="170" y2="50" stroke="#f1c40f" stroke-width="2"/>
          <text x="175" y="28" font-size="8.5" fill="#f1c40f">Overhead OH</text>
          <!-- Car inside -->
          <rect x="10" y="50" width="75" height="60" fill="#1b4f72" stroke="#3498db"/>
          <text x="47" y="78" text-anchor="middle" font-size="8" fill="#fff">Car H=2200</text>
          <text x="47" y="94" text-anchor="middle" font-size="7" fill="#bdc3c7">Door HH=2100</text>
          <!-- Pit Depth PD -->
          <line x1="170" y1="150" x2="170" y2="180" stroke="#e74c3c" stroke-width="2"/>
          <text x="175" y="168" font-size="8.5" fill="#e74c3c">Pit Depth PD</text>
        </g>
        <!-- Travel & Speed limits card -->
        <g transform="translate(290, 45)">
          <rect x="0" y="0" width="370" height="120" fill="#1a252f" stroke="#f1c40f" rx="4"/>
          <text x="185" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#f1c40f">MRL Operating Speed &amp; Travel Envelopes (Slide 14):</text>
          <text x="20" y="45" font-size="9.5" fill="#fff">• Max Travel <strong>80 m</strong>: Speed up to <strong>1.75 m/s</strong></text>
          <text x="20" y="65" font-size="9.5" fill="#fff">• Max Travel <strong>80 m</strong>: Speed up to <strong>1.60 m/s</strong></text>
          <text x="20" y="85" font-size="9.5" fill="#fff">• Max Travel <strong>60 m</strong>: Speed up to <strong>1.00 m/s</strong></text>
          <text x="20" y="105" font-size="9" fill="#2ecc71">• Minimum Floor Height = <strong>2600 mm</strong></text>
        </g>
        <rect x="30" y="180" width="640" height="65" fill="#111" stroke="#3498db" rx="4"/>
        <text x="350" y="202" text-anchor="middle" font-size="10.5" fill="#5dade2" font-weight="bold">Slim Controller Cabinet: Embedded flush into landing wall adjacent to top floor door jamb.</text>
        <text x="350" y="222" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Standard Car Ceiling Height = 2200 mm | Standard Entrance Door Height = 2100 mm.</text>
        <text x="350" y="238" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Eliminates roof penthouse, protecting building exterior sightlines and saving civil construction cost.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 5: Machine-Room-Less (MRL) hoistway envelope: Compact PMSM tractor mounted inside shaft head, overhead OH, pit depth PD, and maximum travel limits (60–80 m)',
    sections: [
      {
        title: 'MRL Architecture & Dimensional Parameters / 無機房電梯構造幾何',
        zh: '<p><strong>無機房電梯 (Machine-room-less lift, MRL)</strong> 利用超薄永磁同步無齒輪主機 (PMSM)，直接安裝於<strong>井道頂部導軌上方或側壁</strong>，取消了建築天台突出的專用機房[cite: 12]：</p><ul><li><strong>控制櫃嵌牆安裝</strong>：薄型微電腦控制櫃直接嵌入頂層乘梯前廳門框旁的牆體內[cite: 12]；</li><li><strong>標準幾何尺寸</strong>：標準轎內淨高為 <strong>2200 mm</strong>；標準層門門洞淨高為 <strong>2100 mm</strong>；最小層高為 <strong>2600 mm</strong>[cite: 12]。</li></ul>',
        en: '<p><strong>Machine-Room-Less (MRL)</strong> systems mount a compact gearless PMSM tractor inside the hoistway onto guide rails or shaft walls, eliminating the overhead penthouse[cite: 12]:</p><ul><li><strong>Cabinet</strong>: Ultra-slim controller cabinet is recessed into the top landing architectural wall[cite: 12];</li><li><strong>Dimensions</strong>: Standard car interior height = <strong>2200 mm</strong>; entrance height HH = <strong>2100 mm</strong>; minimum floor-to-floor height = <strong>2600 mm</strong>[cite: 12].</li></ul>'
      },
      {
        title: 'Travel & Speed Limits / 運行行程與速度極限',
        zh: '<div class="key-point"><strong>MRL 性能邊界（Slide 14）：</strong><br>• 最大提升高度 <strong>80 m</strong>：額定速度可達 <strong>1.75 m/s 或 1.6 m/s</strong>[cite: 12]；<br>• 最大提升高度 <strong>60 m</strong>：額定速度為 <strong>1.0 m/s</strong>[cite: 12]。<br>優點：釋放天台建築空間、避免天際線景觀衝突、降低土建土石方及防水分項工程造價[cite: 12]。</div>',
        en: '<div class="key-point"><strong>Operating Limits (Slide 14):</strong><br>• <strong>Max Travel 80 m</strong>: Speeds of <strong>1.75 m/s or 1.6 m/s</strong>[cite: 12];<br>• <strong>Max Travel 60 m</strong>: Speed of <strong>1.0 m/s</strong>[cite: 12].<br>Frees roof area and reduces structural building height and construction cost[cite: 12].</div>'
      }
    ]
  },
  {
    id: 't6', icon: '6', title: 'Car Frame, Platform & Apron Construction',
    titleZh: '轎廂架構造：上樑、立柱、下樑安全鉗與護腳板',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Car Frame (Sling) &amp; Lift Car Structural Anatomy (轎廂鋼結構架與護腳板)</text>
        <g transform="translate(50, 45)">
          <!-- Structural Sling (Frame) -->
          <rect x="0" y="15" width="220" height="15" fill="#34495e" stroke="#3498db" stroke-width="1.5"/>
          <text x="110" y="26" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="bold">Crosshead (上樑)</text>
          <!-- Uprights -->
          <rect x="5" y="30" width="12" height="110" fill="#34495e" stroke="#3498db"/>
          <rect x="203" y="30" width="12" height="110" fill="#34495e" stroke="#3498db"/>
          <text x="8" y="90" font-size="7.5" fill="#bdc3c7" transform="rotate(-90 8 90)">Uprights</text>
          <text x="220" y="90" font-size="7.5" fill="#bdc3c7" transform="rotate(-90 220 90)">Uprights</text>
          <!-- Bottom Channel / Safety Plank -->
          <rect x="0" y="140" width="220" height="18" fill="#34495e" stroke="#e74c3c" stroke-width="2"/>
          <text x="110" y="153" text-anchor="middle" font-size="8.5" fill="#f5b7b1" font-weight="bold">Bottom Channel &amp; Safety Gear</text>
          <!-- Car Body sitting on Platform -->
          <rect x="25" y="35" width="170" height="100" fill="#1b4f72" opacity="0.85" stroke="#ecf0f1"/>
          <text x="110" y="80" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Enclosure Cab</text>
          <!-- Apron (Toe Guard) hanging below door -->
          <rect x="50" y="158" width="120" height="35" fill="#f1c40f" stroke="#d4ac0d"/>
          <text x="110" y="180" text-anchor="middle" font-size="8.5" fill="#111" font-weight="bold">Apron (Toe Guard 護腳板)</text>
        </g>
        <g transform="translate(350, 50)">
          <rect x="0" y="0" width="310" height="150" fill="#111" stroke="#3498db" rx="4"/>
          <text x="155" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#5dade2">Structural Component Roles (Slide 9):</text>
          <text x="15" y="44" font-size="9" fill="#fff">• <strong>Crosshead</strong>: Overhead beam anchored to ropes/sheaves</text>
          <text x="15" y="64" font-size="9" fill="#fff">• <strong>Uprights (Stiles)</strong>: Vertical structural steel ties</text>
          <text x="15" y="84" font-size="9" fill="#fff">• <strong>Safety Plank</strong>: Heavy bottom channel mounting safety gear</text>
          <text x="15" y="104" font-size="9" fill="#fff">• <strong>Isolation Pads</strong>: Decouples platform from car vibration</text>
          <text x="15" y="124" font-size="9" fill="#f1c40f">• <strong>Apron (Toe Guard)</strong>: Smooth vertical metal shield</text>
          <text x="25" y="139" font-size="8" fill="#bdc3c7">  protects passengers from falling into shaft during rescue.</text>
        </g>
        <text x="350" y="240" text-anchor="middle" font-size="9" fill="#bdc3c7">The car body is completely cradled within the structural steel sling frame to withstand dynamic safety gear stops.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 6: Structural car frame (sling) construction: Crosshead, side stiles/uprights, bottom safety plank with safety gear, and vertical apron (toe guard)',
    sections: [
      {
        title: 'Structural Sling & Load Transfer / 轎架與轎底承載體系',
        zh: '<p>轎廂並非單薄的懸空箱體，而是牢固安置在鋼結構<strong>轎廂架 (Car sling / frame)</strong> 內部[cite: 12]：</p><ul><li><strong>上樑 (Crosshead)</strong>：承擔全部懸掛鋼絲繩或 2:1 動滑輪的固定點，頂部裝設滾輪導靴 (Roller guides)[cite: 12]；</li><li><strong>立柱 (Uprights / Stiles)</strong>：側向高強度型鋼槽鋼，將載重垂直傳遞[cite: 12]；</li><li><strong>底樑 (Bottom channel / Safety plank)</strong>：承受轎廂自重與全部乘客活載，<strong>安全鉗直接安裝在底樑兩端</strong>[cite: 12]；</li><li><strong>減振隔離座 (Isolation frame)</strong>：在置物底盤與轎底之間加裝橡膠避震墊，杜絕運行振動傳入轎廂[cite: 12]。</li></ul>',
        en: '<p>The elevator cab is cradled inside a heavy structural steel <strong>sling (car frame)</strong>[cite: 12]:</p><ul><li><strong>Crosshead</strong>: Top horizontal beam receiving suspension roping or 2:1 sheaves[cite: 12];</li><li><strong>Uprights (Stiles)</strong>: Vertical channels connecting crosshead to safety plank[cite: 12];</li><li><strong>Bottom channel (Safety plank)</strong>: Bedplate channel carrying passenger floor; directly houses the safety gear blocks[cite: 12];</li><li><strong>Isolation frame</strong>: Elastomer damping pads isolating cab floor from frame vibration[cite: 12].</li></ul>'
      },
      {
        title: 'Safety Apron (Toe Guard) / 轎門防護板（護腳板）法規',
        zh: '<p><strong>護腳板 (Apron / Toe guard)</strong> 是一塊垂直懸掛在轎廂地坎下方的光滑金屬薄板[cite: 12]。當電梯停在平層標高上方（如因故障困人開門救援）時，護腳板能<strong>嚴密遮擋外露的井道空隙</strong>，徹底防止被困乘客跨步踏出時失足跌入深坑底[cite: 12]。</p>',
        en: '<p>The <strong>Apron (Toe Guard)</strong> is a smooth vertical metal plate extending downward from the car door sill[cite: 12]. If a car stops above landing level during emergency rescue, the apron shields the opening, preventing passengers from tumbling into the open hoistway below[cite: 12].</p>'
      }
    ]
  },
  {
    id: 't7', icon: '7', title: 'Door Operators & Horizontal Sliding Door Types',
    titleZh: '門機傳動機構與水平滑動門型式 (中分 vs 旁開)',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Power-Operated Sliding Door Configurations (水平動力滑動門型式)</text>
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="310" height="35" fill="#1a252f" stroke="#3498db" rx="3"/>
          <text x="15" y="22" font-size="9" fill="#fff">Single Slide (單扇單向滑動)</text>
          <line x1="160" y1="17" x2="290" y2="17" stroke="#3498db" stroke-width="5"/>
          
          <rect x="0" y="42" width="310" height="35" fill="#1a252f" stroke="#2ecc71" rx="3"/>
          <text x="15" y="64" font-size="9" fill="#fff">Two-Speed Side Opening (雙速旁開)</text>
          <line x1="160" y1="54" x2="220" y2="54" stroke="#2ecc71" stroke-width="4"/>
          <line x1="225" y1="62" x2="295" y2="62" stroke="#2ecc71" stroke-width="4"/>
          
          <rect x="0" y="84" width="310" height="35" fill="#1a252f" stroke="#f1c40f" rx="3"/>
          <text x="15" y="106" font-size="9" fill="#fff">Three-Speed Side (三速旁開大開口)</text>
          <line x1="160" y1="94" x2="200" y2="94" stroke="#f1c40f" stroke-width="3"/>
          <line x1="205" y1="101" x2="245" y2="101" stroke="#f1c40f" stroke-width="3"/>
          <line x1="250" y1="108" x2="295" y2="108" stroke="#f1c40f" stroke-width="3"/>
        </g>
        <g transform="translate(360, 45)">
          <rect x="0" y="0" width="310" height="55" fill="#1a252f" stroke="#1abc9c" stroke-width="2" rx="3"/>
          <text x="15" y="25" font-size="9.5" fill="#fff" font-weight="bold">Single-Speed Centre Opening (中分門)</text>
          <text x="15" y="42" font-size="8.5" fill="#abebc6">Fastest &amp; most aesthetic for passenger lifts</text>
          <line x1="160" y1="28" x2="220" y2="28" stroke="#1abc9c" stroke-width="4"/>
          <line x1="230" y1="28" x2="290" y2="28" stroke="#1abc9c" stroke-width="4"/>
          
          <rect x="0" y="64" width="310" height="55" fill="#1a252f" stroke="#e67e22" rx="3"/>
          <text x="15" y="85" font-size="9.5" fill="#fff" font-weight="bold">Two-Speed Centre Opening (雙速中分)</text>
          <text x="15" y="102" font-size="8.5" fill="#fef9e7">Four panels; maximum opening width</text>
        </g>
        <rect x="30" y="175" width="640" height="70" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="198" text-anchor="middle" font-size="10.5" fill="#fff"><strong>Door Operator Drive (Slide 10):</strong> Motor + Reduction Gear + Crank Arm + Door Hangers + Overhead Track.</text>
        <text x="350" y="218" text-anchor="middle" font-size="9.5" fill="#f1c40f">Car door is actively driven by the car-top motor; landing doors are purely passive, interlocked via mechanical door cam skate.</text>
        <text x="350" y="235" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Centre-opening doors provide superior passenger boarding flow rates compared to side-opening doors.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 7: Power-operated horizontal sliding door configurations: Single-slide, 2-speed side opening, Single-speed centre opening (preferred), 3-speed side, and 2-speed centre opening',
    sections: [
      {
        title: 'Door Operator Mechanism / 門機傳動原理',
        zh: '<p>客梯門系統由安裝在<strong>轎頂的門機電機 (Door operator motor)</strong> 統一驅動[cite: 12]：</p><ul><li>電機帶動連桿擺臂 (Drive arm) 與導軌門懸掛滑輪 (Door hangers on track)[cite: 12]；</li><li><strong>主動門 vs 被動門</strong>：<strong>只有轎廂門是由電機主動驅動的</strong>；層門 (Landing door) 完全沒有獨立電機，平層時轎門上的<strong>門刀 (Door cam)</strong> 夾住層門滾輪，帶動層門同步開啟或閉合[cite: 12]。</li></ul>',
        en: '<p>Elevator doors are powered by a <strong>car-top door operator motor</strong>[cite: 12]:</p><ul><li>Linkage drive arms actuate door hangers along an overhead track[cite: 12];</li><li><strong>Active Car vs Passive Landing Doors</strong>: Only the car door is motorized; landing doors are passive, mechanically coupled via the car-top <strong>door cam (skate)</strong> upon leveling[cite: 12].</li></ul>'
      },
      {
        title: 'Five Horizontal Sliding Configurations / 五大水平滑動門形式',
        zh: '<ul><li><strong>單速中分門 (Single-speed centre opening)</strong>：兩扇門片對稱反向開閉，<strong>客流通行速度最快、對稱美觀，為高檔寫字樓客梯首選</strong>[cite: 12]；</li><li><strong>雙速旁開門 (Two-speed side opening)</strong>：兩扇門片以 2:1 速度同向滑動，井道開口利用率高，適合較窄井道[cite: 12]；</li><li><strong>單向單扇門 (Single slide)</strong>[cite: 12]；</li><li><strong>三速旁開門 (Three-speed side)</strong>：多用於大開口醫用病床梯或載貨電梯[cite: 12]；</li><li><strong>雙速中分門 (Two-speed centre opening)</strong>：四扇門片對稱開合，兼具超大開口與高速通行[cite: 12]。</li></ul>',
        en: '<ul><li><strong>Single-speed centre opening</strong>: Symmetrical opposite travel; <strong>fastest passenger boarding, aesthetic; standard for premium office towers</strong>[cite: 12];</li><li><strong>Two-speed side opening</strong>: Telescopic 2:1 speed panels; maximizes entrance clear opening within narrow hoistways[cite: 12];</li><li><strong>Single slide</strong>, <strong>Three-speed side opening</strong>, and <strong>Two-speed centre opening (4 panels)</strong>[cite: 12].</li></ul>'
      }
    ]
  },
  {
    id: 't8', icon: '8', title: 'Centrifugal Overspeed Governor Mechanism',
    titleZh: '離心式限速器、飛塊動作原理與鋼絲繩夾緊裝置',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Centrifugal Overspeed Governor Working Mechanism (離心式限速器動作圖解)</text>
        <g transform="translate(50, 45)">
          <circle cx="100" cy="70" r="55" fill="#1a252f" stroke="#f1c40f" stroke-width="2.5"/>
          <!-- Flyweights -->
          <path d="M 65 40 Q 100 30 135 40" stroke="#e74c3c" stroke-width="5"/>
          <text x="100" y="55" text-anchor="middle" font-size="8.5" fill="#e74c3c" font-weight="bold">Flyweights (離心飛塊)</text>
          <!-- Springs -->
          <path d="M 60 70 L 140 70" stroke="#f1c40f" stroke-width="2" stroke-dasharray="3 2"/>
          <circle cx="100" cy="70" r="14" fill="#34495e"/>
          <!-- Clamping Jaws Trigger -->
          <rect x="175" y="30" width="80" height="85" fill="#111" stroke="#e74c3c" rx="4"/>
          <text x="215" y="50" text-anchor="middle" font-size="8.5" fill="#f5b7b1">Electrical Switch</text>
          <text x="215" y="70" text-anchor="middle" font-size="8.5" fill="#e74c3c" font-weight="bold">Rope Clamping</text>
          <text x="215" y="85" text-anchor="middle" font-size="8.5" fill="#e74c3c" font-weight="bold">Device (夾繩器)</text>
          <!-- Governor Rope -->
          <line x1="200" y1="0" x2="200" y2="140" stroke="#f1c40f" stroke-width="3" class="flow-suspension"/>
        </g>
        <g transform="translate(350, 45)">
          <rect x="0" y="0" width="310" height="135" fill="#111" stroke="#1abc9c" rx="4"/>
          <text x="155" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1abc9c">Sequential Tripping Process (Slide 12):</text>
          <text x="15" y="44" font-size="9" fill="#fff">1. Car accelerates beyond contract speed v</text>
          <text x="15" y="64" font-size="9" fill="#fff">2. Centrifugal force flings flyweights outwards against spring</text>
          <text x="15" y="84" font-size="9" fill="#f1c40f">3. Stage A: Electrical safety switch cuts motor &amp; drops brake</text>
          <text x="15" y="104" font-size="9" fill="#e74c3c" font-weight="bold">4. Stage B: Mechanical jaw clamps down onto governor rope!</text>
          <text x="15" y="124" font-size="8.5" fill="#abebc6">Rope tension pulls safety gear actuating rods on car.</text>
        </g>
        <rect x="30" y="195" width="640" height="50" fill="#111" stroke="#3498db" rx="4"/>
        <text x="350" y="217" text-anchor="middle" font-size="10" fill="#fff">Mounted in overhead machine room; a closed governor rope loop passes down to the tension sheave in the pit.</text>
        <text x="350" y="235" text-anchor="middle" font-size="9" fill="#f1c40f">Mechanical arrest occurs purely through kinetic inertia even in the event of total electrical power loss.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 8: Centrifugal overspeed governor: Rotating flyweights trip the electrical safety switch first, then actuate the mechanical rope-clamping jaw to pull safety gear rods',
    sections: [
      {
        title: 'Centrifugal Governor Mechanics / 離心式限速器動作原理',
        zh: '<p><strong>限速器 (Overspeed governor)</strong> 是電梯防超速墜落的第一道安全感測防線，安裝在頂部機房[cite: 12]：</p><ol><li><strong>飛塊離心旋轉 (Flyweights)</strong>：限速器繩輪隨轎廂同步連動。當轎廂運行超速時，內部離心飛塊克服彈簧阻力向外甩開[cite: 12]；</li><li><strong>一級電氣保護</strong>：當速度達到額定速度的約 <strong>115%</strong> 時，甩開的飛塊觸動微動開關，<strong>切斷電機電源並使抱閘制動器抱死</strong>[cite: 12]；</li><li><strong>二級機械制動</strong>：若電梯仍繼續超速下墜，飛塊進一步外擴釋放鎖定棘爪，<strong>夾繩機構 (Rope clamping device) 瞬間鎖死限速器鋼絲繩</strong>[cite: 12]。停止運動的鋼絲繩拉動轎廂底部的連桿，強行啟動安全鉗[cite: 12]。</li></ol>',
        en: '<p>The <strong>overspeed governor</strong> provides primary overspeed detection in the machine room[cite: 12]:</p><ol><li><strong>Centrifugal Flyweights</strong>: Rotate in lockstep with car speed; excessive velocity flings flyweights outward against calibrated springs[cite: 12];</li><li><strong>Stage 1 (Electrical)</strong>: At ~115% rated speed, flyweights trip a safety switch that cuts motor power and applies the electromechanical brake[cite: 12];</li><li><strong>Stage 2 (Mechanical)</strong>: If overspeed persists, mechanical catches engage the <strong>rope clamping device</strong>, arresting the governor rope to pull the car safety gear[cite: 12].</li></ol>'
      }
    ]
  },
  {
    id: 't9', icon: '9', title: 'Safety Gear Systems: Instantaneous vs Progressive',
    titleZh: '安全鉗制動原理：瞬時式凸輪/滾輪 vs 漸進式夾緊楔塊',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#e74c3c" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#e74c3c">Instantaneous Safety Gear (瞬時式安全鉗)</text>
        <g transform="translate(50, 45)">
          <rect x="0" y="0" width="240" height="90" fill="#1a252f" stroke="#e74c3c" rx="4"/>
          <!-- Guide rail in middle -->
          <rect x="110" y="5" width="20" height="80" fill="#7f8c8d"/>
          <text x="120" y="48" text-anchor="middle" font-size="7" fill="#fff" transform="rotate(-90 120 48)">Rail</text>
          <!-- Serrated Cam / Roller -->
          <circle cx="85" cy="45" r="14" fill="#e74c3c"/>
          <circle cx="155" cy="45" r="14" fill="#e74c3c"/>
          <text x="85" y="48" text-anchor="middle" font-size="7" fill="#fff">Roller</text>
          <text x="155" y="48" text-anchor="middle" font-size="7" fill="#fff">Roller</text>
          <path d="M 85 65 L 85 85 M 155 65 L 155 85" stroke="#f1c40f" stroke-width="2"/>
        </g>
        <rect x="20" y="145" width="300" height="100" fill="#111" stroke="#e74c3c" rx="4"/>
        <text x="170" y="165" text-anchor="middle" font-size="10.5" fill="#f5b7b1" font-weight="bold">Serrated Cam / Roller Type (Slide 13):</text>
        <text x="170" y="185" text-anchor="middle" font-size="9" fill="#ecf0f1">• Wedges rigidly onto rail instantaneously</text>
        <text x="170" y="202" text-anchor="middle" font-size="9" fill="#ecf0f1">• Extreme violent deceleration shock!</text>
        <text x="170" y="222" text-anchor="middle" font-size="9.5" fill="#f1c40f" font-weight="bold">Speed Restricted: v ≤ 0.63 m/s ONLY</text>
        <text x="170" y="238" text-anchor="middle" font-size="8" fill="#bdc3c7">Used strictly for slow goods/small passenger lifts.</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#2ecc71" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#2ecc71">Progressive Safety Gear (漸進式安全鉗)</text>
        <g transform="translate(50, 45)">
          <rect x="0" y="0" width="240" height="90" fill="#1a252f" stroke="#2ecc71" rx="4"/>
          <!-- Guide rail in middle -->
          <rect x="110" y="5" width="20" height="80" fill="#7f8c8d"/>
          <text x="120" y="48" text-anchor="middle" font-size="7" fill="#fff" transform="rotate(-90 120 48)">Rail</text>
          <!-- Spring Loaded Wedging Jaws -->
          <polygon points="70,20 100,75 70,75" fill="#2ecc71"/>
          <polygon points="170,20 140,75 170,75" fill="#2ecc71"/>
          <rect x="30" y="40" width="35" height="15" fill="#f1c40f"/>
          <text x="47" y="51" text-anchor="middle" font-size="6.5" fill="#111">Spring</text>
          <rect x="175" y="40" width="35" height="15" fill="#f1c40f"/>
          <text x="192" y="51" text-anchor="middle" font-size="6.5" fill="#111">Spring</text>
        </g>
        <rect x="20" y="145" width="300" height="100" fill="#111" stroke="#2ecc71" rx="4"/>
        <text x="170" y="165" text-anchor="middle" font-size="10.5" fill="#abebc6" font-weight="bold">Spring-Clamped Sliding Wedges (Slide 13):</text>
        <text x="170" y="185" text-anchor="middle" font-size="9" fill="#ecf0f1">• Clamping spring maintains controlled friction</text>
        <text x="170" y="202" text-anchor="middle" font-size="9" fill="#ecf0f1">• Controlled, smooth deceleration (0.2g to 1.0g)</text>
        <text x="170" y="222" text-anchor="middle" font-size="9.5" fill="#2ecc71" font-weight="bold">Mandatory for High Speeds: v &gt; 0.63 m/s</text>
        <text x="170" y="238" text-anchor="middle" font-size="8" fill="#abebc6">Standard for all modern mid-to-high-rise passenger elevators.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 9: Safety gear classification: Instantaneous serrated cam/roller (rigid lock, v ≤ 0.63 m/s) vs Progressive spring-cushioned sliding wedges (smooth deceleration, v > 0.63 m/s)',
    sections: [
      {
        title: 'Instantaneous Safety Gear / 瞬時式安全鉗 (滾輪/偏心凸輪)',
        zh: '<p><strong>瞬時式安全鉗 (Instantaneous safety gear)</strong> 採用滾輪 (Roller) 或帶鋸齒的偏心凸輪 (Serrated cam)[cite: 12]：</p><p>動作時幾乎沒有滑移距離，金屬齒牙瞬間咬死在導軌兩側，<strong>轎廂幾乎立即停住</strong>[cite: 12]。這會引發高達數個 G 的巨大衝擊減速度，極易使乘客脊椎受傷[cite: 12]。因此國際法規強制規定：<strong>瞬時式安全鉗僅允許用於額定速度不超過 0.63 m/s ($v \le 0.63\text{ m/s}$) 的低速電梯</strong>[cite: 12]。</p>',
        en: '<p><strong>Instantaneous safety gears</strong> utilize serrated cams or rollers that wedge instantaneously against guide rails[cite: 12]. Stopping distance is nearly zero, causing violent deceleration shock[cite: 12]. Hence, regulations restrict instantaneous gears strictly to <strong>slow speeds of $v \le 0.63\text{ m/s}$</strong>[cite: 12].</p>'
      },
      {
        title: 'Progressive Safety Gear / 漸進式安全鉗 (彈簧滑塊)',
        zh: '<p><strong>漸進式安全鉗 (Progressive safety gear)</strong> 由斜向滑塊 (Slide)、制動鉗口 (Jaw)、動作拉桿 (Actuating rods) 與強固的<strong>夾緊彈簧 (Clamping spring)</strong> 構成[cite: 12]：</p><p>當拉桿提起楔塊時，高剛度彈簧受壓縮提供<strong>恆定、受控的摩擦夾緊力</strong>，轎廂在導軌上滑行一定安全距離（數十厘米）平穩制動，減速度維持在人體生理承受範圍內（通常在 0.2g 至 1.0g 之間）[cite: 12]。<strong>額定速度大於 0.63 m/s ($v > 0.63\text{ m/s}$) 的所有中高速客梯必須強制採用漸進式安全鉗</strong>[cite: 12]。</p>',
        en: '<p><strong>Progressive safety gears</strong> feature inclined sliding wedges backed by calibrated <strong>clamping springs</strong>[cite: 12]. The spring absorbs dynamic braking forces, allowing controlled slippage that decelerates the car smoothly within human tolerance limits (0.2g to 1.0g)[cite: 12]. <strong>Mandatory for all elevators operating above 0.63 m/s</strong>[cite: 12].</p>'
      }
    ]
  },
  {
    id: 't10', icon: '10', title: 'Pit Buffers: Energy Accumulation vs Dissipation',
    titleZh: '底坑緩衝器：蓄能型彈簧緩衝器 vs 耗能型油壓緩衝器',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#3498db" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">Energy Accumulation Type (蓄能彈簧緩衝器)</text>
        <g transform="translate(60, 45)">
          <rect x="35" y="90" width="70" height="40" fill="#34495e" stroke="#7f8c8d"/>
          <text x="70" y="112" text-anchor="middle" font-size="7.5" fill="#bdc3c7">Stand Block</text>
          <!-- Spring Coil -->
          <path d="M 70 20 L 70 90 M 55 30 Q 70 20 85 30 Q 70 40 55 50 Q 70 60 85 70 Q 70 80 55 90" fill="none" stroke="#f1c40f" stroke-width="4"/>
          <rect x="50" y="10" width="40" height="10" fill="#e74c3c"/>
          <text x="70" y="8" text-anchor="middle" font-size="8" fill="#f1c40f">Bumper</text>
        </g>
        <rect x="20" y="145" width="300" height="100" fill="#111" stroke="#3498db" rx="4"/>
        <text x="170" y="165" text-anchor="middle" font-size="10.5" fill="#5dade2" font-weight="bold">Mechanical Spring Rebound (Slide 13):</text>
        <text x="170" y="185" text-anchor="middle" font-size="9" fill="#ecf0f1">• Compresses heavy spring to store impact energy</text>
        <text x="170" y="202" text-anchor="middle" font-size="9" fill="#f5b7b1">• Energy is NOT dissipated; risk of rebound</text>
        <text x="170" y="222" text-anchor="middle" font-size="9.5" fill="#f1c40f" font-weight="bold">Speed Restricted: v ≤ 1.0 m/s ONLY</text>
        <text x="170" y="238" text-anchor="middle" font-size="8" fill="#bdc3c7">Simple, inexpensive, no oil maintenance.</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#2ecc71" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#2ecc71">Energy Dissipation Type (耗能油壓緩衝器)</text>
        <g transform="translate(60, 45)">
          <rect x="15" y="45" width="110" height="85" fill="#1a252f" stroke="#2ecc71" stroke-width="2" rx="4"/>
          <text x="70" y="70" text-anchor="middle" font-size="8.5" fill="#fff">Oil Reservoir</text>
          <!-- Piston Assembly -->
          <rect x="50" y="10" width="40" height="50" fill="#bdc3c7" stroke="#34495e"/>
          <circle cx="70" cy="10" r="10" fill="#e74c3c"/>
          <text x="70" y="35" text-anchor="middle" font-size="7" fill="#111">Piston</text>
          <text x="105" y="85" font-size="7" fill="#2ecc71">Dipstick</text>
        </g>
        <rect x="20" y="145" width="300" height="100" fill="#111" stroke="#2ecc71" rx="4"/>
        <text x="170" y="165" text-anchor="middle" font-size="10.5" fill="#abebc6" font-weight="bold">Hydraulic Oil Dashpot (Slide 13):</text>
        <text x="170" y="185" text-anchor="middle" font-size="9" fill="#ecf0f1">• Impact forces piston into cylinder, throttling oil</text>
        <text x="170" y="202" text-anchor="middle" font-size="9" fill="#ecf0f1">• Converts kinetic energy completely into heat (No rebound!)</text>
        <text x="170" y="222" text-anchor="middle" font-size="9.5" fill="#2ecc71" font-weight="bold">Mandatory for High Speeds: v &gt; 1.0 m/s</text>
        <text x="170" y="238" text-anchor="middle" font-size="8" fill="#abebc6">Standard for all commercial traction lifts.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 10: Pit buffers: Energy accumulation spring buffer (stores energy, v ≤ 1.0 m/s) vs Energy dissipation hydraulic oil buffer (throttles oil through orifices, no rebound, v > 1.0 m/s)',
    sections: [
      {
        title: 'Energy Accumulation Type (Spring Buffers) / 蓄能型彈簧緩衝器',
        zh: '<p><strong>蓄能型緩衝器 (Energy accumulation buffer)</strong> 核心為一組重型螺旋金屬彈簧 (Spring)[cite: 12]：</p><p>當轎廂撞擊時，彈簧受壓儲存動能。其物理本質是<strong>將動能轉化為勢能儲存，但並未耗散能量</strong>，撞擊後會產生彈跳回彈 (Rebound)[cite: 12]。法規限定：<strong>僅適用於額定速度不大於 1.0 m/s ($v \le 1.0\text{ m/s}$) 的低速電梯</strong>[cite: 12]。</p>',
        en: '<p>An <strong>energy accumulation buffer</strong> utilizes heavy coiled steel springs to compress and store impact energy[cite: 12]. Energy is temporarily stored without dissipation, introducing rebound risks[cite: 12]. Restricted strictly to <strong>low speeds of $v \le 1.0\text{ m/s}$</strong>[cite: 12].</p>'
      },
      {
        title: 'Energy Dissipation Type (Oil Buffers) / 耗能型油壓緩衝器',
        zh: '<p><strong>耗能型緩衝器 (Energy dissipation buffer)</strong> 包含柱塞組件 (Piston assembly)、油缸儲油箱 (Oil reservoir)、油尺 (Dipstick) 及洩壓節流孔[cite: 12]：</p><p>撞擊推動柱塞下壓，迫使液壓油高速穿過狹窄節流孔進入儲油室，<strong>流體粘性摩擦將轎廂巨大衝擊動能 100% 轉化為熱能耗散釋放，完全沒有二次回彈</strong>[cite: 12]。<strong>額定速度大於 1.0 m/s ($v > 1.0\text{ m/s}$) 的所有中高速電梯必須強制安裝油壓緩衝器</strong>[cite: 12]。</p>',
        en: '<p>An <strong>energy dissipation buffer</strong> functions as a hydraulic dashpot where descending pistons throttle fluid through calibrated orifices in the reservoir[cite: 12]. 100% of car kinetic energy is converted irreversibly into heat without rebound[cite: 12]. <strong>Mandatory for all elevators operating above 1.0 m/s</strong>[cite: 12].</p>'
      }
    ]
  },
  {
    id: 't11', icon: '11', title: 'Hydraulic Lifts: Cylinders, Rams & Power Units',
    titleZh: '液壓升降機油路閥組、柱塞配置與 21 米行程限制',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Hydraulic Lift Jack Configurations &amp; Remote Power Unit (液壓頂升與動力單元)</text>
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="310" height="120" fill="#1a252f" stroke="#e74c3c" rx="4"/>
          <text x="155" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#f5b7b1">Hydraulic Jack Arrangements (Slide 22):</text>
          <text x="15" y="44" font-size="9" fill="#fff">1. <strong>Direct-Acting</strong>: Ram situated underneath car center</text>
          <text x="15" y="62" font-size="9" fill="#fff">2. <strong>Single Side-Acting</strong>: Direct or indirect (2:1 roped)</text>
          <text x="15" y="80" font-size="9" fill="#fff">3. <strong>Twin Side-Acting</strong>: Direct or indirect cylinders</text>
          <text x="15" y="104" font-size="9.5" fill="#f1c40f" font-weight="bold">Max Travel: 21 m | Max Speed: 0.75 m/s (Slide 20)</text>
        </g>
        <g transform="translate(360, 45)">
          <rect x="0" y="0" width="310" height="120" fill="#1a252f" stroke="#3498db" rx="4"/>
          <text x="155" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#5dade2">Power Unit Components (Slide 22):</text>
          <text x="15" y="44" font-size="9" fill="#fff">• Oil tank / reservoir</text>
          <text x="15" y="62" font-size="9" fill="#fff">• Positive displacement hydraulic pump</text>
          <text x="15" y="80" font-size="9" fill="#fff">• Pump motor (single-speed AC induction)</text>
          <text x="15" y="98" font-size="9" fill="#fff">• Flow control valve block (solenoid valves)</text>
          <text x="15" y="114" font-size="8.5" fill="#2ecc71">Pump room can be located up to 10 m from shaft!</text>
        </g>
        <rect x="30" y="180" width="640" height="65" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="202" text-anchor="middle" font-size="10.5" fill="#fff"><strong>Hydraulic Engineering Pros:</strong> Low-level machine room (no roof penthouse), zero roof structural loads, heavy load capacity.</text>
        <text x="350" y="222" text-anchor="middle" font-size="9.5" fill="#f1c40f">Direct-acting requires boring a deep ground well hole equal to building travel; side-acting eliminates drilling.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 11: Hydraulic lift configurations: Direct-acting center ram vs Twin side-acting rams, remote pump room (up to 10 m away), and 21 m travel threshold',
    sections: [
      {
        title: 'Hydraulic Jack Configurations / 柱塞油缸三大排布形式',
        zh: '<p>液壓升降機頂升機構分類[cite: 12]：</p><ol><li><strong>直頂式 (Direct-acting)</strong>：油缸垂直埋設在底坑中央地底（需鑽鑿與提升行程等深的地下井孔 Borehole），柱塞直頂轎底[cite: 12]；</li><li><strong>單側側頂式 (Single side-acting)</strong>：油缸立於井道側邊，分為直接頂升或 2:1 繩輪間接頂升（免鑽深孔）[cite: 12]；</li><li><strong>雙側側頂式 (Twin side-acting)</strong>：兩側對稱佈置油缸，平衡性好，適合重載汽車梯[cite: 12]。</li></ol>',
        en: '<p>Hydraulic jack configurations[cite: 12]:</p><ol><li><strong>Direct-acting</strong>: Cylinder sunk into a borehole beneath the hoistway pit, pushing car center directly[cite: 12];</li><li><strong>Single side-acting</strong>: Mounted on one hoistway side, direct or indirect (2:1 roped)[cite: 12];</li><li><strong>Twin side-acting</strong>: Dual cylinders on opposing sides for heavy freight/vehicle lifts without borehole drilling[cite: 12].</li></ol>'
      },
      {
        title: 'Operating Limits & Hydraulic Advantages / 運行界限與工程優勢',
        zh: '<div class="key-point"><strong>液壓梯核心邊界（Slide 20）：</strong><br>• <strong>最大行程 21 米 (Max travel of 21 m)</strong>，約服務 2 至 6 層[cite: 12]；<br>• <strong>最高運行速度 0.75 m/s ($v \le 0.75\text{ m/s}$)</strong>[cite: 12]；<br>• <strong>泵房位置</strong>：水電站機房<strong>可設在距離井道達 10 米處 (up to 10 m from shaft)</strong>，完全省去頂部機房與屋頂結構荷載[cite: 12]。</div>',
        en: '<div class="key-point"><strong>Hydraulic Operating Envelope (Slide 20):</strong><br>• <strong>Maximum travel of 21 m</strong> (approx. 2 to 6 floors)[cite: 12];<br>• <strong>Speed up to 0.75 m/s</strong>[cite: 12];<br>• <strong>Machine Room</strong>: Pump room can be situated <strong>up to 10 m away from the shaft</strong> at basement level, transferring no mechanical loads to the building roof[cite: 12].</div>'
      }
    ]
  },
  {
    id: 't12', icon: '12', title: 'Firefighting Lifts & Dedicated Hoistway Criteria',
    titleZh: '法定消防升降機 60 秒登頂規範與純淨井道標準',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Firefighting Lift Code Requirements &amp; Dedicated Shaft Criteria (消防電梯法定標準與純淨井道)</text>
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="310" height="120" fill="#78281f" stroke="#e74c3c" stroke-width="2" rx="4"/>
          <text x="155" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#f5b7b1">Mandatory Firefighter Provisions (Slide 23):</text>
          <text x="15" y="38" font-size="8.5" fill="#fff">• Break-glass key switch at Ground Floor entrance</text>
          <text x="15" y="54" font-size="9" fill="#f1c40f" font-weight="bold">• Min Duty Load: 630 kg (Fire gear + crew)</text>
          <text x="15" y="70" font-size="8.5" fill="#fff">• Min Internal Dimensions: 1.1 m(W) × 1.4 m(D) × 2.0 m(H)</text>
          <text x="15" y="86" font-size="8.5" fill="#fff">• Emergency roof escape hatch &amp; 2-way intercom</text>
          <text x="15" y="102" font-size="9" fill="#f1c40f" font-weight="bold">• Full Height Speed: Run whole building in ≤ 60 seconds!</text>
          <text x="15" y="116" font-size="8" fill="#abebc6">• Dual power supplies: Normal mains + Emergency generator</text>
        </g>
        <g transform="translate(360, 45)">
          <rect x="0" y="0" width="310" height="120" fill="#1a252f" stroke="#3498db" rx="4"/>
          <text x="155" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#5dade2">Dedicated Hoistway Features (Slide 24):</text>
          <text x="15" y="40" font-size="8.5" fill="#fff">• <strong>Water-tightness</strong> &amp; dedicated pit drainage sumps</text>
          <text x="15" y="58" font-size="8.5" fill="#fff">• True plumb vertical sides with smooth painted finish</text>
          <text x="15" y="76" font-size="8.5" fill="#fff">• Ventilation void at top for emission of smoke</text>
          <text x="15" y="94" font-size="8.5" fill="#fff">• Permanent inspection lighting throughout shaft</text>
          <text x="15" y="112" font-size="9" fill="#e74c3c" font-weight="bold">• NO OTHER SERVICES permitted in shaft!</text>
        </g>
        <rect x="30" y="180" width="640" height="65" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="202" text-anchor="middle" font-size="10.5" fill="#fff"><strong>The "Pure Shaft" Rule (Slide 24):</strong> No foreign building services (water pipes, drainage, gas, public power cables)</text>
        <text x="350" y="222" text-anchor="middle" font-size="9.5" fill="#f1c40f">are legally allowed to traverse through a lift hoistway. The shaft exists exclusively for the elevator apparatus itself.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 12: Statutory Firefighting Lift requirements: 630 kg payload, 60s full travel, dual power, and the "pure shaft" prohibition against foreign piping/cabling',
    sections: [
      {
        title: 'Statutory Firefighting Lift Provisions / 消防升降機法定強制配置',
        zh: '<p>根據香港建築物及消防法規，消防電梯 (Firefighting / Fireman\'s lift) 必須具備以下硬性條件[cite: 12]：</p><ol><li><strong>地下破玻開關</strong>：G/F 設有專用紅色敲碎玻璃鑰匙開關 (Break-glass key switch)[cite: 12]；</li><li><strong>最低額定載重</strong>：<strong>不低於 630 kg</strong>（確保承載全副武裝消防員及裝備）[cite: 12]；</li><li><strong>轎廂最小淨尺寸</strong>：<strong>$1.1\text{ m (寬)} \times 1.4\text{ m (深)} \times 2.0\text{ m (高)}$</strong>[cite: 12]；</li><li><strong>安全天窗與對講</strong>：轎頂設緊急疏散逃生艙門 (Emergency hatch)，配備雙向專用對講機[cite: 12]；</li><li><strong>1 小時防火門</strong>：門洞尺寸至少 $0.8\text{ m (寬)} \times 2.0\text{ m (高)}$[cite: 12]；</li><li><strong>60 秒登頂極限</strong>：<strong>從地面大堂運行至建築最高層總時間不得超過 60 秒 (Max 60 sec)</strong>[cite: 12]；</li><li><strong>雙路電源保障</strong>：市電 + 應急柴油發電機自動切換雙迴路供電[cite: 12]。</li></ol>',
        en: '<p>Statutory <strong>firefighting lift</strong> requirements mandate[cite: 12]:</p><ol><li><strong>Break-glass key switch</strong> at ground floor entrance[cite: 12];</li><li><strong>Minimum duty load</strong> of at least <strong>630 kg</strong>[cite: 12];</li><li><strong>Minimum car dimensions</strong>: <strong>$1.1\text{ m (W)} \times 1.4\text{ m (D)} \times 2.0\text{ m (H)}$</strong>[cite: 12];</li><li><strong>Emergency trap door</strong> in car roof and 2-way emergency intercom[cite: 12];</li><li><strong>1-hour fire resisting doors</strong> ($0.8\text{ m W} \times 2.0\text{ m H}$)[cite: 12];</li><li><strong>Transit speed</strong>: <strong>Max 60 seconds to run full building height</strong>[cite: 12];</li><li><strong>Dual power supplies</strong>: Automatic transfer between mains and emergency generator[cite: 12].</li></ol>'
      },
      {
        title: 'The Pure Shaft Rule / 井道純淨性與建築土建要求',
        zh: '<p>升降機井道 (Lift shaft) 的土建特性規範[cite: 12]：</p><div class="key-point"><strong>嚴禁穿越外來管線（Slide 24）：</strong> 井道必須具備防滲水、集水坑排水泵、垂直平整度、平整防塵漆面、頂部排煙通風孔及永久檢修照明[cite: 12]。<strong>最重要法規：井道內嚴禁鋪設任何與電梯無關的管道或管線（No other services permitted in shaft）</strong>（如雨水管、污水管、自來水管、燃氣管或公共電纜均嚴格禁止穿越電梯井道）[cite: 12]！</div>',
        en: '<p>Lift shaft civil engineering criteria[cite: 12]:</p><div class="key-point"><strong>Prohibition of Foreign Services (Slide 24):</strong> Shafts require water-tightness, sump drainage, plumb sides, painted finish, top smoke vent, and permanent lighting[cite: 12]. <strong>Crucial Rule: NO OTHER SERVICES (water, drainage, gas, foreign cables) are permitted inside the hoistway</strong>[cite: 12]!</div>'
      }
    ]
  }
];

// ==========================================
// 25 MULTIPLE CHOICE QUESTIONS (L10b)
// ==========================================
const mcData = [
  {
    question: "Which of the following is NOT listed as a major lift component in Lecture 10b (Slide 2)?",
    options: [
      "Safety gear & overspeed governor",
      "Buffers (energy accumulation / dissipation)",
      "Cooling tower condenser water bypass valve",
      "Prime mover (electric machine or hydraulic pump)"
    ],
    answer: 2,
    explanation: "Slide 2 lists prime mover, car frame, counterweight, guide rails, doors, safety gear, overspeed governor, buffers, roping systems, and fixtures. Cooling tower bypass valves belong to hydronics, not lift components.",
    lesson: "L10b"
  },
  {
    question: "In a GEARED traction lift machine, what mechanical device connects the high-speed motor to the drive sheave?",
    options: [
      "A hydraulic torque converter",
      "A worm and gear reduction gearbox",
      "A planetary magnetic clutch",
      "A flat rubber timing belt"
    ],
    answer: 1,
    explanation: "Slide 6: Typical geared machines employ a worm and gear gearbox to reduce motor speed and boost torque to the drive sheave.",
    lesson: "L10b"
  },
  {
    question: "What is the primary function of a DEFLECTOR SHEAVE installed below the drive sheave in a geared elevator?",
    options: [
      "To lubricate the suspension ropes with oil",
      "To guide and divert the suspension ropes to align vertically with car and counterweight centerlines",
      "To measure passenger overload electronically",
      "To reverse motor rotation during emergencies"
    ],
    answer: 1,
    explanation: "Slide 6: A deflector sheave diverts the suspension ropes to achieve the proper horizontal spacing between the lift car and counterweight.",
    lesson: "L10b"
  },
  {
    question: "Why do high-speed gearless traction machines often employ a DOUBLE WRAP sheave system?",
    options: [
      "To halve the electrical power consumption",
      "To wrap suspension ropes twice around the drive sheave, significantly increasing traction friction grip and preventing rope slip",
      "To double the rated speed of the lift car",
      "To eliminate the need for a counterweight"
    ],
    answer: 1,
    explanation: "Slide 5 & 16: Double wrap sheaves loop ropes twice over the drive sheave, extending the contact arc to provide massive traction grip for high-speed and heavy-duty lifts.",
    lesson: "L10b"
  },
  {
    question: "What are the MAXIMUM TRAVEL and MAXIMUM SPEED ratings for a hydraulic elevator according to Slide 20?",
    options: [
      "Max travel 21 m; speed up to 0.75 m/s",
      "Max travel 80 m; speed up to 1.75 m/s",
      "Max travel 100 m; speed up to 2.5 m/s",
      "Max travel 300 m; speed up to 0.5 m/s"
    ],
    answer: 0,
    explanation: "Slide 20: Hydraulic lifts have a maximum travel of 21 m and rated speeds up to 0.75 m/s.",
    lesson: "L10b"
  },
  {
    question: "What is a major structural architectural advantage of a HYDRAULIC elevator over a traditional traction lift?",
    options: [
      "It requires no borehole or pit",
      "The pump room can be located at the lowest level (up to 10 m from the shaft) and exerts zero structural loads on the roof",
      "It operates at twice the speed of traction lifts",
      "It requires no electricity"
    ],
    answer: 1,
    explanation: "Slide 20: Hydraulic lifts impose no structural loads on the building roof, and the pump room can be located at the lowest level up to 10 m from the shaft.",
    lesson: "L10b"
  },
  {
    question: "What components are contained in the hydraulic lift POWER UNIT (Slide 22)?",
    options: [
      "Counterweight, governor, and safety plank",
      "Oil tank / reservoir, pump, pump motor, and flow control valve block",
      "Drive sheave, deflector sheave, and brake drum",
      "Duct liner, filter, and cooling coil"
    ],
    answer: 1,
    explanation: "Slide 22: The hydraulic power unit comprises an oil tank/reservoir, hydraulic pump, electric pump motor, and flow control valve block.",
    lesson: "L10b"
  },
  {
    question: "What structural member of the car frame (sling) directly carries the safety gear blocks?",
    options: [
      "The overhead crosshead beam",
      "The side stiles / uprights",
      "The bottom channel (safety plank)",
      "The door operator track"
    ],
    answer: 2,
    explanation: "Slide 9: The safety gear is mounted on the bottom channel (also known as the safety plank) beneath the car platform.",
    lesson: "L10b"
  },
  {
    question: "What is the safety purpose of the vertical metal APRON (toe guard) fitted beneath the lift car entrance sill?",
    options: [
      "To scrape dirt off passengers' shoes",
      "To shield the open hoistway gap and prevent passengers from falling into the shaft during rescue if the car stops above landing level",
      "To hold the counterweight buffer springs",
      "To house the travelling cables"
    ],
    answer: 1,
    explanation: "Slide 9: The apron (toe guard) extends vertically down from the car sill to shield the opening under the car platform, preventing falls during rescue.",
    lesson: "L10b"
  },
  {
    question: "In a passenger lift, how are the LANDING ENTRANCE DOORS operated?",
    options: [
      "Each landing door has its own motorized electric operator",
      "Landing doors are completely unmotorized and are mechanically interlocked to open via the car-top door cam (skate)",
      "Passengers must push landing doors open manually",
      "They are driven by pressurized hydraulic oil"
    ],
    answer: 1,
    explanation: "Slide 10: Landing doors have no independent motors; the car door is actively driven, and its door cam mechanically couples and pulls the landing door open.",
    lesson: "L10b"
  },
  {
    question: "Which horizontal power-operated sliding door arrangement is PREFERRED for commercial office passenger elevators?",
    options: [
      "Multi-leaf collapsible gate",
      "Single-speed centre opening",
      "Single slide",
      "Three-speed side opening"
    ],
    answer: 1,
    explanation: "Slide 11: Single-speed centre opening doors provide the fastest passenger transfer and balanced aesthetics, making them standard for office passenger lifts.",
    lesson: "L10b"
  },
  {
    question: "When an OVERSPEED GOVERNOR trips at its mechanical setpoint, what physical action does it perform on the governor rope?",
    options: [
      "It cuts the rope with an explosive blade",
      "Its clamping device clamps down rigidly onto the governor rope to arrest its travel",
      "It winds the rope onto a high-speed spool",
      "It releases the rope so it falls into the pit"
    ],
    answer: 1,
    explanation: "Slide 12: The centrifugal governor features a rope clamping device that clamps down onto the rope, causing the rope tension to pull the safety gear rods on the car.",
    lesson: "L10b"
  },
  {
    question: "What type of safety gear is legally RESTRICTED to slow elevators operating at v ≤ 0.63 m/s due to violent stopping shock?",
    options: [
      "Progressive safety gear with clamping springs",
      "Instantaneous safety gear (roller or serrated cam type)",
      "Oil dashpot deceleration gear",
      "Regenerative magnetic safety gear"
    ],
    answer: 1,
    explanation: "Slide 13: Instantaneous safety gears (serrated cam or roller type) arrest the car abruptly and are restricted by safety codes to speeds v ≤ 0.63 m/s.",
    lesson: "L10b"
  },
  {
    question: "Why is a PROGRESSIVE safety gear mandated for elevators with rated speeds v > 0.63 m/s?",
    options: [
      "It is cheaper to manufacture than roller gears",
      "It uses spring-clamped sliding jaws that slide along the guide rail, providing smooth, controlled deceleration within human tolerance",
      "It operates without a governor rope",
      "It can only be reset by a locksmith"
    ],
    answer: 1,
    explanation: "Slide 13: Progressive safety gears use clamping springs and sliding wedges to provide controlled, cushioned braking (0.2g to 1.0g), essential for higher speeds.",
    lesson: "L10b"
  },
  {
    question: "Under what speed restriction must an ENERGY ACCUMULATION (spring) buffer be used in the lift pit?",
    options: [
      "Permitted for all speeds up to 10 m/s",
      "Permitted ONLY for rated speeds v ≤ 1.0 m/s",
      "Permitted only on hydraulic lifts",
      "Permitted only when oil buffers leak"
    ],
    answer: 1,
    explanation: "Slide 13: Energy accumulation type buffers (helical steel springs) store energy without dissipating it and are restricted to rated speeds v ≤ 1.0 m/s.",
    lesson: "L10b"
  },
  {
    question: "How does an ENERGY DISSIPATION (oil) buffer absorb the kinetic energy of an overtraveling car or counterweight?",
    options: [
      "By stretching a rubber spring",
      "By forcing hydraulic fluid through calibrated orifice holes in a cylinder reservoir, converting kinetic energy into heat without rebound",
      "By transferring electric current back into the mains",
      "By lifting the counterweight off the ground"
    ],
    answer: 1,
    explanation: "Slide 13: Energy dissipation (oil) buffers force fluid through orifices when the piston depresses, dissipating impact energy as fluid heat without rebound.",
    lesson: "L10b"
  },
  {
    question: "In a Machine-Room-Less (MRL) elevator system (Slide 14), what is the maximum travel permitted for a rated speed of 1.75 m/s?",
    options: ["21 m", "60 m", "80 m", "200 m"],
    answer: 2,
    explanation: "Slide 14: An MRL system achieves a maximum travel of 80 m at 1.75 m/s (or 1.6 m/s), and 60 m at 1.0 m/s.",
    lesson: "L10b"
  },
  {
    question: "In the standard MRL elevator dimensional drawings, what are the standard CEILING HEIGHT and ENTRANCE HEIGHT (HH)?",
    options: [
      "Ceiling 1800 mm; Entrance 1800 mm",
      "Ceiling 2200 mm; Entrance 2100 mm",
      "Ceiling 2600 mm; Entrance 2400 mm",
      "Ceiling 3000 mm; Entrance 2000 mm"
    ],
    answer: 1,
    explanation: "Slide 14: Standard car ceiling height is 2200 mm, and standard entrance height HH is 2100 mm.",
    lesson: "L10b"
  },
  {
    question: "In a 2:1 ROPED traction elevator, how does the car speed compare to the suspension rope speed passing over the drive sheave?",
    options: [
      "Car speed is twice the rope speed",
      "Car speed is exactly half the rope speed (v_car = 0.5 · v_rope)",
      "Car speed is equal to rope speed",
      "Car speed is four times the rope speed"
    ],
    answer: 1,
    explanation: "Slide 9, 17: 2:1 roping utilizes pulleys on the car and CWT, halving car speed relative to the rope velocity while doubling lifting mechanical advantage.",
    lesson: "L10b"
  },
  {
    question: "What is the purpose of COMPENSATING ROPES in high-rise elevator installations?",
    options: [
      "To provide backup power during blackouts",
      "To balance the shifting weight of heavy suspension wire ropes as the car moves between top and bottom floors",
      "To operate the emergency car door open mechanism",
      "To guide the roller shoes along the T-rails"
    ],
    answer: 1,
    explanation: "Slide 17: Compensating ropes hang beneath the car and counterweight to offset the significant weight transfer of hoist ropes in tall shafts.",
    lesson: "L10b"
  },
  {
    question: "Which advanced motor drive technology utilizes permanent magnet synchronous motors (PMSM) with variable frequency control?",
    options: [
      "Single-speed AC drive",
      "VVVF (Variable Voltage, Variable Frequency) AC drive",
      "Ward-Leonard DC generator set",
      "Rotary converter drive"
    ],
    answer: 1,
    explanation: "Slide 19: VVVF (Variable Voltage Variable Frequency) AC drives power modern gearless PMSM machines with high efficiency and stepless speed control.",
    lesson: "L10b"
  },
  {
    question: "What is the MINIMUM DUTY LOAD legally mandated for a FIREFIGHTING LIFT (Slide 23)?",
    options: ["320 kg", "630 kg", "1000 kg", "2000 kg"],
    answer: 1,
    explanation: "Slide 23: A firefighting lift requires a minimum duty load of 630 kg to transport firefighters and heavy breathing apparatus/hoses.",
    lesson: "L10b"
  },
  {
    question: "What is the MAXIMUM allowable transit time for a firefighting lift to travel the FULL HEIGHT of a building?",
    options: ["30 seconds", "60 seconds", "120 seconds", "180 seconds"],
    answer: 1,
    explanation: "Slide 23: Firefighting lifts must achieve a maximum of 60 seconds to run the full building height from the fire access floor.",
    lesson: "L10b"
  },
  {
    question: "What are the MINIMUM INTERNAL DIMENSIONS (Width × Depth × Height) for a firefighting lift car?",
    options: [
      "0.8 m (W) × 1.0 m (D) × 1.8 m (H)",
      "1.1 m (W) × 1.4 m (D) × 2.0 m (H)",
      "1.5 m (W) × 2.0 m (D) × 2.5 m (H)",
      "2.0 m (W) × 2.0 m (D) × 2.2 m (H)"
    ],
    answer: 1,
    explanation: "Slide 23: Minimum internal dimensions for a firefighting lift car are 1.1 m (W) × 1.4 m (D) × 2.0 m (H).",
    lesson: "L10b"
  },
  {
    question: "Which of the following is a strict statutory requirement regarding LIFT SHAFT services (Slide 24)?",
    options: [
      "Plumbing water and gas pipes should share the lift shaft to save space",
      "The shaft must have NO OTHER SERVICES inside it except those dedicated directly to the lift",
      "Rainwater drainage stacks must be routed through the counterweight zone",
      "Public electrical conduits are encouraged to run along guide rail brackets"
    ],
    answer: 1,
    explanation: "Slide 24: By statutory fire and lift codes, a lift shaft must 'have no other services (except this for the lift)'. Foreign pipes and cables are strictly illegal.",
    lesson: "L10b"
  }
];

// ==========================================
// 5 SHORT ANSWER QUESTIONS (L10b)
// ==========================================
const shortData = [
  {
    type: "compare",
    lesson: "L10b",
    question: "Compare GEARED and GEARLESS traction elevator machines (Slide 5, 6, 15, 16). Discuss: (a) mechanical powertrain and gearbox presence, (b) motor type and rotational speed, (c) maximum elevator rated speed and building height suitability, and (d) operating efficiency, maintenance, and noise generation.",
    modelAnswer: "(a) Mechanical Powertrain & Gearbox:\n• Geared Machine: Incorporates a mechanical reduction gearbox (typically worm-and-gear or helical gears) between the motor and the drive sheave[cite: 12].\n• Gearless Machine: The drive sheave is mounted DIRECTLY onto the motor shaft without any intermediate reduction gearbox[cite: 12].\n\n(b) Motor Type & Rotational Speed:\n• Geared: High-speed electric motor (typically 1000–1500 RPM AC induction motor or DC motor) geared down to turn the sheave at low speed[cite: 12].\n• Gearless: Low-speed, high-torque Permanent Magnet Synchronous Motor (PMSM) or slow-speed DC motor rotating at 50–150 RPM[cite: 12].\n\n(c) Rated Speed & Building Height Suitability:\n• Geared: Best suited for low-to-medium rise buildings with rated speeds typically restricted to v ≤ 2.0–2.5 m/s[cite: 12].\n• Gearless: Benchmark for high-rise, supertall towers; easily achieves express speeds from v = 2.5 m/s up to 10+ m/s[cite: 12].\n\n(d) Efficiency, Maintenance & Noise:\n• Geared: Lower mechanical efficiency (worm gear frictional losses); requires periodic gear oil lubrication and seal maintenance; produces audible gear meshing noise and structural vibration[cite: 12].\n• Gearless: High electrical and mechanical efficiency; zero gear oil (clean/green); whisper-quiet operation; utilizes double-wrap sheaves for superior rope traction grip[cite: 12].",
    tips: "Structure systematically across powertrain (gears vs direct), motor RPM, speed/height thresholds, and efficiency/lubrication maintenance[cite: 12]."
  },
  {
    type: "explain",
    lesson: "L10b",
    question: "The overspeed governor and safety gear form the primary mechanical anti-free-fall chain in elevators (Slide 12–13). (a) Detail the step-by-step sequential process that occurs when a car overspeeds in the downward direction. (b) Explain the critical distinction between Instantaneous Safety Gear and Progressive Safety Gear, and state their governing speed thresholds.",
    modelAnswer: "(a) Sequential Tripping Chain:\n1. Car Overspeeds: As the car descends beyond contract speed v, the closed-loop governor rope spins the machine-room centrifugal governor sheave faster[cite: 12].\n2. Centrifugal Flyweights Trip: Centrifugal force overcomes calibrated springs, flinging weighted arms outward[cite: 12].\n3. Stage 1 (Electrical Cutoff): At ~115% rated speed, a switch trips, cutting power to the drive motor and dropping the mechanical brake shoes[cite: 12].\n4. Stage 2 (Mechanical Rope Clamping): If overspeed continues, the flyweights release a catch that causes a heavy mechanical jaw to clamp down rigidly onto the governor rope[cite: 12].\n5. Safety Gear Actuation: As the car continues descending, the immobilized governor rope pulls the actuating linkage rods on the safety plank beneath the car[cite: 12].\n6. Rail Wedge Locking: Safety gear jaws pull sliding wedges upward, clamping onto the steel T-rails and arresting the car purely through friction[cite: 12].\n\n(b) Instantaneous vs Progressive Safety Gear (Slide 13):\n• Instantaneous Safety Gear (Serrated Cam / Roller): Wedges rigidly into guide rails almost instantly with near-zero slide distance[cite: 12]. Generates extreme deceleration forces; legally restricted ONLY to slow elevators with rated speed v ≤ 0.63 m/s[cite: 12].\n• Progressive Safety Gear: Uses sliding wedges backed by calibrated clamping springs[cite: 12]. The springs allow controlled slippage, cushioning deceleration between 0.2g and 1.0g to protect passengers from spinal injury[cite: 12]. Mandated for all lifts with rated speed v > 0.63 m/s[cite: 12].",
    tips: "Cover the 6-step mechanical sequence (governor ➔ clamp ➔ rod pull ➔ wedge bite) and explain instantaneous (v ≤ 0.63 m/s) vs progressive (v > 0.63 m/s)[cite: 12]."
  },
  {
    type: "scenario",
    lesson: "L10b",
    question: "You are the building services consultant specifying the dedicated Firefighting Lift for a new 35-storey commercial tower in Hong Kong (Slide 23–24). Detail: (a) at least FIVE mandatory car and operational provisions, (b) the statutory full-travel speed criterion, and (c) the 'Pure Shaft' rule governing hoistway building services.",
    modelAnswer: "(a) Mandatory Firefighting Lift Provisions (Slide 23):\n1. Break-Glass Key Switch: Red emergency recall switch located at ground floor lobby to place lift under exclusive fireman control[cite: 12].\n2. Minimum Duty Load: Must have a contract capacity of at least 630 kg (to carry fire crew and heavy hoses/equipment)[cite: 12].\n3. Minimum Car Dimensions: Internal dimensions of at least 1.1 m (Width) × 1.4 m (Depth) × 2.0 m (Height)[cite: 12].\n4. Emergency Car Roof Hatch & Intercom: Features an escape trap door in the ceiling and a dedicated 2-way communication intercom[cite: 12].\n5. Fire Doors & Materials: Constructed of non-combustible materials with 1-hour fire-resisting doors measuring at least 0.8 m (W) × 2.0 m (H)[cite: 12].\n6. Dual Power Supplies: Automatic transfer switch connecting normal mains supply to an emergency standby generator[cite: 12].\n\n(b) Statutory Travel Speed Criterion (Slide 23):\n• The lift must be capable of traveling the FULL HEIGHT of the building from the fire access level to the uppermost floor in a MAXIMUM OF 60 SECONDS (≤ 60 s)[cite: 12].\n\n(c) The 'Pure Shaft' Rule (Slide 24):\n• Statutory lift and fire codes strictly prohibit foreign services inside a lift hoistway[cite: 12].\n• The shaft must contain NO OTHER SERVICES (such as drainage pipes, domestic water plumbing, gas lines, HVAC ducts, or public electrical cables) except those directly required for the lift itself[cite: 12].",
    tips: "Quote the 630 kg minimum load, 1.1×1.4×2.0m car, 60-second full transit limit, dual power, and the absolute ban on foreign pipes/cables in the hoistway[cite: 12]."
  },
  {
    type: "compare",
    lesson: "L10b",
    question: "Compare ENERGY ACCUMULATION buffers with ENERGY DISSIPATION buffers installed in elevator pits (Slide 13). Explain: (a) their internal mechanical mechanisms, (b) the phenomenon of 'rebound' during impact, and (c) the maximum elevator rated speed threshold governing their selection.",
    modelAnswer: "(a) Internal Mechanical Mechanism:\n• Energy Accumulation Buffers: Consist of heavy helical coiled steel springs (or polyurethane elastomeric blocks) mounted on a steel stand or wooden buffer block in the pit[cite: 12].\n• Energy Dissipation Buffers: Hydraulic oil dashpots consisting of a cylinder filled with hydraulic oil, a moving piston/ram, reservoir, and calibrated internal throttling orifice ports[cite: 12].\n\n(b) Impact Dynamics & Rebound Phenomenon:\n• Accumulation (Spring) Buffer: Compresses under impact, converting the car's kinetic energy into elastic strain potential energy[cite: 12]. The energy is STORED, NOT DISSIPATED[cite: 12]. Once compressed, the spring expands violently back, causing severe upward REBOUND that can throw unbelted passengers toward the ceiling[cite: 12].\n• Dissipation (Oil) Buffer: Impact drives the piston down into the cylinder, forcing oil through narrow restriction orifices[cite: 12]. Viscous fluid friction converts 100% of kinetic energy irreversibly into fluid thermal energy (heat)[cite: 12]. There is ZERO REBOUND, bringing the car to a safe, dead stop[cite: 12].\n\n(c) Speed Thresholds for Selection:\n• Energy Accumulation (Spring) Buffers: Strictly restricted to rated speeds v ≤ 1.0 m/s[cite: 12].\n• Energy Dissipation (Oil) Buffers: Mandated for all elevators with rated speeds v > 1.0 m/s, and standard across all commercial traction installations[cite: 12].",
    tips: "Explain spring potential energy storage vs hydraulic orifice viscous heat dissipation; contrast spring rebound vs zero oil rebound; quote the v ≤ 1.0 m/s limit[cite: 12]."
  },
  {
    type: "scenario",
    lesson: "L10b",
    question: "A client is designing a 4-storey prestige commercial gallery and is choosing between a HYDRAULIC LIFT and a MACHINE-ROOM-LESS (MRL) TRACTION LIFT (Slide 14, 20). Compare both options regarding: (a) maximum travel and speed limits, (b) machine room footprint and penthouse impact, (c) structural roof loading, and (d) suitability for heavy freight versus passenger energy efficiency.",
    modelAnswer: "(a) Travel and Speed Limits:\n• Hydraulic Lift: Maximum travel is restricted to 21 m (Slide 20), with rated speed capped at 0.75 m/s[cite: 12].\n• MRL Traction Lift: Achieves travel up to 80 m at speeds of 1.6 to 1.75 m/s (or 60 m at 1.0 m/s) (Slide 14)[cite: 12].\n\n(b) Machine Room Footprint & Penthouse Impact:\n• Hydraulic Lift: Requires NO rooftop penthouse machine room[cite: 12]. The pump/tank unit can be located remotely at the lowest floor/basement up to 10 m away from the shaft[cite: 12].\n• MRL Lift: Eliminates the machine room entirely; slim gearless PMSM tractor fits inside the hoistway overhead and controller fits into landing wall jambs[cite: 12]. Both preserve building architectural sightlines[cite: 12].\n\n(c) Structural Loading on Roof:\n• Hydraulic Lift: Zero structural loads on the roof structure; all lifting thrust is pushed directly down into the ground/pit floor slab[cite: 12].\n• MRL Lift: Traction loads are hung inside the top hoistway on guide rails or concrete shaft walls, requiring structural header design[cite: 12].\n\n(d) Heavy Freight vs Passenger Energy Efficiency:\n• Hydraulic Lift: Ideal for extremely heavy loads (freight, vehicles, museum exhibits) and smooth leveling accuracy, but energy inefficient (pump motor runs hot and lifts entire car mass without counterweight)[cite: 11, 12].\n• MRL Lift: Far higher energy efficiency (counterweighted VVVF gearless drive recovers energy, saving up to 50% power)[cite: 11, 12]; ideal for prestige passenger galleries with high traffic cycles[cite: 12].",
    tips: "Highlight 21m/0.75m/s (hydraulic) vs 80m/1.75m/s (MRL), zero roof loading on hydraulic, and counterweighted VVVF energy savings on MRL[cite: 11, 12]."
  }
];

// ==========================================
// RENDER & DOM BINDINGS
// ==========================================
function renderNotes() {
  const c = document.getElementById('notesContainer');
  c.innerHTML = '';
  notesData.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.id = topic.id;
    let sectionsHTML = '';
    topic.sections.forEach(sec => {
      sectionsHTML += `
        <h3 style="margin-top:18px;margin-bottom:6px;color:#34495e;font-size:16px;border-bottom:1px dashed #dce1e6;padding-bottom:4px;">${escapeHtml(sec.title)}</h3>
        <div class="lang-pair">
          <div class="lang-cell zh">
            <div class="lang-label">中文重點 / Cantonese &amp; Chinese</div>
            ${sec.zh}
          </div>
          <div class="lang-cell en">
            <div class="lang-label">English Notes</div>
            ${sec.en}
          </div>
        </div>`;
    });
    let diagramHTML = '';
    if (topic.diagram) {
      diagramHTML = `
        <div class="diagram-block">
          <div class="diagram-title">⚡ SCADA Interactive Schematic / 工業級動態安裝原理圖</div>
          ${topic.diagram}
          ${topic.diagramCaption ? '<div class="diagram-caption">' + escapeHtml(topic.diagramCaption) + '</div>' : ''}
        </div>`;
    }
    card.innerHTML = `
      <div class="topic-header">
        <div class="topic-icon">${topic.icon}</div>
        <div class="topic-title">
          <h2>${escapeHtml(topic.title)} <span style="color:#7f8c8d;font-weight:normal;font-size:14px;">/ ${escapeHtml(topic.titleZh)}</span></h2>
        </div>
      </div>
      ${sectionsHTML}
      ${diagramHTML}`;
    c.appendChild(card);
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledAnswers = {};
function renderMC() {
  const container = document.getElementById('mcContainer');
  container.innerHTML = '';
  mcData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = 'mc-q' + index;
    const indices = q.options.map((_, i) => i);
    shuffleArray(indices);
    const newAnswerIndex = indices.indexOf(q.answer);
    shuffledAnswers[index] = newAnswerIndex;
    let optionsHTML = '';
    indices.forEach((origIdx, displayIdx) => {
      const opt = q.options[origIdx];
      const safeOpt = escapeHtml(opt);
      optionsHTML += `
        <label id="mc-q${index}-opt${displayIdx}">
          <input type="radio" name="mc${index}" value="${displayIdx}" onchange="recordAnswer(${index}, ${displayIdx})">
          ${safeOpt}
        </label>`;
    });
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">Q${index + 1}</span>
        <span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>
      </div>
      <div class="q-text">${escapeHtml(q.question)}</div>
      <div class="options">${optionsHTML}</div>
      <div class="explanation" id="mc-exp${index}">
        <strong>Explanation / 詳細解釋：</strong>${escapeHtml(q.explanation)}
      </div>`;
    container.appendChild(card);
  });
}

function renderShort() {
  const c = document.getElementById('shortContainer');
  c.innerHTML = '';
  shortData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card short-q';
    card.id = 'short-q' + index;
    const typeTag = typeLabels[q.type] || '';
    const lessonTag = `<span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>`;
    const safeQuestion = escapeHtml(q.question).replace(/\n/g, '<br>');
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">S${index + 1}</span>
        ${typeTag}
        ${lessonTag}
      </div>
      <div class="q-text">${safeQuestion}</div>
      <textarea id="short-input${index}" placeholder="Type your calculations or engineering analysis here / 喺度輸入你的計算或工程分析答案..."></textarea>
      <div class="answer-tips">💡 Tip / 提示：${escapeHtml(q.tips || 'Key engineering concepts')}</div>
      <div class="model-answer" id="short-ans${index}">
        <strong>📝 Model Answer / 規範參考答案：</strong>
        <pre></pre>
      </div>`;
    card.querySelector('pre').textContent = q.modelAnswer;
    c.appendChild(card);
  });
}

let userAnswers = {};
let timerInterval;
let timeLeft = 90 * 60;

function recordAnswer(qIndex, optIndex) {
  userAnswers[qIndex] = optIndex;
  updateStats();
}

function updateStats() {
  const answered = Object.keys(userAnswers).length;
  const total = mcData.length;
  document.getElementById('answeredCount').textContent = answered + '/' + total;
  const percent = (answered / total) * 100;
  document.getElementById('progressBar').style.width = percent + '%';
}

function showSection(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (section === 'notes') {
    document.getElementById('notesSection').classList.add('active');
    document.querySelectorAll('.tab-btn')[0].classList.add('active');
  } else if (section === 'part1') {
    document.getElementById('part1Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[1].classList.add('active');
  } else if (section === 'part2') {
    document.getElementById('part2Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[2].classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function submitMC() {
  let correct = 0;
  let reviewHTML = '';
  mcData.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const correctDisplayAnswer = shuffledAnswers[index];
    const isCorrect = userAnswer === correctDisplayAnswer;
    const card = document.getElementById('mc-q' + index);
    const explanation = document.getElementById('mc-exp' + index);
    explanation.style.display = 'block';
    if (isCorrect) {
      correct++;
      card.classList.add('answered');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item correct">Q${index + 1} ✓ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    } else {
      card.classList.add('wrong');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('incorrect');
      document.getElementById('mc-q' + index + '-opt' + correctDisplayAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item wrong">Q${index + 1} ✗ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    }
  });
  const percent = Math.round((correct / mcData.length) * 100);
  document.getElementById('finalScore').textContent = percent + '%';
  document.getElementById('scoreCircle').style.setProperty('--percent', percent);
  let msg = '';
  if (percent >= 80) msg = '🎉 卓越！你已經徹底掌握電梯安裝工程、安全鉗與限速器機制的精髓！';
  else if (percent >= 60) msg = '👍 做得好！請仔細閱讀答錯題目的詳細機械原理與法規解釋。';
  else if (percent >= 50) msg = '✅ 及格。建議重溫安全鉗速度限值、MRL無機房邊界與消防電梯規範。';
  else msg = '📚 繼續努力！點擊 Notes 重新溫習電梯安裝章節後再試一次。';
  document.getElementById('resultMsg').textContent = msg;
  document.getElementById('scoreDisplay').textContent = percent + '%';
  document.getElementById('reviewSection').innerHTML = `<h3>MC Result: ${correct}/${mcData.length} (${percent}%)</h3><div>${reviewHTML}</div>`;
  document.getElementById('resultPanel').style.display = 'block';
  document.getElementById('resultPanel').scrollIntoView({ behavior: 'auto' });
  clearInterval(timerInterval);
}

function showAnswers() {
  shortData.forEach((q, index) => {
    document.getElementById('short-ans' + index).style.display = 'block';
  });
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    document.getElementById('timer').textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    if (timeLeft <= 0) { clearInterval(timerInterval); alert('Time is up!'); submitMC(); }
    if (timeLeft <= 300) document.getElementById('timer').style.color = '#e74c3c';
  }, 1000);
}

document.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') setTimeout(() => e.target.blur(), 100);
});

window.onload = function() {
  renderNotes();
  renderMC();
  renderShort();
  startTimer();
  updateStats();
};

window.addEventListener('scroll', function() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  if (window.pageYOffset > 400) btn.classList.add('show');
  else btn.classList.remove('show');
});
