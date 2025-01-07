require 'yaml'

# categories.yml 파일 읽기
categories = YAML.load_file('_data/categories.yml')

# 각 카테고리별 페이지 생성
categories.each do |category|
  category_name = category['name']
  dir_path = "blog/#{category_name.downcase}"
  file_path = "#{dir_path}/index.html"

  # 디렉토리가 없으면 생성
  Dir.mkdir(dir_path) unless Dir.exist?(dir_path)

  # 파일 생성
  File.open(file_path, 'w') do |f|
    f.write(<<~CONTENT)
      ---
      layout: category
      category: #{category_name}
      ---
    CONTENT
  end
end 