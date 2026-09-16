/**
 * Anime Draft Wheel - 1,000+ Characters & Roster Editor Game Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM References
  const body = document.body;
  const spinBtn = document.getElementById('spin-btn');
  const spinText = document.getElementById('spin-text');
  const quickRandomBtn = document.getElementById('quick-random-btn');
  const resetGameBtn = document.getElementById('reset-game-btn');
  const soundBtn = document.getElementById('sound-btn');
  const openSetupBtn = document.getElementById('open-setup-btn');
  const openRosterBtn = document.getElementById('open-roster-btn');

  const tabOp = document.getElementById('tab-onepiece');
  const tabNr = document.getElementById('tab-naruto');
  const tabMv = document.getElementById('tab-marvel');
  const tabAll = document.getElementById('tab-all');
  const badgeOpCount = document.getElementById('badge-op-count');
  const badgeNrCount = document.getElementById('badge-nr-count');
  const badgeMvCount = document.getElementById('badge-mv-count');
  const badgeAllCount = document.getElementById('badge-all-count');
  const btnTotalCount = document.getElementById('btn-total-count');
  const remainingCountEl = document.getElementById('remaining-count');
  const tickerName = document.getElementById('ticker-name');
  const playersDock = document.getElementById('players-dock');

  // Firebase Configuration & Realtime Sync
  const firebaseConfig = {
    apiKey: "AIzaSyDMi8s9teCm49wx4gLN0BTFDT0cJy59AfM",
    authDomain: "anime-auction-22897.firebaseapp.com",
    databaseURL: "https://anime-auction-22897-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "anime-auction-22897",
    storageBucket: "anime-auction-22897.firebasestorage.app",
    messagingSenderId: "801239974207",
    appId: "1:801239974207:web:61e413fa5ec33846b0d38a"
  };

  let db = null;
  try {
    if (typeof firebase !== 'undefined') {
      firebase.initializeApp(firebaseConfig);
      db = firebase.database();
    }
  } catch (e) {
    console.warn("Firebase initialized:", e);
  }

  // Multiplayer DOM Elements
  const openMultiplayerBtn = document.getElementById('open-multiplayer-btn');
  const multiplayerModal = document.getElementById('multiplayer-modal');
  const closeMultiplayerBtn = document.getElementById('close-multiplayer-btn');
  const mpNavTabs = document.querySelectorAll('.mp-tab-btn');
  const mpCreateTab = document.getElementById('mp-create-tab');
  const mpJoinTab = document.getElementById('mp-join-tab');
  const mpLobbyStage = document.getElementById('mp-lobby-stage');
  const mpHostName = document.getElementById('mp-host-name');
  const mpBudgetSelect = document.getElementById('mp-budget-select');
  const mpUniverseSelect = document.getElementById('mp-universe-select');
  const mpCreateRoomBtn = document.getElementById('mp-create-room-btn');
  const mpJoinCodeInput = document.getElementById('mp-join-code-input');
  const mpJoinNameInput = document.getElementById('mp-join-name-input');
  const mpJoinRoomBtn = document.getElementById('mp-join-room-btn');
  const mpLobbyCodeDisplay = document.getElementById('mp-lobby-code-display');
  const mpLobbyCopyBtn = document.getElementById('mp-lobby-copy-btn');
  const mpLobbyPlayersGrid = document.getElementById('mp-lobby-players-grid');
  const mpLobbyCountBadge = document.getElementById('mp-lobby-count-badge');
  const mpLobbyHostControls = document.getElementById('mp-lobby-host-controls');
  const mpLobbyStartBtn = document.getElementById('mp-lobby-start-btn');
  const mpLobbyWaitingNotice = document.getElementById('mp-lobby-waiting-notice');

  const activeRoomBar = document.getElementById('active-room-bar');
  const activeRoomCodeDisplay = document.getElementById('active-room-code-display');
  const activeRoomPlayerName = document.getElementById('active-room-player-name');
  const activeRoomRoleBadge = document.getElementById('active-room-role-badge');
  const shareRoomBtn = document.getElementById('share-room-btn');
  const leaveRoomBtn = document.getElementById('leave-room-btn');
  const mpHeaderStatusDot = document.getElementById('mp-header-status-dot');

  // Reveal Modal Elements
  const modal = document.getElementById('character-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const playerAssignBtns = document.getElementById('player-assign-btns');
  const posterCard = document.getElementById('poster-card');
  const claimBanner = document.getElementById('claim-banner');
  const cardHeaderTitle = document.getElementById('card-header-title');
  const cardHeaderSubtext = document.getElementById('card-header-subtext');
  const charImg = document.getElementById('char-img');
  const charEpithet = document.getElementById('char-epithet');
  const charName = document.getElementById('char-name');
  const currencySymbol = document.getElementById('currency-symbol');
  const charBounty = document.getElementById('char-bounty');
  const charPowerLevel = document.getElementById('char-power-level');
  const charPowerTier = document.getElementById('char-power-tier');
  const charAffiliation = document.getElementById('char-affiliation');
  const charRole = document.getElementById('char-role');
  const charPower = document.getElementById('char-power');
  const charOrigin = document.getElementById('char-origin');
  const charTechniques = document.getElementById('char-techniques');
  const charQuote = document.getElementById('char-quote');

  const labelAffiliation = document.getElementById('label-affiliation');
  const labelRole = document.getElementById('label-role');
  const labelPower = document.getElementById('label-power');
  const labelTechniques = document.getElementById('label-techniques');

  // Bidding Arena Elements
  const biddingArena = document.querySelector('.bidding-arena');
  const bidTabBtns = document.querySelectorAll('.bid-tab-btn');
  const panelLiveBid = document.getElementById('panel-live-bid');
  const panelSecretBid = document.getElementById('panel-secret-bid');
  const panelDirectAssign = document.getElementById('panel-direct-assign');

  // Live Auction Elements
  const liveHighestBid = document.getElementById('live-highest-bid');
  const liveHighestBidder = document.getElementById('live-highest-bidder');
  const liveActiveTurnBadge = document.getElementById('live-active-turn-badge');
  const liveActivePurse = document.getElementById('live-active-purse');
  const quickRaiseBtns = document.querySelectorAll('.btn-raise');
  const liveCustomBidInput = document.getElementById('live-custom-bid-input');
  const liveSubmitCustomBtn = document.getElementById('live-submit-custom-btn');
  const livePassBtn = document.getElementById('live-pass-btn');
  const liveSkipBtn = document.getElementById('live-skip-btn');
  const directSkipBtn = document.getElementById('direct-skip-btn');
  const liveAuctionLog = document.getElementById('live-auction-log');

  // Secret Auction Elements
  const secretInputStage = document.getElementById('secret-input-stage');
  const secretRevealStage = document.getElementById('secret-reveal-stage');
  const secretCurrentPlayerName = document.getElementById('secret-current-player-name');
  const secretCurrentPlayerPurse = document.getElementById('secret-current-player-purse');
  const secretBidInput = document.getElementById('secret-bid-input');
  const secretPeekToggle = document.getElementById('secret-peek-toggle');
  const secretPresetBtns = document.querySelectorAll('.btn-quick-secret');
  const secretProgressFill = document.getElementById('secret-progress-fill');
  const secretProgressText = document.getElementById('secret-progress-text');
  const secretLockBidBtn = document.getElementById('secret-lock-bid-btn');
  const secretBidsGrid = document.getElementById('secret-bids-grid');
  const secretClaimWinnerBtn = document.getElementById('secret-claim-winner-btn');

  // Character Manager Modal Elements
  const rosterModal = document.getElementById('roster-modal');
  const closeRosterBtn = document.getElementById('close-roster-btn');
  const rosterSearchInput = document.getElementById('roster-search-input');
  const rosterUniverseFilter = document.getElementById('roster-universe-filter');
  const deleteAllRosterBtn = document.getElementById('delete-all-roster-btn');
  const rosterTableBody = document.getElementById('roster-table-body');
  const editorTotalCount = document.getElementById('editor-total-count');
  const toggleAddFormBtn = document.getElementById('toggle-add-form-btn');
  const resetDefaultRosterBtn = document.getElementById('reset-default-roster-btn');

  // Edit Form Elements
  const editFormCard = document.getElementById('character-edit-form');
  const editCharId = document.getElementById('edit-char-id');
  const formCharName = document.getElementById('form-char-name');
  const formCharUniverse = document.getElementById('form-char-universe');
  const formCharEpithet = document.getElementById('form-char-epithet');
  const formCharAffiliation = document.getElementById('form-char-affiliation');
  const formCharBounty = document.getElementById('form-char-bounty');
  const formCharPower = document.getElementById('form-char-power');
  const cancelEditBtn = document.getElementById('cancel-edit-btn');
  const saveCharFormBtn = document.getElementById('save-char-form-btn');

  // Setup Modal
  const setupModal = document.getElementById('setup-modal');
  const closeSetupBtn = document.getElementById('close-setup-btn');
  const budgetSlider = document.getElementById('budget-slider');
  const budgetDisplay = document.getElementById('budget-display');
  const maxPicksSlider = document.getElementById('max-picks-slider');
  const maxPicksDisplay = document.getElementById('max-picks-display');
  const picksPresetBtns = document.querySelectorAll('.btn-picks-preset');
  const startGameBtn = document.getElementById('start-game-btn');
  const resetNewGameBtn = document.getElementById('reset-new-game-btn');
  const pCountBtns = document.querySelectorAll('.p-count-btn[data-count]');
  const playerNamesInputsContainer = document.getElementById('player-names-inputs');
  const setupAddPlayerBtn = document.getElementById('setup-add-player-btn');
  const setupAddPlayerTopBtn = document.getElementById('setup-add-player-top-btn');
  const btnPlayerCount = document.getElementById('btn-player-count');
  const setupPlayerCountDisplay = document.getElementById('setup-player-count-display');
  const setupPlayerTotalTag = document.getElementById('setup-player-total-tag');
  const mpPicksSelect = document.getElementById('mp-picks-select');

  // Victory / Complete Modal
  const victoryModal = document.getElementById('victory-modal');
  const victoryLeaderboard = document.getElementById('victory-leaderboard');
  const closeVictoryBtn = document.getElementById('close-victory-btn');
  const restartVictoryBtn = document.getElementById('restart-victory-btn');
  const victoryBattleBtn = document.getElementById('victory-battle-btn');

  // Battle Arena Modal Elements
  const openBattleBtn = document.getElementById('open-battle-btn');
  const battleModal = document.getElementById('battle-modal');
  const closeBattleBtn = document.getElementById('close-battle-btn');
  const battleP1Select = document.getElementById('battle-p1-select');
  const battleP2Select = document.getElementById('battle-p2-select');
  const battleCardP1 = document.getElementById('battle-card-p1');
  const battleCardP2 = document.getElementById('battle-card-p2');
  const battleNameP1 = document.getElementById('battle-name-p1');
  const battleNameP2 = document.getElementById('battle-name-p2');
  const battlePowerP1 = document.getElementById('battle-power-p1');
  const battlePowerP2 = document.getElementById('battle-power-p2');
  const battleHpP1 = document.getElementById('battle-hp-p1');
  const battleHpP2 = document.getElementById('battle-hp-p2');
  const battleRosterP1 = document.getElementById('battle-roster-p1');
  const battleRosterP2 = document.getElementById('battle-roster-p2');
  const battleClashIcon = document.getElementById('battle-clash-icon');
  const battleRoundBadge = document.getElementById('battle-round-badge');
  const battleCombatFeed = document.getElementById('battle-combat-feed');
  const startBattleSimBtn = document.getElementById('start-battle-sim-btn');

  // Player Color Palette (Supports 12+ unique colors)
  const PLAYER_COLOR_CLASSES = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12'];
  const PLAYER_COLOR_HEX = {
    p1: '#ef4444',
    p2: '#38bdf8',
    p3: '#10b981',
    p4: '#a855f7',
    p5: '#f59e0b',
    p6: '#06b6d4',
    p7: '#ec4899',
    p8: '#84cc16',
    p9: '#f43f5e',
    p10: '#8b5cf6',
    p11: '#14b8a6',
    p12: '#ea580c'
  };

  // --- GAME STATE ---
  let masterRoster = getSavedRoster(); // 150 top characters loaded
  let currentUniverse = 'onepiece'; // 'onepiece', 'naruto', 'marvel', 'all'
  let activePools = {
    onepiece: [],
    naruto: [],
    marvel: [],
    all: []
  };

  let numPlayers = 2;
  let startingBudget = 100000; // 1 Lakh min (max 2 Lakhs)
  let maxSquadSize = 5; // Default 5 picks per player (0 = unlimited)
  let currentPlayerIndex = 0;
  let players = [];
  let setupPlayersList = [];

  // Multiplayer State
  let isMultiplayer = false;
  let currentRoomCode = null;
  let localPlayerId = 'p_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 9);
  let localPlayerName = 'Player ' + Math.floor(1 + Math.random() * 99);
  let isRoomHost = false;
  let isRemoteSpinning = false;
  let lastProcessedSpinId = null;

  let pendingCharacter = null;
  let pendingSliceIndex = -1;

  // Bidding & Auction State
  let activeBiddingTab = 'live'; // 'live', 'secret', 'direct'
  let liveAuction = {
    currentBid: 0,
    highestBidderIndex: -1,
    activeBidders: [],
    turnPointer: 0,
    hasConcluded: false
  };
  let secretAuction = {
    stepIndex: 0,
    bids: {},
    winnerIndex: -1,
    winningBid: 0,
    hasConcluded: false
  };

  // Setup Confetti
  const confetti = new ConfettiCannon('confetti-canvas');

  // Setup Wheel Engine with Live Ticker onTick Listener
  const wheel = new AnimeWheel(
    'wheel-canvas',
    'flapper-svg',
    (selectedChar, sliceIndex) => {
      if (!selectedChar) {
        const pool = activePools[currentUniverse] || [];
        selectedChar = pool[sliceIndex] || pool[0];
      }
      if (!selectedChar) return;
      pendingCharacter = selectedChar;
      pendingSliceIndex = sliceIndex;

      if (isMultiplayer && currentRoomCode && db) {
        const myIndex = players.findIndex(p => p.id === localPlayerId);
        if (myIndex === currentPlayerIndex || isRoomHost) {
          db.ref(`rooms/${currentRoomCode}/currentDraft`).set({
            isOpen: true,
            char: selectedChar,
            sliceIndex: sliceIndex,
            activeTab: 'live',
            liveAuction: {
              currentBid: 0,
              highestBidderIndex: -1,
              activeBidders: players.map((_, i) => i),
              turnPointer: currentPlayerIndex % players.length,
              hasConcluded: false,
              logs: [`Auction started for ${selectedChar.name}! Min raise: 1,000.`]
            },
            secretAuction: {
              stepIndex: 0,
              bids: {},
              lockedIds: [],
              winnerIndex: -1,
              winningBid: 0,
              hasConcluded: false
            }
          });
          db.ref(`rooms/${currentRoomCode}/currentSpin`).remove();
        }
      } else {
        showDraftModal(selectedChar);
      }
    },
    (passingChar) => {
      if (passingChar) {
        const icon = passingChar.universe === 'naruto' ? '🍃' : '☠️';
        tickerName.textContent = `${icon} ${passingChar.name} (${passingChar.affiliation || ''})`;
      }
    }
  );

  // Initialize Game (Restore previous session on reload or start fresh)
  if (!restoreGameState()) {
    initGame(2, 75000);
  }

  // Check URL for Auto Room Invite (?room=CODE)
  const urlParams = new URLSearchParams(window.location.search);
  const inviteRoom = urlParams.get('room');
  if (inviteRoom) {
    setTimeout(() => {
      openMultiplayerModal();
      switchMpTab('join');
      if (mpJoinCodeInput) mpJoinCodeInput.value = inviteRoom.toUpperCase();
    }, 400);
  }

  // --- MULTIPLAYER ENGINE & REALTIME SYNC ---

  function openMultiplayerModal() {
    if (isMultiplayer && currentRoomCode) {
      showLobbyStage(currentRoomCode);
    } else {
      switchMpTab('create');
    }
    multiplayerModal.showModal();
  }

  function switchMpTab(tabName) {
    mpNavTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-tab') === tabName));
    mpCreateTab.style.display = tabName === 'create' ? 'block' : 'none';
    mpJoinTab.style.display = tabName === 'join' ? 'block' : 'none';
    mpLobbyStage.style.display = 'none';
  }

  function showLobbyStage(code) {
    mpCreateTab.style.display = 'none';
    mpJoinTab.style.display = 'none';
    mpLobbyStage.style.display = 'block';
    mpLobbyCodeDisplay.textContent = code;
  }

  function createOnlineRoom() {
    if (!db) {
      alert("⚠️ Firebase Realtime Database is not connected. Please verify your internet connection.");
      return;
    }

    const hostName = (mpHostName.value || '').trim() || 'Captain Luffy';
    localPlayerName = hostName;
    sessionStorage.setItem('anime_player_name', hostName);

    const budget = Math.min(200000, Math.max(100000, parseInt(mpBudgetSelect.value || '100000')));
    startingBudget = budget;
    const universe = mpUniverseSelect.value || 'onepiece';
    const roomMaxPicks = parseInt(mpPicksSelect ? mpPicksSelect.value : '5') || 0;
    maxSquadSize = roomMaxPicks;

    const randomSuffix = Math.floor(10 + Math.random() * 90);
    const code = (universe === 'naruto' ? 'NR' : (universe === 'all' ? 'AN' : 'OP')) + '-' + randomSuffix;

    const hostPlayer = {
      id: localPlayerId,
      name: hostName,
      colorClass: 'p1',
      money: budget,
      characters: [],
      isHost: true
    };

    const initialRoomData = {
      roomCode: code,
      status: 'lobby',
      universe: universe,
      startingBudget: budget,
      maxSquadSize: roomMaxPicks,
      hostId: localPlayerId,
      players: [hostPlayer],
      currentPlayerIndex: 0,
      currentSpin: null,
      currentDraft: null,
      createdAt: Date.now()
    };

    db.ref('rooms/' + code).set(initialRoomData).then(() => {
      isMultiplayer = true;
      isRoomHost = true;
      currentRoomCode = code;
      subscribeToRoom(code);
      showLobbyStage(code);
    }).catch(err => {
      alert("Error creating room: " + err.message);
    });
  }

  function joinOnlineRoom(code, name) {
    if (!db) {
      alert("⚠️ Firebase Realtime Database is not connected.");
      return;
    }

    const cleanedCode = (code || '').trim().toUpperCase();
    if (!cleanedCode) {
      alert("Please enter a valid Room Code!");
      return;
    }

    const pName = (name || '').trim() || 'Shinobi ' + Math.floor(10 + Math.random() * 90);
    localPlayerName = pName;
    sessionStorage.setItem('anime_player_name', pName);

    db.ref('rooms/' + cleanedCode).once('value').then(snapshot => {
      const roomData = snapshot.val();
      if (!roomData) {
        alert(`❌ Room "${cleanedCode}" not found! Please check the code.`);
        return;
      }

      const roomPlayers = roomData.players || [];
      const existingIdx = roomPlayers.findIndex(p => p.id === localPlayerId);

      if (existingIdx === -1) {
        const newPlayer = {
          id: localPlayerId,
          name: pName,
          colorClass: `p${(roomPlayers.length % 12) + 1}`,
          money: roomData.startingBudget || 75000,
          characters: [],
          isHost: false
        };
        roomPlayers.push(newPlayer);
        db.ref('rooms/' + cleanedCode + '/players').set(roomPlayers);
      } else {
        roomPlayers[existingIdx].name = pName;
        db.ref('rooms/' + cleanedCode + '/players').set(roomPlayers);
      }

      isMultiplayer = true;
      isRoomHost = (roomData.hostId === localPlayerId);
      currentRoomCode = cleanedCode;
      subscribeToRoom(cleanedCode);

      if (roomData.status === 'playing') {
        multiplayerModal.close();
      } else {
        showLobbyStage(cleanedCode);
      }
    }).catch(err => {
      alert("Error joining room: " + err.message);
    });
  }

  function leaveOnlineRoom() {
    if (!confirm('Leave this online room?')) return;
    if (currentRoomCode && db) {
      db.ref('rooms/' + currentRoomCode).off();
    }
    isMultiplayer = false;
    currentRoomCode = null;
    isRoomHost = false;
    activeRoomBar.style.display = 'none';
    if (mpHeaderStatusDot) mpHeaderStatusDot.classList.remove('online');
    initGame(2, 75000);
  }

  function subscribeToRoom(code) {
    if (mpHeaderStatusDot) mpHeaderStatusDot.classList.add('online');
    activeRoomBar.style.display = 'flex';
    activeRoomCodeDisplay.textContent = code;
    activeRoomPlayerName.textContent = localPlayerName;
    activeRoomRoleBadge.textContent = isRoomHost ? 'Host 👑' : 'Player 📱';

    db.ref('rooms/' + code).on('value', snapshot => {
      const roomData = snapshot.val();
      if (!roomData) return;
      handleRemoteRoomUpdate(roomData);
    });
  }

  function handleRemoteRoomUpdate(roomData) {
    players = roomData.players || [];
    numPlayers = players.length;
    startingBudget = roomData.startingBudget || 75000;
    maxSquadSize = roomData.maxSquadSize !== undefined ? roomData.maxSquadSize : maxSquadSize;
    currentPlayerIndex = roomData.currentPlayerIndex || 0;
    isRoomHost = (roomData.hostId === localPlayerId);

    if (roomData.universe && roomData.universe !== currentUniverse) {
      setUniverse(roomData.universe);
    }

    if (roomData.status === 'lobby') {
      renderLobbyPlayers(players, roomData.hostId);
      mpLobbyHostControls.style.display = isRoomHost ? 'block' : 'none';
      mpLobbyWaitingNotice.style.display = isRoomHost ? 'none' : 'block';
      return;
    }

    if (roomData.status === 'playing') {
      if (multiplayerModal.open) {
        multiplayerModal.close();
      }
      renderPlayerDock();

      // Synchronize active pool across all clients based on drafted squads
      const draftedIds = new Set();
      players.forEach(p => {
        (p.characters || []).forEach(c => {
          if (c && c.id) draftedIds.add(c.id);
        });
      });
      const uni = roomData.universe || currentUniverse;
      activePools[uni] = masterRoster.filter(c => (uni === 'all' || c.universe === uni) && !draftedIds.has(c.id));
      if (!wheel.isSpinning) {
        wheel.setItems(activePools[uni]);
      }

      updateCounters();
      updateMultiplayerSpinState();

      // Remote Wheel Spin Sync - only fires once per unique spinId
      if (roomData.currentSpin && roomData.currentSpin.isSpinning && roomData.currentSpin.spinId) {
        if (roomData.currentSpin.spinId !== lastProcessedSpinId) {
          lastProcessedSpinId = roomData.currentSpin.spinId;
          if (!wheel.isSpinning) {
            wheel.spin(roomData.currentSpin.sliceIndex);
          }
        }
      }

      // Remote Draft Modal Sync
      if (roomData.currentDraft && roomData.currentDraft.isOpen) {
        pendingCharacter = roomData.currentDraft.char;
        pendingSliceIndex = roomData.currentDraft.sliceIndex;

        if (!modal.open) {
          populateModalData(pendingCharacter);
          claimBanner.textContent = `🎯 Character Selected! Place Bids or Assign:`;
          claimBanner.style.background = pendingCharacter.universe === 'naruto' ? '#f77f00' : '#2b9348';
          biddingArena.style.display = 'block';
          switchBiddingTab(roomData.currentDraft.activeTab || 'live');
          renderDirectAssignBtns();
          modal.showModal();
          confetti.fire(pendingCharacter ? pendingCharacter.universe : 'onepiece');
        }

        // Sync Live Auction
        if (roomData.currentDraft.liveAuction) {
          liveAuction = roomData.currentDraft.liveAuction;
          if (liveAuction.logs && liveAuctionLog) {
            liveAuctionLog.innerHTML = liveAuction.logs.map(log => `<div class="log-entry">${log}</div>`).join('');
            liveAuctionLog.scrollTop = liveAuctionLog.scrollHeight;
          }
          renderLiveAuctionUI();
        }

        // Sync Secret Auction
        if (roomData.currentDraft.secretAuction) {
          secretAuction = roomData.currentDraft.secretAuction;
          if (secretAuction.hasConcluded) {
            renderSecretRevealUI();
          } else {
            renderSecretInputUI();
          }
        }
      } else {
        if (modal.open) {
          modal.close();
          pendingCharacter = null;
          pendingSliceIndex = -1;
        }
      }
    }
  }

  function updateMultiplayerSpinState() {
    if (!isMultiplayer) return;
    const myIndex = players.findIndex(p => p.id === localPlayerId);
    const isMyTurn = (myIndex === currentPlayerIndex);

    if (isMyTurn) {
      spinBtn.disabled = wheel.isSpinning;
      spinText.textContent = 'YOUR TURN TO SPIN! ⚓';
      spinBtn.style.boxShadow = '0 0 25px rgba(245, 158, 11, 0.9)';
    } else if (isRoomHost) {
      spinBtn.disabled = wheel.isSpinning;
      const turnP = players[currentPlayerIndex];
      spinText.textContent = `Spin for ${turnP ? turnP.name : 'Player'} (Host) 👑`;
      spinBtn.style.boxShadow = '0 0 15px rgba(234, 88, 12, 0.6)';
    } else {
      spinBtn.disabled = true;
      const turnP = players[currentPlayerIndex];
      spinText.textContent = `${turnP ? turnP.name : 'Player'}'s Turn...`;
      spinBtn.style.boxShadow = 'none';
    }
  }

  function renderLobbyPlayers(playersList, hostId) {
    mpLobbyPlayersGrid.innerHTML = '';
    mpLobbyCountBadge.textContent = `${playersList.length} Player${playersList.length > 1 ? 's' : ''}`;

    playersList.forEach((p) => {
      const chip = document.createElement('div');
      chip.className = 'lobby-player-chip';
      const isYou = (p.id === localPlayerId);
      const isH = (p.id === hostId);

      chip.innerHTML = `
        <div class="lobby-player-info">
          <span class="player-color-dot" style="background: ${PLAYER_COLOR_HEX[p.colorClass] || '#ffd166'};"></span>
          <span>${p.name} ${isH ? '👑 (Host)' : ''}</span>
          ${isYou ? '<span class="lobby-player-tag-you">YOU</span>' : ''}
        </div>
        <span class="live-pulse-dot" title="Online"></span>
      `;
      mpLobbyPlayersGrid.appendChild(chip);
    });
  }

  function launchGameFromLobby() {
    if (!db || !currentRoomCode) return;
    db.ref('rooms/' + currentRoomCode + '/status').set('playing');
  }

  // --- SESSION PERSISTENCE & AUTO-RESUME ---
  const GAME_SESSION_KEY = 'anime_draft_live_session_v11';

  function saveGameState() {
    if (isMultiplayer) return; // In multiplayer, Firebase database stores state
    try {
      const state = {
        players: players,
        numPlayers: numPlayers,
        startingBudget: startingBudget,
        maxSquadSize: maxSquadSize,
        currentPlayerIndex: currentPlayerIndex,
        currentUniverse: currentUniverse,
        activePools: activePools
      };
      localStorage.setItem(GAME_SESSION_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save live game session:', e);
    }
  }

  function restoreGameState() {
    try {
      const saved = localStorage.getItem(GAME_SESSION_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state && Array.isArray(state.players) && state.players.length > 0) {
          players = state.players;
          numPlayers = state.numPlayers || state.players.length;
          startingBudget = state.startingBudget || 75000;
          maxSquadSize = state.maxSquadSize !== undefined ? state.maxSquadSize : 5;
          currentPlayerIndex = state.currentPlayerIndex || 0;
          currentUniverse = state.currentUniverse || 'onepiece';

          if (state.activePools && (state.activePools.onepiece || state.activePools.naruto || state.activePools.marvel)) {
            activePools = state.activePools;
          } else {
            refreshActivePools();
          }

          renderPlayerDock();
          setUniverse(currentUniverse);
          spinBtn.disabled = areAllSquadsFull();
          return true;
        }
      }
    } catch (e) {
      console.warn('Failed to restore live game session:', e);
    }
    return false;
  }

  function clearSavedGameState() {
    try {
      localStorage.removeItem(GAME_SESSION_KEY);
    } catch (e) {}
  }

  // --- SQUAD LIMIT & DRAFT COMPLETION HELPERS ---

  function isPlayerSquadFull(playerIndex) {
    if (maxSquadSize <= 0) return false;
    const p = players[playerIndex];
    return p && (p.characters || []).length >= maxSquadSize;
  }

  function areAllSquadsFull() {
    if (maxSquadSize <= 0 || players.length === 0) return false;
    return players.every(p => (p.characters || []).length >= maxSquadSize);
  }

  function getNextAvailablePlayerIndex(startIndex) {
    if (areAllSquadsFull()) return 0;
    for (let offset = 1; offset <= players.length; offset++) {
      const nextIdx = (startIndex + offset) % players.length;
      if (!isPlayerSquadFull(nextIdx)) {
        return nextIdx;
      }
    }
    return (startIndex + 1) % players.length;
  }

  function checkAndTriggerVictory() {
    if (areAllSquadsFull()) {
      setTimeout(() => {
        showVictoryModal();
      }, 500);
      return true;
    }
    return false;
  }

  function showVictoryModal() {
    if (!victoryModal || !victoryLeaderboard) return;

    // Rank players by total power level of drafted squad
    const rankedPlayers = [...players].map(p => {
      const totalPower = (p.characters || []).reduce((acc, c) => acc + (parseFloat(c.powerLevel) || 0), 0);
      return { player: p, totalPower: totalPower };
    }).sort((a, b) => b.totalPower - a.totalPower);

    victoryLeaderboard.innerHTML = '';
    const medals = ['🥇', '🥈', '🥉', '🎖️'];

    rankedPlayers.forEach((entry, idx) => {
      const p = entry.player;
      const card = document.createElement('div');
      card.className = `victory-rank-card ${idx === 0 ? 'rank-1' : ''}`;
      
      const squadNames = (p.characters || []).map(c => c.name).join(', ') || 'No fighters';

      card.innerHTML = `
        <div class="victory-rank-left">
          <span class="victory-medal">${medals[idx] || '⚔️'}</span>
          <div>
            <div class="victory-player-name" style="color: ${PLAYER_COLOR_HEX[p.colorClass] || '#ffd166'};">
              ${p.name} ${idx === 0 ? '👑 CHAMPION' : `#${idx + 1}`}
            </div>
            <div class="victory-squad-names" title="${squadNames}">
              🛡️ ${squadNames}
            </div>
          </div>
        </div>
        <div class="victory-rank-right">
          <div class="victory-total-power">${entry.totalPower.toFixed(1)}</div>
          <div class="victory-power-label">Total Power</div>
        </div>
      `;
      victoryLeaderboard.appendChild(card);
    });

    victoryModal.showModal();
    confetti.fire(currentUniverse);
    wheel.sound.playVictory();
  }

  // --- BATTLE ARENA SIMULATOR ---
  let isBattleRunning = false;

  function openBattleArena(defaultP1 = 0, defaultP2 = 1) {
    if (!battleModal) return;

    if (players.length < 2) {
      alert("⚠️ You need at least 2 players in the game to battle!");
      return;
    }

    // Populate player dropdown selectors
    battleP1Select.innerHTML = '';
    battleP2Select.innerHTML = '';

    players.forEach((p, idx) => {
      const charCount = (p.characters || []).length;
      const opt1 = document.createElement('option');
      opt1.value = idx;
      opt1.textContent = `${p.name} (${charCount} fighters)`;
      if (idx === defaultP1) opt1.selected = true;
      battleP1Select.appendChild(opt1);

      const opt2 = document.createElement('option');
      opt2.value = idx;
      opt2.textContent = `${p.name} (${charCount} fighters)`;
      if (idx === defaultP2) opt2.selected = true;
      battleP2Select.appendChild(opt2);
    });

    renderBattleStage();
    battleCombatFeed.innerHTML = '<div class="battle-log-entry battle-log-intro">⚔️ Matchup ready! Click "SIMULATE SQUAD BATTLE" to start the clash of titans!</div>';
    startBattleSimBtn.disabled = false;
    startBattleSimBtn.textContent = '🔥 SIMULATE SQUAD BATTLE! 💥';

    battleModal.showModal();
  }

  function renderBattleStage() {
    const p1Idx = parseInt(battleP1Select.value || '0');
    const p2Idx = parseInt(battleP2Select.value || '1');

    const p1 = players[p1Idx] || players[0];
    const p2 = players[p2Idx] || players[1] || players[0];

    const p1Squad = p1.characters || [];
    const p2Squad = p2.characters || [];

    const p1Power = p1Squad.reduce((sum, c) => sum + (parseFloat(c.powerLevel) || 0), 0);
    const p2Power = p2Squad.reduce((sum, c) => sum + (parseFloat(c.powerLevel) || 0), 0);

    battleNameP1.textContent = p1.name;
    battleNameP1.style.color = PLAYER_COLOR_HEX[p1.colorClass] || '#ffd166';
    battlePowerP1.textContent = `⚡ ${p1Power.toFixed(1)} PWR`;

    battleNameP2.textContent = p2.name;
    battleNameP2.style.color = PLAYER_COLOR_HEX[p2.colorClass] || '#ffd166';
    battlePowerP2.textContent = `⚡ ${p2Power.toFixed(1)} PWR`;

    battleHpP1.style.width = '100%';
    battleHpP1.classList.remove('danger');
    battleHpP2.style.width = '100%';
    battleHpP2.classList.remove('danger');

    // Render roster thumbnails
    battleRosterP1.innerHTML = p1Squad.length > 0
      ? p1Squad.map(c => `<img src="${c.thumb || c.image || ''}" class="battle-fighter-chip" title="${c.name} (⚡${c.powerLevel || 0})" alt="${c.name}">`).join('')
      : '<span style="font-size:0.75rem; color:#94a3b8; font-style:italic;">No fighters</span>';

    battleRosterP2.innerHTML = p2Squad.length > 0
      ? p2Squad.map(c => `<img src="${c.thumb || c.image || ''}" class="battle-fighter-chip" title="${c.name} (⚡${c.powerLevel || 0})" alt="${c.name}">`).join('')
      : '<span style="font-size:0.75rem; color:#94a3b8; font-style:italic;">No fighters</span>';

    battleRoundBadge.textContent = 'READY';
    battleClashIcon.textContent = '⚔️';
  }

  async function runBattleSimulation() {
    if (isBattleRunning) return;

    const p1Idx = parseInt(battleP1Select.value || '0');
    const p2Idx = parseInt(battleP2Select.value || '1');

    if (p1Idx === p2Idx) {
      alert("⚠️ Please choose two DIFFERENT players to battle!");
      return;
    }

    const p1 = players[p1Idx];
    const p2 = players[p2Idx];

    const p1Squad = (p1.characters || []);
    const p2Squad = (p2.characters || []);

    if (p1Squad.length === 0 || p2Squad.length === 0) {
      alert("⚠️ Both players must have at least 1 character in their squad to battle! Spin the wheel to draft characters first.");
      return;
    }

    isBattleRunning = true;
    startBattleSimBtn.disabled = true;
    startBattleSimBtn.textContent = '⚔️ BATTLE IN PROGRESS... 🔥';
    battleCombatFeed.innerHTML = '';

    const p1BasePower = p1Squad.reduce((sum, c) => sum + (parseFloat(c.powerLevel) || 0), 0);
    const p2BasePower = p2Squad.reduce((sum, c) => sum + (parseFloat(c.powerLevel) || 0), 0);

    const maxHpP1 = Math.max(10000, Math.round(p1BasePower * 200));
    const maxHpP2 = Math.max(10000, Math.round(p2BasePower * 200));

    let hpP1 = maxHpP1;
    let hpP2 = maxHpP2;

    const appendLog = (html) => {
      const entry = document.createElement('div');
      entry.innerHTML = html;
      battleCombatFeed.appendChild(entry);
      battleCombatFeed.scrollTop = battleCombatFeed.scrollHeight;
    };

    appendLog(`<div class="battle-log-entry" style="text-align:center; color:#ffd166; font-weight:800;">🔔 BATTLE START: ${p1.name} (HP: ${maxHpP1.toLocaleString()}) VS ${p2.name} (HP: ${maxHpP2.toLocaleString()})!</div>`);

    let turn = 0;
    const maxRounds = 12;

    while (hpP1 > 0 && hpP2 > 0 && turn < maxRounds) {
      turn++;
      await new Promise(r => setTimeout(r, 850));

      battleRoundBadge.textContent = `ROUND ${turn}`;

      const isP1Attacking = (turn % 2 !== 0);
      const attackerPlayer = isP1Attacking ? p1 : p2;
      const defenderPlayer = isP1Attacking ? p2 : p1;
      const attackerSquad = isP1Attacking ? p1Squad : p2Squad;

      // Pick a random fighter from attacker squad
      const fighter = attackerSquad[Math.floor(Math.random() * attackerSquad.length)];
      const fighterPower = parseFloat(fighter.powerLevel) || 50;

      // Tech and damage calculation
      const techList = fighter.techniques && fighter.techniques.length > 0 ? fighter.techniques : [fighter.power || 'Peak Power Surge'];
      const chosenTech = techList[Math.floor(Math.random() * techList.length)];
      const isCrit = Math.random() < 0.28;
      const variance = 0.85 + Math.random() * 0.35;
      const damage = Math.round(fighterPower * 25 * variance * (isCrit ? 1.8 : 1.0));

      // Shake animation
      const targetCard = isP1Attacking ? battleCardP2 : battleCardP1;
      targetCard.classList.remove('shake');
      void targetCard.offsetWidth;
      targetCard.classList.add('shake');

      battleClashIcon.textContent = isCrit ? '💥' : '⚡';
      wheel.sound.playTick();

      if (isP1Attacking) {
        hpP2 = Math.max(0, hpP2 - damage);
        const pct = Math.max(0, (hpP2 / maxHpP2) * 100);
        battleHpP2.style.width = `${pct}%`;
        if (pct < 30) battleHpP2.classList.add('danger');
      } else {
        hpP1 = Math.max(0, hpP1 - damage);
        const pct = Math.max(0, (hpP1 / maxHpP1) * 100);
        battleHpP1.style.width = `${pct}%`;
        if (pct < 30) battleHpP1.classList.add('danger');
      }

      const quoteHtml = fighter.quote ? `<div class="battle-log-quote">"${fighter.quote}"</div>` : '';
      const critTag = isCrit ? '<span style="color:#f59e0b; font-weight:900;">[CRITICAL HIT! 💥]</span> ' : '';

      appendLog(`
        <div class="battle-log-entry ${isCrit ? 'battle-log-crit' : 'battle-log-hit'}">
          <strong>${attackerPlayer.name}'s ${fighter.name}</strong> unleashed <em>"${chosenTech}"</em>! ${critTag}Dealt <strong>-${damage.toLocaleString()} DMG</strong> to ${defenderPlayer.name}!
          ${quoteHtml}
        </div>
      `);
    }

    await new Promise(r => setTimeout(r, 600));

    // Determine Winner
    const p1Won = hpP1 > hpP2;
    const winner = p1Won ? p1 : p2;
    const loser = p1Won ? p2 : p1;

    battleRoundBadge.textContent = 'KO! 🏆';
    battleClashIcon.textContent = '👑';

    appendLog(`
      <div class="battle-log-entry battle-log-winner">
        👑 VICTORY! <strong>${winner.name}</strong>'s squad defeated ${loser.name}! Total supremacy on the battlefield! 🎉
      </div>
    `);

    confetti.fire(currentUniverse);
    wheel.sound.playVictory();

    isBattleRunning = false;
    startBattleSimBtn.disabled = false;
    startBattleSimBtn.textContent = '⚔️ REMATCH / BATTLE AGAIN! 🔥';
  }

  // --- INITIALIZATION & REPLAY ---

  function initGame(count, budget, customNames = []) {
    numPlayers = count;
    startingBudget = budget;
    currentPlayerIndex = 0;
    pendingCharacter = null;
    pendingSliceIndex = -1;

    // Repopulate pools from current master roster
    refreshActivePools();

    // Build Player Objects with support for any player count
    players = [];
    for (let i = 0; i < numPlayers; i++) {
      const pName = (customNames[i] && customNames[i].trim()) || (players[i] && players[i].name) || `Player ${i + 1}`;
      players.push({
        id: `p_${i + 1}`,
        name: pName,
        colorClass: `p${(i % 12) + 1}`,
        money: startingBudget,
        characters: []
      });
    }

    renderPlayerDock();
    setUniverse(currentUniverse);
    spinBtn.disabled = false;
    saveGameState();
  }

  function addNewPlayerQuick(customName = null) {
    const newIdx = players.length;
    const pName = customName || `Player ${newIdx + 1}`;
    const colorClass = `p${(newIdx % 12) + 1}`;
    players.push({
      id: `p_${newIdx + 1}`,
      name: pName,
      colorClass: colorClass,
      money: startingBudget,
      characters: []
    });
    numPlayers = players.length;
    renderPlayerDock();
    updateCounters();
    wheel.sound.playTick();
    saveGameState();
  }

  function openSetupModal() {
    setupPlayersList = players.map(p => ({
      name: p.name,
      colorClass: p.colorClass
    }));
    if (setupPlayersList.length === 0) {
      setupPlayersList = [
        { name: 'Player 1', colorClass: 'p1' },
        { name: 'Player 2', colorClass: 'p2' }
      ];
    }
    budgetSlider.min = 100000;
    budgetSlider.max = 200000;
    budgetSlider.step = 5000;
    budgetSlider.value = Math.min(200000, Math.max(100000, startingBudget));
    const currency = currentUniverse === 'naruto' ? 'Ryo' : (currentUniverse === 'marvel' ? '$' : '฿');
    const lakhs = (budgetSlider.value / 100000).toFixed(2).replace(/\.00$/, '');
    budgetDisplay.textContent = `${parseInt(budgetSlider.value).toLocaleString()} ${currency} (${lakhs} Lakh${lakhs > 1 ? 's' : ''})`;
    
    document.querySelectorAll('.btn-budget-preset').forEach(btn => {
      const b = parseInt(btn.getAttribute('data-budget') || '0');
      btn.classList.toggle('active', b === parseInt(budgetSlider.value));
    });

    if (maxPicksSlider && maxPicksDisplay) {
      maxPicksSlider.value = maxSquadSize;
      maxPicksDisplay.textContent = maxSquadSize === 0 ? 'Unlimited (∞)' : `${maxSquadSize} Characters`;
    }

    if (picksPresetBtns) {
      picksPresetBtns.forEach(btn => {
        const pk = parseInt(btn.getAttribute('data-picks') || '0');
        btn.classList.toggle('active', pk === maxSquadSize);
      });
    }

    if (setupPlayerCountDisplay) {
      setupPlayerCountDisplay.textContent = setupPlayersList.length;
    }
    if (setupPlayerTotalTag) {
      setupPlayerTotalTag.textContent = setupPlayersList.length;
    }

    renderSetupPlayerInputs();
    setupModal.showModal();
  }

  function renderSetupPlayerInputs() {
    playerNamesInputsContainer.innerHTML = '';
    const currency = currentUniverse === 'naruto' ? 'Ryo' : (currentUniverse === 'marvel' ? '$' : '฿');

    setupPlayersList.forEach((p, idx) => {
      const row = document.createElement('div');
      row.className = 'player-name-row';
      row.innerHTML = `
        <span class="player-color-dot" style="background: ${PLAYER_COLOR_HEX[p.colorClass] || '#ffd166'};"></span>
        <input type="text" class="setup-name-input" data-idx="${idx}" value="${p.name}" placeholder="Player ${idx + 1}" maxlength="24">
        ${setupPlayersList.length > 2 ? `<button class="btn-sm btn-del btn-remove-player" data-idx="${idx}" type="button" title="Remove player">✕</button>` : ''}
      `;
      playerNamesInputsContainer.appendChild(row);
    });

    if (setupPlayerCountDisplay) setupPlayerCountDisplay.textContent = setupPlayersList.length;
    if (setupPlayerTotalTag) setupPlayerTotalTag.textContent = setupPlayersList.length;

    pCountBtns.forEach(btn => {
      const c = parseInt(btn.getAttribute('data-count') || '0');
      btn.classList.toggle('active', c === setupPlayersList.length);
    });

    playerNamesInputsContainer.querySelectorAll('.setup-name-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(e.target.getAttribute('data-idx'));
        if (setupPlayersList[idx]) {
          setupPlayersList[idx].name = e.target.value;
        }
      });
    });

    playerNamesInputsContainer.querySelectorAll('.btn-remove-player').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        if (setupPlayersList.length > 2) {
          setupPlayersList.splice(idx, 1);
          renderSetupPlayerInputs();
        }
      });
    });
  }

  function addPlayerToSetup() {
    if (setupPlayersList.length >= 12) {
      alert('Maximum of 12 players supported in local draft.');
      return;
    }
    const idx = setupPlayersList.length;
    setupPlayersList.push({
      name: `Player ${idx + 1}`,
      colorClass: `p${(idx % 12) + 1}`
    });
    renderSetupPlayerInputs();
    wheel.sound.playTick();
  }

  function applySetup(isFreshReset = false) {
    const oldBudget = startingBudget;
    let newBudget = parseInt(budgetSlider.value || '100000');
    newBudget = Math.min(200000, Math.max(100000, newBudget));
    startingBudget = newBudget;
    const newMaxSquad = parseInt(maxPicksSlider ? maxPicksSlider.value : '5');
    maxSquadSize = isNaN(newMaxSquad) ? 5 : newMaxSquad;

    const count = setupPlayersList.length;

    if (isFreshReset) {
      clearSavedGameState();
      const names = setupPlayersList.map((p, i) => (p.name && p.name.trim()) || `Player ${i + 1}`);
      initGame(count, newBudget, names);
      setupModal.close();
      wheel.sound.playVictory();
      return;
    }

    const updatedPlayers = [];
    for (let i = 0; i < count; i++) {
      const pName = (setupPlayersList[i] && setupPlayersList[i].name && setupPlayersList[i].name.trim()) || `Player ${i + 1}`;
      const colorClass = `p${(i % 12) + 1}`;
      if (players[i]) {
        players[i].name = pName;
        players[i].colorClass = colorClass;
        if (!players[i].characters || players[i].characters.length === 0) {
          players[i].money = newBudget;
        } else {
          const spent = Math.max(0, (oldBudget - (players[i].money || 0)));
          players[i].money = Math.max(0, newBudget - spent);
        }
        updatedPlayers.push(players[i]);
      } else {
        updatedPlayers.push({
          id: `p_${i + 1}`,
          name: pName,
          colorClass: colorClass,
          money: newBudget,
          characters: []
        });
      }
    }

    players = updatedPlayers;
    numPlayers = players.length;
    if (currentPlayerIndex >= players.length) {
      currentPlayerIndex = 0;
    }

    renderPlayerDock();
    updateCounters();
    saveGameState();

    if (isMultiplayer && currentRoomCode && db && isRoomHost) {
      db.ref(`rooms/${currentRoomCode}`).update({
        startingBudget: newBudget,
        maxSquadSize: maxSquadSize,
        players: players
      });
    }

    setupModal.close();
    wheel.sound.playVictory();
  }

  function refreshActivePools() {
    activePools.onepiece = masterRoster.filter(c => c.universe === 'onepiece' || c.universe === 'one-piece');
    activePools.naruto = masterRoster.filter(c => c.universe === 'naruto');
    activePools.marvel = masterRoster.filter(c => c.universe === 'marvel');
    activePools.all = [...masterRoster];
  }

  function resetGame() {
    clearSavedGameState();
    const currentNames = players.map(p => p.name);
    initGame(numPlayers, startingBudget, currentNames);
    wheel.sound.playVictory();
  }

  // --- UNIVERSE SWITCHING ---

  function setUniverse(universe) {
    currentUniverse = universe;
    const isNaruto = universe === 'naruto';
    const isMarvel = universe === 'marvel';

    if (isMarvel) {
      body.className = 'theme-marvel';
    } else if (isNaruto) {
      body.className = 'theme-naruto';
    } else {
      body.className = 'theme-onepiece';
    }

    tabOp.classList.toggle('active', universe === 'onepiece');
    tabNr.classList.toggle('active', universe === 'naruto');
    if (tabMv) tabMv.classList.toggle('active', universe === 'marvel');
    tabAll.classList.toggle('active', universe === 'all');

    if (isMarvel) {
      spinText.textContent = 'ASSEMBLE & SPIN';
    } else if (isNaruto) {
      spinText.textContent = 'SPIN CHAKRA';
    } else if (universe === 'all') {
      spinText.textContent = 'SPIN MULTIVERSE';
    } else {
      spinText.textContent = 'SPIN THE HELM';
    }

    wheel.setTheme(universe);
    const pool = activePools[universe] || activePools.onepiece;
    wheel.setItems(pool);

    if (pool.length > 0) {
      const icon = pool[0].universe === 'naruto' ? '🍃' : (pool[0].universe === 'marvel' ? '🦸' : '☠️');
      tickerName.textContent = `${icon} ${pool[0].name}`;
    }

    updateCounters();
    renderPlayerDock();
    saveGameState();
  }

  function updateCounters() {
    const opCount = masterRoster.filter(c => c.universe === 'onepiece' || c.universe === 'one-piece').length;
    const nrCount = masterRoster.filter(c => c.universe === 'naruto').length;
    const mvCount = masterRoster.filter(c => c.universe === 'marvel').length;
    const totalCount = masterRoster.length;

    if (badgeOpCount) badgeOpCount.textContent = `${activePools.onepiece.length}`;
    if (badgeNrCount) badgeNrCount.textContent = `${activePools.naruto.length}`;
    if (badgeMvCount) badgeMvCount.textContent = `${activePools.marvel.length}`;
    if (badgeAllCount) badgeAllCount.textContent = `${activePools.all.length}`;
    if (btnTotalCount) btnTotalCount.textContent = `${totalCount} Characters`;

    const activeLen = (activePools[currentUniverse] || []).length;
    if (remainingCountEl) remainingCountEl.textContent = activeLen;
  }

  // --- SCOREBOARD RENDERING ---

  function renderPlayerDock() {
    playersDock.innerHTML = '';
    const currency = currentUniverse === 'naruto' ? 'Ryo' : (currentUniverse === 'marvel' ? '$' : '฿');

    players.forEach((p, idx) => {
      const isFull = isPlayerSquadFull(idx);
      const totalPower = (p.characters || []).reduce((acc, c) => acc + (parseFloat(c.powerLevel) || 0), 0);
      const card = document.createElement('div');
      card.className = `player-card ${p.colorClass} ${idx === currentPlayerIndex ? 'active-turn' : ''} ${isFull ? 'squad-full' : ''}`;
      card.id = `player-card-${idx}`;

      let chipsHtml = '';
      if (p.characters && p.characters.length > 0) {
        chipsHtml = p.characters.map((c, cIdx) => `
          <button class="squad-chip" data-player="${idx}" data-char-idx="${cIdx}" title="Click to view ${c.name} stats">
            <img src="${c.thumb || c.image || ''}" class="squad-chip-avatar" alt="${c.name}" onerror="this.style.display='none'">
            <span>${c.name}</span>
          </button>
        `).join('');
      } else {
        chipsHtml = `<span class="squad-empty">No characters drafted yet</span>`;
      }

      const squadPill = maxSquadSize > 0
        ? `<span class="squad-count-pill ${isFull ? 'squad-full-pill' : ''}">${isFull ? '👑 FULL' : '⚔️'} ${(p.characters || []).length}/${maxSquadSize}</span>`
        : `<span class="squad-count-pill">⚔️ ${(p.characters || []).length}</span>`;

      const powerBadge = (p.characters && p.characters.length > 0)
        ? `<span class="player-power-badge" title="Total Squad Power Level">⚡ ${totalPower.toFixed(1)}</span>`
        : '';

      card.innerHTML = `
        <div class="player-header">
          <div class="player-name">
            <span class="player-name-text" data-player="${idx}" title="Click to rename player">👤 ${p.name} ✏️</span>
            ${squadPill}
            ${powerBadge}
            ${!isFull ? '<span class="turn-pill">SPIN TURN</span>' : ''}
          </div>
          <div class="player-money player-money-editable" data-player="${idx}" title="Click to adjust purse (Max 2,00,000 / 2 Lakhs)">
            💰 ${(p.money || 0).toLocaleString()} ${currency} ✏️
          </div>
        </div>
        <div class="squad-tray">
          ${chipsHtml}
        </div>
      `;

      playersDock.appendChild(card);
    });

    if (!isMultiplayer) {
      const addCard = document.createElement('div');
      addCard.className = 'player-card add-player-dock-card';
      addCard.title = 'Click to add another player (Player 5, 6, etc.)';
      addCard.innerHTML = `
        <div class="add-player-dock-text">➕ Add Player (${players.length + 1}P)</div>
      `;
      addCard.addEventListener('click', () => {
        const suggestedName = `Player ${players.length + 1}`;
        const entered = prompt(`Enter name for Player ${players.length + 1}:`, suggestedName);
        if (entered !== null) {
          addNewPlayerQuick(entered.trim() || suggestedName);
        }
      });
      playersDock.appendChild(addCard);
    }

    if (btnPlayerCount) {
      btnPlayerCount.textContent = `${players.length}P`;
    }

    document.querySelectorAll('.player-name-text').forEach(el => {
      el.addEventListener('click', () => {
        if (isMultiplayer) return; // In multiplayer, use Room settings
        const pIdx = parseInt(el.getAttribute('data-player'));
        const p = players[pIdx];
        if (!p) return;
        const newName = prompt(`Enter new custom name for ${p.name}:`, p.name);
        if (newName && newName.trim()) {
          p.name = newName.trim();
          renderPlayerDock();
        }
      });
    });

    document.querySelectorAll('.player-money-editable').forEach(el => {
      el.addEventListener('click', () => {
        const pIdx = parseInt(el.getAttribute('data-player'));
        const p = players[pIdx];
        if (!p) return;

        if (isMultiplayer && !isRoomHost && p.id !== localPlayerId) {
          alert("⚠️ In online rooms, only the host or the player themselves can adjust their funds.");
          return;
        }

        const currency = currentUniverse === 'naruto' ? 'Ryo' : (currentUniverse === 'marvel' ? '$' : '฿');
        const entered = prompt(`Enter new purse amount for ${p.name} (Max: 2,00,000 / 2 Lakhs ${currency}):`, p.money || 100000);
        if (entered !== null) {
          let val = parseInt(entered.toString().replace(/[^0-9]/g, ''));
          if (isNaN(val)) val = 0;
          if (val > 200000) {
            alert("⚠️ Maximum allowed amount is 2,00,000 (2 Lakhs). Capped to 2,00,000.");
            val = 200000;
          }
          p.money = val;
          renderPlayerDock();
          saveGameState();
          if (isMultiplayer && currentRoomCode && db) {
            db.ref('rooms/' + currentRoomCode).update({ players: players });
          }
        }
      });
    });

    document.querySelectorAll('.squad-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const pIdx = parseInt(btn.getAttribute('data-player'));
        const cIdx = parseInt(btn.getAttribute('data-char-idx'));
        const inspectedChar = players[pIdx]?.characters[cIdx];
        if (inspectedChar) {
          showInspectModal(inspectedChar, players[pIdx]);
        }
      });
    });
  }

  // --- CHARACTER DRAFT & BIDDING MODAL ---

  function showDraftModal(char) {
    populateModalData(char);

    claimBanner.textContent = `🎯 Character Selected! Place Bids or Assign:`;
    claimBanner.style.background = char.universe === 'naruto' ? '#f77f00' : '#2b9348';

    initBiddingArena(char);

    modal.showModal();
    confetti.fire(char.universe);
  }

  function getCharacterStartingBid(char) {
    if (char && char.basePrice && char.basePrice < 12000 && char.basePrice >= 1000) {
      return char.basePrice;
    }
    const pl = parseFloat(char?.powerLevel) || 80;
    const norm = Math.max(0, Math.min(1, (pl - 60) / 40));
    const bid = Math.round((2000 + norm * 9500) / 500) * 500;
    return Math.min(11500, Math.max(1500, bid));
  }

  function initBiddingArena(char) {
    biddingArena.style.display = 'block';

    const eligibleBidders = players.map((_, idx) => idx).filter(idx => !isPlayerSquadFull(idx));
    const startBid = getCharacterStartingBid(char);

    liveAuction = {
      currentBid: startBid,
      highestBidderIndex: -1,
      activeBidders: eligibleBidders,
      turnPointer: eligibleBidders.includes(currentPlayerIndex) ? eligibleBidders.indexOf(currentPlayerIndex) : 0,
      hasConcluded: eligibleBidders.length === 0
    };

    secretAuction = {
      stepIndex: 0,
      bids: {},
      lockedIds: [],
      winnerIndex: -1,
      winningBid: 0,
      hasConcluded: eligibleBidders.length === 0
    };

    const currency = currentUniverse === 'naruto' ? 'Ryo' : (currentUniverse === 'marvel' ? '$' : '฿');
    if (eligibleBidders.length === 0) {
      liveAuctionLog.innerHTML = `<div class="log-entry">⚠️ All player squads have reached the maximum limit (${maxSquadSize}/${maxSquadSize})!</div>`;
    } else {
      liveAuctionLog.innerHTML = `<div class="log-entry">Auction started for <strong>${char.name}</strong>! Base Starting Bid: <strong>${startBid.toLocaleString()} ${currency}</strong> (⚡PL: ${char.powerLevel || 80}). Min raise: 1,000.</div>`;
    }
    
    switchBiddingTab(activeBiddingTab || 'live');
    renderDirectAssignBtns();
  }

  function switchBiddingTab(mode) {
    activeBiddingTab = mode;
    bidTabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
    });

    panelLiveBid.style.display = mode === 'live' ? 'block' : 'none';
    panelSecretBid.style.display = mode === 'secret' ? 'block' : 'none';
    panelDirectAssign.style.display = mode === 'direct' ? 'block' : 'none';

    if (mode === 'live') {
      renderLiveAuctionUI();
    } else if (mode === 'secret') {
      if (secretAuction.hasConcluded) {
        secretInputStage.style.display = 'none';
        secretRevealStage.style.display = 'block';
      } else {
        secretInputStage.style.display = 'block';
        secretRevealStage.style.display = 'none';
        renderSecretInputUI();
      }
    } else if (mode === 'direct') {
      renderDirectAssignBtns();
    }
  }

  // --- MODE 1: LIVE 1-BY-1 AUCTION ---

  function renderLiveAuctionUI() {
    const currency = currentUniverse === 'naruto' ? 'Ryo' : '฿';
    liveHighestBid.textContent = `${(liveAuction.currentBid || 0).toLocaleString()} ${currency}`;

    if (liveAuction.highestBidderIndex !== -1 && players[liveAuction.highestBidderIndex]) {
      const leader = players[liveAuction.highestBidderIndex];
      liveHighestBidder.textContent = `👑 ${leader.name} leads`;
      liveHighestBidder.style.color = '#38bdf8';
    } else {
      liveHighestBidder.textContent = '(No bids yet)';
      liveHighestBidder.style.color = '#94a3b8';
    }

    if (liveAuction.hasConcluded) {
      liveActiveTurnBadge.textContent = 'AUCTION CONCLUDED';
      liveActiveTurnBadge.style.color = '#4ade80';
      liveActivePurse.textContent = '';
      quickRaiseBtns.forEach(b => b.disabled = true);
      liveSubmitCustomBtn.disabled = true;
      livePassBtn.disabled = true;
      return;
    }

    if (!liveAuction.activeBidders || liveAuction.activeBidders.length === 0) {
      liveActiveTurnBadge.textContent = 'ALL PASSED';
      liveActiveTurnBadge.style.color = '#ef4444';
      liveActivePurse.textContent = 'No winner';
      quickRaiseBtns.forEach(b => b.disabled = true);
      liveSubmitCustomBtn.disabled = true;
      livePassBtn.disabled = true;
      return;
    }

    const currentTurnPlayerIdx = liveAuction.activeBidders[liveAuction.turnPointer || 0];
    const turnPlayer = players[currentTurnPlayerIdx];
    if (!turnPlayer) return;

    liveActiveTurnBadge.textContent = `👉 ${turnPlayer.name}`;
    liveActiveTurnBadge.style.color = PLAYER_COLOR_HEX[turnPlayer.colorClass] || '#ffd166';
    liveActivePurse.textContent = `Purse: ${(turnPlayer.money || 0).toLocaleString()} ${currency}`;

    // In Multiplayer, enable raise/pass controls ONLY if it's YOUR turn to bid
    const myIndex = players.findIndex(p => p.id === localPlayerId);
    const isMyBiddingTurn = (!isMultiplayer) || (myIndex === currentTurnPlayerIdx);

    quickRaiseBtns.forEach(btn => {
      const addVal = parseInt(btn.getAttribute('data-add') || '1000');
      const targetBid = (liveAuction.currentBid || 0) + addVal;
      btn.disabled = (!isMyBiddingTurn) || (targetBid > turnPlayer.money);
    });

    liveSubmitCustomBtn.disabled = !isMyBiddingTurn;
    livePassBtn.disabled = !isMyBiddingTurn;
    liveCustomBidInput.disabled = !isMyBiddingTurn;
    liveCustomBidInput.value = '';
    liveCustomBidInput.min = (liveAuction.currentBid || 0) + 1000;
    liveCustomBidInput.placeholder = isMyBiddingTurn ? `Min: ${((liveAuction.currentBid || 0) + 1000).toLocaleString()} ${currency}` : `Waiting for ${turnPlayer.name}...`;

    // In Online Rooms, only the Room Host has the discard option
    const canDiscard = (!isMultiplayer) || isRoomHost;
    if (liveSkipBtn) {
      liveSkipBtn.style.display = canDiscard ? 'inline-block' : 'none';
    }
  }

  function handleLiveRaise(amountToAdd) {
    if (liveAuction.hasConcluded || !liveAuction.activeBidders || liveAuction.activeBidders.length === 0) return;
    const currentTurnPlayerIdx = liveAuction.activeBidders[liveAuction.turnPointer || 0];
    const player = players[currentTurnPlayerIdx];
    const newBid = (liveAuction.currentBid || 0) + amountToAdd;

    if (newBid > player.money) {
      alert(`⚠️ ${player.name} does not have enough funds for ${newBid.toLocaleString()}! Available: ${player.money.toLocaleString()}`);
      return;
    }

    const currency = currentUniverse === 'naruto' ? 'Ryo' : '฿';
    liveAuction.currentBid = newBid;
    liveAuction.highestBidderIndex = currentTurnPlayerIdx;

    addAuctionLog(`💰 <strong>${player.name}</strong> raised bid to <strong>${newBid.toLocaleString()} ${currency}</strong>!`, 'log-raise');
    wheel.sound.playTick();

    advanceLiveTurn();
  }

  function handleLiveCustomBid() {
    if (liveAuction.hasConcluded || !liveAuction.activeBidders || liveAuction.activeBidders.length === 0) return;
    const currentTurnPlayerIdx = liveAuction.activeBidders[liveAuction.turnPointer || 0];
    const player = players[currentTurnPlayerIdx];
    const entered = parseInt(liveCustomBidInput.value);

    if (isNaN(entered) || entered <= liveAuction.currentBid) {
      alert(`⚠️ Bid must be higher than current bid of ${(liveAuction.currentBid || 0).toLocaleString()}!`);
      return;
    }

    if (entered > player.money) {
      alert(`⚠️ ${player.name} cannot bid more than available purse (${player.money.toLocaleString()})!`);
      return;
    }

    const currency = currentUniverse === 'naruto' ? 'Ryo' : '฿';
    liveAuction.currentBid = entered;
    liveAuction.highestBidderIndex = currentTurnPlayerIdx;

    addAuctionLog(`💰 <strong>${player.name}</strong> placed bid of <strong>${entered.toLocaleString()} ${currency}</strong>!`, 'log-raise');
    wheel.sound.playTick();

    advanceLiveTurn();
  }

  function handleLivePass() {
    if (liveAuction.hasConcluded || !liveAuction.activeBidders || liveAuction.activeBidders.length === 0) return;
    const passedPlayerIdx = liveAuction.activeBidders[liveAuction.turnPointer || 0];
    const player = players[passedPlayerIdx];

    addAuctionLog(`✋ <strong>${player.name}</strong> passed.`, 'log-pass');

    liveAuction.activeBidders.splice(liveAuction.turnPointer, 1);

    if (liveAuction.activeBidders.length === 1 && liveAuction.highestBidderIndex === liveAuction.activeBidders[0]) {
      concludeLiveAuction(liveAuction.highestBidderIndex);
      return;
    }

    if (liveAuction.activeBidders.length === 0) {
      if (liveAuction.highestBidderIndex !== -1) {
        concludeLiveAuction(liveAuction.highestBidderIndex);
      } else {
        liveAuction.hasConcluded = true;
        addAuctionLog(`❌ All players passed! Character discarded.`, 'log-pass');
        renderLiveAuctionUI();
        if (isMultiplayer && currentRoomCode && db) {
          db.ref(`rooms/${currentRoomCode}/currentDraft/liveAuction`).set(liveAuction);
        }
        setTimeout(() => {
          cancelAndDiscardCharacter();
        }, 1400);
      }
      return;
    }

    if (liveAuction.turnPointer >= liveAuction.activeBidders.length) {
      liveAuction.turnPointer = 0;
    }

    if (isMultiplayer && currentRoomCode && db) {
      db.ref(`rooms/${currentRoomCode}/currentDraft/liveAuction`).set(liveAuction);
    } else {
      renderLiveAuctionUI();
    }
  }

  function advanceLiveTurn() {
    if (liveAuction.activeBidders.length <= 1) {
      if (liveAuction.highestBidderIndex !== -1) {
        concludeLiveAuction(liveAuction.highestBidderIndex);
        return;
      }
    }

    liveAuction.turnPointer = (liveAuction.turnPointer + 1) % liveAuction.activeBidders.length;

    if (isMultiplayer && currentRoomCode && db) {
      db.ref(`rooms/${currentRoomCode}/currentDraft/liveAuction`).set(liveAuction);
    } else {
      renderLiveAuctionUI();
    }
  }

  function concludeLiveAuction(winnerIndex) {
    liveAuction.hasConcluded = true;
    const winner = players[winnerIndex];
    const currency = currentUniverse === 'naruto' ? 'Ryo' : '฿';
    addAuctionLog(`🏆 <strong>${winner.name} WINS</strong> at <strong>${(liveAuction.currentBid || 0).toLocaleString()} ${currency}</strong>!`, 'log-win');
    renderLiveAuctionUI();

    wheel.sound.playVictory();
    confetti.fire(pendingCharacter ? pendingCharacter.universe : 'onepiece');

    if (isMultiplayer && currentRoomCode && db) {
      db.ref(`rooms/${currentRoomCode}/currentDraft/liveAuction`).set(liveAuction);
    }

    setTimeout(() => {
      assignCharacterToPlayer(winnerIndex, liveAuction.currentBid);
    }, 1300);
  }

  function addAuctionLog(msg, typeClass = '') {
    const div = document.createElement('div');
    div.className = `log-entry ${typeClass}`;
    div.innerHTML = msg;
    liveAuctionLog.appendChild(div);
    liveAuctionLog.scrollTop = liveAuctionLog.scrollHeight;
    if (liveAuction) {
      liveAuction.logs = liveAuction.logs || [];
      liveAuction.logs.push(msg);
    }
  }

  // --- MODE 2: SECRET BLIND BIDDING ---

  function renderSecretInputUI() {
    const currency = currentUniverse === 'naruto' ? 'Ryo' : '฿';

    if (isMultiplayer) {
      const myIndex = players.findIndex(p => p.id === localPlayerId);
      const myPlayer = players[myIndex];
      if (!myPlayer) return;

      const lockedIds = secretAuction.lockedIds || [];
      const isAlreadyLocked = lockedIds.includes(localPlayerId);

      secretCurrentPlayerName.textContent = `👤 ${myPlayer.name}'s Secret Bid`;
      secretCurrentPlayerPurse.textContent = `Purse: ${(myPlayer.money || 0).toLocaleString()} ${currency}`;
      secretBidInput.disabled = isAlreadyLocked;
      secretLockBidBtn.disabled = isAlreadyLocked;
      secretLockBidBtn.textContent = isAlreadyLocked ? '🔒 Secret Bid Locked! Waiting for others...' : '🔒 Lock In Secret Bid';

      const progressPct = ((lockedIds.length) / players.length) * 100;
      secretProgressFill.style.width = `${progressPct}%`;
      secretProgressText.textContent = `${lockedIds.length} of ${players.length} players locked in`;
      return;
    }

    const currentP = players[secretAuction.stepIndex || 0];
    if (!currentP) return;

    secretCurrentPlayerName.textContent = `👤 ${currentP.name}'s Turn (Private)`;
    secretCurrentPlayerPurse.textContent = `Purse: ${(currentP.money || 0).toLocaleString()} ${currency}`;
    secretBidInput.value = '';
    secretBidInput.type = 'password';
    secretBidInput.max = currentP.money;
    secretBidInput.placeholder = `Enter 0 to ${currentP.money.toLocaleString()}...`;

    const progressPct = (((secretAuction.stepIndex || 0)) / players.length) * 100;
    secretProgressFill.style.width = `${progressPct}%`;
    secretProgressText.textContent = `Player ${(secretAuction.stepIndex || 0) + 1} of ${players.length} ready`;
  }

  function handleSecretLockBid() {
    if (isMultiplayer) {
      const myIndex = players.findIndex(p => p.id === localPlayerId);
      const myPlayer = players[myIndex];
      if (!myPlayer) return;

      let bidVal = parseInt(secretBidInput.value);
      if (isNaN(bidVal) || bidVal < 0) bidVal = 0;

      if (bidVal > myPlayer.money) {
        alert(`⚠️ Bid cannot exceed available purse (${myPlayer.money.toLocaleString()})!`);
        return;
      }

      const lockedIds = secretAuction.lockedIds || [];
      if (!lockedIds.includes(localPlayerId)) {
        lockedIds.push(localPlayerId);
      }

      secretAuction.bids = secretAuction.bids || {};
      secretAuction.bids[myIndex] = bidVal;
      secretAuction.lockedIds = lockedIds;

      wheel.sound.playTick();

      if (lockedIds.length >= players.length) {
        // All bids collected -> calculate winner
        let highest = -1;
        let winnerIdx = -1;
        players.forEach((p, idx) => {
          const b = secretAuction.bids[idx] || 0;
          if (b > highest) {
            highest = b;
            winnerIdx = idx;
          }
        });
        secretAuction.hasConcluded = true;
        secretAuction.winnerIndex = winnerIdx;
        secretAuction.winningBid = highest;
      }

      if (db && currentRoomCode) {
        db.ref(`rooms/${currentRoomCode}/currentDraft/secretAuction`).set(secretAuction);
      }
      return;
    }

    const currentP = players[secretAuction.stepIndex || 0];
    let bidVal = parseInt(secretBidInput.value);
    if (isNaN(bidVal) || bidVal < 0) bidVal = 0;

    if (bidVal > currentP.money) {
      alert(`⚠️ Bid cannot exceed available purse (${currentP.money.toLocaleString()})!`);
      return;
    }

    secretAuction.bids[secretAuction.stepIndex] = bidVal;
    wheel.sound.playTick();

    secretAuction.stepIndex++;
    if (secretAuction.stepIndex < players.length) {
      renderSecretInputUI();
    } else {
      secretAuction.hasConcluded = true;
      renderSecretRevealUI();
    }
  }

  function renderSecretRevealUI() {
    secretInputStage.style.display = 'none';
    secretRevealStage.style.display = 'block';

    const currency = currentUniverse === 'naruto' ? 'Ryo' : '฿';
    secretBidsGrid.innerHTML = '';

    let highest = secretAuction.winningBid || 0;
    let winnerIdx = secretAuction.winnerIndex;

    if (winnerIdx === undefined || winnerIdx === -1) {
      players.forEach((p, idx) => {
        const bid = (secretAuction.bids && secretAuction.bids[idx]) || 0;
        if (bid > highest) {
          highest = bid;
          winnerIdx = idx;
        }
      });
      secretAuction.winnerIndex = winnerIdx;
      secretAuction.winningBid = highest;
    }

    players.forEach((p, idx) => {
      const bid = (secretAuction.bids && secretAuction.bids[idx]) || 0;
      const isWinner = (idx === winnerIdx && highest > 0);

      const card = document.createElement('div');
      card.className = `secret-bid-card ${isWinner ? 'winner' : ''}`;
      card.innerHTML = `
        <div class="card-bidder-name">${p.name}</div>
        <div class="card-bid-val">${bid.toLocaleString()} ${currency}</div>
        <div class="card-bid-status" style="color: ${isWinner ? '#ffd166' : (bid === 0 ? '#94a3b8' : '#38bdf8')}">
          ${isWinner ? '🏆 HIGHEST BID!' : (bid === 0 ? 'Passed (0)' : 'Outbid')}
        </div>
      `;
      secretBidsGrid.appendChild(card);
    });

    if (highest > 0 && players[winnerIdx]) {
      secretClaimWinnerBtn.disabled = false;
      secretClaimWinnerBtn.textContent = `Award to ${players[winnerIdx].name} (${highest.toLocaleString()} ${currency}) 🏆`;
      wheel.sound.playVictory();
      confetti.fire(pendingCharacter ? pendingCharacter.universe : 'onepiece');
    } else {
      secretClaimWinnerBtn.disabled = false;
      secretClaimWinnerBtn.textContent = `❌ All Players Passed (0) - Discard Character`;
    }
  }

  function handleSecretClaimWinner() {
    if (secretAuction.winnerIndex !== -1 && secretAuction.winningBid > 0) {
      assignCharacterToPlayer(secretAuction.winnerIndex, secretAuction.winningBid);
    } else {
      cancelAndDiscardCharacter();
    }
  }

  // --- MODE 3: DIRECT ASSIGN ---

  function renderDirectAssignBtns() {
    playerAssignBtns.innerHTML = '';
    players.forEach((p, pIdx) => {
      const btn = document.createElement('button');
      const isFull = isPlayerSquadFull(pIdx);
      const countStr = maxSquadSize > 0 ? `${(p.characters || []).length}/${maxSquadSize}` : `${(p.characters || []).length}`;
      
      btn.className = `assign-player-btn ${p.colorClass} ${isFull ? 'disabled-full' : ''}`;
      
      if (isFull) {
        btn.innerHTML = `🚫 ${p.name} (Squad Full: ${countStr})`;
        btn.disabled = true;
      } else {
        btn.innerHTML = `👤 Give to ${p.name} (${countStr}) (Free)`;
        btn.addEventListener('click', () => {
          assignCharacterToPlayer(pIdx, 0);
        });
      }
      playerAssignBtns.appendChild(btn);
    });

    const canDiscard = (!isMultiplayer) || isRoomHost;
    if (directSkipBtn) {
      directSkipBtn.style.display = canDiscard ? 'block' : 'none';
    }
  }

  // --- AWARD & BUDGET DEDUCTION ---

  function cancelAndDiscardCharacter() {
    if (isMultiplayer && !isRoomHost) {
      alert("⚠️ In online rooms, only the Room Host has permission to discard characters.");
      return;
    }

    pendingCharacter = null;
    pendingSliceIndex = -1;
    modal.close();
    spinBtn.disabled = areAllSquadsFull();

    const nextTurn = getNextAvailablePlayerIndex(currentPlayerIndex);

    if (isMultiplayer && currentRoomCode && db) {
      db.ref(`rooms/${currentRoomCode}`).update({
        currentDraft: null,
        currentSpin: null,
        currentPlayerIndex: nextTurn
      });
    } else {
      currentPlayerIndex = nextTurn;
      renderPlayerDock();
      saveGameState();
    }
  }

  function assignCharacterToPlayer(playerIndex, winningBidAmount = 0) {
    if (!pendingCharacter) {
      modal.close();
      return;
    }

    const recipient = players[playerIndex];
    if (recipient) {
      if (isPlayerSquadFull(playerIndex)) {
        alert(`⚠️ ${recipient.name}'s squad is already full (${maxSquadSize}/${maxSquadSize} characters)!`);
        return;
      }

      recipient.characters = recipient.characters || [];
      recipient.characters.push(pendingCharacter);

      if (winningBidAmount > 0) {
        recipient.money = Math.max(0, (recipient.money || 0) - winningBidAmount);
      }
    }

    const pool = activePools[currentUniverse];
    if (pendingSliceIndex >= 0 && pendingSliceIndex < pool.length) {
      pool.splice(pendingSliceIndex, 1);
    } else if (pool) {
      const idx = pool.findIndex(c => c.id === pendingCharacter.id);
      if (idx !== -1) pool.splice(idx, 1);
    }

    if (wheel) wheel.setItems(pool);
    updateCounters();

    const nextTurn = getNextAvailablePlayerIndex(currentPlayerIndex);

    if (isMultiplayer && currentRoomCode && db) {
      db.ref(`rooms/${currentRoomCode}`).update({
        players: players,
        currentPlayerIndex: nextTurn,
        currentDraft: null,
        currentSpin: null
      });
    } else {
      currentPlayerIndex = nextTurn;
      renderPlayerDock();
    }

    pendingCharacter = null;
    pendingSliceIndex = -1;
    modal.close();
    spinBtn.disabled = areAllSquadsFull();
    wheel.sound.playVictory();

    saveGameState();
    checkAndTriggerVictory();
  }

  function showInspectModal(char, owner) {
    populateModalData(char);

    claimBanner.textContent = `🛡️ Recruited in ${owner.name}'s Squad`;
    claimBanner.style.background = '#4a5568';

    biddingArena.style.display = 'none';
    modal.showModal();
  }

  function populateModalData(char) {
    const isNaruto = char.universe === 'naruto';
    const isMarvel = char.universe === 'marvel';

    posterCard.className = `wanted-poster-card ${isMarvel ? 'marvel-card' : (isNaruto ? 'naruto-card' : '')}`;
    cardHeaderTitle.textContent = isMarvel ? 'AVENGERS DOSSIER' : (isNaruto ? 'SHINOBI CLASSIFIED' : 'WANTED');
    cardHeaderSubtext.textContent = isMarvel ? 'S.H.I.E.L.D. EYES ONLY' : (isNaruto ? 'BINGO BOOK S-RANK' : 'DEAD OR ALIVE');
    currencySymbol.textContent = isMarvel ? '$' : (isNaruto ? 'Ryo' : '฿');

    charEpithet.textContent = char.title || char.epithet || (isMarvel ? 'Super Hero / Cosmic Legend' : (isNaruto ? 'Legendary Shinobi' : 'Grand Line Legend'));
    charName.textContent = char.name;
    charBounty.textContent = char.bounty > 0 ? (typeof char.bounty === 'number' ? char.bounty.toLocaleString() : char.bounty) : (char.bounty || '100,000');

    if (charPowerLevel) {
      charPowerLevel.textContent = (char.powerLevel ? Number(char.powerLevel).toFixed(1) : '85.0') + ' / 100';
    }
    if (charPowerTier) {
      charPowerTier.textContent = `(${char.powerTier || 'Master Combatant'})`;
    }

    labelAffiliation.textContent = isMarvel ? 'Affiliation / Team' : (isNaruto ? 'Hidden Village' : 'Affiliation / Crew');
    charAffiliation.textContent = char.affiliation || (isMarvel ? 'Avengers / Marvel Universe' : 'Grand Line / Shinobi World');

    labelRole.textContent = isMarvel ? 'Role / Classification' : (isNaruto ? 'Ninja Rank / Title' : 'Role / Rank');
    charRole.textContent = char.role || 'Combatant';

    labelPower.textContent = isMarvel ? 'Superpower / Mutation' : (isNaruto ? 'Kekkei Genkai / Chakra' : 'Devil Fruit / Power');
    charPower.textContent = char.power || 'None';

    charOrigin.textContent = char.origin || (isMarvel ? 'Earth-616' : (isNaruto ? 'Shinobi World' : 'Grand Line'));
    charQuote.textContent = char.quote || '...';

    charTechniques.innerHTML = '';
    labelTechniques.textContent = isMarvel ? 'Signature Abilities' : (isNaruto ? 'Signature Jutsu' : 'Signature Techniques');
    (char.techniques || [char.power]).filter(Boolean).forEach(tech => {
      const span = document.createElement('span');
      span.className = 'haki-badge';
      span.textContent = tech;
      if (isMarvel) {
        span.style.background = '#e23636';
        span.style.color = '#fff';
      } else if (isNaruto) {
        span.style.background = '#e85d04';
        span.style.color = '#fff';
      }
      charTechniques.appendChild(span);
    });

    const fallback = createFallbackAvatar(char);
    charImg.onerror = () => {
      charImg.onerror = null;
      charImg.src = fallback;
    };
    charImg.src = char.thumb || fallback;
    charImg.alt = char.name;
  }

  function createFallbackAvatar(char) {
    const initials = char.name.split(' ').map(n => n[0]).slice(0, 2).join('');
    const bg = char.color || (char.universe === 'marvel' ? '#e23636' : (char.universe === 'naruto' ? '#f77f00' : '#851c14'));
    const emblem = char.universe === 'marvel' ? '🦸 MARVEL 🦸' : (char.universe === 'naruto' ? '🍃 NARUTO 🍃' : '☠️ ONE PIECE ☠️');
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
        <rect width="300" height="300" fill="${bg}"/>
        <circle cx="150" cy="150" r="110" fill="none" stroke="#f6ecdc" stroke-width="4" stroke-dasharray="8 6"/>
        <text x="150" y="130" font-family="'Cinzel', serif" font-size="70" font-weight="bold" fill="#fff" text-anchor="middle" dominant-baseline="central">${initials}</text>
        <text x="150" y="210" font-family="'Cinzel', serif" font-size="24" fill="#ffd166" text-anchor="middle">${emblem}</text>
      </svg>
    `;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  // --- CHARACTER MANAGER / ROSTER EDITOR ---

  function openRosterManager() {
    if (rosterUniverseFilter) {
      rosterUniverseFilter.value = currentUniverse === 'naruto' ? 'naruto' : (currentUniverse === 'onepiece' ? 'onepiece' : 'all');
    }
    renderRosterTable(rosterSearchInput.value, rosterUniverseFilter ? rosterUniverseFilter.value : 'all');
    rosterModal.showModal();
  }

  function renderRosterTable(query = '', universe = 'all') {
    const q = (query || '').toLowerCase().trim();
    let filtered = masterRoster;

    if (universe && universe !== 'all') {
      filtered = filtered.filter(c => c.universe === universe);
    }

    if (q) {
      filtered = filtered.filter(c => 
        c.name.toLowerCase().includes(q) ||
        (c.title && c.title.toLowerCase().includes(q)) ||
        (c.affiliation && c.affiliation.toLowerCase().includes(q)) ||
        (c.power && c.power.toLowerCase().includes(q)) ||
        (c.epithet && c.epithet.toLowerCase().includes(q))
      );
    }

    editorTotalCount.textContent = `${filtered.length} of ${masterRoster.length}`;
    rosterTableBody.innerHTML = '';

    const displayList = filtered.slice(0, 500);

    displayList.forEach((c, idx) => {
      const tr = document.createElement('tr');
      const isNaruto = c.universe === 'naruto';
      const isMarvel = c.universe === 'marvel';
      const currency = isMarvel ? '$' : (isNaruto ? 'Ryo' : '฿');
      const badgeBg = isMarvel ? '#e23636' : (isNaruto ? '#ea580c' : '#b91c1c');
      const badgeLabel = isMarvel ? '🦸 Marvel' : (isNaruto ? '🍃 Naruto' : '🏴‍☠️ One Piece');
      const pl = c.powerLevel ? Number(c.powerLevel).toFixed(1) : '85.0';

      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td><img src="${c.thumb || c.image || ''}" class="roster-avatar-img" alt="${c.name}" onerror="this.src=createFallbackAvatar(c)"></td>
        <td><strong>${c.name}</strong><br><small style="color:#94a3b8;">${c.title || c.epithet || ''}</small></td>
        <td><span class="haki-badge" style="background:${badgeBg}">${badgeLabel}</span></td>
        <td><strong style="color:#ffd166; font-size:1.02rem;">⚡ ${pl}</strong><br><small style="color:#38bdf8;">${c.powerTier || 'Fighter'}</small></td>
        <td>${c.affiliation || '-'}</td>
        <td>${typeof c.bounty === 'number' ? (c.bounty || 0).toLocaleString() + ' ' + currency : (c.bounty || '-')}</td>
        <td><small>${c.power || '-'}</small></td>
        <td>
          <button class="btn-sm btn-edit" data-id="${c.id}" type="button">✏️ Edit</button>
          <button class="btn-sm btn-del" data-id="${c.id}" type="button">🗑️ Del</button>
        </td>
      `;

      rosterTableBody.appendChild(tr);
    });

    if (filtered.length > 500) {
      const noteTr = document.createElement('tr');
      noteTr.innerHTML = `<td colspan="7" style="text-align:center;color:#ffd166;">... Showing first 500 matches. Use search bar to find specific characters ...</td>`;
      rosterTableBody.appendChild(noteTr);
    }

    rosterTableBody.querySelectorAll('.btn-edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openEditForm(id);
      });
    });

    rosterTableBody.querySelectorAll('.btn-del').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        deleteCharacter(id);
      });
    });
  }

  function openEditForm(id = null) {
    editFormCard.style.display = 'grid';
    if (id) {
      const c = masterRoster.find(x => x.id === id);
      if (c) {
        editCharId.value = c.id;
        formCharName.value = c.name;
        formCharUniverse.value = c.universe || 'onepiece';
        formCharEpithet.value = c.epithet || '';
        formCharAffiliation.value = c.affiliation || '';
        formCharBounty.value = c.bounty || 100000;
        formCharPower.value = c.power || '';
      }
    } else {
      const defaultUni = rosterUniverseFilter && rosterUniverseFilter.value !== 'all' ? rosterUniverseFilter.value : (currentUniverse === 'naruto' ? 'naruto' : 'onepiece');
      editCharId.value = '';
      formCharName.value = '';
      formCharUniverse.value = defaultUni;
      formCharEpithet.value = '';
      formCharAffiliation.value = '';
      formCharBounty.value = 100000;
      formCharPower.value = '';
    }
    editFormCard.scrollIntoView({ behavior: 'smooth' });
  }

  function saveCharacterForm() {
    const id = editCharId.value;
    const name = formCharName.value.trim();
    if (!name) {
      alert('Please enter a character name!');
      return;
    }

    const universe = formCharUniverse.value;
    const epithet = formCharEpithet.value.trim();
    const affiliation = formCharAffiliation.value.trim();
    const bounty = parseInt(formCharBounty.value) || 100000;
    const power = formCharPower.value.trim();

    if (id) {
      const c = masterRoster.find(x => x.id === id);
      if (c) {
        c.name = name;
        c.universe = universe;
        c.epithet = epithet;
        c.affiliation = affiliation;
        c.bounty = bounty;
        c.power = power;
        c.techniques = [power];
      }
    } else {
      const newId = `custom_${Date.now()}_${name.toLowerCase().replace(/\s+/g, '_')}`;
      masterRoster.unshift({
        id: newId,
        universe: universe,
        name: name,
        epithet: epithet || 'Custom Warrior',
        affiliation: affiliation || 'Custom Clan',
        role: 'Custom Fighter',
        bounty: bounty,
        power: power,
        techniques: [power],
        origin: universe === 'naruto' ? 'Shinobi World' : 'Grand Line',
        quote: "I make my own destiny!",
        color: universe === 'naruto' ? '#f77f00' : '#b91c1c'
      });
    }

    saveRosterToStorage(masterRoster);
    refreshActivePools();
    setUniverse(currentUniverse);

    editFormCard.style.display = 'none';
    renderRosterTable(rosterSearchInput.value, rosterUniverseFilter ? rosterUniverseFilter.value : 'all');
    wheel.sound.playVictory();
  }

  function deleteCharacter(id) {
    if (!confirm('Are you sure you want to delete this character from the wheel?')) return;
    masterRoster = masterRoster.filter(c => c.id !== id);
    saveRosterToStorage(masterRoster);
    refreshActivePools();
    setUniverse(currentUniverse);
    renderRosterTable(rosterSearchInput.value, rosterUniverseFilter ? rosterUniverseFilter.value : 'all');
  }

  function deleteAllCharacters() {
    const filterUni = rosterUniverseFilter ? rosterUniverseFilter.value : 'all';
    let confirmMsg = '⚠️ Are you sure you want to DELETE ALL characters from the wheel? This will clear the entire wheel!';
    if (filterUni === 'onepiece') {
      confirmMsg = '⚠️ Are you sure you want to DELETE ALL One Piece characters from the wheel?';
    } else if (filterUni === 'naruto') {
      confirmMsg = '⚠️ Are you sure you want to DELETE ALL Naruto characters from the wheel?';
    } else if (filterUni === 'marvel') {
      confirmMsg = '⚠️ Are you sure you want to DELETE ALL Marvel characters from the wheel?';
    }

    if (!confirm(confirmMsg)) return;

    if (filterUni === 'all') {
      masterRoster = [];
    } else {
      masterRoster = masterRoster.filter(c => c.universe !== filterUni);
    }

    saveRosterToStorage(masterRoster);
    refreshActivePools();
    setUniverse(currentUniverse);
    renderRosterTable(rosterSearchInput.value, filterUni);
    wheel.sound.playVictory();
  }

  function getSavedRoster() {
    if (typeof loadCharacters === 'function') {
      return loadCharacters();
    }
    return typeof DEFAULT_CHARACTERS !== 'undefined' ? [...DEFAULT_CHARACTERS] : [];
  }

  function saveRosterToStorage(chars) {
    if (typeof saveCharacters === 'function') {
      saveCharacters(chars);
    }
  }

  function resetRosterToDefault() {
    if (typeof resetCharactersToDefault === 'function') {
      return resetCharactersToDefault();
    }
    return typeof DEFAULT_CHARACTERS !== 'undefined' ? [...DEFAULT_CHARACTERS] : [];
  }

  // --- EVENT HANDLERS ---

  // Multiplayer Button & Modal Handlers
  openMultiplayerBtn.addEventListener('click', () => openMultiplayerModal());
  closeMultiplayerBtn.addEventListener('click', () => multiplayerModal.close());

  mpNavTabs.forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      switchMpTab(tabBtn.getAttribute('data-tab'));
    });
  });

  mpCreateRoomBtn.addEventListener('click', () => createOnlineRoom());
  mpJoinRoomBtn.addEventListener('click', () => {
    joinOnlineRoom(mpJoinCodeInput.value, mpJoinNameInput.value);
  });
  mpJoinCodeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') joinOnlineRoom(mpJoinCodeInput.value, mpJoinNameInput.value);
  });

  mpLobbyCopyBtn.addEventListener('click', () => {
    const inviteUrl = `${window.location.origin}${window.location.pathname}?room=${currentRoomCode}`;
    navigator.clipboard.writeText(inviteUrl).then(() => {
      alert(`📋 Room Invite Link copied to clipboard!\n\n${inviteUrl}`);
    }).catch(() => {
      prompt("Copy room link:", inviteUrl);
    });
  });

  shareRoomBtn.addEventListener('click', () => {
    const inviteUrl = `${window.location.origin}${window.location.pathname}?room=${currentRoomCode}`;
    navigator.clipboard.writeText(inviteUrl).then(() => {
      alert(`📋 Room Invite Link copied!\n\n${inviteUrl}`);
    }).catch(() => {
      prompt("Copy room link:", inviteUrl);
    });
  });

  leaveRoomBtn.addEventListener('click', () => leaveOnlineRoom());
  mpLobbyStartBtn.addEventListener('click', () => launchGameFromLobby());

  // Roster Editor Handlers
  openRosterBtn.addEventListener('click', () => openRosterManager());
  closeRosterBtn.addEventListener('click', () => rosterModal.close());

  if (rosterUniverseFilter) {
    rosterUniverseFilter.addEventListener('change', () => {
      renderRosterTable(rosterSearchInput.value, rosterUniverseFilter.value);
    });
  }

  if (deleteAllRosterBtn) {
    deleteAllRosterBtn.addEventListener('click', () => {
      deleteAllCharacters();
    });
  }

  rosterSearchInput.addEventListener('input', (e) => {
    renderRosterTable(e.target.value, rosterUniverseFilter ? rosterUniverseFilter.value : 'all');
  });

  toggleAddFormBtn.addEventListener('click', () => openEditForm(null));
  cancelEditBtn.addEventListener('click', () => {
    editFormCard.style.display = 'none';
  });
  saveCharFormBtn.addEventListener('click', () => saveCharacterForm());

  resetDefaultRosterBtn.addEventListener('click', () => {
    if (confirm('🔄 Reset all characters to the default master 1,000+ roster? Any custom added characters will be refreshed.')) {
      masterRoster = resetRosterToDefault();
      refreshActivePools();
      setUniverse(currentUniverse);
      renderRosterTable(rosterSearchInput.value, rosterUniverseFilter ? rosterUniverseFilter.value : 'all');
      wheel.sound.playVictory();
    }
  });

  // Spin Button
  spinBtn.addEventListener('click', () => {
    const pool = activePools[currentUniverse];
    if (wheel.isSpinning || pool.length === 0) return;

    if (isMultiplayer && currentRoomCode && db) {
      const myIndex = players.findIndex(p => p.id === localPlayerId);
      if (myIndex !== currentPlayerIndex && !isRoomHost) {
        alert("⚠️ It is not your turn to spin!");
        return;
      }

      const randomIndex = Math.floor(Math.random() * pool.length);
      const selectedChar = pool[randomIndex];
      const spinId = 'spin_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);

      spinBtn.disabled = true;

      db.ref(`rooms/${currentRoomCode}/currentSpin`).set({
        isSpinning: true,
        spinId: spinId,
        sliceIndex: randomIndex,
        char: selectedChar,
        timestamp: Date.now()
      });
      return;
    }

    spinBtn.disabled = true;
    wheel.spin();
  });

  // Quick Random Pick
  quickRandomBtn.addEventListener('click', () => {
    const pool = activePools[currentUniverse];
    if (wheel.isSpinning || pool.length === 0) return;
    const randomIndex = Math.floor(Math.random() * pool.length);
    wheel.sound.playVictory();
    pendingCharacter = pool[randomIndex];
    pendingSliceIndex = randomIndex;
    showDraftModal(pendingCharacter);
  });

  // Universe Tabs
  tabOp.addEventListener('click', () => {
    if (wheel.isSpinning) return;
    setUniverse('onepiece');
  });

  tabNr.addEventListener('click', () => {
    if (wheel.isSpinning) return;
    setUniverse('naruto');
  });

  if (tabMv) {
    tabMv.addEventListener('click', () => {
      if (wheel.isSpinning) return;
      setUniverse('marvel');
    });
  }

  tabAll.addEventListener('click', () => {
    if (wheel.isSpinning) return;
    setUniverse('all');
  });

  // Sound Toggle
  soundBtn.addEventListener('click', () => {
    const isEnabled = wheel.sound.toggle();
    soundBtn.textContent = isEnabled ? '🔊' : '🔇';
  });

  // Reset Game Button
  resetGameBtn.addEventListener('click', () => {
    if (confirm('🔄 Reset the current game? This will restore all characters back to the wheel and reset player inventories.')) {
      resetGame();
    }
  });

  // --- BIDDING ARENA EVENT LISTENERS ---

  // Bidding Tab Switcher
  bidTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchBiddingTab(btn.getAttribute('data-mode'));
    });
  });

  // Live Auction Raise Controls
  quickRaiseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const addVal = parseInt(btn.getAttribute('data-add') || '1000');
      handleLiveRaise(addVal);
    });
  });

  liveSubmitCustomBtn.addEventListener('click', () => handleLiveCustomBid());
  liveCustomBidInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleLiveCustomBid();
  });

  livePassBtn.addEventListener('click', () => handleLivePass());

  if (liveSkipBtn) {
    liveSkipBtn.addEventListener('click', () => cancelAndDiscardCharacter());
  }

  if (directSkipBtn) {
    directSkipBtn.addEventListener('click', () => cancelAndDiscardCharacter());
  }

  // Secret Bidding Controls
  secretPeekToggle.addEventListener('click', () => {
    secretBidInput.type = secretBidInput.type === 'password' ? 'text' : 'password';
  });

  secretPresetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pct = parseInt(btn.getAttribute('data-pct') || '0');
      const myIndex = isMultiplayer ? players.findIndex(p => p.id === localPlayerId) : secretAuction.stepIndex;
      const currentP = players[myIndex];
      if (currentP) {
        secretBidInput.value = Math.floor((currentP.money * pct) / 100);
      }
    });
  });

  secretLockBidBtn.addEventListener('click', () => handleSecretLockBid());
  secretBidInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSecretLockBid();
  });

  secretClaimWinnerBtn.addEventListener('click', () => handleSecretClaimWinner());

  // Close Modal Handler (Cancels character draft & proceeds without awarding)
  closeModalBtn.addEventListener('click', () => {
    cancelAndDiscardCharacter();
  });

  // Backdrop click dismiss for dialogs
  [rosterModal, setupModal, multiplayerModal, modal, victoryModal, battleModal].forEach(dlg => {
    if (!dlg) return;
    dlg.addEventListener('click', (e) => {
      const rect = dlg.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        if (dlg === modal) {
          cancelAndDiscardCharacter();
        } else {
          dlg.close();
        }
      }
    });
  });

  // Battle Arena Actions
  if (openBattleBtn) {
    openBattleBtn.addEventListener('click', () => openBattleArena());
  }

  if (victoryBattleBtn) {
    victoryBattleBtn.addEventListener('click', () => {
      if (victoryModal) victoryModal.close();
      openBattleArena();
    });
  }

  if (closeBattleBtn) {
    closeBattleBtn.addEventListener('click', () => {
      if (battleModal) battleModal.close();
    });
  }

  if (battleP1Select) {
    battleP1Select.addEventListener('change', () => renderBattleStage());
  }

  if (battleP2Select) {
    battleP2Select.addEventListener('change', () => renderBattleStage());
  }

  if (startBattleSimBtn) {
    startBattleSimBtn.addEventListener('click', () => runBattleSimulation());
  }

  // Setup Modal Handling
  openSetupBtn.addEventListener('click', () => {
    openSetupModal();
  });

  if (closeSetupBtn) {
    closeSetupBtn.addEventListener('click', () => setupModal.close());
  }

  if (setupAddPlayerBtn) {
    setupAddPlayerBtn.addEventListener('click', () => addPlayerToSetup());
  }

  if (setupAddPlayerTopBtn) {
    setupAddPlayerTopBtn.addEventListener('click', () => addPlayerToSetup());
  }

  budgetSlider.addEventListener('input', (e) => {
    let val = parseInt(e.target.value);
    val = Math.min(200000, Math.max(100000, val));
    const currency = currentUniverse === 'naruto' ? 'Ryo' : (currentUniverse === 'marvel' ? '$' : '฿');
    const lakhs = (val / 100000).toFixed(2).replace(/\.00$/, '');
    budgetDisplay.textContent = `${val.toLocaleString()} ${currency} (${lakhs} Lakh${parseFloat(lakhs) > 1 ? 's' : ''})`;
    document.querySelectorAll('.btn-budget-preset').forEach(btn => {
      const b = parseInt(btn.getAttribute('data-budget') || '0');
      btn.classList.toggle('active', b === val);
    });
  });

  document.querySelectorAll('.btn-budget-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      const bVal = parseInt(btn.getAttribute('data-budget') || '100000');
      budgetSlider.value = bVal;
      const currency = currentUniverse === 'naruto' ? 'Ryo' : (currentUniverse === 'marvel' ? '$' : '฿');
      const lakhs = (bVal / 100000).toFixed(2).replace(/\.00$/, '');
      budgetDisplay.textContent = `${bVal.toLocaleString()} ${currency} (${lakhs} Lakh${parseFloat(lakhs) > 1 ? 's' : ''})`;
      document.querySelectorAll('.btn-budget-preset').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  if (maxPicksSlider) {
    maxPicksSlider.addEventListener('input', (e) => {
      const pVal = parseInt(e.target.value);
      maxPicksDisplay.textContent = pVal === 0 ? 'Unlimited (∞)' : `${pVal} Characters`;
      if (picksPresetBtns) {
        picksPresetBtns.forEach(btn => {
          const pk = parseInt(btn.getAttribute('data-picks') || '0');
          btn.classList.toggle('active', pk === pVal);
        });
      }
    });
  }

  if (picksPresetBtns) {
    picksPresetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const pVal = parseInt(btn.getAttribute('data-picks') || '5');
        if (maxPicksSlider) maxPicksSlider.value = pVal;
        if (maxPicksDisplay) maxPicksDisplay.textContent = pVal === 0 ? 'Unlimited (∞)' : `${pVal} Characters`;
        picksPresetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  // Victory Modal Actions
  if (closeVictoryBtn) {
    closeVictoryBtn.addEventListener('click', () => {
      if (victoryModal) victoryModal.close();
    });
  }

  if (restartVictoryBtn) {
    restartVictoryBtn.addEventListener('click', () => {
      if (victoryModal) victoryModal.close();
      resetGame();
    });
  }

  pCountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCount = parseInt(btn.getAttribute('data-count') || '2');
      while (setupPlayersList.length < targetCount) {
        const idx = setupPlayersList.length;
        setupPlayersList.push({
          name: `Player ${idx + 1}`,
          colorClass: `p${(idx % 12) + 1}`
        });
      }
      if (setupPlayersList.length > targetCount) {
        setupPlayersList = setupPlayersList.slice(0, targetCount);
      }
      renderSetupPlayerInputs();
    });
  });

  startGameBtn.addEventListener('click', () => {
    applySetup(false);
  });

  if (resetNewGameBtn) {
    resetNewGameBtn.addEventListener('click', () => {
      if (confirm('🔄 Start fresh game with these players? This will reset all drafted character squads and starting budgets.')) {
        applySetup(true);
      }
    });
  }
});
