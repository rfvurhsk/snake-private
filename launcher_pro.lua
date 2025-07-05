local loadFunc = loadstring or getfenv().loadstring or (syn and syn.loadstring)
if not loadFunc then
    return warn("❌ 当前执行器不支持 loadstring")
end

local placeId = game.PlaceId
local baseUrl = "https://raw.githubusercontent.com/rfvurhsk/snake-private/main/"

local function loadScript(file)
    local success, result = pcall(function()
        return loadFunc(game:HttpGet(baseUrl .. file))()
    end)
    if not success then warn("❌ 脚本加载失败：" .. tostring(result)) end
end

local map = {
    [0x2E35F339] = "fnaf1.lua",
    [(2^34) - (1 << 27) - 358889] = "fnaf2.lua",
    [(0x2E35F000 + 0x00000B94 + 4754)] = "fnaf3.lua",
    [(2^30 * 2) + 4194304 + 639560] = "fnaf4.lua"
}

if map[placeId] then
    loadScript(map[placeId])
else
    warn("❌ 当前游戏不是支持的 FNAF 一/二/三/四代")
end
