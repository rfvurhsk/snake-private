local loadFunc = loadstring or getfenv().loadstring or (syn and syn.loadstring)
if not loadFunc then
    return warn("❌ 当前执行器不支持 loadstring")
end

local placeId = game.PlaceId
local baseUrl = "https://raw.githubusercontent.com/rfvurhsk/snake-private/main/"

local function loadScript(file)
    local success, result = pcall(function()
        local scriptText = game:HttpGet(baseUrl .. file)
        local f = loadFunc(scriptText)
        if f then
            f()
        else
            warn("❌ 加载的脚本无法运行")
        end
    end)
    if not success then
        warn("❌ 脚本加载失败：" .. tostring(result))
    end
end

local map = {
    [12497348201] = "fnaf1.lua",
    [12497354347] = "fnaf2.lua",
    [12497360072] = "fnaf3.lua",
    [12497365956] = "fnaf4.lua"
}

if map[placeId] then
    loadScript(map[placeId])
else
    warn("❌ 当前游戏不是支持的 FNAF 一/二/三/四代")
end
